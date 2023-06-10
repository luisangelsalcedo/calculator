import { createRoot } from 'react-dom/client';
import { App } from './app/App';

import './assets/scss/main.scss';

createRoot(document.getElementById('app')).render(<App />);
