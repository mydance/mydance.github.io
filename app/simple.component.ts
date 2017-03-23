import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Component} from "angular2/core";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

class Song  {
    public album;
    public artist;
    public title;
    public tracknumber;
    public length;
    public genere;
    public date;
    public bitrate;
    public codec;
}
    
@Component({
    selector: "simple-component",
    templateUrl: './templates/simple.component.html',
    providers: [],
})
export class SimpleComponent {
    
    interval = 2000;
    club = "da";
    nickname;
    data;
    http;
    list:Object[] = [];
    now:Song;
    
    constructor(http:Http) {
        console.log(http);
        this.http = http;
        this.getData();
        this.now = new Song();
        
        Observable
            .interval(this.interval)
            .subscribe(() =>this.getData());
    }
    
    getData(){
        this.data = this.http.get('https://itpointlab.cafe24.com/mydance/playlist')
            .map(res => res.json())
            .subscribe(data => this.data = data,
                        err => console.log(err),
                        () => this.update());
    }
    
    update(){
        this.club = this.data.info.club;
        this.nickname = this.data.info.nickname;
        for (let i = 0; i < this.data.list.length; i++) {
            this.data.list[i].length = this.prettyTime(this.data.list[i].length);
        }
        this.now = this.data.list[0];
        this.list = this.data.list.slice(1,this.data.list.length);
    }
    
    prettyTime(sec){
        var date = new Date(null);
        date.setSeconds(sec); // specify value for SECONDS here
        return date.toISOString().substr(14, 5);
    }
    
}