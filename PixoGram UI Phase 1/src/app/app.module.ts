import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { UserHeaderComponent } from './Header/user-header/user-header.component';
import { LoginComponent } from './Logins/login/login.component';
import { RegistrationComponent } from './Logins/registration/registration.component';
import { GalleryComponentComponent } from './MyMedia/gallery-component/gallery-component.component';
import { UploadMediaComponent } from './MyMedia/upload-media/upload-media.component';
import { MultipleMediaComponent } from './MyMedia/multiple-media/multiple-media.component';
import { MediaDetailComponent } from './MyMedia/media-detail/media-detail.component';
import { FollowComponent } from './MyMedia/follow/follow.component';
import { BlankPipe } from './custom-pipes/blank.pipe';
import { LogoutComponent } from './Logins/logout/logout.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AccountUpdateComponent } from './MyMedia/account-update/account-update.component';
import { BlockedContactsComponent } from './MyMedia/blocked-contacts/blocked-contacts.component';
import { ForgotpasswordComponent } from './MyMedia/forgotpassword/forgotpassword.component';
import { NewsfeedComponent } from './MyMedia/newsfeed/newsfeed.component';
import { ResetPasswordComponent } from './MyMedia/reset-password/reset-password.component';
import { VerifyAccountComponent } from './MyMedia/verify-account/verify-account.component';
import { SingleMediaComponent } from './MyMedia/single-media/single-media.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserHeaderComponent,
    LoginComponent,
    RegistrationComponent,
    GalleryComponentComponent,
    UploadMediaComponent,
    MultipleMediaComponent,
    MediaDetailComponent,
    FollowComponent,
    BlankPipe,
    LogoutComponent,
    SearchResultComponent,
    AccountUpdateComponent,
    BlockedContactsComponent,
    ForgotpasswordComponent,
    NewsfeedComponent,
    ResetPasswordComponent,
    VerifyAccountComponent,
    SingleMediaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
