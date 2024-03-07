import { Roles } from '#lib/enum/roles';
import { UserService } from '#services/firebase/models/user/user.service';
import { ModalService } from '#services/modal/modal.service';
import { User } from '#types/Auth/User';
import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { FirestoreError } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrl: './edit-user-modal.component.scss'
})
export class EditUserModalComponent implements OnInit, OnDestroy {
  formBuilder: FormBuilder = inject(FormBuilder);
  userService: UserService = inject(UserService);
  modalService: ModalService = inject(ModalService);
  userEditForm: FormGroup;
  open: boolean = false;
  modalSubscription: Subscription;
  @Input({ required: true }) user: User;
  @Input() editable: boolean = false;
  rolesArrays: Roles[] = Object.values(Roles);

  ngOnInit(): void {
    this.modalSubscription = this.modalService.showModal$.subscribe((open: string) => this.open = open === this.user.uid);
    this.userEditForm = this.formBuilder.group({
      displayName: this.user.displayName,
      email: this.user.email,
      roles: [this.user.roles, [Validators.required, Validators.pattern(new RegExp(Object.values(Roles).join('|')))]],
    });
  }
  ngOnDestroy(): void {
    this.modalSubscription.unsubscribe();
  }

  closeModal(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.modalService.closeModal();
  }

  async submit(event: SubmitEvent) {
    event.stopPropagation();
    if (!this.userEditForm.invalid) {
      try {
        await this.userService.set(this.user.uid, {
          ...this.user,
          ...this.userEditForm.value,
        });
        this.modalService.closeModal();
      } catch (error) {
        // handle firebase errors
        if (error instanceof FirestoreError) {
          error.code === 'permission-denied'
        }
      }
    };
  }

  get displayName() { return this.userEditForm.get('displayName'); }
  get email() { return this.userEditForm.get('email'); }
  get roles() { return this.userEditForm.get('roles'); }
}
