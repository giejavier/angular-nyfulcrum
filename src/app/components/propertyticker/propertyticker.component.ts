import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { BidTile } from 'src/app/BidTile';
import { BidAmounts, Bids, PropertyListing } from 'src/app/Property';
import { PropertyTile } from 'src/app/PropertyTile';

@Component({
  selector: 'app-propertyticker',
  templateUrl: './propertyticker.component.html',
  styleUrls: ['./propertyticker.component.css']
})
export class PropertytickerComponent implements OnInit {
  currentBids!: Bids;
  currentBidAmounts!: BidAmounts;
  propertyTiles!: PropertyTile[];

  outbidCount: BidTile = {
    title: 'Outbid',
    value: ''
  };

  activeCount: BidTile = {
    title: 'Active',
    value: ''
  };

  winningCount: BidTile = {
    title: 'Winning',
    value: ''
  };

  winningBid: BidTile = {
    title: 'Winning',
    value: ''
  };

  activeBid: BidTile = {
    title: 'Active',
    value: ''
  };

  outbidBid: BidTile = {
    title: 'Outbid',
    value: ''
  };

  constructor(
    private propertyService : PropertyService
  ) { }

  ngOnInit(): void {
    this.refreshValues(1);
  }

  async refreshValues(id: number) {
    this.currentBids = await this.propertyService.getBids(id);
    this.propertyTiles = await this.propertyService.GetAllPropertyListings();
    this.currentBidAmounts = await this.propertyService.getBidAmounts(id);

    this.outbidCount.value = `${this.currentBids.outbidCount}`;
    this.activeCount.value = `${this.currentBids.activeCount}`;
    this.winningCount.value = `${this.currentBids.winningCount}`;
    this.outbidBid.value = this.currentBidAmounts.outbidAmount;
    this.activeBid.value = this.currentBidAmounts.activeAmount;
    this.winningBid.value = this.currentBidAmounts.winningAmount;
  }

  onPropertyClick(event: Event) {
    console.log(event);
    // TODO: refreshValues
  }

}
