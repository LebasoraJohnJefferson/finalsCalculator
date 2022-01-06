import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() total:number=0
  @Input() title:string=''
  @Input() temp:string=''
  @Input() ProcessUI:string=''
  @Input() numberArray:any=[]
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  // the datatype of number is string to avoid miscalculation
  // the incoming string will be added or pushed to the last part of the string
  number(number:string){
    this.temp += number
    this.ShowProcessUI()
  }
  
  //avoid pushing empty string and only . in numberArray
  operation(operation:string){
    if(this.temp!='' && this.temp != '.'){
      this.numberArray.push(this.temp)
      this.numberArray.push(operation)
    }
    this.temp = ''
    this.ShowProcessUI()
    console.log(this.numberArray)
  }

  calculate(){
    for(let i=0; this.numberArray.length >= i; i++){
      console.log(this.numberArray)
      return
    }
  }

  //Show visualization
  ShowProcessUI(){
    this.ProcessUI = '' 
    for(let i = 0 ; i <= this.numberArray.length ; i++){
      if(this.numberArray[i] != undefined) this.ProcessUI += this.numberArray[i]
    }
    this.ProcessUI+=this.temp
  }


  //clear the visualization
  clear(){
    this.numberArray=[]
    this.temp=''
    this.ShowProcessUI()
  }

  percent(){
    
  }

  priority(){
  }


  //placing the dot once to avoid miscalculation
  dot(dot:string){
    let count = 0
    for(let i=0; this.temp.length >= i ; i++){
      if(this.temp[i] == '.') break
      count++;
      if(count == this.temp.length || this.temp=='') this.temp+=dot
    }
  }
}
