trigger profileManagedAccounts on Account (before insert, before update) {
    Profile bisUsers = [SELECT id FROM PROFILE where Name = 'Business User'];
    Profile saleUsers = [SELECT id FROM PROFILE where Name = 'Sales User'];
    Profile supUsers = [SELECT id FROM PROFILE where Name = 'Support User'];
    for(Account acc : trigger.new)
    {
                list<Account> acct = [SELECT Id FROM Account where OwnerId =: acc.OwnerId];
                User userList = [SELECT Id,ProfileId FROM User WHERE Id = : acc.OwnerId];
    
                if(userList.ProfileId == saleUsers.Id && acct.size()>=5){                   
                    acc.addError('A single Sales user can only own 5 accounts');                    
                }
                else if(userList.ProfileId == bisUsers.Id && acct.size()>=10){
                    acc.addError('A single Business user can only own 10 accounts');
                }
                else if(userList.ProfileId == supUsers.Id && acct.size()>=2){
                    acc.addError('A single Support user can only own 2 accounts');
                    }
            }
    }