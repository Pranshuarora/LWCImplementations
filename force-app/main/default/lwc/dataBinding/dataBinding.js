import { LightningElement } from 'lwc';
// for two way data binding you need to use @track decorater
export default class DataBinding extends LightningElement {
    
    fullname = "Pranshu Arora"                                  // for one way only this can work alone           

    title = "Salesforce Developer"                       // for two way
    changeHandler(event){
        // to access into the function use "this" to access the property
        this.title = event.target.value                          // here event is a object that has many features ( here we are fetching input value )
    }
}
