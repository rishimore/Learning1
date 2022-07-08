import { LightningElement } from 'lwc';

export default class IfConditionIteration extends LightningElement {
    areDetailsVisible = false;
    handleChange(event) {
        this.areDetailsVisible = event.target.checked;
    }
}