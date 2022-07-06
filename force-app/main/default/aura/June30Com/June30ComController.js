({
	handleClick : function(component, event, helper) {
		var bName = event.getSource().get("v.label");
       // alert(bName);
         var rishiEvent = cmp.getEvent("cmpEvent");
        rishiEvent.setParams({
            "ButtonName" : bName });
        rishiEvent.fire();
	}
})