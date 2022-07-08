import { LightningElement,api } from 'lwc';

export default class ThisIsChildComponent extends LightningElement {

    name = 'Rishikesh';
    
    @api methodTobeCalledFromParent(){
        this.name = 'Rishikesh More';
    }
}