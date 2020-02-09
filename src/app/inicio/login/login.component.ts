import { InicioService } from './../../services/inicio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inicio } from '../../models/inicio';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { HomeService } from '../../home/home.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any;
  palavra: any;
  registerForm: FormGroup;
    submitted = false;
    username:any;
    resposta: any;
    encrypted: any;

  constructor(
    private formBuilder: FormBuilder,
    public InicioService: InicioService,
    public router: Router,
    private HomeService: HomeService,
    private cookieService: CookieService
  ) { this.data = new Inicio(); }

  ngOnInit() {
    this.logado();
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
  }, 
  );
  }

  get f() { return this.registerForm.controls; }


  login(){

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
    this.InicioService.login(this.data).subscribe((response) => { 
      //localStorage.setItem('access_token', 'nenhum_no_momento'),
      console.log(response);
      
      if(response){
        localStorage.setItem('username', response.username),
        localStorage.setItem('email', response.email),
        localStorage.setItem('uid', response.uid),
        localStorage.setItem('picture', response.picture),
      this.InicioService.starttoken(response.uid, response.username, response.email).subscribe((resposta) => {

        // this.encrypted = this.HomeService.set('testelambari', resposta.token);
        this.cookieService.set('token', resposta.token);
        console.log(resposta.token);
         
        
        document.location.reload(true);
        this.router.navigate(['']);
      });
      this.router.navigate(['']);
      }
      
      

     
    
    },(err:HttpErrorResponse)=>{
      this.resposta = 'tem tem';
      console.log('erro')
    });

  }
 
  irregistre(){
    this.router.navigate(['login/register']);
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
