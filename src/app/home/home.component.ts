import { Component, OnInit } from "@angular/core";
import { States } from "../shared/constants";
import { CookieService } from "ngx-cookie";

@Component({
  selector: "lpg-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  states = [];
  selectedStates = [];

  constructor(public cookieService: CookieService) {}

  ngOnInit() {
    this.states = States;
    const cookievalue = this.getCookie("statelist");
    if (cookievalue !== undefined) {
      this.selectedStates = this.getCookie("statelist");
    }
  }

  getCookie(key: string): any {
    const a = this.cookieService.getObject(key);
    console.log("getcookie");
    console.log(a);
    return a;
  }

  setCookie(key: string, value: string[]) {
    this.cookieService.putObject(key, value);
  }

  listClick(event, newValue) {
    console.log(newValue);
    this.addorremoveState(newValue);

    // don't forget to update the model here
    // ... do other stuff here ...
  }

  private addorremoveState(state: string) {
    if (this.isInSelectedList(state)) {
      this.selectedStates = this.selectedStates.filter(item => item !== state);
    } else {
      this.selectedStates.push(state);
    }
    console.log(this.selectedStates);
    this.setCookie("statelist", this.selectedStates);
  }

  public isInSelectedList(item: string): boolean {
    const found = this.selectedStates.find(function(element) {
      return element === item;
    });

    // console.log(found);

    return found !== undefined;
  }
}
