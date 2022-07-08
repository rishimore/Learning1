public with sharing class July7thClass {
        
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(){
      List<Contact> conList = new List<Contact>();
      conList = [SELECT ID, NAME, EMAIL FROM Contact LIMIT 10]; 
      return conList;  
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAllConList(){
      List<Contact> conAllList = new List<Contact>();
      conAllList = [SELECT Id, Name FROM Contact];
      return conAllList;
    }
}
