import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Device } from './device.interface';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-device',
  imports: [],
  templateUrl: './device.component.html',
  styleUrl: './device.component.scss'
})
export class DeviceComponent implements OnInit {

  device: WritableSignal<Device | null> = signal(null);

  constructor(
    private deviceService: DeviceService
  ) { }

  async ngOnInit() {
    let device = await this.deviceService.getDeviceData();
    if (device) this.device.set(device as Device);
    console.log(this.device());
  }

}
