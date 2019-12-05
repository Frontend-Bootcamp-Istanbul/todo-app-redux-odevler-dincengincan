import {SET_FILTER, SET_TODOS, ADD_TODO, REMOVE_TODO, REMOVE_ALL, TOGGLE_COMPLETESTATUS} from "../actions/actions";

export function setFilter(newFilter){
    return {type: SET_FILTER, activeFilter: newFilter}
}

export function setTodos(todos){
    return {type: SET_TODOS, todos}
}

export function addTodo(todo){
    return {type: ADD_TODO, todo}
}

export function removeTodo(id){
    return {type: REMOVE_TODO, id}
}

export function removeAll(){
    return {type: REMOVE_ALL} 
}

export function toggleCompleteStatus(id){
    return {type: TOGGLE_COMPLETESTATUS, id} 
}

