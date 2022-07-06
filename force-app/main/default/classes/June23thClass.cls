public class June23thClass {
	
    @auraEnabled
    public static Id createContact(string fname, string lname, string email, string phone, string accountId){
        contact con = new contact();
        con.FirstName = fname;
        con.LastName = lname;
        con.Email = email;
        con.Phone = phone;
        con.AccountId = accountId;
        Insert con;
        return con.id;
    }
}