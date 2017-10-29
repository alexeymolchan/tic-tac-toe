import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {injectGlobal} from 'styled-components';

injectGlobal`
	body {
		margin: 0;
    background-color: #FFF;
    font-family: Source Sans Pro, sans-serif;
    font-size: 16px;
    min-height: 100vh;
    display: flex;
    flex: 1;
	}
	
	#root {
	  display: flex;
	  flex: 1;
	  align-self: stretch;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
