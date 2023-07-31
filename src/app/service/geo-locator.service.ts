import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeoLocatorService {
  constructor(private httpClient: HttpClient) {}
  async getLocationIp(ip: string) {
    console.log(ip);

    return await  this.httpClient.get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=c510df8f8eda48aebb7933949fd5111e&ip=${ip}`
    );
  }
}
