export class Property {
    propertyId?: number;
    line1?: string;
    state?: string;
    city?: string;
    zipCode?: string;
    marketValue?: number;
    reservePrice?: number;
}

export class PropertyListing
{
    public address?: string;
    public lastBidAmount?: string;
    public reservePrice?: string;
}

export class Bid
{
    public bidId?: number;
    public propertyId?: number;
    public bidPrice?: number;
    public bidDateTime?: Date;
    public status?: string;
}

export class Bids
{
    public propertyId?: number;
    public outbidCount?: number;
    public activeCount?: number;
    public winningCount?: number;
}

export class BidAmounts
{
    public propertyId?: number;
    public outbidAmount?: string;
    public activeAmount?: string;
    public winningAmount?: string;
}