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

  @Input() pet: Pet;

  @ViewChild('gmap') gmapElement: any;

  map: google.maps.Map;

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.petService.getPetByID(this.pet.Pet_ID)
    .subscribe((data)=>{

    });

    var mapProp = {
      //Grab location from pet object
        center: new google.maps.LatLng(this.pet.Latitude, this.pet.Longitude),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
  
  public setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)    
  }
}

