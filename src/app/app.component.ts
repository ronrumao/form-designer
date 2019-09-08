import { Component } from '@angular/core';
import { FormModel } from './models/form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-designer';
  id: string;
  showForm = false;
  formData = [];
  model: FormModel = new FormModel();
  editModel: FormModel = new FormModel();

  saveFieldValue = (event: any) => {
    this.model = event;
  }

  updateIdAddForm = (event: any) => {
    this.id = event;
  }

  populateForm = (event: any) => {
    this.showForm = true;
    this.formData = event;
  }

  showFormDesigner = (event: any) => {
    this.showForm = false;
  }

  editField = (event: any) => {
    this.editModel = event;
  }
}
