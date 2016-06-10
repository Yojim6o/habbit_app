export function selectHabit(habit) {
	return {
		type: 'HABIT_SELECTED',
		payload: habit
	};
}
