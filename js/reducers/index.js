
import { combineReducers } from 'redux';


import user from './user';

const persistToMongo = (state) => {
  // db.remove({}, { multi: true }, function (err, numRemoved) {});
  // db.insert(state.inspection.projects, function (err, newDoc) {  });
}
const reducers = combineReducers({
  state: (state = {}) => state,
  user

});

const finalReducer = (state, action) => {
    const nextState = reducers(state, action);

    //use whatever module you use to write to mongo...
    persistToMongo(nextState);

    return nextState;
};


export default finalReducer;