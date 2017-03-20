import {Component} from "angular2/core"
 
@Component({
    selector: "simple-component",
    template: `
 
<h1>Hallo Angular 2!</h1>
 
 
<div>
            <label [hidden]="!isCalling">name: {{name}}.</label>
 
<div>
                <input [(ngModel)]="name" />
                <button (click)="toggleCalling()">toggle Calling</button>
 
<div>
        </div>
 
        `
})
export class SimpleComponent {
    private name = "da";
    private isCalling = true;
 
    private toggleCalling() {
        this.isCalling = !this.isCalling;
    }
}