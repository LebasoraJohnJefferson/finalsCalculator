import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  total:number=0.00
  isNotification:boolean = false
  currentData = new Date().getFullYear()
  @Input() title:string=''
  @Input() temporary:string=''
  @Input() ProcessUI:string=''
  @Input() valueArray:any=[]
  @Input() operatorArray = ['/','x','+','-']
  constructor() { 
    this.showProcessVisualization()
  }

  ngOnInit(): void {
  }

  clear(){
    this.temporary=''
    this.valueArray=[]
    this.showProcessVisualization()
  }

  operand(number:string){
    this.temporary += number
    this.showProcessVisualization()
  }

  operator(operator:string){
    if(this.temporary !='' && this.valueArray.length <2 && this.temporary!='.'){
      this.valueArray.push(this.temporary)
      this.valueArray.push(operator)
      this.temporary=''
    }else{
      this.calculate()
    }
    this.showProcessVisualization()
  }

  calculate(){
    let temp = ''
    if(this.temporary != '' && this.valueArray.length ==2 && this.temporary!='.'){
        if (this.valueArray[1] == '/') this.total = parseFloat(this.valueArray[0]) / parseFloat(this.temporary)
        else if (this.valueArray[1]=='x') this.total = parseFloat(this.valueArray[0]) * parseFloat(this.temporary)
        else if (this.valueArray[1]=='-') this.total = parseFloat(this.valueArray[0]) - parseFloat(this.temporary)
        else if (this.valueArray[1]=='+') this.total = parseFloat(this.valueArray[0]) + parseFloat(this.temporary)
      temp = this.total.toString()
      this.clear()
      this.temporary = temp
      this.showProcessVisualization()
    }else{
      this.isNotification = true;
      setTimeout(()=>{
        this.isNotification = false
      },2000)
    }
  }

  dot(){
    let count = 0
    for (let i = 0 ; i <= this.temporary.length ; i++){
      if(this.temporary[i] == '.') break
      count++
      if(count == this.temporary.length || this.temporary.length == 0) this.temporary+='.'
    }

    this.showProcessVisualization()
  }

  showProcessVisualization(){
    this.ProcessUI = ''
    for(let i = 0 ; i < this.valueArray.length ; i++ ){
      this.ProcessUI+= this.valueArray[i]
    }
    this.ProcessUI +=this.temporary
  }
}
