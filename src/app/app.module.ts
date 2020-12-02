import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataComponent } from './user-data/user-data.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
