import { LightningElement, wire } from 'lwc';
import getSobjectValue from '@salesforce/apex';

import getAccountList from '@salesforce/apex/accountController.getAccountList'
import getAccountById from '@salesforce/apex/accountController.getAccountById'
import getContactList from '@salesforce/apex/accountController.getContactList' 


import NAME_FIELD from '@salesforce/schema/Account.Name'

export default class ApexDemoLWC extends LightningElement {
    results
    contacts

    // 4.  import object and fields from @salesforce/schema and used with apex methods
    get name(){
        return this.wireAccounts.data ? getSobjectValue(this.wireAccounts.data[0], NAME_FIELD) : '';
    }

    // 1. wire a property
    @wire(getAccountById, { accId:'0012w000016qJsHAAU'})
    wireAccounts
 

    // 2. wire as a function  ( use any one )

    @wire(getAccountList)
    // Accounts                         // property

    //function
    accounts({data, error}){
        if(data){
            this.results = data;
        }
        if(error){
            console.error(error)
        }

    }

    // 3. Imperative approach
    handleLoad(){
        getContactList().then(result=>{
            this.contacts = result
        }).catch(error=>{
            console.error(error)
        })
    }



}