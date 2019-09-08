import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PreviewFormComponent } from './preview-form/preview-form.component';
import { FormDesignerComponent } from './form-designer/form-designer.component';
import { AddUpdateFieldComponent } from './add-update-field/add-update-field.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PreviewFormComponent,
        FormDesignerComponent,
        AddUpdateFieldComponent,
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
