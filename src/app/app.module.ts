import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Inject, PLATFORM_ID } from '@angular/core';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        NgtUniversalModule,
        TransferHttpCacheModule,
        HttpClientModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({ //Add module google map for root
            apiKey: ''
         })
    ],
    providers: [],
})
export class AppModule {

}
