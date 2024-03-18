import { Roles } from '#lib/enum/roles';
import { VIGOR_LIST } from '#lib/enum/vine';
import { PositiveNumberRegExp } from '#lib/validator/patterns';
import AuthService from '#services/firebase/auth/auth.service';
import { VineService } from '#services/firebase/models/vine/vine.service';
import { ModalService } from '#services/modal/modal.service';
import { Vine } from '#types/firebase/models/vine';
import { Component, OnDestroy, OnInit, inject, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vine',
  templateUrl: './vine.component.html',
  styleUrls: ['./vine.component.scss'],
})
export class VineComponent implements OnInit, OnDestroy {
  modalService: ModalService = inject(ModalService);
  formBuilder: FormBuilder = inject(FormBuilder);
  vineService: VineService = inject(VineService);
  authService: AuthService = inject(AuthService);
  vineEditForm: FormGroup;
  private modalSubscription: Subscription;
  private userRolesSubscription: Subscription;
  open: boolean = false;
  @Input({ required: true }) userRoles: Roles;
  editing: boolean = false;
  hasDeletionPermission: boolean = false;

  @Input({ required: true }) vine: Vine;
  @Output() vineChange = new EventEmitter<Vine>();

  ngOnInit() {
    this.modalSubscription = this.modalService.showModal$.subscribe((open: string) => this.open = open === this.vine.id);
    this.vineEditForm = this.formBuilder.group({
      clusters: [this.vine.clusters, [Validators.pattern(PositiveNumberRegExp), Validators.min(0), Validators.max(40)]],
      vigor: [this.vine.vigor, [Validators.required, Validators.pattern(new RegExp(Object.values(VIGOR_LIST).join('|')))]],
    });
    this.userRolesSubscription = this.authService.getUser().subscribe((user) => {
      const roles: Roles = user ? user.roles : Roles.DEFAULT;
      this.userRoles = roles;
      this.hasDeletionPermission = user ? [Roles.ADMIN].includes(user.roles) : false;
      this.editing = this.userRoles.includes(Roles.ADMIN) || this.userRoles.includes(Roles.MANAGER);
    });
  }

  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
    this.userRolesSubscription.unsubscribe();
  }

  closeModal(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.modalService.closeModal();
    this.open = false;
  }

  deleteVine(event: MouseEvent) {
    event.stopPropagation();
    const succesfull = confirm('Are you sure you want to delete this vine?');
    if (succesfull) {
      this.vineService.delete(this.vine.id, this.vine.field_id);
      this.modalService.closeModal();
    }
  }

  async submit(event: SubmitEvent) {
    event.stopPropagation();
    if (!this.vineEditForm.invalid) {
      // this.vineService.set(this.vine.id, this.vine.field_id, {
      //   ...this.vine,
      //   ...this.vineEditForm.value,
      // });
      this.vineChange.emit({
        ...this.vine,
        ...this.vineEditForm.value,
      });
      this.modalService.closeModal();
    }
  }

  get clusters() {
    return this.vineEditForm.get('clusters');
  }

  get vigor() {
    return this.vineEditForm.get('vigor');
  }
}
