import { LightningElement } from 'lwc';

export default class July07_1 extends LightningElement {
    //this 1 is parent component and Julu07_3 is child
    buttonSelected;

    handleCustomEvent(event){
        this.buttonSelected = event.detail;
    }
}