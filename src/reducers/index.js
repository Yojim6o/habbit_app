import { combineReducers } from 'redux';
import HabitsReducer from './reducer_habits';
import ActiveHabit from './reducer_active_habits';

const rootReducer = combineReducers({
	habits: HabitsReducer,
	activeHabit: ActiveHabit
});

export default rootReducer;
