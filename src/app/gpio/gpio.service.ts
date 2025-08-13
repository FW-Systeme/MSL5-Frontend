import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AppService } from '../app.service';
import { GPIOResponse } from './gpio.interface';

@Injectable({
  providedIn: 'root'
})
export class GpioService {

  constructor(
    private appService: AppService,
    private http: HttpClient
  ) { }

  async getGPIOData() {
    return firstValueFrom(this.http.get<GPIOResponse>(`${this.appService.backendURL()}ioctrl/spi/get`));
  }

}
