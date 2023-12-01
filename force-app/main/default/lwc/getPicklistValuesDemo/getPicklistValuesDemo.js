import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import Account_Object from '@salesforce/schema/Case.Account';
import Industry_Field from '@salesforce/schema/Account.Industry'

export default class GetPicklistValuesDemo extends LightningElement {

    @wire( getObjectInfo, { objectApiName: Account_Object})
    objectInfo                      // with this we can use its value

    @wire(getPicklistValues, {recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: Industry_Field})
    IndustryPicklistValues

    handleChnage(event){
        this.picklistvalue = event.target.value;
    }
}