import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AppService } from '../app.service';
import { Analog } from './analog.interface';

@Injectable({
  providedIn: 'root'
})
export class SpiService {
  
  constructor(
    private http: HttpClient,
    private appService: AppService,
  ) {}

  async getAnalogIn() {
    return firstValueFrom(this.http.get<Analog[]>(this.appService.backendURL()+"spi/analog-in"));
  }

  async getAnalogOut() {
    return firstValueFrom(this.http.get<Analog[]>(this.appService.backendURL()+"spi/analog-out"));
  }

}
