import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';


@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  resultado: any;
  resultados: any;
  auxd: any[] =[];
  auxs: any[] =[];
  mensagemdia: any;
  finald:any;
  finals: any;
  mo:any[] =[];
  coin: any[] =[];
  
  constructor(private dashboardService: DashboardService) { }
  ngOnInit() {
    this.moedas(); 
    this.dashboardService.getpostsemanal().subscribe((data)=>{
      
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
      console.log(this.auxs);
    });

    this.dashboardService.getpostsmensal().subscribe((data)=>{
      
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
    this.dashboardService.moedas().subscribe((data)=>{
      
     // for(var i = 0; i<= 2; i++){
        //this.mo.push(this.coin[i]);
      //}
      this.coin.push(data[0], data[1],data[2]);
      console.log(data);
      
    });
  }

  
}
