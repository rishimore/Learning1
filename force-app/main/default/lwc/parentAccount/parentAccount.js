import { LightningElement } from 'lwc';

export default class ParentAccount extends LightningElement {
    handleClick(){
    //    this.template.querySelector('c-this-is-child-account').methodTobeCalledFromParentAccount();
        this.template.querySelector('c-this-is-child-account').methodTobeCalledFromParentInactiveAccount();
    }
}