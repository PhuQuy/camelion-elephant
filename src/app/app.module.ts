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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthGuard } from '@core/auth.guard';
import { AngularFireAuth } from '@angular/fire/auth';

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
        AngularFirestoreModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({ //Add module google map for root
            apiKey: 'AIzaSyDhMJyRMmSKUPnuWEUqmH87W531M1kdRK4'
         })
    ],
    providers: [SeoService, AuthGuard, AngularFireAuth],
})
export class AppModule {

}
