import { LightningElement, wire,track } from 'lwc';
import getAllAccounts from '@salesforce/apex/July8AccountClass.getAllAcc';
import getAllCase from '@salesforce/apex/July8CaseClass.getAllCase';

let i=0;
export default class AccountChild extends LightningElement {
 
  //  @wire(getAllAccounts) accountVar;

    @track items = []; //this will hold key, value pair
    @track value = '';

    @wire(getAllCase)
    wiredUserCases({ error, data }) {
        if (data) {

            //create array with elements which has been retrieved controller
            //here value will be Id and label of combobox will be Name
            for(i=0; i<data.length; i++)  {
                this.items = [...this.items ,{value: data[i].CaseNumber, label: data[i].Account.Name} ];                                   
            }                
            this.error = undefined;
        } else if (error) {
            this.Cases = undefined;
        }
    }

    //gettter to return items which is mapped with options attribute
    get options() {
        return this.items;
    }

    handleChange(event) {
        const buttonName = event.detail.value;
        event.preventDefault();

        const selectEvent = new CustomEvent('mycustomevent', {
            detail: buttonName
        });
       this.dispatchEvent(selectEvent);
    }

}