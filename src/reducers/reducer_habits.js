export default function (state = null, action) {
  switch(action.type) {
    case 'SET_HABITS':
      console.log('Setting habits to', action.habits);
      return action.habits;
  }

  return state;
}