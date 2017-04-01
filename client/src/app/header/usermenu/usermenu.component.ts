import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-usermenu',
    templateUrl: './usermenu.component.html',
    styleUrls: ['./usermenu.component.scss']
})
export class UsermenuComponent implements OnInit {
    userActions:string[];
    constructor() { }

    ngOnInit() {
        this.userActions = [`Preferences`,`Log Out`];
    }
}
