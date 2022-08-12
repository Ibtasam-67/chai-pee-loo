import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import lunchReducer from "../reducers/lunchReducer";
import userReducer from "../reducers/userReducer";
import teaReducer from "../reducers/teaReducer";
const middleware = [thunk];
const Reducer = combineReducers({
  lunch: lunchReducer,
  user:userReducer,
  tea:teaReducer
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, Reducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
