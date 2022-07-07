import { LightningElement } from 'lwc';

export default class July6CapitalText extends LightningElement {
    name;result;

    handleClick(){
        //alert('here');
        this.result = this.name;
    //    alert(this.result);
    }

    captureName(event){
        if(event.target.name == 'inputName'){
            this.name = event.target.value;
        }
    //     alert(event.target.value);
    }
}