import {combineReducers, createStore} from 'redux'
import sideBar from './sidebars'
import toast from './toast'
const rootReducer = combineReducers({
  sideBar,
  toast,
})

const store = createStore(rootReducer)
export default store
