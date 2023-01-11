import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FormLoginComponent,
    HomeSectionComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FormLoginComponent,
    HomeSectionComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
