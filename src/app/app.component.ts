import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Assignment1';
  showDetails = false;
  paragraphContent = 'This is some example paragraph content.';
  buttonClicks = 0;

  inputText = '';
  items: string[] = [];
  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.buttonClicks++;
  }
  addItem() {
    this.items.push(this.inputText);
    this.inputText = '';
  }
}
