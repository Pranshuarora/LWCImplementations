import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/DataController.getContactList';

export default class PaginationDemo extends LightningElement {
    totalContacts; 
    visibleContacts;

    @wire(getContactList)
    wiredContact({ error, data }) {
        if (data) {
            // Ensure that data is iterable before assigning to totalContacts
            if (Array.isArray(data)) {
                this.totalContacts = data;
                console.log(this.totalContacts);
            } else {
                console.error('Data is not an array:', data);
            }
        }
        if (error) {
            console.error(error);
        }
    } 
    updateContacthandler(event){
        this.visibleContacts = [...event.detail.records]
        console.log(event.detail.records)

    }
}
