public with sharing class July8AccountClass {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccActive(){
        List<Account> getAccAct = new List<Account>();
        getAccAct = [SELECT Id, Name, Type, Active__c FROM Account Where Active__c = 'Yes']; 
        return getAccAct;  
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccInActive(){
        List<Account> getAccInAct = new List<Account>();
        getAccInAct = [SELECT Id, Name, Type, Active__c FROM Account Where Active__c = 'No']; 
        return getAccInAct;
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAcc(){
        List<Account> getAllAccount = new List<Account>();
        getAllAccount = [SELECT Id, Name FROM Account LIMIT 10]; 
        return getAllAccount;
    }
}
