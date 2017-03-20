import {Component} from "angular2/core"
 
@Component({
    selector: "simple-component",
    templateUrl: './templates/simple.component.html',
})
export class SimpleComponent {
    private name = "da";
    private isCalling = true;
 
    private toggleCalling() {
        this.isCalling = !this.isCalling;
    }
}