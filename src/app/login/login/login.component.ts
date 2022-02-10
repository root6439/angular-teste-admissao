import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioAutenticado } from 'src/app/shared/models/UsuarioAutenticado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  login(): void {
    let username: string = this.formLogin.controls['username'].value;
    let pass: string = this.formLogin.controls['pass'].value;
    this.loginService
      .login(username, pass)
      .subscribe((resp: UsuarioAutenticado) => {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('isAdmin', JSON.stringify(resp.administrador));
        this.loginService.actualUser = resp;

        this.router.navigate(['/home']);
      });
  }
}
