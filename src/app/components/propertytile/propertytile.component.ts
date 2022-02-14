import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PropertyTile } from 'src/app/PropertyTile';

@Component({
  selector: 'app-propertytile',
  templateUrl: './propertytile.component.html',
  styleUrls: ['./propertytile.component.css']
})
export class PropertytileComponent implements OnInit {
  @Input() propertyTile!: PropertyTile;
  @Output() propertyTileClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    this.propertyTileClick.emit();
  }
}
