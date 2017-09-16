import React from 'react'

import {connect} from "react-redux";
import {addTodo} from "../actions";

import AddList from './AddList'
import MyList from './MyList'

let Root = ({dispatch}) => { //所有子 组件  都能使用  dispatch

    let input;

    return (
        <div>

            <AddList/>
            <MyList/>

        </div>
    );
};

let App = connect()(Root); //将 app 包装成  容器组件

export default App
