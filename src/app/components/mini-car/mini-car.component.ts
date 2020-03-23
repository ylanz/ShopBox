import { Component, OnInit } from '@angular/core';
import { UsrBalance } from "../../models/usr-balance";
import { CarService } from "../../services/car.service";


@Component({
	selector: 'app-mini-car',
	templateUrl: './mini-car.component.html',
	styleUrls: ['./mini-car.component.css']
})
export class MiniCarComponent implements OnInit {

	usrBalance: UsrBalance = {};

	constructor(private svrCarService: CarService) { }

	ngOnInit() {
		this.updateUsrBalance();
	}

	updateUsrBalance() {
		/*this.svrCarService.checkBalance(1).then(data => {
			this.usrBalance = data[0];
		});*/
		//
		//Se inicia la la propagacion
		//this.svrCarService.getBalance(1);
		this.svrCarService.checkBalance(1).then(balance => {
			this.usrBalance = balance[0];
		})
		//Se inscribe en el evento para enterarce y hacer acciones
		this.svrCarService.second$.subscribe(data => {		
			console.log(data);	
			this.usrBalance = data;
		});

		//
	}

}
