import { LightningElement, api, track } from 'lwc';
import getAccActive from '@salesforce/apex/July8AccountClass.getAccActive';
import getAccInActive from '@salesforce/apex/July8AccountClass.getAccInActive';

export default class ThisIsChildAccount extends LightningElement {
    
  //  name = 'Rishikesh';
    @track activeAccounts;
    @track inActiveAccounts;

    @api methodTobeCalledFromParentAccount(){
  //      this.name = 'Rishikesh More';
        getAccActive()
            .then(result => {
                this.activeAccounts = result;
            })
            .catch(error => {
                this.error = error;
            });

    }
    
    @api methodTobeCalledFromParentInactiveAccount(){
        getAccInActive()
            .then(result => {
                this.inActiveAccounts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
 //   @wire(methodName) accountVar;
}