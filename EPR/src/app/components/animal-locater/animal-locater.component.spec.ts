import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalLocaterComponent } from './animal-locater.component';

describe('AnimalLocaterComponent', () => {
  let component: AnimalLocaterComponent;
  let fixture: ComponentFixture<AnimalLocaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalLocaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalLocaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
