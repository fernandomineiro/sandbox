import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  public geticons(){
    return this.httpClient.get('https://api.coingecko.com/api/v3/coins/list');
  }
  public getpostsmensal(){
    return this.httpClient.get('https://sandbox.wavesreport.com/social/api/top?cid=5&term=monthly');
  }

  public getpostsemanal(){
    return this.httpClient.get('https://sandbox.wavesreport.com/social/api/top?cid=5&term=weekly');
  }
  public moedas(){
    return this.httpClient.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
  }
    


}
