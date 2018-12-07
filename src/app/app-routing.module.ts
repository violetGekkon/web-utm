import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UtmMainPageComponent} from './utm-main-page/utm-main-page.component';
import {UtmDocumentPageComponent} from './utm-document-page/utm-document-page.component';
import {UtmServicePageComponent} from './utm-service-page/utm-service-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CertificateInfoPageComponent} from './certificates-info-page/certificate-info-page.component';
import {MarkPageComponent} from './mark-page/mark-page.component';
import {XSDSchemesPageComponent} from './xsdschemes-page/xsdschemes-page.component';
import {ChangeHistoryPageComponent} from './change-history-page/change-history-page.component';
import {MarkHistoryPageComponent} from './mark-history-page/mark-history-page.component';
import {ServiceDeclarationPageComponent} from './service-declaration-page/service-declaration-page.component';
import {ServiceLicensePageComponent} from './service-license-page/service-license-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/utm/home', pathMatch: 'full' },
  { path: 'utm', redirectTo: '/utm/home', pathMatch: 'full' },
  {
    path: 'utm',
    component: UtmMainPageComponent,
    children: [
      {path: 'home', component: HomePageComponent},
      {path: 'certificate', component: CertificateInfoPageComponent},
      {path: 'scheme', component: XSDSchemesPageComponent},
      {path: 'history', component: ChangeHistoryPageComponent}
    ],
  },
  {path: 'document', component: UtmDocumentPageComponent},
  {path: 'mark', component: MarkPageComponent},
  {path: 'mark/history', component: MarkHistoryPageComponent},
  {path: 'mark/declaration', component: ServiceDeclarationPageComponent},
  {path: 'mark/license', component: ServiceLicensePageComponent},
  {
    path: 'service',
    component: UtmServicePageComponent,
    children: [
      {path: 'mark', component: MarkPageComponent},
      {path: 'mark/history', component: MarkHistoryPageComponent},
      {path: 'mark/declaration', component: ServiceDeclarationPageComponent},
      {path: 'mark/license', component: ServiceLicensePageComponent}
    ],
  },
  {path: '**', redirectTo: 'utm'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
