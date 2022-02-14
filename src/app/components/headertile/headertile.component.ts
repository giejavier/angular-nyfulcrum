import { Component, OnInit, Input } from '@angular/core';
import { HeaderTile } from 'src/app/HeaderTile';

@Component({
  selector: 'app-headertile',
  templateUrl: './headertile.component.html',
  styleUrls: ['./headertile.component.css']
})
export class HeadertileComponent implements OnInit {
  @Input() headerTile: HeaderTile = { line1: '', line2: '', line3: '' };

  constructor() { }

  ngOnInit(): void {
  }

}
