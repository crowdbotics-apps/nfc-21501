import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth1142835Reducer from '../features/EmailAuth1142835/redux/reducers';
import SignIn22142834Reducer from '../features/SignIn22142834/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth1142835: EmailAuth1142835Reducer,
SignIn22142834: SignIn22142834Reducer,

});