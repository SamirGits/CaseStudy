import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Logins/login/login.component';
import { HeaderComponent } from './Header/header/header.component';
import { UserHeaderComponent } from './Header/user-header/user-header.component';
import { FollowComponent } from './MyMedia/follow/follow.component';
import { GalleryComponentComponent } from './MyMedia/gallery-component/gallery-component.component';
import { MediaDetailComponent } from './MyMedia/media-detail/media-detail.component';
import { MultipleMediaComponent } from './MyMedia/multiple-media/multiple-media.component';
import { UploadMediaComponent } from './MyMedia/upload-media/upload-media.component';
import { AuthGuardService } from './service/auth-guard-service.service';
import { RegistrationComponent } from './Logins/registration/registration.component';
import { LogoutComponent } from './Logins/logout/logout.component';
import { AccountUpdateComponent } from './MyMedia/account-update/account-update.component';
import { BlockedContactsComponent } from './MyMedia/blocked-contacts/blocked-contacts.component';
import { ForgotpasswordComponent } from './MyMedia/forgotpassword/forgotpassword.component';
import { SingleMediaComponent } from './MyMedia/single-media/single-media.component';
import { NewsfeedComponent } from './MyMedia/newsfeed/newsfeed.component';


const routes: Routes = [
  //route objects
  { path:"", redirectTo : "login", pathMatch: "full"},
  {path:"header",component:HeaderComponent},
  {path:"user-header",component:UserHeaderComponent},
  { path:"login", component:LoginComponent},


    //connect the guard service
     { path:"follow", component: FollowComponent},
    { path:"gallery-component", component: GalleryComponentComponent}, 
    { path:"media-detail", component: MediaDetailComponent},
    { path:"multiple-media", component: MultipleMediaComponent},
    { path:"upload-media", component: UploadMediaComponent}, 
    { path:"account",component:MediaDetailComponent},
    {path:"login",component:LoginComponent},
    {path:"registration",component:RegistrationComponent},
    {path:"logout", component:LogoutComponent},
    {path:"accountupdate", component:AccountUpdateComponent},
    {path:"blockedcontacts",component:BlockedContactsComponent},
    {path:"forgotpassword",component:ForgotpasswordComponent},
    {path:"single-media",component:SingleMediaComponent},
    {path:"newsfeed",component:NewsfeedComponent},

/*
     // <url>/:<name by which data is accessed>
    { path:"search/:searchText", component: SearchResultComponent},

    // add a fallback mapping
    { path:"**", component: ErrorComponent}
    */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
