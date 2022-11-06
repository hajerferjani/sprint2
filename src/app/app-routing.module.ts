import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './backoffice/add-product/add-product.component';
import { BackloginComponent } from './backoffice/backlogin/backlogin.component';
import { DashbordComponent } from './backoffice/dashbord/dashbord.component';
import { ShowProductComponent } from './backoffice/show-product/show-product.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path :'admin', component:BackloginComponent},
  {path:'dashbord', component: DashbordComponent},
  {path:'showProduct', component: ShowProductComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'register', component: RegisterComponent},
  {path:'addProduct', component: AddProductComponent},
  {path:'singelProduct', component: ProduitComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
