import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../reducers/userReducer";
import orderReducer from "../reducers/orderReducer";
import LunchTypeReducer from "../reducers/lunchTypeReducer";
import morningTeaReducer from "../reducers/morningTea";
import eveningTea from "../reducers/eveningReducer";
const middleware = [thunk];
const Reducer = combineReducers({
  user: userReducer,
  order: orderReducer,
  morning: morningTeaReducer,
  lunchType: LunchTypeReducer,
  evening: eveningTea
});
const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, Reducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
