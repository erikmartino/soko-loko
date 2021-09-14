import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'soko-loko-board',
  templateUrl: './soko-loko.component.html',
  styleUrls: ['./soko-loko.component.css']
})
export class SokoLokoComponent implements OnInit {
  constructor() {}
  width: number = 4;
  height: number = 3;
  board: string = 'abcd0123ABCD';
  ngOnInit() {}

  rows(): string[] {
    console.info('rows()');
    var chunks = [];
    for (let i = 0; i < this.board.length; i += this.width) {
      chunks.push(this.board.substring(i, i + this.width));
    }
    return chunks;
  }

  cells(row: string): string[] {
    console.info(`cells(${row})`);
    return row.split('');
  }
}
