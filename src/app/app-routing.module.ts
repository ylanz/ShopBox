import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./components/main/main.component"
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
	{
		path: '',
		component: ContentComponent
	},
	{
		path:'products',
		component: ContentComponent
	},
	{
		path:"details/:id_product",
		component: ProductDetailsComponent
	},
	{
		path: '**',
		component: MainComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
