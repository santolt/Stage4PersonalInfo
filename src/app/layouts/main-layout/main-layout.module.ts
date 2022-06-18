import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ResidentialComponent } from './components/residential/residential.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainLayoutComponent,
    ToolbarComponent,
    PersonalComponent,
    ResidentialComponent,
    ResumeComponent,
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    ToolbarComponent
  ]
})
export class MainLayoutModule { }
