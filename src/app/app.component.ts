import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private toastr: ToastrService) { }
  title = 'tic-tac-toe';
  isCross = true;
  winMessage = "";
  itemArray = new Array(9).fill("empty");
  reloadGame() {
    this.winMessage = "";
    this.itemArray = new Array(9).fill("empty");
    this.isCross = true
  }


  clickHandler(index: number) {
    if (this.winMessage) {
      this.toastr.success(this.winMessage)
      return
    }
    if (this.itemArray[index] == "empty") {
      this.itemArray[index] = this.isCross ? "cross" : "circle"
      this.isCross = !this.isCross;

    }
    else {
      this.toastr.warning("Already Filled");
      return
    }
    this.winningLogic();
    if (this.winMessage) {
      this.toastr.success(this.winMessage)
    }
  }


  winningLogic() {
    if ((this.itemArray[0] == this.itemArray[1]) && (this.itemArray[0] == this.itemArray[2]) && this.itemArray[0] != "empty") {
      this.winMessage = `${this.itemArray[0]} won`;
    }
    else if (
      this.itemArray[3] !== 'empty' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
    ) {
      this.winMessage = `${this.itemArray[3]} won`;
    } else if (
      this.itemArray[6] !== 'empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[6]} won`;
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[1] !== 'empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
    ) {
      this.winMessage = `${this.itemArray[1]} won`;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
    }
  }
}
