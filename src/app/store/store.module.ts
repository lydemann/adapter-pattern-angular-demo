import { NgModule } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

// Redux ecosystem stuff.
import { createLogger } from 'redux-logger';

// The top-level reducers and epics that make up our app's logic.
import { rootReducer } from './reducers';
import { RootEpics } from './epics';
import { AppState } from '@app/store/state.model';

@NgModule({
  imports: [NgReduxModule],
  providers: [RootEpics],
})
export class StoreModule {
  constructor(
    public store: NgRedux<AppState>,
    devTools: DevToolsExtension,
    rootEpics: RootEpics,
  ) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.configureStore(
      rootReducer,
      {} as any,
      [ createLogger(), ...rootEpics.createEpics() ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}
