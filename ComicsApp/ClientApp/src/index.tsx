import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import { comicStore } from './stores/comicStore.ts';
import App from "./App.tsx";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider comicStore={comicStore}>
        <App />
    </Provider>
);