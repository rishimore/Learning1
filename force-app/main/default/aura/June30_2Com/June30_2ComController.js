({
	handleComponentEvent : function(component, event, helper) {
		var buttonSelected = event.getParam("ButtonName");
      //  alert(buttonSelected);
        component.set("v.selectedOption",buttonSelected);
	}
})