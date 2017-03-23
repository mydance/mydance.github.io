import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Component} from "angular2/core";
import 'rxjs/add/operator/map';

@Component({
    selector: "simple-component",
    templateUrl: './templates/simple.component.html',
    providers: [],
})
export class SimpleComponent {
    private club = "da";
    private nickname = true;
    private data;
    
    constructor(http:Http) {
        console.log(http);
        
        this.data = http.get('https://itpointlab.cafe24.com/mydance/playlist')
            .map(res => res.json())
            .subscribe(data => this.data = data,
                        err => console.log(err),
                        () => this.update());
    }
    
    private toggleCalling(){
        
    }
    
    update(){
        this.club = this.data.info.club;
        console.log('Completed');
    }
}