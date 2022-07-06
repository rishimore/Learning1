public class June15Controller {
	@auraEnabled
    public static List<Opportunity> getOppty(){
        List<Opportunity> oppList = [Select id,Name,Stagename,Amount from Opportunity limit 20];
        return oppList;
    }
}