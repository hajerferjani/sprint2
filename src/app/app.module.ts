import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PanierComponent } from './panier/panier.component';
import { DashbordComponent } from './backoffice/dashbord/dashbord.component';
import { GestProduitComponent } from './backoffice/gest-produit/gest-produit.component';
import { BacknavbarComponent } from './backoffice/backnavbar/backnavbar.component';
import { BacksidebarComponent } from './backoffice/backsidebar/backsidebar.component';
import { BackfooterComponent } from './backoffice/backfooter/backfooter.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PanierComponent,
    DashbordComponent,
    GestProduitComponent,
    BacknavbarComponent,
    BacksidebarComponent,
    BackfooterComponent,
    HomeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
