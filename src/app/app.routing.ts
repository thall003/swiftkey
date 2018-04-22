import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './about/about.component';
import {WorkComponent} from './work/work.component';
import {CodeLabComponent} from './code-lab/code-lab.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {PortfolioComponent} from './portfolio/portfolio.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'work', component: WorkComponent},
  {path: 'labs', component: CodeLabComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
