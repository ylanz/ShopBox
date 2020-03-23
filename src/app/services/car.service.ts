import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ItemCar } from "../models/item-car";
import { UsrBalance } from "../models/usr-balance";
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CarService {

	url: string = "http://localhost/sbbk/public/index.php/api/addcar";
	url_balance = "http://localhost/sbbk/public/index.php/api/balance/";
	myBalance: UsrBalance = {};

	@Output() updatedUserBalance: EventEmitter<UsrBalance> = new EventEmitter<UsrBalance>();
	private second: BehaviorSubject<UsrBalance> = new BehaviorSubject<UsrBalance>(this.myBalance);
	second$ = this.second.asObservable();

	

	constructor(private http: HttpClient) { }

	insertCard(item: ItemCar) {
		return this.http.post(this.url, item).toPromise();
	}

	async getBalance(id_usr: number) {
		let data = await this.http.get<UsrBalance>(this.url_balance + "1").toPromise();
		console.log("Data: ", data[0]);
		this.myBalance = data[0];
		//this.updatedUserBalance.emit(this.myBalance);
		this.second.next(this.myBalance);

	}


	//PAra otra prueba
	checkBalance(id_usr: number): Promise<UsrBalance> {
		return this.http.get<UsrBalance>(this.url_balance + id_usr).toPromise();

	}

}
