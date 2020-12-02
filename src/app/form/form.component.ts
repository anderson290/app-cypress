import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  options: any[] = [
    {
      text: 'a or b',
      value: '!'
    },
    {
      text: 'c or d',
      value: '@'
    },
    {
      text: 'e or f',
      value: '#'
    },
    {
      text: 'g or h',
      value: '$'
    },
    {
      text: 'i or j',
      value: '%'
    },
  ];

  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.formLoad();
  }

  formLoad() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      date: ['', Validators.required],
      password: ['',  [Validators.maxLength(6), Validators.required]]
    });
  }

  setPasswordValue(value) {
    let formValue = this.form.get('password').value;
    if (formValue.length < 6) {
      formValue = formValue + value;
      this.form.get('password').patchValue(formValue);
    }
  }

  removePasswordValue() {
    const password = this.form.get('password').value;
    password.slice(0, password.length - 1);
    this.form.get('password').patchValue(password.slice(0, password.length - 1))
  }

  sendForm() {
    const password = this.form.get('password').value;
    if (this.form.valid) {
      this.userService.setUserData(this.form.value);
      this.router.navigate(['/data']);
    }
  }

}
