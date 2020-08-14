import React from 'react';
import ReactDom from 'react-dom';
import Main from './views/Main';

//import CSS
import "./scss/custom.scss";

ReactDom.render(
    <Main />,
    document.querySelector('#root')
)
