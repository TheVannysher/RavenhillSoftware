import { Roles } from '#lib/enum/roles';
import { VIGOR_LIST } from '#lib/enum/vine';
import { VineService } from '#services/firebase/models/vine/vine.service';
import { ModalService } from '#services/modal/modal.service';
import { Vine } from '#types/firebase/models/vine';
import { Component, OnDestroy, OnInit, inject, Input } from '@angular/core';
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
  vineEditForm: FormGroup;
  private modalSubscription: Subscription;
  open: boolean = false;
  @Input() userRoles: Roles = Roles.DEFAULT;
  editing: boolean = false;
  hasDeletionPermission: boolean = false;

  @Input({ required: true }) vine: Vine;

  ngOnInit() {
    this.modalSubscription = this.modalService.showModal$.subscribe((open: string) => this.open = open === this.vine.id);
    this.vineEditForm = this.formBuilder.group({
      clusters: [this.vine.clusters, [Validators.pattern(/^[0-9]+$/), Validators.min(0), Validators.max(40)]],
      vigor: [this.vine.vigor, [Validators.required, Validators.pattern(new RegExp(Object.values(VIGOR_LIST).join('|')))]],
    });
    this.editing = this.userRoles.includes(Roles.ADMIN) || this.userRoles.includes(Roles.MANAGER);
    this.hasDeletionPermission = this.userRoles.includes(Roles.ADMIN);
  }

  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
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
      await this.vineService.set(this.vine.id, this.vine.field_id, {
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
