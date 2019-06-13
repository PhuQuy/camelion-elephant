import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { SpinnerState } from "./spinner";
import { SpinnerService } from "./spinner.service";
@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"]
})
export class SpinnerComponent implements OnInit {
  show = false;
  private subscription: Subscription;
  constructor(private spinnerService: SpinnerService) {}

  ngOnInit() {
    this.subscription = this.spinnerService.loaderState.subscribe(
      (state: SpinnerState) => {
        this.show = state.show;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
