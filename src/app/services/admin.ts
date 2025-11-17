// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { IStaff } from '../interfaces/staff';

// @Injectable({
//   providedIn: 'root',
// })
// export class Admin {
//   constructor(private httpClient: HttpClient) {}

//   getStaff(): Observable<IStaff[]> {
//     return this.httpClient.get<IStaff[]>('https://jsonplaceholder.typicode.com/users');
//   }
//   createStaff(data: IStaff): Observable<IStaff> {
//     return this.httpClient.post<IStaff>('https://jsonplaceholder.typicode.com/users', data);
//   }
//   editStaff(id: number, data: Partial<IStaff>): Observable<IStaff> {
//     return this.httpClient.patch<IStaff>(`https://jsonplaceholder.typicode.com/users/${id}`, data);
//   }

//   deleteStaff(id: number): Observable<IStaff> {
//     return this.httpClient.delete<IStaff>(`https://jsonplaceholder.typicode.com/users/${id}`);
//   }
// }

//11/9/2025
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { IStaff } from '../interfaces/staff';

// export interface IStaffSignIn {
//   staffId: number;
//   name: string;
//   department: string;
//   signInTime: string;
//   status: 'early' | 'late';
//   deductions?: number;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class Admin {
//   constructor(private httpClient: HttpClient) {}

//   getStaff(): Observable<IStaff[]> {
//     return this.httpClient.get<IStaff[]>('https://jsonplaceholder.typicode.com/users');
//   }

//   createStaff(data: IStaff): Observable<IStaff> {
//     return this.httpClient.post<IStaff>('https://jsonplaceholder.typicode.com/users', data);
//   }

//   editStaff(id: number, data: Partial<IStaff>): Observable<IStaff> {
//     return this.httpClient.patch<IStaff>(`https://jsonplaceholder.typicode.com/users/${id}`, data);
//   }

//   deleteStaff(id: number): Observable<IStaff> {
//     return this.httpClient.delete<IStaff>(`https://jsonplaceholder.typicode.com/users/${id}`);
//   }

//   // --- Sign-In Specific ---
//   private staffSignIns: IStaffSignIn[] = []; // Local dummy storage

//   createSignIn(signIn: IStaffSignIn): Observable<IStaffSignIn> {
//     this.staffSignIns.push(signIn);
//     return of(signIn);
//   }

//   getSignIns(): Observable<IStaffSignIn[]> {
//     return of(this.staffSignIns);
//   }

//   getSignInsByStaff(staffId: number): Observable<IStaffSignIn[]> {
//     return of(this.staffSignIns.filter((s) => s.staffId === staffId));
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IStaff } from '../interfaces/staff';
import { IStaffSignIn } from '../interfaces/staff-signin';

@Injectable({
  providedIn: 'root',
})
export class Admin {
  private signIns: IStaffSignIn[] = []; // local dummy storage for manual sign-ins

  constructor(private httpClient: HttpClient) {}

  getStaff(): Observable<IStaff[]> {
    return this.httpClient.get<IStaff[]>('https://jsonplaceholder.typicode.com/users');
  }

  createStaff(data: IStaff): Observable<IStaff> {
    return this.httpClient.post<IStaff>('https://jsonplaceholder.typicode.com/users', data);
  }

  editStaff(id: number, data: Partial<IStaff>): Observable<IStaff> {
    return this.httpClient.patch<IStaff>(`https://jsonplaceholder.typicode.com/users/${id}`, data);
  }

  deleteStaff(id: number): Observable<IStaff> {
    return this.httpClient.delete<IStaff>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  // -------------------- Manual Sign-In Methods --------------------
  getSignIns(): Observable<IStaffSignIn[]> {
    return of(this.signIns);
  }

  createSignIn(data: IStaffSignIn): Observable<IStaffSignIn> {
    this.signIns.push(data);
    return of(data);
  }
}
