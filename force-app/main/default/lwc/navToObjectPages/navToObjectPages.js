import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NavToObjectPages extends NavigationMixin(LightningElement) {
    handleClick(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }

    navigateToNewContactWithDefault(){

        // whemever you pass a default values you need to encode it just for security

        const defaultValues = encodeDefaultFieldValues({
            FirstName: 'Pranshu',
            LastName: 'At Salesforce',
            LeadSource: 'Others'
        })

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName: 'new'
            },
            state:{
                defaultFieldValues: defaultValues
            }
        })
    }

    navigateToList(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName: 'list'
            },
            state:{
                filterName: 'Recent'
            }
        })

    }

}