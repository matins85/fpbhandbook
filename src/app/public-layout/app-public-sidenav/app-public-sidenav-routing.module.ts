import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPublicSidenavComponent } from './app-public-sidenav.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CategoryComponent } from '../category/category.component';
import { ContentComponent } from '../content/content.component';
import { SubCategoryComponent } from '../sub-category/sub-category.component';

const routes: Routes = [
  {
    path: '',
    component: AppPublicSidenavComponent,
    children: [
      // home
      { path: '', component: DashboardComponent },
      // home
      { path: 'category', component: CategoryComponent },
      // home
      { path: 'sub-category', component: SubCategoryComponent },
      // home
      { path: 'content', component: ContentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), LoadingBarRouterModule],
  exports: [RouterModule],
})
export class AppPublicSidenavRoutingModule {}
