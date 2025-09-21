import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { Device } from './device.interface';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(
    private http: HttpClient,
    private appService: AppService
  ) { }

  async getDeviceData() {
    return firstValueFrom(this.http.get<Device>(this.appService.backendURL() + 'device'));
  }
}
