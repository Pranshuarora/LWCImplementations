import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import Account_Object from '@salesforce/schema/Account'

export default class GetListUiDemo extends LightningElement {
    accResult

    @wire(getListUi, {
        objectApiName: Account_Object,
        listViewApiName: 'AllAccounts',
    })wiredListView({error, data}){
        if(data){
            console.log(data)
            this.accResult = data.records.records;
        }
    }
}