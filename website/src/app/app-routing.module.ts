import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResumeComponent } from './resume/resume.component';
import { ArtComponent } from './art/art.component';
import { PhotoComponent } from './photo/photo.component';
import { ParallaxComponent } from './parallax/parallax.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'art', component: ArtComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'parallax', component: ParallaxComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
