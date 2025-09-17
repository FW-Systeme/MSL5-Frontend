export interface Device {
  Bus: number;
  Chip: number;
}

export interface Entry {
  id: number;
  analog: number;
  Number: number;
  AnalogValue: number;
  Factor: number;
  Value: number;
  LowerBound: number;
  UpperBound: number;
  Type: SpiType;
  IsLogging: boolean;
}

export interface Analog {
  id: number;
  Type: string;
  Device: Device;
  Entries: Entry[];
  AnalogType: "IN" | "OUT";
  createdAt: Date;
}

export type SpiType = "0-10V" | "0.4-2V" | "0-20mA" | "4-20mA";