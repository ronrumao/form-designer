import { Component, EventEmitter, Output, OnChanges, Input, ViewChild } from '@angular/core';
import { FormModel } from '../models/form.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-update-field',
  templateUrl: './add-update-field.component.html',
  styleUrls: ['./add-update-field.component.css']
})
export class AddUpdateFieldComponent implements OnChanges {
  @Output() saveFieldValue: EventEmitter<any> = new EventEmitter<any>();
  @Input() id: string;
  @Input() selectedFieldDetails: FormModel;
  model: FormModel = new FormModel();
  inputTypes = ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month',
    'number', 'password', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];

  constructor() { }

  ngOnChanges() {
    if (this.id) {
      this.model.id = this.id;
    }
    if (this.selectedFieldDetails) {
      this.model = Object.assign({}, this.selectedFieldDetails);
    }
  }

  saveField() {
    this.saveFieldValue.emit(this.model);
    this.reset();
  }

  reset() {
    this.model = new FormModel();
    this.model.id = uuid();
  }
}
