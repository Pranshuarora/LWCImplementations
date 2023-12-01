import { LightningElement } from 'lwc';

export default class ToggleDemoDirective extends LightningElement {
    toggleText = false;
    toggleHandler(){
        this.toggleText = !this.toggleText
    }
}