import { Component, OnInit } from '@angular/core';
import { ViewChild, Input } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../classes/pet'
//import { } from '@types/googlemaps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  @Input() pet: Pet[];

  @ViewChild('gmap') gmapElement: any;

  map: google.maps.Map;

  constructor(private petService: PetService) { }

  ngOnInit() {
    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    // this.petService.getAllPets().subscribe(data => {
    //   this.pet = data;
    // })
    var mapProp = {
      //Grab location from pet object
        center: new google.maps.LatLng(this.pet[0].Latitude, this.pet[0].Longitude),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    for (i = 0; i < this.pet.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng( this.pet[i][1],  this.pet[i][2]),
        map: this.map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(this.pet[i][0]);
          infowindow.open(this.map, marker);
        }
      })(marker, i));
    
  }
}
  public setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)    
  }
}

