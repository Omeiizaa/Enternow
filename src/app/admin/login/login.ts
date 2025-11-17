import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit {
  constructor(private fb: FormBuilder) {}
  adminSigninForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.adminSigninForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      adminPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  // submitForm() {
  //   console.log(this.adminSigninForm.value);
  // }
  submitForm() {
    if (this.adminSigninForm.valid) {
      const adminEmail = this.adminSigninForm.value.email;
      sessionStorage.setItem('adminName', adminEmail); // or extract real name later
      //this.router.navigate(['/home/dashboard']); // navigate after login
    }
  }
}
