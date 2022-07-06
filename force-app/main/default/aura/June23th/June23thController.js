({
	handleClick : function(component, event, helper) {
	//	alert(component.find("fnumber").get("v.value"));
	//value are show from front end
	 	var firstnumber = parseInt(component.find("fnumber").get("v.value"));
        var secondnumber = parseInt(component.find("snumber").get("v.value"));
        var result = 0;
        //alert(event.getSource().get("v.label"));
        //which button click on
                
        var buttonName = event.getSource().get("v.label");
        if(buttonName == 'Addition'){
            result = firstnumber + secondnumber;
        }
        else if(buttonName == 'Substraction')
        {
             result = firstnumber - secondnumber;
        } 
        else if(buttonName == 'Multiplication')
        {
             result = firstnumber * secondnumber;
        }
        //alert(result);
        component.set("v.myResult",result)
	}
})