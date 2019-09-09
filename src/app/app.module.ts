import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDesignerComponent } from './form-designer/form-designer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUpdateFieldComponent } from './add-update-field/add-update-field.component';
import { PreviewFormComponent } from './preview-form/preview-form.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FormDesignerComponent,
    AddUpdateFieldComponent,
    PreviewFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
