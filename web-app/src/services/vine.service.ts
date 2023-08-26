import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Vine } from 'src/app/vine/vine.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VineService {

  private privateApiUrl = '';

  constructor(private http: HttpClient) { }

  public getVines(): Observable<Vine[]> {
    return this.http.get<Vine[]>(`${this.privateApiUrl}/vines/all`);
  }

  // TODO: 
  // createSingle
  // createBulk
  // updateSingle
  // updateBulk
  // deleteSingle
  // deleteBulk
}
