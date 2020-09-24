import {ADD_TODOS} from '../constants/action-types.js';

export function addTodo(payload) {
    return {type: ADD_TODOS, payload}
}

