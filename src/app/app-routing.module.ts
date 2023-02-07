import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  {path: 'bmi', component: BmiComponent},
  {path: 'github', component: GithubComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
