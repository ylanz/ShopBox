import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { UsrBalance } from 'src/app/models/usr-balance';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	myproduct: Product = {};
	

	constructor(private route: ActivatedRoute,
				private srvProducts: ProductService,

	) { }

	ngOnInit() {
		let id  = this.route.snapshot.paramMap.get('id_product');
		
		this.myproduct = {};
		this.srvProducts.getOneProduct(parseInt(id)).then(data => {
			this.myproduct = data[0];
		});
		
	}

	insertToCar(){
		
	}


}
