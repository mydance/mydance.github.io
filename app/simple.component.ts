import {Component} from "angular2/core";
import {Http} from "angular2/http";
 
@Component({
    selector: "simple-component",
    templateUrl: './templates/simple.component.html',
})
export class SimpleComponent {
    private club = "da";
    private nickname = true;
    private data;
     
    constructor(private http: Http) {
      http.get('http://itpointlab.cafe24.com/mydance/playlist')
        .map(res => res.json())
        .subscribe(data => this.data = data,
                    err => console.log(err),
                    () => this.update());
    }
    
    update(){
        this.club = this.data.info.club;
        console.log('Completed');
    }
}