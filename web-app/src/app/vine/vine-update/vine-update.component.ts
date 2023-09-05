import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Vine } from '../vine.type';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-vine-update',
  templateUrl: './vine-update.component.html',
  styleUrls: ['./vine-update.component.scss'],
})
export class VineUpdateComponent implements OnInit {
  @Input({ required: true }) open: boolean = false;
  @Input({ required: true }) item: Vine;
  @Output() handleOnClose: EventEmitter<undefined> = new EventEmitter();
  cepages: any[] = [];

  status: string;

  fields: FormGroup;


  ngOnInit() {

  }

  onSubmit() {
    // query to backend
    // if success -> green check in submit buttin
    // if error -> red X + shake animation on submit button
  }

  cancel() {
    this.handleOnClose.emit()
  }
}
