import { Component , Input} from '@angular/core';
import { AppEvent } from './app.eventModel';

@Component({
    selector : 'app-event-thumbnail',
        template : `
<div *ngIf ="mouseoverText && mouseoverText.length" [ngStyle]="inputObj.angStyle">
Mouse hovered on {{mouseoverText}}
</div>
<hr>

    <div *ngFor="let event1 of inputObj.events; let i = index" [demo-attr] = "attrVar >= 10 ?'dirSucessClass' :'dirFailClass' ">
    <div [ngStyle]="inputObj.angStyle">
    <div [ngClass] ="inputObj.angClass">
      Event : {{i+1}}.
    </div>
    <div [ngClass] ="inputObj.angClass" (mouseover) ="callOnMouseOver(event1.name)">
    Name: {{event1.name}}
    </div>
    <div [ngClass] ="inputObj.angClass">
    Date: {{event1.date}}
    </div>
    
    <div [ngClass] ="inputObj.angClass" [demo-attr]= "attrVar >= 10 ?'dirSucessClass' :'dirFailClass'">
    Time: {{event1.time}}
    </div>
    
    <div [ngClass] ="inputObj.angClass" [demo-attr]= 'dirFailClass'>
    Venue: {{event1.venue}}
    </div>

    </div>
    <hr>
    </div>

        `
//// <div [ngClass] ="inputObj.angClass" demo-attr demo-attr-class= 'dirSucessClass' >
//<div [ngClass] ="inputObj.angClass" demo-attr demo-attr-class= 'dirFailClass' >
})
export class EventThumbnailComponent {
    @Input() inputObj: any;
    mouseoverText: string;
    thumbnailStr = 'Namaste kaka!!';
    attrVar = 10;

    callOnMouseOver = (name: string) => {
        this.mouseoverText = name.toUpperCase();
    }

    demoReferenceVariable = () => {
        return 'Method called here is demoReferenceVariable';
    }
}
