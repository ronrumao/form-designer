import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateFieldComponent } from './add-update-field.component';
import { FormsModule } from '@angular/forms';

describe('AddUpdateFieldComponent', () => {
  let component: AddUpdateFieldComponent;
  let fixture: ComponentFixture<AddUpdateFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [AddUpdateFieldComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#add-update-header').textContent).toContain('Add/Update Fields');
  });

  it('should render save button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#btn-save').textContent).toContain('Save');
  });

  it('should render reset button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#btn-reset').textContent).toContain('Reset');
  });

  it('should render input type selector', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('select')).toBeTruthy();
  });

  it('should have list of all available input types', () => {
    expect(component.inputTypes.length).toBeGreaterThanOrEqual(1);
  });

});
