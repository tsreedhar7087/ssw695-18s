import { FETCH_PORTFOLIO } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_PORTFOLIO:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
