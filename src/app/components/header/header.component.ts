import { Component, OnInit } from '@angular/core';
import { HeaderTile } from 'src/app/HeaderTile';
import { Property } from 'src/app/Property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentProperty!: Property;

  currentLocationTile: HeaderTile = {
    line1: '',
    line2: '',
    line3: ''
  };

  startTile: HeaderTile = {
    line1: 'To',
    line2: 'Start',
    line3: 'Place Deposit'
  };

  currentPriceTile: HeaderTile = {
    line1: 'Market Value',
    line2: '',
    line3: 'Reserve Price'
  };

  constructor(
    private propertyService : PropertyService
  ) { }

  async ngOnInit() {
    this.currentProperty = await this.propertyService.getProperty(1);
    this.currentLocationTile.line1 = 'Own';
    this.currentLocationTile.line2 = this.currentProperty.line1;
    this.currentLocationTile.line3 = `${this.currentProperty.city}, ${this.currentProperty.state} ${this.currentProperty.zipCode}`;
    this.currentPriceTile.line2 = `$${this.currentProperty.reservePrice}`;
  }
  
}
