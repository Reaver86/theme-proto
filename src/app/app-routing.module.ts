import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IframeViewComponent } from './iframe-view/iframe-view.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: ':appname', component: IframeViewComponent },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
