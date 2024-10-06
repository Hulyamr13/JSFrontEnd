import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'length-converter',
  templateUrl: './lengthConverter.component.html',
  styleUrls: ['./lengthConverter.component.scss']
})
export class LengthConverter implements OnInit {
  lengthOptions = [
    { id: 0, label: 'Kilometre', unit: 'km' },
    { id: 1, label: 'Metre', unit: 'm' },
    { id: 2, label: 'Centimetre', unit: 'cm' }
  ];

  // Initial states for inputs and selected units
  input1Value: number | null = null;
  input2Value: number | null = null;

  unit1 = 0; // Default to Kilometre
  unit2 = 1; // Default to Metre

  ngOnInit() {
    // Perform initial conversion with default values
    this.updateInput2FromInput1();
  }

  onInput1Change(value: string) {
    this.input1Value = value ? parseFloat(value) : null;
    this.updateInput2FromInput1();
  }

  onInput2Change(value: string) {
    this.input2Value = value ? parseFloat(value) : null;
    this.updateInput1FromInput2();
  }

  onSelect1Change(unitId: string) {
    this.unit1 = parseInt(unitId, 10);
    this.updateInput2FromInput1(); // Update input 2 based on new selection
  }

  onSelect2Change(unitId: string) {
    this.unit2 = parseInt(unitId, 10);
    this.updateInput1FromInput2(); // Update input 1 based on new selection
  }

  // Conversion logic from input 1 to input 2
  updateInput2FromInput1() {
    if (this.input1Value === null) return;
    const conversionFactor = this.getConversionFactor(this.unit1, this.unit2);
    this.input2Value = this.input1Value * conversionFactor;
  }

  // Conversion logic from input 2 to input 1
  updateInput1FromInput2() {
    if (this.input2Value === null) return;
    const conversionFactor = this.getConversionFactor(this.unit2, this.unit1);
    this.input1Value = this.input2Value * conversionFactor;
  }

  // Conversion factor based on selected units
  getConversionFactor(fromUnitId: number, toUnitId: number): number {
    const conversionMatrix = [
      [1, 1000, 100000], // From Kilometre
      [0.001, 1, 100],   // From Metre
      [0.00001, 0.01, 1] // From Centimetre
    ];
    return conversionMatrix[fromUnitId][toUnitId];
  }
}
