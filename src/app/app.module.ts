import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routeComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ServiceService } from './service/service.service';
import { ChartService } from './service/chart.service';
//import {NgxSpinnerModule} from 'ngx-spinner';

import { FooterComponent } from './footer/footer.component';
import { ColorcodeComponent } from './colorcode/colorcode.component';
import { SidenavComponent } from './sidenav/sidenav.component';
//import { SpinnerComponent } from './components/spinner/spinner.component';

import { SpinnerComponent } from "./components/spinner/spinner.component";
import { Dashbdtable1Component } from './dashbdtable1/dashbdtable1.component';
import { Dashbdtable2Component } from './dashbdtable2/dashbdtable2.component';
import {AuthGuard} from './service/authguard';
import { AgenttotalComponent } from './agenttotal/agenttotal.component';





/*..........................headoffice main office Starts.................................*/
import { HfsidemenuComponent } from './hfadmin/hfsidemenu/hfsidemenu.component';
import { Hfdashtbl1Component } from './hfadmin/hfdashtbl1/hfdashtbl1.component';
import { Hfdashtbl2Component } from './hfadmin/hfdashtbl2/hfdashtbl2.component';
import { AddvehicleComponent } from './hfadmin/addvehicle/addvehicle.component';
import { ResetComponent } from './reset/reset.component';
import { ExpiredLinkComponent } from './expired-link/expired-link.component';
import { ResetSuccessAppComponent } from './reset-success-app/reset-success-app.component';
import { TotaltransgraphComponent } from './totaltransgraph/totaltransgraph.component';
import { DailyrevtrendsComponent } from './dailyrevtrends/dailyrevtrends.component';
import { StickercounterComponent } from './stickercounter/stickercounter.component';
import { NewpassComponent } from './newpass/newpass.component';
import { StrdailytrendComponent } from './strdailytrend/strdailytrend.component';
import { McnfmpasswordComponent } from './mcnfmpassword/mcnfmpassword.component';
import { TopmosttotalsComponent } from './topmosttotals/topmosttotals.component';
import { HftopmosttotalsComponent } from './hfadmin/hftopmosttotals/hftopmosttotals.component';
import { HfstckersalegraphComponent } from './hfadmin/hfstckersalegraph/hfstckersalegraph.component';
import { StickerService } from './service/stickerService';
import { PolicygraphComponent } from './policygraph/policygraph.component';
import {PolicyService} from './service/policyservice';
import { RevenuetypeComponent } from './revenuetype/revenuetype.component';
import { RevenuetotalComponent } from './revenuetotal/revenuetotal.component';


/*..........................headoffice main office Ends.................................*/


@NgModule({
  declarations: [
    AppComponent,
    routeComponent,
    FooterComponent,
    ColorcodeComponent,
    SidenavComponent,
    SpinnerComponent,
    Dashbdtable1Component,
    Dashbdtable2Component,
    AgenttotalComponent,

    HfsidemenuComponent,

    Hfdashtbl1Component,

    Hfdashtbl2Component,

    AddvehicleComponent,

    ResetComponent,

    ExpiredLinkComponent,

    ResetSuccessAppComponent,

    TotaltransgraphComponent,

    DailyrevtrendsComponent,

    StickercounterComponent,

    NewpassComponent,

    StrdailytrendComponent,

    McnfmpasswordComponent,

    TopmosttotalsComponent,

    HftopmosttotalsComponent,

    HfstckersalegraphComponent,

    PolicygraphComponent,

    RevenuetypeComponent,

    RevenuetotalComponent,

   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   // NgxSpinnerService
  ],
  providers: [ServiceService, ChartService, StickerService, PolicyService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
