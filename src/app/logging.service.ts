import { Injectable } from "@angular/core";

//@Injectable()
export class LoggingService {
  constructor(private dateAndTime: boolean) {
    console.log("LoggingService:constructor");
  }
  log(message: any) {
    console.log((this.dateAndTime ? new Date() + ':' : '') + message);
  }
}
