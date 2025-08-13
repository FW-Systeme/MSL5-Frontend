import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { GpioService } from './gpio.service';
import { GPIOResponse } from './gpio.interface';

@Component({
  selector: 'app-gpio',
  standalone: true,
  imports: [],
  templateUrl: './gpio.component.html',
  styleUrl: './gpio.component.scss'
})
export class GpioComponent implements OnInit{

  gpioResponse: WritableSignal<GPIOResponse | {}> = signal({});

  constructor(protected gpioService: GpioService) {}

  async ngOnInit() {
      let gpioResponse = await this.gpioService.getGPIOData();
      this.gpioResponse.set(gpioResponse);
  }
}
