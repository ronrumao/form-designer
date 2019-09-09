import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDesignerComponent } from './form-designer.component';
import { PreviewFormComponent } from '../preview-form/preview-form.component';
import { AddUpdateFieldComponent } from '../add-update-field/add-update-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModel } from '../models/form.model';
import { MatIconModule } from '@angular/material';

describe('FormDesignerComponent', () => {
  let component: FormDesignerComponent;
  let fixture: ComponentFixture<FormDesignerComponent>;
  const formFields = [];
  const formData = new FormModel();
  formData.id = '';
  formData.required = false;
  formData.visible = true;
  formData.order = 1;
  formData.type = 'input';
  formData.label = 'MyInput';

  formFields.push(formData);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        PreviewFormComponent,
        FormDesignerComponent,
        AddUpdateFieldComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDesignerComponent);
    component = fixture.componentInstance;
    component.formData = formFields;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table with headers with Order as a column', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table').textContent).toContain('Order');
  });

  it('should render button to preview form', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Preview');
  });

  it('should render button to add field on form', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#btn-add-field').textContent).toContain('Add');
  });

  it('should render table with data rows', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#lbl-field-name').textContent).toContain('MyInput');
  });

  it('should render table with one row', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('#lbl-field-name').length).toEqual(1);
  });
});
