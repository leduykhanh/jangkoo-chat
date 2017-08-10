
import { AsyncStorage,ToastAndroid } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducer from './reducers';
import promise from './promise';

import {initialState} from './constants/initialState';
import {key} from './constants/url';



export default function configureStore(onCompletion:()=>void):any {

    const enhancer = compose(
        applyMiddleware(thunk, promise
           // ,asyncInitialState.middleware(loadStore)
        ),
        devTools({
          name: 'jangkoo-universal', realtime: true,
        }),
      );

  AsyncStorage.getItem(key,
      (err, item) => {
          if (err){
              console.log(err)
          }
          else{
              initialState.user = JSON.parse(item);
          }

      }
  );
  const store = createStore(reducer, initialState, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;

    }


