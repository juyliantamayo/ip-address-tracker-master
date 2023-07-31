import { Component } from '@angular/core';
import { GeoLocatorService } from './service/geo-locator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ip-address-tracker-master';
  ip: string | undefined;
  location: string | undefined;
  timezone: string | undefined;
  isp: string | undefined;
  lat: number = 0;
  lng: number = 0;
  markerPosition: google.maps.LatLng | undefined;
  mapOptions: google.maps.MapOptions = {};
  constructor(private geoLocatorService: GeoLocatorService) {}
  async ipResived(ip: string) {
    (await this.geoLocatorService.getLocationIp(ip)).subscribe((res: any) => {
      console.log(res);
      this.ip = res.ip;
      this.location = `${res.city}, ${res.country_name} ${res.postal_code}`;
      this.timezone = `UTC ${res.time_zone.current_time}`;
      this.isp = res.isp;
      this.lat = res.latitude;
      this.lng = res.longitude;
      console.log(this.lat, this.lng);

      this.mapOptions = {
        zoom: 20,
        disableDefaultUI: true,
        controlSize: 30,
        panControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        zoomControl: false,
        scaleControl: false,
        isFractionalZoomEnabled: false,
        center: new google.maps.LatLng(this.lat, this.lng)
      };
      this.markerPosition = new google.maps.LatLng(this.lat, this.lng);
    });
  }
}
