import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'src/app/login/login.component';
import { ListCandidatesComponent } from 'src/app/list-candidates/list-candidates.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'list-candidates', component: ListCandidatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  LoginComponent,
  ListCandidatesComponent
]
