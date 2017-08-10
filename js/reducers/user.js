import { AsyncStorage } from 'react-native';
import type { Action } from '../actions/types';
import { SET_USER } from '../actions/user';
import {key} from '../constants/url';

const saveToMongo = (state) => {
  // db.remove({}, { multi: true }, function (err, numRemoved) {});
  // db.insert(state, function (err, newDoc) {  });
  AsyncStorage.setItem(key, JSON.stringify(state));
}
export type State = {
    name: string,
    id: string,
    type:string,
    company: object
}

const initialState = {
  name: null,id:null,type:'inspector'
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_USER) {
    var newState = {
      ...state,
      name: action.payload.name,
      id: action.payload.id,
      email: action.payload.email,
      type: action.payload.type,
      company: action.payload.company,
      supervisors:action.payload.supervisors,
      session_id:action.payload.session_id
    };
    saveToMongo(newState);
    return newState;
  }
  return state;
}
