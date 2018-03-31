import { SettingsService } from './settings.service';
import { RestClientService } from './RestClient.service';

import { Injectable } from '@angular/core';

@Injectable()
export class SubscribersService {

constructor(
    private http: RestClientService,
    private settings: SettingsService) {}

    apiUrl = this.settings.getAppSetting('api_url');
    getAll() {
        return this.http.get<ISubscriber[]>(`${this.apiUrl}subscribers/getall/test`);
    }
}

export interface ISubscriber {
    name;
    avatar;
    country;
    language;
    api_version;
    id;
}
