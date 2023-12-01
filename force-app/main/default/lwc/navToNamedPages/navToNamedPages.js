import { LightningElement } from 'lwc';

// module/package for navigation and it is a higer order function where the old component ( in our case LightningElement) need to be wrap under it. which gives extra power to it.
import { NavigationMixin } from 'lightning/navigation';

export default class NavToNamedPages extends NavigationMixin(LightningElement) {
    
    nvigateToChatter(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes:{
                pageName:'chatter'
            }

        })
    }
}