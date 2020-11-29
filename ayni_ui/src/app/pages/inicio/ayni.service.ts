import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlanProduction, Parameters } from './models';

@Injectable({
  providedIn: 'root'
})
export class AyniService {

  url: string = environment.URL_API;

  constructor(private http: HttpClient) {
  }

  calculateAvgSensors(param: Parameters): Observable<PlanProduction> {
    return this.http.get<PlanProduction>(`${this.url}/avgSensors?planting_date=${param.planting_date}&harveting_date=${param.harveting_date}&medium=${param.medium}&seed=${param.seed}&location=${param.location}`);
  }

  generateQRCode(id: number): Observable<Blob> {
    return this.http.get(`${this.url}/qrcode/${id}`, { responseType: 'blob' });
  }

  getAvgSensors(hash: string): Observable<PlanProduction> {
    return this.http.get<PlanProduction>(`${this.url}/production/${hash}`);
  }

}
