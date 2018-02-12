import { NgModule, Injectable } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './servcies/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ManageTerms } from './terms/terms.component';
import { FacultyJobs } from './faculty/job/job.component';
import { LoginComponent } from './login/login.component';
import { Observable } from 'rxjs/observable';
import { PersistenceService, StorageType } from 'angular-persistence';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private persistenceService: PersistenceService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoggedIn       // {1}
      .take(1)                               // {2} 
      .map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['/user-login']);  // {4}
          return false;
        }
        return true;
      });
  }
}
const routes: Routes = [
  { path: 'user-login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'terms', component: ManageTerms, canActivate: [AuthGuard] },
  { path: 'jobs', component: FacultyJobs, canActivate: [AuthGuard] },
  { path: 'typography', component: TypographyComponent, canActivate: [AuthGuard] },
  { path: 'icons', component: IconsComponent, canActivate: [AuthGuard] },
  { path: 'maps', component: MapsComponent, canActivate: [AuthGuard] },
  { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard] },
  { path: 'upgrade', component: UpgradeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule {
}
