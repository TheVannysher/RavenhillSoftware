import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIconsModule } from '@ng-icons/core';
import { DragToSelectModule } from 'ngx-drag-to-select';

import { BlockCardComponent } from '#components/block/block-card/block-card.component';
import { MenuItemComponent } from '#components/menu/menu-item/menu-item.component';
import { HeaderComponent } from '#components/navigation/header/header.component';
import { ItemComponent } from '#components/navigation/navigator/item/item.component';
import { NavigatorComponent } from '#components/navigation/navigator/navigator.component';
import { PageWrapperComponent } from '#components/page-wrapper/page-wrapper.component';
import settings from '#lib/settings/settings';
import { ControlPanelComponent } from '#modules/control-panel/control-panel.component';
import { FieldListComponent } from '#modules/control-panel/field/field-list/field-list.component';
import { OverviewComponent } from '#modules/home/overview/overview.component';
import { ProfileComponent } from '#modules/home/profile/profile.component';
import { TaskboardComponent } from '#modules/home/taskboard/taskboard.component';
import { LoginComponent } from '#modules/login/login.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IconButtonComponent } from './components/button/icon-button/icon-button.component';
import { GridComponent } from './components/grid/grid.component';
import { GridNodeComponent } from './components/grid/grid-node/grid-node.component';
import { RhButtonComponent } from './components/inputs/rh-button/rh-button.component';
import { RhInputComponent } from './components/inputs/rh-input/rh-input.component';
import icons from './icons';
import { EditOrCreateFieldComponent } from './modules/control-panel/field/edit-or-create-field/edit-or-create-field.component';
import { FieldItemComponent } from './modules/control-panel/field/field-item/field-item.component';
import { ListsPanelComponent } from './modules/control-panel/lists-panel/lists-panel.component';
import { CreateBulkVineComponent } from './modules/control-panel/vine/create-bulk-vine/create-bulk-vine.component';
import { VineListComponent } from './modules/control-panel/vine/vine-list/vine-list.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    CreateBulkVineComponent,
    BlockCardComponent,
    EditOrCreateFieldComponent,
    FieldListComponent,
    FieldItemComponent,
    GridComponent,
    GridNodeComponent,
    HeaderComponent,
    HomeComponent,
    IconButtonComponent,
    ItemComponent,
    ListsPanelComponent,
    LoginComponent,
    MenuItemComponent,
    NavigatorComponent,
    OverviewComponent,
    PageNotFoundComponent,
    PageWrapperComponent,
    ProfileComponent,
    RhInputComponent,
    RhButtonComponent,
    TaskboardComponent,
    VineListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgIconsModule.withIcons({ ...icons }),
    provideFirebaseApp(() => initializeApp(settings.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    DragToSelectModule.forRoot(),
    provideFirebaseApp(() => initializeApp({
      projectId: 'rossvineyards', appId: '1:1059335026033:web:55dab0e97b366c666232d0', storageBucket: 'rossvineyards.appspot.com', apiKey: 'AIzaSyDGTgwnkaq9ytbgWoTh_FXke9fZHbH1004', authDomain: 'rossvineyards.firebaseapp.com', messagingSenderId: '1059335026033', measurementId: 'G-39648EVREB',
    })),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
