import { LightningElement } from 'lwc';

export default class DirectiveFalseTemplate extends LightningElement {
    hideText = false;
    hideHandler(){
        this.hideText = true
    }
    
}



/* if it is in form object */
// hideText = {
//     return:false
// }
// hideHandler(){
//     this.hideText = {...this.hideText, "result":true};
// }