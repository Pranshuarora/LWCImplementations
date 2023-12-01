public with sharing class accountController {

    // AuraEnabled annotation enables Lightning components to access Apex methods and properties.

    @AuraEnabled(cacheable=true)
    // using accId from component
    public static List<Account> getAccountById(Id accId){
        return [SELECT Id, Name, Phone FROM Account WHERE Id=:accId];
    }

    // if you want to expose this to LWC make it @AuraEnabled
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, AnnualRevenue FROM Account WHERE AnnualRevenue!=null LIMIT 5];

    } 

    @AuraEnabled(cacheable=true)
    // for top 5
    public static List<Contact> getContactList(){
        return [SELECT Id, Name FROM Contact LIMIT 5];
    }
}
