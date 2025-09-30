import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { SpiService } from './spi.service';
import { Analog, SpiTypeValues } from './analog.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-spi',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './spi.component.html',
  styleUrl: './spi.component.scss'
})
export class SpiComponent implements OnInit {

  analogIn: WritableSignal<Analog[]> = signal([]);
  analogOut: WritableSignal<Analog[]> = signal([]);
  spiTypes = SpiTypeValues;

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
