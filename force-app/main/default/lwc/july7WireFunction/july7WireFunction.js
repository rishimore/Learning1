import { LightningElement, wire } from 'lwc';
import methodName from '@salesforce/apex/July7thClass.getContact';

export default class July7WireFunction extends LightningElement {
    contacts;

    @wire(methodName)
    rishikeshMethod({ error, data }) {
        if (data) {
            this.contacts = data;
       
        } else if (error) {
       
        }
    }
}