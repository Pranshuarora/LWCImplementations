import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import Account_object from '@salesforce/schema/Account'

export default class GetObjectInfoDemo extends LightningElement {
    defaultRecordTypeId
    @wire(getObjectInfo, { objectApiName: Account_object})
    objectInfo({data, error}){
        if(data){
            console.log(data)
            this.defaultRecordTypeId = data.defaultRecordTypeId
        }
        if(error){
            console.error(error)
        }
    }
}