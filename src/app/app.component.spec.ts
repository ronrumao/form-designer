import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PreviewFormComponent } from './preview-form/preview-form.component';
import { FormDesignerComponent } from './form-designer/form-designer.component';
import { AddUpdateFieldComponent } from './add-update-field/add-update-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';

describe('AppComponent', () => {
  let component: AddUpdateFieldComponent;
  let fixtureAddFieldComponent: ComponentFixture<AddUpdateFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatIconModule,
        ReactiveFormsModule,
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

  beforeEach(() => {
    fixtureAddFieldComponent = TestBed.createComponent(AddUpdateFieldComponent);
    component = fixtureAddFieldComponent.componentInstance;
    fixtureAddFieldComponent.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Form Designer');
  });
});
