import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorLayoutComponent } from './layouts/visitor-layout/visitor-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MainHeaderComponent } from './components/header/main-header/main-header.component';
import { AdminHeaderComponent } from './components/header/admin-header/admin-header.component';
import { UserHeaderComponent } from './components/header/user-header/user-header.component';
import { RegisterModalComponent } from './components/modals/register-modal/register-modal.component';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SupplierLayoutComponent } from './layouts/supplier-layout/supplier-layout.component';
import { SupplierHeaderComponent } from './components/header/supplier-header/supplier-header.component';
import { RecoverPasswordComponent } from './components/modals/recover-password/recover-password.component';
import { AuthcontrollerService } from './service/authcontroller.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    VisitorLayoutComponent,
    UserLayoutComponent,
    AdminLayoutComponent,
    MainHeaderComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    RegisterModalComponent,
    LoginModalComponent,
    FooterComponent,
    SupplierLayoutComponent,
    SupplierHeaderComponent,
    RecoverPasswordComponent,
    NotFoundComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers:[provideHttpClient(),AuthcontrollerService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
