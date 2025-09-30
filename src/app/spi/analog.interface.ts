export interface Device {
  Bus: number;
  Chip: number;
}

export interface Value {
  val: number;
  time: number;
}

export interface Analog {
  _id?: string;
  name: string;
  device: Device;
  type: string;
  analogType: "IN" | "OUT";
  values: Value[];
  createdAt: Date;
  number: number;
  spiType: SpiType;
  unit: string;
  isLogging: boolean;
  lowerBound: number;
  upperBound: number;
  factor: number;
}

export type SpiType = "0-10V" | "0.4-2V" | "0-20mA" | "4-20mA";

export const SpiTypeValues: SpiType[] = ["0-10V", "0.4-2V", "0-20mA", "4-20mA"];