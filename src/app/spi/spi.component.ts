import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { SpiService } from './spi.service';
import { Analog } from './analog.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spi',
  imports: [
    CommonModule
  ],
  templateUrl: './spi.component.html',
  styleUrl: './spi.component.scss'
})
export class SpiComponent implements OnInit {

  analogIn: WritableSignal<Analog | null> = signal(null);
  analogOut: WritableSignal<Analog | null> = signal(null);

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
