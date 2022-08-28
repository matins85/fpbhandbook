import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPublicSidenavRoutingModule } from './app-public-sidenav-routing.module';
// modules
import { PublicSharedModuleModule } from '../public-shared-module/public-shared-module.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingBarModule } from '@ngx-loading-bar/core';
// import {CdkMenuModule} from '@angular/cdk/menu';
// components
import { AppPublicSidenavComponent } from './app-public-sidenav.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CategoryComponent } from '../category/category.component';
import { ContentComponent } from '../content/content.component';
import { SubCategoryComponent } from '../sub-category/sub-category.component';
@NgModule({
  declarations: [
    // components  // components which has route and chart comes here....while components which do not goes to public-shared-module
    AppPublicSidenavComponent,
    DashboardComponent,
    CategoryComponent,
    SubCategoryComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    AppPublicSidenavRoutingModule,
    PublicSharedModuleModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatSelectModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatDialogModule,
    MatExpansionModule,
    MatListModule,
    MatSnackBarModule,
    MatRadioModule,
    FlexLayoutModule,
    MatBadgeModule,
    MatProgressBarModule,
    LoadingBarModule,
    // CdkMenuModule
  ],
})
export class AppPublicSidenavModule {}
