public with sharing class July7OpportunityClass {
    
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunity(){
        List<Opportunity> oppList = new List<Opportunity>();
        oppList = [SELECT ID, Name, Amount,Type FROM Opportunity LIMIT 10]; 
        return oppList;  
      }
}
