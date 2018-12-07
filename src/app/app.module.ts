import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {UtmMainPageComponent} from './utm-main-page/utm-main-page.component';
import {UtmDocumentPageComponent} from './utm-document-page/utm-document-page.component';
import {UtmServicePageComponent} from './utm-service-page/utm-service-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CertificateInfoPageComponent} from './certificates-info-page/certificate-info-page.component';
import {MarkPageComponent} from './mark-page/mark-page.component';
import {XSDSchemesPageComponent} from './xsdschemes-page/xsdschemes-page.component';
import {ChangeHistoryPageComponent} from './change-history-page/change-history-page.component';
import { MarkItemComponent } from './mark-item/mark-item.component';
import { MarkHistoryPageComponent } from './mark-history-page/mark-history-page.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ServiceDeclarationPageComponent } from './service-declaration-page/service-declaration-page.component';
import { ServiceLicensePageComponent } from './service-license-page/service-license-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UtmMainPageComponent,
    HomePageComponent,
    CertificateInfoPageComponent,
    MarkPageComponent,
    UtmDocumentPageComponent,
    UtmServicePageComponent,
    XSDSchemesPageComponent,
    ChangeHistoryPageComponent,
    MarkItemComponent,
    MarkHistoryPageComponent,
    ServiceDeclarationPageComponent,
    ServiceLicensePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MglTimelineModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
