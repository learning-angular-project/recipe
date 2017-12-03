import { Ingredient } from '../../shared/ingredient.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  @Output() elementAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  Add(amount: HTMLInputElement) {
    const ingredient = new Ingredient(this.name.nativeElement.value, +amount.value);
    console.log(ingredient);
    this.elementAdded.emit(ingredient);

  }
  Clear() {
    this.amount.nativeElement.value = '';
    this.name.nativeElement.value = '';
  }

  Delete() {
  }

}
