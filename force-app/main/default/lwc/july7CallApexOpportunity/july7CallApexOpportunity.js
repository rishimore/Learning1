import { LightningElement,wire } from 'lwc';
import methodName from '@salesforce/apex/July7OpportunityClass.getOpportunity';

export default class July7CallApexOpportunity extends LightningElement {
    @wire(methodName) opportunityVar;
}