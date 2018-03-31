import { SubscribersService } from './core/services/subscribers.service';
import { CookieService, CookieModule } from 'ngx-cookie';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RestClientService } from './core/services/RestClient.service';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { SubscribersListComponent } from './subscribers/subscribers-list/subscribers-list.component';
import { Routing } from './routes.routing';
import { SettingsService } from './core/services/settings.service';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SubscribersListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    Routing,
    CookieModule.forRoot()    
  ],
  providers: [
    SettingsService,
    CookieService,
    RestClientService,
    SubscribersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
