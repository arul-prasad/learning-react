import React from 'react';
import ReactDOM from 'react-dom';
import MyHello from './App'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<MyHello name="arul" />, document.getElementById('root'));
registerServiceWorker();
