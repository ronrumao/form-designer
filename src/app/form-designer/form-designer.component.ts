import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormModel } from '../models/form.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-form-designer',
  templateUrl: './form-designer.component.html',
})
export class FormDesignerComponent implements OnInit, OnChanges {
  @Output() updateIdAddForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() populateForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() editField: EventEmitter<any> = new EventEmitter<any>();
  @Input() field: FormModel;
  @Input() formData = [];

  constructor() { }

  ngOnInit() {
    this.addField();
  }

  ngOnChanges() {
    if (Object.keys(this.field).length !== 0) {
      const editFieldIndex = this.formData.findIndex(x => x.id === this.field.id);
      if (editFieldIndex === -1) {
        this.formData.push(this.field);
      } else {
        this.formData.splice(editFieldIndex, 1, this.field);
      }
      this.formData.sort((a, b) => a.order - b.order);
    }
  }

  previewForm() {
    if (this.formData.length !== 0) {
      this.populateForm.emit(this.formData);
    } else {
      console.log('there are no fields added');
    }
  }

  editForm(data: FormModel) {
    this.editField.emit(data);
  }

  deleteField(id: string) {
    const editFieldIndex = this.formData.findIndex(x => x.id === id);
    if (editFieldIndex !== -1) {
      this.formData.splice(editFieldIndex, 1);
    }
  }

  addField() {
    this.updateIdAddForm.emit(uuid());
  }
}
