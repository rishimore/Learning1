import { LightningElement, wire } from 'lwc';
import methodName from '@salesforce/apex/July7thClass.getContact';

export default class July7thCallApex extends LightningElement {
    @wire(methodName) rishikeshVar;
}