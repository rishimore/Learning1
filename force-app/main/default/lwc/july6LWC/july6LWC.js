import { LightningElement } from 'lwc';

export default class July6LWC extends LightningElement {
    firstNumber = 0;
    secondNumber = 0;
    result = 0;

    handleClick(event){
      //  alert('here');
      if(event.target.label == 'Addition'){
        this.result = this.firstNumber + this.secondNumber;
      }
      else if(event.target.label == 'Substraction'){
        this.result = this.firstNumber - this.secondNumber;
      }
      else{
        this.result = this.firstNumber * this.secondNumber;
      }
      //alert(sum);
    }

    captureNumber(event){
        if(event.target.name == 'input1'){
            this.firstNumber = parseInt(event.target.value);
        }
        if(event.target.name == 'input2'){
            this.secondNumber = parseInt(event.target.value);
        }
      //  alert(event.target.value);
    }
}