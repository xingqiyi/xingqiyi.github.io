import React from 'react'

import {connect} from 'react-redux'

import TodoList from '../components/TodoList'

import {toggleTodo} from "../actions";



const mapStateToProps = state => ({
  // todos: getVisibleTodos(state.todos, state.visibilityFilter)
  todos: state.todos
});

const mapDispatchToProps = {
  onTodoClick: toggleTodo

};

const MyList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default MyList;
