trigger email_trigger on Account (after update) {
    List<Account> accList = New List<Account>();
    List<Contact> conUpList = New List<Contact>();
    For (Account acc : trigger.new){
		List<Contact> conList = [Select Name from Contact where AccountId =: acc.Id];
            For(Contact con : conList){
            	If(acc.Email_Opt_out_for_contacts__c == true){
        		con.HasOptedOutOfEmail = true;
        		conUpList.add(con);
    	    	}
                else If(acc.Email_Opt_out_for_contacts__c == false){
                con.HasOptedOutOfEmail = false;
                conUpList.add(con);
                }
    		}
    }
    Update conUpList;
}