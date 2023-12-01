import { LightningElement } from 'lwc';

export default class DirectiveTrueTemplate extends LightningElement {
    showText = false;
    showHandler(){
        this.showText = true;
    }
}