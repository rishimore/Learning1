public class OrderHandler {
    public static void restrictStage(list<Order> ordlist, map<Id,Order> oldmap){
        for(Order o : ordlist){
            if(o.Status != oldmap.get(o.Id).Status){
                if(oldmap.get(o.Id).Status == 'Cancelled' || oldmap.get(o.Id).Status == 'Delivered'){
                    o.addError('Cannot revert Stage');
                }
                else if(oldmap.get(o.Id).Status == 'Activated'){
                    if(o.Status == 'Approval' || o.Status == 'Draft'){
                        o.addError('Cannot revert Stage');
                    }
                }
                else if (oldmap.get(o.Id).Status == 'Invoice Generation'){
                    if(o.Status == 'Approval' || o.Status == 'Draft' || o.Status == 'Activated'){
                        o.addError('Cannot revert Stage');
                    }
                }
                else if(oldmap.get(o.Id).Status == 'Approval'){
                    if(o.Status == 'Draft'){
                        o.addError('Cannot revert Stage');
                    }
                }
            }
        }
    }
}