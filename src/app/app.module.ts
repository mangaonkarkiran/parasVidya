import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {EmbedVideo} from 'ngx-embed-video';
import {AppRootComponent} from './components/app-root/app-root.component';
import {components} from './app-module.imports';
import {WindowRefService} from './core/services/window-ref.service';
import {LightboxModule} from 'ngx-lightbox';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { RecaptchaModule } from 'ng-recaptcha';
import { AlertService } from '../app/components/db-service/alert.service';
import { AlertComponent } from './components/alert/alert.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {FireBaseService} from '../app/components/db-service/fbService';
import { StudentVerificationComponent } from './components/student-verification/student-verification.component';

@NgModule({
  declarations: [AppRootComponent, ...components, AlertComponent, StudentVerificationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    LightboxModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    RecaptchaModule.forRoot(),
  ],
  providers: [WindowRefService,AlertService,FireBaseService ],
  bootstrap: [AppRootComponent],
 
})
export class AppModule {}
