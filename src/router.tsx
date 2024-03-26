import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexView from './views/IndexView';
import FavoriteView from './views/FavoriteView';
import Layout from './layout/Layout';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexView />} index />
          <Route path="/favoritos" element={<FavoriteView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
