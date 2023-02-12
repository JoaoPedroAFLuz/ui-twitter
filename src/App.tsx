import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

import { Sidebar } from './components/Sidebar';

import './global.css';

export function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
