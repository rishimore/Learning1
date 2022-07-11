import { LightningElement } from 'lwc';

export default class ParentAccount extends LightningElement {
 /*   handleClick(){
        this.template.querySelector('c-this-is-child-account').methodTobeCalledFromParentAccount();
        this.template.querySelector('c-this-is-child-account').methodTobeCalledFromParentInactiveAccount();
    }


    activeSectionMessage = '';

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }*/

    handleSetActiveSectionC() {
        const accordion = this.template.querySelector('c-this-is-child-account').methodTobeCalledFromParentAccount();

     //   accordion.activeSectionName = 'C';
    }

    handleSetActiveSectionB() {
        const accordion = this.template.querySelector('c-this-is-child-account').methodTobeCalledFromParentInactiveAccount();

     //   accordion.activeSectionName = 'B';
    }
}