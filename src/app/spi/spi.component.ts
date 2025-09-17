import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { SpiService } from './spi.service';
import { Analog } from './analog.interface';

@Component({
  selector: 'app-spi',
  imports: [],
  templateUrl: './spi.component.html',
  styleUrl: './spi.component.scss'
})
export class SpiComponent implements OnInit {

  analogIn: WritableSignal<Analog | {}> = signal({});
  analogOut: WritableSignal<Analog | {}> = signal({});

  constructor(
    private spiService: SpiService
  ) {}

  async ngOnInit() {
    const analogInData = await this.spiService.getAnalogIn();
    this.analogIn.set(analogInData);
    const analogOutData = await this.spiService.getAnalogOut();
    this.analogOut.set(analogOutData);
    console.log("retreived analog data", analogInData, analogOutData);
  }

}
