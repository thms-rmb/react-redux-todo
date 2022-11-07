import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    if (container !== null) {
        const root = ReactDOMClient.createRoot(container);
        root.render(
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
});
