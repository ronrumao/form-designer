import { Component, OnInit, Input } from '@angular/core';
import { FormModel } from '../models/form.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-form-designer',
  templateUrl: './form-designer.component.html',
  styleUrls: ['./form-designer.component.css']
})
export class FormDesignerComponent implements OnInit {
  @Input() formData = [];
  id = '';
  selectedFieldDetails: FormModel;
  showFieldForm = true;

  constructor() { }

  ngOnInit() {
  }

  previewForm() {
    if (this.formData.length !== 0) {
      this.showFieldForm = false;
    } else {
      console.log('there are no fields added');
    }
  }

  editForm(data: FormModel) {
    this.selectedFieldDetails = data;
  }

  deleteField(id: string) {
    const editFieldIndex = this.formData.findIndex(x => x.id === id);
    if (editFieldIndex !== -1) {
      this.formData.splice(editFieldIndex, 1);
    }
  }

  addField() {
    this.id = uuid();
  }

  saveFieldData = (event: any) => {
    if (Object.keys(event).length !== 0) {
      const editFieldIndex = this.formData.findIndex(x => x.id === event.id);
      if (editFieldIndex === -1) {
        this.formData.push(event);
      } else {
        this.formData.splice(editFieldIndex, 1, event);
      }
      this.formData.sort((a, b) => a.order - b.order);
    }
  }

  showFormDesigner = (event: any) => {
    this.showFieldForm = event;
  }
}
