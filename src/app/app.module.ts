import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Inject, PLATFORM_ID } from '@angular/core';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AgmCoreModule } from '@agm/core';
import { SeoService } from '@shared/seo.service';
import { environment } from '@env/environment';
import { AuthGuard } from '@core/auth.guard';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        NgtUniversalModule,
        TransferHttpCacheModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AppRoutingModule,
        BrowserAnimationsModule,
        AgmCoreModule.forRoot({ //Add module google map for root
            apiKey: 'AIzaSyDhMJyRMmSKUPnuWEUqmH87W531M1kdRK4'
         })
    ],
    providers: [SeoService, AuthGuard, AngularFireAuth, AngularFirestore],
})
export class AppModule {

}
