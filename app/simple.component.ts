import {Component} from "angular2/core"
 
@Component({
    selector: "simple-component",
    template: `
 <link rel="stylesheet" type="text/css"
href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css">


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.js"></script>
<div class="ui container">
<h1>Hallo Angular 2!</h1>
 
 
<div>
            <label [hidden]="!isCalling">name: {{name}}.</label>
 
<div>
                <input [(ngModel)]="name" />
                <button (click)="toggleCalling()" class="ui button">toggle Calling</button>
 
<div>
        </div>
        
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