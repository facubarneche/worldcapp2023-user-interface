import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing'
import {RouterTestingModule} from '@angular/router/testing'
import {CardComponent} from './card.component'
import {ConcatenatePipe} from 'src/app/pipes/concatenate-pipe.pipe'
import {getByTestId} from 'src/app/helpers/test.helper'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {mockCardData} from 'src/app/mocks/card.mock'
import {HttpClientModule} from '@angular/common/http'

describe('Card Component', () => {
  let component: CardComponent
  let fixture: ComponentFixture<CardComponent>
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [CardComponent, ConcatenatePipe]
    }).compileComponents()
    fixture = TestBed.createComponent(CardComponent)
    component = fixture.componentInstance
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('un jugador no onfire y no campeon del mundo no debe mostrar los iconos representativos de esas cualidades', () => {
    component.card = new Figurita(mockCardData[1])
    fixture.detectChanges()
    expect(getByTestId(fixture, 'onFire')).toBeFalsy()
    expect(getByTestId(fixture, 'worldChampion')).toBeFalsy()
  })
  it('un jugador onfire y campeon debe mostrar iconos que representen esas cualidades', () => {
    component.card = new Figurita(mockCardData[0])
    fixture.detectChanges()
    expect(getByTestId(fixture, 'onFire')).toBeTruthy()
    expect(getByTestId(fixture, 'worldChampion')).toBeTruthy()
  })
})
