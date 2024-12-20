import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProfileComponent } from './container/profile/profile.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { ReportsComponent } from './container/reports/reports.component';
import { CategoryManagementComponent } from './container/category-management/category-management.component';
import { DocumentVerifierComponent } from './container/document-verifier/document-verifier.component';
import { ChangePasswordComponent } from './container/change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCharacteristicsComponent } from './container/product-characteristics/product-characteristics.component';
import { ProductCharacteristicsModalComponent } from './container/modals/product-characteristics-modal/product-characteristics-modal.component';
import { TypeDocumentComponent } from './container/type-document/type-document.component';
import { CategoriesModalComponent } from './container/modals/categories-modal/categories-modal.component';
import { TypeDocumentModalComponent } from './container/modals/typedocument-modal/typedocument-modal.component'; 


@NgModule({
  declarations: [
    ProfileComponent,
    DashboardComponent,
    ReportsComponent,
    CategoryManagementComponent,
    DocumentVerifierComponent,
    ChangePasswordComponent,
    ProductCharacteristicsComponent,
    ProductCharacteristicsModalComponent,
    TypeDocumentComponent,
    CategoriesModalComponent,
    TypeDocumentModalComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
