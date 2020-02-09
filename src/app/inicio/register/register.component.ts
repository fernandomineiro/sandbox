import { InicioService } from './../../services/inicio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inicio } from '../../models/inicio';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MustMatch } from '../../helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
data:any;
registerForm: FormGroup;
submitted = false;
resposta: any;
  constructor(
    public InicioService: InicioService,
    public router: Router,
    private formBuilder: FormBuilder
  ) { this.data = new Inicio();}

  ngOnInit() {
    this.logado();
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  get f() { return this.registerForm.controls; }

  create(){

    this.submitted = true;

        // stop here if form is invalid
    if (this.registerForm.invalid) {
        console.log('pare!');
    }
    else{
      this.InicioService.register(this.data).subscribe((response) => {
        this.resposta = 'Cadastro feito com sucesso! Eespere por favor...';
        setTimeout(function() {
          window.location.href = "https://sandbox.wavesreport.com/#/login";
      }, 2000);
      },(err:HttpErrorResponse)=>{
        this.resposta = 'Erro! A base de dados já possui esse cadastro!';
        console.log('erro')
      });
    }

  }

  logado(){
    let authToken = localStorage.getItem('access_token');
    if(authToken != null){
      this.router.navigate(['']);
    }
  }
  direciona(){
    this.router.navigate(['']);
  }
}
