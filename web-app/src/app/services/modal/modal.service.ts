import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _showModal = new BehaviorSubject<string>('none');
  showModal$ = this._showModal.asObservable();

  openModal(modalId: string) {
    this._showModal.next(modalId);
  }

  closeModal() {
    this._showModal.next('none');
  }
}
