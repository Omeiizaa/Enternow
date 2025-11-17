// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// // ROUTING
// import { AdminRoutingModule } from './admin-routing-module';

// // LAYOUT PAGES
// import { AdminLayout } from './layout/admin-layout/admin-layout';
// import { AdminHeader } from './layout/admin-header/admin-header';
// import { AdminSideNav } from './layout/admin-side-nav/admin-side-nav';

// // PAGES
// import { Dashboard } from './dashboard/dashboard';
// import { SignIn } from './sign-ins/sign-in';
// import { Staff } from './staff/staff';
// import { Reports } from './reports/reports';
// import { Login } from './login/login';

// // MATERIAL MODULE
// import { MaterialModule } from '../material/material-module';

// // ✅ IMPORT PIPE HERE
// import { MapDepartmentsPipe } from './dashboard/map-departments.pipe';

// @NgModule({
//   declarations: [
//     AdminLayout,
//     AdminHeader,
//     AdminSideNav,
//     Dashboard,
//     SignIn,
//     Staff,
//     Reports,
//     Login,
//     //MapDepartmentsPipe,   // ✅ JUST ADD IT HERE
//   ],
//   imports: [
//     CommonModule,
//     AdminRoutingModule,
//     FormsModule,
//     ReactiveFormsModule,
//     MaterialModule,
//   ],
// })
// export class AdminModule {}

11 / 9 / 2025;

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { AdminRoutingModule } from './admin-routing-module';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

// Layout Components
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { AdminHeader } from './layout/admin-header/admin-header';
import { AdminSideNav } from './layout/admin-side-nav/admin-side-nav';

// Pages
import { Dashboard } from './dashboard/dashboard';
import { SignIn } from './sign-ins/sign-in';
import { Staff } from './staff/staff';
import { Reports } from './reports/reports';
import { Login } from './login/login';
import { MaterialModule } from '../material/material-module';

@NgModule({
  declarations: [AdminLayout, AdminHeader, AdminSideNav, Dashboard, SignIn, Staff, Reports, Login],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,

    // Angular Material
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
  ],
})
export class AdminModule {}
