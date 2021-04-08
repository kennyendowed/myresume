import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { ComponentsModule } from '../Components/components.module';



@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    ComponentsModule,CommonModule
  ]
})
export class PagesModule { }
