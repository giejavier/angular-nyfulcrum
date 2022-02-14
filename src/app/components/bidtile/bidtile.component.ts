import { Component, OnInit, Input } from '@angular/core';
import { BidTile } from 'src/app/BidTile';

@Component({
  selector: 'app-bidtile',
  templateUrl: './bidtile.component.html',
  styleUrls: ['./bidtile.component.css']
})
export class BidtileComponent implements OnInit {
  @Input() bidTile!: BidTile;
  @Input() valueColor!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
