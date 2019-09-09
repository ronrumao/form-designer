import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDesignerComponent } from './form-designer.component';
import { MaterialModule } from '../material/material.module';
import { PreviewFormComponent } from '../preview-form/preview-form.component';
import { AddUpdateFieldComponent } from '../add-update-field/add-update-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FormDesignerComponent', () => {
  let component: FormDesignerComponent;
  let fixture: ComponentFixture<FormDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
