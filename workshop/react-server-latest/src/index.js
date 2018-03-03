import React from 'react';
import ReactDOM from 'react-dom';

import {SearchApp} from './SearchApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SearchApp name="arul" />, document.getElementById('root'));
registerServiceWorker();
