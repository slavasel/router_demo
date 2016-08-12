/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

const rootRoute = {
    component: 'div',
    childRoutes: [ {
        path: '/',
        component: require('./components/App'),
        childRoutes: [
            require('./routes/Users')
        ]
    } ]
}

render(
    <Router history={browserHistory} routes={rootRoute} />,
    document.getElementById('example')
);