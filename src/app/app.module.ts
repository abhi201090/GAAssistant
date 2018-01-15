import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { DataTableComponent } from './components/datatable/datatable.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './servcies/user.service';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { DialogContent } from './components/datatable/dialog.component';
import { ManageTerms } from './terms/terms.component';
import { FacultyJobs } from './faculty/job/job.component';
import { AddTermDialogContent } from './terms/addtermdialog.component';
import { ViewTermDialog } from './terms/viewtermdialog.component';
import { EditTermDialog } from './terms/edittermdialog.component';
import { DeleteTermDialog } from './terms/deletetermdialog.component';
import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    DataTableComponent,
    DialogContent,
    ManageTerms,
    AddTermDialogContent,
    ViewTermDialog,
    EditTermDialog,
    DeleteTermDialog,
    FacultyJobs
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSortModule,
    BootstrapModalModule,
    NgDatepickerModule,
    LoadingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [DialogContent, AddTermDialogContent, ViewTermDialog, EditTermDialog, DeleteTermDialog]
})
export class AppModule { }
