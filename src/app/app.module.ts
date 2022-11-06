import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './backoffice/add-product/add-product.component';
import { BackfooterComponent } from './backoffice/backfooter/backfooter.component';
import { BackloginComponent } from './backoffice/backlogin/backlogin.component';
import { BacknavbarComponent } from './backoffice/backnavbar/backnavbar.component';
import { BacksidebarComponent } from './backoffice/backsidebar/backsidebar.component';
import { DashbordComponent } from './backoffice/dashbord/dashbord.component';
import { ShowProductComponent } from './backoffice/show-product/show-product.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitComponent } from './produit/produit.component';
import { RegisterComponent } from './register/register.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PanierComponent,
    DashbordComponent,
    ShowProductComponent,
    BacknavbarComponent,
    BacksidebarComponent,
    BackfooterComponent,
    HomeComponent,
    BackloginComponent,
    ConnexionComponent,
    RegisterComponent,
    AddProductComponent,
    ProduitComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
