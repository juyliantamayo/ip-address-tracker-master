import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() markerPosition: google.maps.LatLng | undefined;
  @Input() mapOptions: google.maps.MapOptions = {};

  ngOnInit(): void {
    this.mapOptions = {
      disableDefaultUI: true,
      controlSize: 30,
      panControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      zoomControl: false,
      scaleControl: false,
      isFractionalZoomEnabled: false,
    };
  }
}
