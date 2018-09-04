import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatChipsModule, MatDatepickerModule, MatExpansionModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule, MatSidenavModule, MatSortModule, MatToolbarModule
} from '@angular/material';
import { CodeLabComponent } from './code-lab/code-lab.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { SocialComponent } from './social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    CodeLabComponent,
    HomeComponent,
    WorkComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatIconModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatDatepickerModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    routing,

  ],
  exports: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
