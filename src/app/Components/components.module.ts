import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { AboutComponent } from '../Components/about/about.component';
import { ServiceComponent } from '../Components/service/service.component';
import { ContactComponent } from '../Components/contact/contact.component';
import { HomeComponent } from '../Components/home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../Components/Auth/login/login.component';
import { SignupComponent } from '../Components/Auth/signup/signup.component';
import { ProfileComponent } from '../Components/Accounts/profile/profile.component';
import { RequestResetComponent } from '../Components/Auth/password/request-reset/request-reset.component';
import { PasswordResetComponent } from '../Components/Auth/password/password-reset/password-reset.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    PasswordResetComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    PasswordResetComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class ComponentsModule { }
