import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/styles.css';
import './css/timelineStyles.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
