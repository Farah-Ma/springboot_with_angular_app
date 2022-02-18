import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserService} from './shared/service/user.service';
import {ModalModule} from './shared/component/popups/moodal.module';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
            declarations: [
              AppComponent
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              HttpClientModule,
              FormsModule,
              ModalModule,
              ToastrModule.forRoot({
                                     tapToDismiss: true,
                                     positionClass: 'toast-bottom-right',
                                     maxOpened: 3,
                                     newestOnTop: true,
                                     timeOut: 3000,
                                     extendedTimeOut: 1000,
                                     enableHtml: false,
                                     messageClass: '',
                                     titleClass: 'toaster-title',
                                     closeButton: false,
                                     progressAnimation: 'increasing',
                                     progressBar: true,
                                     autoDismiss: true,
                                     toastClass: 'ngx-toastr',
                                     iconClasses: {
                                       error: 'toaster-error',
                                       info: 'toaster-info',
                                       success: 'toaster-success',
                                       warning: 'toaster-warning'
                                     }
                                   })
            ],
            providers: [UserService],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
