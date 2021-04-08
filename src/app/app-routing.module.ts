import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'contact-us',
    component: OverviewComponent
  },
  {
    path: 'login',
    component: OverviewComponent
    // canActivate: [BeforeLoginService]
  },
  {
    path: 'signup',
    component: OverviewComponent
    // canActivate: [BeforeLoginService]
  },
  {
    path: 'profile',
    component: OverviewComponent
    // canActivate: [AfterLoginService]
  },
  {
    path: 'request-password-reset',
    component: OverviewComponent
    // canActivate: [BeforeLoginService]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
