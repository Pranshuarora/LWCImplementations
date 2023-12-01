import { LightningElement } from 'lwc';

export default class TemplateOnChangeEvent extends LightningElement {
    inputText = null;

    get checkText(){
        return this.inputText === "Salesforce"
    }
    changeHandler(event){
        this.inputText = event.target.value
    }
}