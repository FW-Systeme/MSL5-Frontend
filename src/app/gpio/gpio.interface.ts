export interface GPIOResponse {
  meters: number[];
  analogInputs: number[];
  analogOutputs: number[];
  digitalInputs: boolean[];
  digitalOutputs: boolean[];
}