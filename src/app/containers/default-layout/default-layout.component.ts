
import { InicioService } from './../../services/inicio.service';
import {Component, OnInit  } from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { Inicio } from '../../models/inicio';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  data:any;
  resultadogeral: any[] =[];
  tamanho:any;
  nome: any;
  foto: any;
  constructor( 
    public router: Router,
    public InicioService: InicioService,
  ) {
    this.data = new Inicio();
  } 

  ngOnInit() {
this.notificacao();
this.nome = localStorage.getItem('username');
this.foto = localStorage.getItem('picture');
console.log(this.foto);
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  exit() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
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
}
