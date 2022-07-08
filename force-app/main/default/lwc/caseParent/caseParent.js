import { LightningElement } from 'lwc';

export default class CaseParent extends LightningElement {
    caseNumberShows;

    handleCustomEvent(event){
        this.caseNumberShows = event.detail;
    }
}