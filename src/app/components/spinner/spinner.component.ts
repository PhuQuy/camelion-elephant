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
    hide;
    scaleUp;
    private subscription: Subscription;
    constructor(private spinnerService: SpinnerService) { }

    ngOnInit() {
        this.subscription = this.spinnerService.loaderState.subscribe(
            (state: SpinnerState) => {
                if (!state.show) {
                    this.hide = true;
                    setTimeout(() => {
                        this.show = state.show;
                    }, 500);
                } else {
                    setTimeout(() => {
                        this.scaleUp = true;
                    }, 100);
                    this.show = state.show;
                }
            }
        );
    }

    ngOnDestroy() {
        this.subscription ? this.subscription.unsubscribe() : null;
    }
}
