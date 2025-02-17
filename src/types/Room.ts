export interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
  maxOccupancy: number;
  size: number;
  bedType: string;
  rating: number;
  reviews: number;
  nearbyAttractions: NearbyAttraction[];
  location: {
    lat: number;
    lng: number;
  };
}

export interface NearbyAttraction {
  name: string;
  distance: number;
  description: string;
  image: string;
  rating: number;
}