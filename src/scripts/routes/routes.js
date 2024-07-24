import Home from '../views/halaman/home';
import Detail from '../views/halaman/detail';
import Favorite from '../views/halaman/favorite';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,

};

export default routes;
