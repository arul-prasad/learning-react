import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store';
import {Provider} from 'react-redux';

import SearchApp from './SearchApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
    <SearchApp name="arul" />
    </Provider> , 
    document.getElementById('root'));
registerServiceWorker();
