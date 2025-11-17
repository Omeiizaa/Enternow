import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignOut } from './sign-out/sign-out';
import { SignIn } from './sign-in/sign-in';
import { FaceCapture } from './face-capture/face-capture';

const routes: Routes = [
  {
    path: 'face-capture',
    component: FaceCapture,
  },
  {
    path: 'sign-in',
    component: SignIn,
  },
  {
    path: 'sign-out',
    component: SignOut,
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
