import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
    public app: any;

    constructor() {
        this.app = {
            api_url: 'https://viber-us-east-1.azurewebsites.net/api/'
        };
    }

    getAppSetting(name) {
        return name ? this.app[name] : this.app;
    }

}
