import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToRecordPages extends NavigationMixin(LightningElement) {

    wayTorecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes:{
                recordId:'0032w00001ItLOGAA3',
                objectApiName:'Contact',
                actionName:'view'
            }
        })

    }
}