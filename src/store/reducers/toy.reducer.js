export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const ADD_TOY = 'ADD_TOY'
export const SET_FILTER_BY = 'SET_FILTER_BY'
export const UPDATE_ACTIVE_TOY = 'UPDATE_ACTIVE_TOY'
export const UPDATE_COMPLETED = 'UPDATE_COMPLETED';

const initialState = {
    toys: [],
}

export function toyReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_TOYS:
            return { ...state, toys: action.toys }

        case REMOVE_TOY:
            const updatedToys = state.toys.filter(toy => toy._id !== action.toyId)
            return { ...state, toys: updatedToys }

        default:
            return state;
    }
} 