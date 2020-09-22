import store from "./store/index";
import { addTodo } from "./actions/index";

window.store = store;
window.addTodo = addTodo;