import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import api from 'src/services/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  })

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  handleSubmitLoginForm = async () => {
    this.toastr.success('Login realizado com sucesso!', 'Autenticado!');
    this.router.navigate(['/list-candidates'])
    // const { username, password } = this.loginForm.value;

    // const loginData = {
    //   client_id: 'Rb6yDNb6muY6Wr9iGybl193VzO6BqOuleLGblg14',
    //   client_secret: 'NjsLaIedGub9LC2xAKHIt7kiN4DiSBLolT74w2PYrOu4PPdRxCNqgZDLS1UlqwSQry2HSmRj21MWcOiKOuLq8UtsD0LBic26SxJAEHqf7AaZ5C6sOSG9WrHf3gOzJkmY',
    //   grant_type: 'password',
    //   username,
    //   password,
    // }

    // const loginConfig = {
    //   headers: { 'Content-Type': 'application/json' }
    // }

    // const response = await api.post('/o/token/', loginData, loginConfig)
    // console.log(response);

    // if (username === 'Arthur' && password === '123') {
      // this.toastr.success('Login realizado com sucesso!', 'Autenticado!');
      // this.router.navigate(['/list-candidates'])
    // } else {
    //   alert('usuário ou senha inválido!')
    // }
  }

}
