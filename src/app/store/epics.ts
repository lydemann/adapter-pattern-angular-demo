import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { AppState } from './state.model';

@Injectable()
export class RootEpics {
  constructor() {}

  public createEpics(): Array<Epic<any, AppState>> {
    return [ // epics goes here
    ];
  }
}
