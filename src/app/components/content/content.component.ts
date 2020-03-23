import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { CarService } from "../../services/car.service";
import { Product } from "../../models/product";
import { ItemCar } from 'src/app/models/item-car';



@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	products: Product[] = [];

	constructor(private svrProduct: ProductService,
				private svrCar:CarService) { }

	ngOnInit() {
		this.svrProduct.getProducts().then((data) => {
			this.products = data;
		});
	}

	async insertToCar(product : Product){
		let newItemCar : ItemCar = {};
		newItemCar.id_product =  product.id_product;
		newItemCar.id_usr = 1;
		newItemCar.price_attime = product.price;
		newItemCar.quantity = 1;
		await this.svrCar.insertCard(newItemCar);

		//Se dispara la propagacion 
		this.svrCar.getBalance(1);
	}

}
