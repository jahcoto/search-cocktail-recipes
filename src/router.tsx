import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IndexView from './views/IndexView';
import FavoritesView from './views/FavoritesView';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="/favorites" element={<FavoritesView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
