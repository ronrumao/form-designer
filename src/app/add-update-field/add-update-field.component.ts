import { Component, EventEmitter, Output, OnChanges, Input, ViewChild } from '@angular/core';
import { FormModel } from '../models/form.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-update-field',
  templateUrl: './add-update-field.component.html',
})
export class AddUpdateFieldComponent implements OnChanges {
  @ViewChild('addFieldForm', { static: true }) form: any;
  @Output() saveFieldValue: EventEmitter<any> = new EventEmitter<any>();
  @Input() id: string;
  @Input() editFieldData: FormModel;
  editModel: FormModel = new FormModel();
  model: FormModel = new FormModel();
  inputTypes = ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month',
    'number', 'password', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];

  constructor() { }

  ngOnChanges() {
    if (this.id) {
      this.model.id = this.id;
      this.reset();
    }
    if (this.editFieldData) {
      this.editModel = this.editFieldData;
      this.model = this.editFieldData;
    }
  }

  saveField() {
    const data = new FormModel();
    data.id = this.model.id ? this.model.id : this.id;
    data.label = this.model.label;
    data.order = this.model.order;
    data.type = this.model.type;
    data.required = this.model.required ? true : false;
    data.visible = this.model.visible ? true : false;
    this.saveFieldValue.emit(data);
    this.reset();
  }

  cancel() {
    if (this.editModel && this.editModel.id) {
      const data = new FormModel();
      data.id = this.editModel.id;
      data.label = this.editModel.label;
      data.order = this.editModel.order;
      data.type = this.editModel.type;
      data.required = this.editModel.required;
      data.visible = this.editModel.visible;
      this.saveFieldValue.emit(data);
    }
    this.reset();
  }

  reset() {
    this.form.reset();
    this.model = new FormModel();
    this.editModel = new FormModel();
    this.model.id = uuid();
  }
}
