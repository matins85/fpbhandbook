import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppPublicSidenavRoutingModule } from './app-public-sidenav-routing.module';
// modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { PublicSharedModuleModule } from '../public-shared-module/public-shared-module.module';
// import {CdkMenuModule} from '@angular/cdk/menu';
// components
import { CategoryComponent } from '../category/category.component';
import { ContentComponent } from '../content/content.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IosInstallComponent } from '../ios-install/ios-install.component';
import { SubCategoryComponent } from '../sub-category/sub-category.component';
import { AppPublicSidenavComponent } from './app-public-sidenav.component';
@NgModule({
  declarations: [
    // components  // components which has route and chart comes here....while components which do not goes to public-shared-module
    AppPublicSidenavComponent,
    DashboardComponent,
    CategoryComponent,
    SubCategoryComponent,
    ContentComponent,
    IosInstallComponent,
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
