import { ADD_COMMENT } from './actions';
import { REMOVE_COMMENT } from './actions';
import { EDIT_COMMENT } from './actions';
import { THUMB_UP_COMMENT } from './actions';
import { THUMB_DOWN_COMMENT } from './actions';


export default function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state]
            })
        default:
            return state;
    }
}