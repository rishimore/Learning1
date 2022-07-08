import { LightningElement, track } from 'lwc';
import getContactList from '@salesforce/apex/July7thClass.getAllConList';

export default class July7ImperetiveCall extends LightningElement {
    @track contacts;
    handleClick(){
        getContactList()
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}