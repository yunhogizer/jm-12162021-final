import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResumeComponent } from './resume/resume.component';
import { ArtComponent } from './art/art.component';
import { PhotoComponent } from './photo/photo.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ResumeComponent,
    ArtComponent,
    PhotoComponent,
    ParallaxComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
