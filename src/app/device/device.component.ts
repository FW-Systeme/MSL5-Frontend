import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Device } from './device.interface';
import { DeviceService } from './device.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-device',
  imports: [
    CommonModule
  ],
  templateUrl: './device.component.html',
  styleUrl: './device.component.scss'
})
export class DeviceComponent implements OnInit {

  deviceInfo: WritableSignal<Device | null> = signal(null);

  constructor(
    private deviceService: DeviceService
  ) { }

  async ngOnInit() {
    let device = await this.deviceService.getDeviceData();
    if (device) this.deviceInfo.set(device as Device);
    console.log(this.deviceInfo());
  }

}
