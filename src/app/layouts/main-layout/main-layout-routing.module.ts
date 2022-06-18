import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ResidentialComponent } from './components/residential/residential.component';
import { ResumeComponent } from './components/resume/resume.component';


const routes: Routes = [
  {
    path:"",
    component: MainLayoutComponent,
    canActivate: [],
    children:[
      {
        path:"information", component: PersonalComponent
      },
      {
        path: "residential", component: ResidentialComponent
      },
      {
        path: "resume", component: ResumeComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
