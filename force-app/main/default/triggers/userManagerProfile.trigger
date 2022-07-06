trigger userManagerProfile on User (before insert, before update) {
    Profile bisUser = [SELECT id FROM PROFILE where Name = 'Business User'];
    Profile salesUser = [SELECT id FROM PROFILE where Name = 'Sales User'];
         
         for(User userlist : trigger.new){
             if(userlist.ProfileId == salesUser.Id)
             {
                 List<User> userlist1 = [select Id, ProfileId from User where ManagerID =: userlist.ManagerId];
                    for(User user1 : userlist1){
                        if(user1.ProfileId == bisUser.Id)
                        {
                            userlist.addError('Sales User and Business User Cannot have the same manager');
                        }
                     }
             }
             else if(userlist.ProfileId == bisUser.Id)
             {
                 List<User> userlist2 = [select Id, ProfileId from User where ManagerID =: userlist.ManagerId];
                    for(User user2 : userlist2){
                        if(user2.ProfileId == salesUser.Id)
                        {
                            userlist.addError('Sales User and Business User Cannot have the same manager');
                        }
                     }
             }
         }
}