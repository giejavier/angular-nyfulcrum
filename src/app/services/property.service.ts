import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { Property } from '../Property';
import { PropertyTile } from '../PropertyTile';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private urlApi = 'https://localhost:44352/api/properties/';
  private getAllPropertyListingsApi = this.urlApi + 'GetAllPropertyListings';
  private getBidAmountsApi = this.urlApi + 'GetBidAmounts/';
  private getBidsApi = this.urlApi + 'GetBids/';
  private getPropertyApi = this.urlApi + 'GetProperty/';

  constructor(private http: HttpClient) {}

  async GetAllPropertyListings(): Promise<PropertyTile[]> {
    const response = await lastValueFrom(this.http.get<PropertyTile[]>(this.getAllPropertyListingsApi));
    return response;
  }

  async getBidAmounts(id: number): Promise<Property> {
    const response = await lastValueFrom(this.http.get<Property>(this.getBidAmountsApi + id));
    return response;
  }

  async getBids(id: number): Promise<Property> {
    const response = await lastValueFrom(this.http.get<Property>(this.getBidsApi + id));
    return response;
  }

  async getProperty(id: number): Promise<Property> {
    const response = await lastValueFrom(this.http.get<Property>(this.getPropertyApi + id));
    return response;
  }
}
