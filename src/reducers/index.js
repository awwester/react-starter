import { combineReducers } from 'redux';

import SessionAuthReducer from './session/auth';
import SessionUserReducer from './session/user';
import ModalReducer from './general/modals';

const rootReducer = combineReducers({
  session: SessionAuthReducer,
  user: SessionUserReducer,
  modal: ModalReducer,
});

export default rootReducer;
