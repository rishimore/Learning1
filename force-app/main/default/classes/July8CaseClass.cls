public with sharing class July8CaseClass {
   
    @AuraEnabled(cacheable=true)
    public static List<Case> getAllCase(){
        List<Case> getAllCase = new List<Case>();
        getAllCase = [SELECT Id, AccountId,Account.Name, Type, Origin,CaseNumber FROM Case LIMIT 5]; 
        return getAllCase;
    }
}
