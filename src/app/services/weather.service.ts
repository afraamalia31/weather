import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	url = 'https://api.openweathermap.org/data/2.5/'
	key = '2a6de1771bc27a3bc79cbf0007c5b959'
	city = 'Kebumen'

	constructor(private http: HttpClient) { }

	getDataNow() {
		return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
	}

	getDataForecast() {
		return this.http.get(`${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`);
	}
}
