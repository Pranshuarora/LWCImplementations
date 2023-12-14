import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToRecordRelationshipPage extends NavigationMixin(LightningElement) {

    NavigateToRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes:{
                recordId:'0012w00001aALaGAAW',
                objectApiName:'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        })

    }
}