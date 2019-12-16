import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Root from './containers/Root';
import reducers from './reducers';
import './styles.scss';

const store = createStore(reducers);
store.subscribe(() => console.log(store.getState()))

render(
    <Root store={store} />,
    document.getElementById('root')
);