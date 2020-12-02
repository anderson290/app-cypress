import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { UserDataComponent } from './user-data/user-data.component';


const routes: Routes = [
  {path: '', component: FormComponent},
  {path: 'data', component: UserDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
