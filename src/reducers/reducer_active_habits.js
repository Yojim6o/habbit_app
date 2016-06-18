export default function(state = null, action) {
    switch(action.type) {
      case 'HABIT_SELECTED':
        return action.payload;
    }

    return state;
}
