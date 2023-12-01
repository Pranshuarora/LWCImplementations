import { LightningElement } from 'lwc';

export default class GetterDemo extends LightningElement {
    title = "Power Of Getter"                                    // global title
    selectedBtn = "OFF"                                         // bydefault we kept it off
    get getTitle(){
        return this.title.toUpperCase();                        // changes made here wont impact the original one
    }

    get boxStatus(){
        // return `box ${this.selectedBtn === 'ON' ? 'green':'red'}`
        return this.selectedBtn === "ON" ? "box green" : "box red";                 // if it is on then green or else red
    }
    clickHandler(event){
        console.log(event.currentTarget.innerText);                                 // get the inner text of the component where onclick in happening
        this.selectedBtn = event.currentTarget.innerText;                           // change the selectedBtn value to the value after click and vise versa
    }
}