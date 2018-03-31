import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestClientService {

	constructor(private httpClient: HttpClient, private cookies: CookieService) { }

	private getDefaultHeaders() {
		const bot_id = this.cookies.get('bot_id') || '';
		return new HttpHeaders({
			botId: bot_id
		});
	}

	get<T>(url: string) {
		const headers = this.getDefaultHeaders();
		const req = this.httpClient.get<T>(url, { headers: headers });
		return req;
	}

	post(url: string, data) {
		const headers = this.getDefaultHeaders();
		const req = this.httpClient.post(url, data, { headers: headers, responseType: 'text' });
		return req;
	}

	delete<T>(url: string) {
		const headers = this.getDefaultHeaders();
		const req = this.httpClient.delete<T>(url, { headers: headers });
		return req;
	}
}
