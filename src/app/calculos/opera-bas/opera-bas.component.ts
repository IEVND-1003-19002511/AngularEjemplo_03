import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-bas',
  templateUrl: './opera-bas.component.html',
  styleUrls: ['./opera-bas.component.css']
})
export class OperaBasComponent {
  num1:string='';
  num2:string='';
  resultado:number=0;
  operacion: string= '';
  
  calcular(){
    switch (this.operacion){
      case 'sumar':
        this.resultado=parseInt(this.num1)+parseInt(this.num2);
        break;
      
      case 'restar':
        this.resultado=parseInt(this.num1)-parseInt(this.num2);
        break;
      
      case 'multiplicar':
        this.resultado=parseInt(this.num1)*parseInt(this.num2);
        break;
      
      case 'dividir':
        this.resultado=parseInt(this.num1)/parseInt(this.num2);
        break;
    }
  }
  

}
