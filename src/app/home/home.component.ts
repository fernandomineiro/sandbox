import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { InicioService } from './../services/inicio.service';
import {CookieService} from 'ngx-cookie-service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  link: any;
  resultado: any;
  resultados: any;
  auxd: any[] =[];
  auxs: any[] =[];
  mensagemdia: any;
  finald:any;
  finals: any;
  mo:any[] =[];
  coin: any[] =[];
  nome: any;
  foto: any;
  tamanho: any;
  resultadogeral: any;
  cookieValue:any ="";
  private cookievalue: string;


  constructor(private HomeService: HomeService,
    public router: Router,
    public InicioService: InicioService,
    private CookieService: CookieService
    ) { }

  ngOnInit() :void{
    
    this.link = this.token1();
    this.nome = localStorage.getItem('username');
this.foto = localStorage.getItem('picture');
    this.semanal();
    this.mensal();
    this.moedas();

    var encrypted = this.HomeService.set('testelambari', 'fernando');
    var decrypted = this.HomeService.get('testelambari', encrypted);
   
    console.log('Encrypted :' + encrypted);
    console.log('Encrypted :' + decrypted);
   
  }

  semanal(){
    this.HomeService.getpostsemanal().subscribe((data)=>{
      
      this.resultados = data['topics'].sort((a, b)=>{
        return a.upvotes - b.upvotes - a.downvotes - b.downvotes;
      }).reverse();

      for (var i = 0; i <= 2; i++) {
        if(this.resultados[i] == null || this.resultados[i] == 0){
          break;
        }
        else{
          
          this.finals = this.resultados[i]['upvotes'] - this.resultados[i]['downvotes'];
          if(this.finals> 0){
            this.resultados[i]['title'] = this.resultados[i]['title'].substring(0, 76);

          this.auxd.push(this.resultados[i]);
        }
        }
      }

      //this.auxs.push(this.resultados[0], this.resultados[1],this.resultados[2]);
      console.log(this.auxd);
    });
  }

  mensal(){
    this.HomeService.getpostsmensal().subscribe((data)=>{
      
      this.resultados = data['topics'].sort((a, b)=>{
        return a.upvotes - b.upvotes - a.downvotes - b.downvotes;
      }).reverse();

      for (var i = 0; i <= 2; i++) {
        if(this.resultados[i] == null || this.resultados[i] == 0){
          break;
        }
        else{
          
          this.finals = this.resultados[i]['upvotes'] - this.resultados[i]['downvotes'];
          if(this.finals> 0){
            this.resultados[i]['title'] = this.resultados[i]['title'].substring(0, 76);

          this.auxs.push(this.resultados[i]);
        }
        }
      }

      //this.auxs.push(this.resultados[0], this.resultados[1],this.resultados[2]);
      console.log(this.auxs);
    });
  }

  moedas(){
    this.HomeService.moedas().subscribe((data)=>{
      
     // for(var i = 0; i<= 2; i++){
        //this.mo.push(this.coin[i]);
      //}
      this.coin.push(data[0], data[1],data[2]);
      console.log(data);
      
    });
  }

  exit() {
    let removeToken = localStorage.removeItem('token');
    
    if (removeToken == null) {
      document.location.reload(true);
    }
  }

  notificacao(){
    this.InicioService.notificacao().subscribe((response) => {
      console.log(response); 
      this.tamanho = response.notifications.length;
      for(var i = 0; i < this.tamanho; i++){
        this.resultadogeral.push(response.notifications[i]);
      }
    });
  } 

  token1(){
    return localStorage.getItem('token')
  }

  direciona(){
    this.router.navigate(['']);
  }
 

}
