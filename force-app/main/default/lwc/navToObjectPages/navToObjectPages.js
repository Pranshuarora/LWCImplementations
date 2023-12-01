import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NavToObjectPages extends LightningElement {
    handleClick(){
        this[NavigationMixin.Navigate]({
            type: 'standard_objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }

        })
    }
}