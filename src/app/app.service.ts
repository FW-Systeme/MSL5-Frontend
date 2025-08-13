import { Injectable, OnInit, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public backendURL: WritableSignal<string> = signal("");

  constructor() { 
    let baseURI = document.baseURI;
    console.log(baseURI, baseURI.split(":"))
    if (baseURI.split(":").length === 3) {
      baseURI = baseURI.split(":")[0] + ":" + baseURI.split(":")[1] + ":8080/";
    }
    this.backendURL.set(baseURI);
  }

}
