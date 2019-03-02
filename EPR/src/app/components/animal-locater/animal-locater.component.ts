import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../classes/pet'

@Component({
  selector: 'app-animal-locater',
  templateUrl: './animal-locater.component.html',
  styleUrls: ['./animal-locater.component.css']
})
export class AnimalLocaterComponent implements OnInit {

  pet: Pet = new Pet();
  
  constructor(private petService: PetService) { }

  ngOnInit() {
    this.petService.getPetByID(this.pet.Pet_ID)
    .subscribe((data)=>{

    });
  }

}
