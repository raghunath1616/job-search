import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import { reducer as formReducer } from "redux-form"
import JobSearchReducer from "container/reducer"

const rootReducer = combineReducers({
  form: formReducer,
  jobs: JobSearchReducer,
  routing,
})

export default rootReducer
