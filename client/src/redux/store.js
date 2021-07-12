import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "../reducer/index";
import thunk from "redux-thunk";

const store = createStore(Reducer, compose(applyMiddleware(thunk)));

export default store;
