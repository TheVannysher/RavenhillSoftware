import { FieldService } from '#services/firebase/models/field/field.service';
import { Field } from '#types/firebase/models/field';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-field-selector',
  templateUrl: './field-selector.component.html',
  styleUrl: './field-selector.component.scss'
})
export class FieldSelectorComponent implements OnInit, OnDestroy {
  private fieldSubscription: Subscription;
  fieldService: FieldService = inject(FieldService);

  fields: Field[] = [];
  @Input() selectedField: Field | null = null;
  @Output() selectedFieldChange: EventEmitter<Field> = new EventEmitter();
  @Input() defaultEmpty: boolean = false;
  open = false;

  ngOnInit(): void {
    this.fieldSubscription = this.fieldService.getAll().subscribe(fields => {
      this.fields = fields;
      if (!this.defaultEmpty && !this.selectedField && fields && fields.length > 0) {
        this.selectedField = fields[0];
        this.selectedFieldChange.emit(fields[0]);
      }
    });
  }

  ngOnDestroy(): void {
    this.fieldSubscription.unsubscribe();
  }

  fieldSelected(field: Field): void {
    this.selectedField = field;
    this.selectedFieldChange.emit(field);
    this.open = false;
  }

  toggleOpen(): void {
    this.open = !this.open;
  }

}
