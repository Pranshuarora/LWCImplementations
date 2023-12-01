import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import Account_object from '@salesforce/schema/Account'

export default class GetPicklistValuesByRecordTypeDemo extends LightningElement {
    picklisvalue
    @wire(getObjectInfo, {objectApiName: Account_object})
    objectInfo

    @wire(getPicklistValuesByRecordType, {objectApiName: Account_object, recordTypeId: '$objectInfo.data.defaultRecordTypeId'})

    accountPicklists({data,error}){
        if(data){
            console.log(data)
            this.ShippingGeocodeAccuracy  = data.picklistFieldValues.ShippingGeocodeAccuracy
        }
        if(error){
            console.error(error)
        }
    }

    handleChange(event){
        this.picklisvalue = event.detail.value;
    }
} 