import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MagazineComponent } from './magazine/magazine.component';
import { ShopComponent } from './shop/shop.component';

 const routes:Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'detail', component: DetailsComponent},
	{path: 'shop', component: ShopComponent},
	{path: 'magazine', component: MagazineComponent},
	{path: '**', component: HomeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

// "mock:server": "json-server  --watch api/data.json --routes api/routes.json",
//     "start:proxy": "ng serve  --proxy-config proxy.config.json",
//     "start:proxy:mock:server": "concurrently --kill-others \"npm run mock:server\" \"npm run start:proxy\"",
    

