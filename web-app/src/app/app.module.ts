import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIconsModule } from '@ng-icons/core';

import { BlockCardComponent } from '#components/block/block-card/block-card.component';
import { MenuItemComponent } from '#components/menu/menu-item/menu-item.component';
import { HeaderComponent } from '#components/navigation/header/header.component';
import { ItemComponent } from '#components/navigation/navigator/item/item.component';
import { NavigatorComponent } from '#components/navigation/navigator/navigator.component';
import { PageWrapperComponent } from '#components/page-wrapper/page-wrapper.component';
import { ControlPanelComponent } from '#modules/control-panel/control-panel.component';
import { FieldListComponent } from '#modules/control-panel/field/field-list/field-list.component';
import { OverviewComponent } from '#modules/home/overview/overview.component';
import { ProfileComponent } from '#modules/home/profile/profile.component';
import { TaskboardComponent } from '#modules/home/taskboard/taskboard.component';
import { LoginComponent } from '#modules/login/login.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import icons from './icons';
import { EditOrCreateFieldComponent } from './modules/control-panel/field/edit-or-create-field/edit-or-create-field.component';
import { FieldItemComponent } from './modules/control-panel/field/field-item/field-item.component';
import { ListsPanelComponent } from './modules/control-panel/lists-panel/lists-panel.component';
import { CreateBulkVineComponent } from './modules/control-panel/vine/create-bulk-vine/create-bulk-vine.component';
import { VineListComponent } from './modules/control-panel/vine/vine-list/vine-list.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { VineComponent } from '#modules/control-panel/vine/vine.component';
import environment from 'src/environments/environment';
import { UserListComponent } from '#modules/control-panel/user/user-list/user-list.component';
import { EditUserModalComponent } from '#modules/control-panel/user/edit-user-modal/edit-user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    CreateBulkVineComponent,
    BlockCardComponent,
    EditOrCreateFieldComponent,
    EditUserModalComponent,
    FieldListComponent,
    FieldItemComponent,
    HeaderComponent,
    HomeComponent,
    ItemComponent,
    ListsPanelComponent,
    LoginComponent,
    MenuItemComponent,
    NavigatorComponent,
    OverviewComponent,
    PageNotFoundComponent,
    PageWrapperComponent,
    ProfileComponent,
    TaskboardComponent,
    UserListComponent,
    VineListComponent,
    VineComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgIconsModule.withIcons({ ...icons }),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
