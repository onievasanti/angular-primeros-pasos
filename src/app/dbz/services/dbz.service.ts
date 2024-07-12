import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  
  public characters: Character[] = [{
    name: 'Krillin',
    power: 500
  }, {
    name: 'Goku',
    power: 10000
  }, {
    name: 'Vegetta',
    power: 7500
  }];


  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}