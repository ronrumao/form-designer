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
      declarations: [ AddUpdateFieldComponent ]
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
});
