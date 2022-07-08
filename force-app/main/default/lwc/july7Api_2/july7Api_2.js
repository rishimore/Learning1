import { LightningElement } from 'lwc';

export default class July7Api_2 extends LightningElement {
    handleClick(){
        this.template.querySelector('c-this-is-child-component').methodTobeCalledFromParent();
    }
}