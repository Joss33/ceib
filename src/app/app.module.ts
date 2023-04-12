import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { HeaderComponent } from './Pages/layout/components/header/header.component';
import { LoaderComponent } from './Pages/layout/components/loader/loader.component';
import { LoadingComponent } from './Pages/layout/components/loading/loading.component';
import { SiderbarComponent } from './Pages/layout/components/siderbar/siderbar.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAnglesRight as fasAnglesRight, faAnglesLeft as fasAnglesLeft, faBook as fasBook, faClipboardList as fasClipboardList, faBookOpen as fasBookOpen, faFileContract as fasFileContract, faChartSimple as fasChartSimple, faSitemap as fasSitemap } from '@fortawesome/free-solid-svg-icons';
import { TokenInterceptor } from '@core/interceptores/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    LoaderComponent,
    LoadingComponent,
    SiderbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    OverlayModule,
    CdkAccordionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(fasAnglesRight, fasBook, fasClipboardList, fasBookOpen, fasFileContract, fasChartSimple, fasSitemap, fasAnglesLeft);
  }
}
