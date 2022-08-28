import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPublicSidenavComponent } from './app-public-sidenav.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AppPublicSidenavComponent,
    children: [
      // home
      { path: '', component: DashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), LoadingBarRouterModule],
  exports: [RouterModule],
})
export class AppPublicSidenavRoutingModule {}
