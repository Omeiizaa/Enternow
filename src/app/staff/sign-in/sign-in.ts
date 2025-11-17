import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn implements OnInit {
  constructor(private fb: FormBuilder) {}
  signinForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }
  companyName: string = 'EnterNow inc';
  showName: boolean = true;
  cars: string[] = ['Volvo', 'Mercedes', 'Audi'];
  userCase: string = 'staff';
  buildForm() {
    this.signinForm = this.fb.group({
      staffId: ['exampleStaffId', [Validators.required]],
      password: ['examplePassword', [Validators.required, Validators.minLength(8)]],
    });
  }
  submitForm() {
    console.log(this.signinForm.value);
  }
}
