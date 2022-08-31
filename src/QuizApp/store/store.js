import { createStore } from "redux";
import reducers from "../reducer/RootReducer";




const store = createStore(reducers)
export default store;