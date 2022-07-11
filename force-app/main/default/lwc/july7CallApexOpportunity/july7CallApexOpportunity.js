import { LightningElement,wire, api } from 'lwc';
//import methodName from '@salesforce/apex/July7OpportunityClass.getOpportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';

export default class July7CallApexOpportunity extends LightningElement {
  //  @wire(methodName) opportunityVar;
        @api recordId;
        @api objectApiName;

        fields = [NAME_FIELD, AMOUNT_FIELD, TYPE_FIELD];

        handleSubmit(event) {
            event.preventDefault(); // stop the form from submitting
            const fields = event.detail.fields;
            fields.LastName = 'My Custom Last Name'; // modify a field
            this.template.querySelector('lightning-record-form').submit(fields);
        }
}