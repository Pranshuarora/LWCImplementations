import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToItemPage extends NavigationMixin(LightningElement) {

    NavigateToItemPage(){
        this[NavigationMixin.Navigate]({
            type:"standard__navItemPage",
            attributes:{
                apiName: "Softude_Home"
            }

        })
    }
}