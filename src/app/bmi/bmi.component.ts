/*
  File: bmi.component.ts
  Author: Korcsmaros Kende Andras
  Copyright: 2023, Korcsmaros Kende Andras
  Group: Szoft II/N
  Date: 2023.02.07
  Github: https://github.com/KendeAndras/
  Licenc: GNU GPL
*/


import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent implements OnInit {
  weight = new FormControl('');
  height = new FormControl('');
  bmi = new FormControl('');

  bmiVisible = false;

  ngOnInit(): void {
  }

  keyboardWatch(event:any) {
    if (event.key == "Enter") {
      this.onEnterHandler();
    }
  }

  onEnterHandler() {
    this.startCalc();
  }

  startCalc() {
    let weight = Number(this.weight.value);
    let height = Number(this.height.value);
    let bmi = this.calcBmi(weight, height);
    this.bmi.setValue(String(bmi));
    this.bmiVisible = true;
  }

  calcBmi(weight: number, height: number) {
    let bmi = weight / Math.pow(height, 2);
    return bmi;
  }

  onClickCalcButton() {
    this.startCalc();
  }
}
