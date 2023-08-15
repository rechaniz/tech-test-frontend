import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MovementsListComponent} from './movements-list/movements-list.component';
import {RouterModule} from "@angular/router";
import {MovementsService} from "./movements.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NewIncomingMovementComponent} from './new-incoming-movement/new-incoming-movement.component';
import {NewOutgoingMovementComponent} from './new-outgoing-movement/new-outgoing-movement.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {DisableArrowsDirective} from './disable-arrows.directive';
import {NgxMatDatetimePickerModule} from "@angular-material-components/datetime-picker";
import {NgxMatMomentModule} from "@angular-material-components/moment-adapter";
import {MAT_DATE_LOCALE} from "@angular/material/core";


@NgModule({
  declarations: [
    AppComponent,
    MovementsListComponent,
    NewIncomingMovementComponent,
    NewOutgoingMovementComponent,
    DisableArrowsDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MovementsListComponent},
      {path: 'newIncomingMovement', component: NewIncomingMovementComponent},
      {path: 'newOutgoingMovement', component: NewOutgoingMovementComponent}
    ]),
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    NgxMatMomentModule,
    NgxMatDatetimePickerModule
  ],
  providers: [MovementsService, NgxMatDatetimePickerModule, {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
