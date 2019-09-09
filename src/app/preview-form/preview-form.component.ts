import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormModel } from '../models/form.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrls: ['./preview-form.component.css']
})
export class PreviewFormComponent implements OnInit {
  @Output() showForm: EventEmitter<any> = new EventEmitter<any>();
  @Input() formFields: FormModel[];
  previewForm: FormGroup;

  constructor() { }

  ngOnInit() {
    const previewGroup: FormGroup = new FormGroup({});
    for (const key in this.formFields) {
      if (this.formFields.hasOwnProperty(key)) {
        let control: FormControl;
        if (this.formFields[key].required === true) {
          control = new FormControl('', Validators.required);
        } else {
          control = new FormControl('');
        }
        previewGroup.addControl(this.formFields[key].label, control);
      }
    }
    this.previewForm = previewGroup;
  }

  btnClick() {
    console.log('I am button');
  }

  onSubmit() {
    console.log('Good. Now press back if you want to see form for other fields');
  }

  cancel() {
    this.showForm.emit(true);
  }
}
