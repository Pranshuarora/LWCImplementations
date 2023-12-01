import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/refreshContactController.getContactList';

const columns = [
    {label:'First Name', fieldName:'FirstName', editable:true},
    {label:'Last Name', fieldName:'LastName', editable:true},
    {label:'Email', fieldName:'Email', type:'email'},
    
]

export default class RefreshDemoLWC extends LightningElement {
    columns = columns
    draftValues = []

    @wire(getContactList)
    Contact;

    // get isContactAvailable(){
    //     console.log(this.Contact)
    //     return this.Contact && this.Contact.length>0 ? 'Yes' : 'No'
    // }

    handleSave(event){
        console.log(event.detail.draftValues)
        // slice is an immutable does not impact the original and create the copy 
        const recordInputs = event.detail.draftValues.slice().map(draft => {
            const fields = Object.assign({}, draft)
            return {fields};
        }) 
        console.log("recordInputs : ", recordInputs)


        const promise = recordInputs.map(recordInputs => updateRecord(recordInputs))
        Promise.all(promises).then(result => {
            this.showToastMsg('Sucess', 'Contacts updated')
            this.draftValues=[]
            return refreshApex(this.Contact)
        }).catch(error=> {
            this.showToastMsg('Error creating record', error.body.message, error)
        })
    }
        showToastMsg(title, message, variant){
            this.dispatchEvent(
                new showToastEvent({
                    title:title,
                    message:message,
                    variant:variant || 'Success'
                })
            )
        }

    }