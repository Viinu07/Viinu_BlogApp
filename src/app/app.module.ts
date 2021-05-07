import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AngularFirestoreModule } from "@angular/fire/firestore";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from "@angular/fire/storage";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UCreatePostComponent } from "./posts/u-create-post/u-create-post.component";
import { UPostDetailComponent } from "./posts/upost-detail/upost-detail.component";

import { CrudService } from "./common/services/crud.service";
import { AuthComponentComponent } from "./Authentication/auth-component/auth-component.component";
import { AuthService } from "./common/services/auth.service";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { ACrudService } from "./common/services/acrud.service";
import { UserPostComponent } from "./posts/user-post/user-post.component";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { UserEditComponent } from "./posts/user-edit/user-edit.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { ViewProfileComponent } from "./user/view-profile/view-profile.component";

import { ViewOnlyPublicPostComponent } from "./posts/view-only-public-post/view-only-public-post.component";
import { AuthGuard } from "./common/services/auth-guard.service";
import { LoadingSpinnerComponent } from "./common/loading-spinner/loading-spinner.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { ResetpasswordComponent } from "./Authentication/resetpassword/resetpassword.component";
import { ToastrModule } from "ngx-toastr";
import { VerifyMailComponent } from "./Authentication/verify-mail/verify-mail.component";
import { NoSanitizePipe } from "./common/services/no-sanitize.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UCreatePostComponent,
    UPostDetailComponent,
    AuthComponentComponent,
    UserPostComponent,
    UserEditComponent,
    ProfileComponent,
    ViewProfileComponent,
    ViewOnlyPublicPostComponent,
    LoadingSpinnerComponent,
    ResetpasswordComponent,
    VerifyMailComponent,
    NoSanitizePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
  ],
  providers: [CrudService, AuthService, ACrudService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
