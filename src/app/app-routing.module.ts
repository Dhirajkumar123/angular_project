import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  {
    path:'home', component: HomeComponent
  },
  
  {
    path:'about', component: AboutComponent
  },
  

  {
    path:'gallary', component: GallaryComponent
  },
  
  {
    path:'blog', component: BlogComponent
  },

  {
    path:'contact', component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
