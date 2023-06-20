import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './share-comp/navbar/navbar.component';
import { FooterComponent } from './share-comp/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReviewComponent } from './components/review/review.component';
const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  }, {
    path: "about",
    component: AboutComponent
  }, {
    path: "contact",
    component: ContactComponent
  }, {
    path: "gallery",
    component: GalleryComponent
  }, {
    path: "menu",
    component: MenuComponent
  }, {
    path: "review",
    component: ReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
