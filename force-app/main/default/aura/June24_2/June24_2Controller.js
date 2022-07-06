({
	onChange : function(component, event, helper) {
		//alert(component.find("dropDown").get("v.value"));
		var options = component.find("dropDown").get("v.value");
        component.set("v.selectedOption",options);
	}
})