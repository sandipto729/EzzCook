import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import RecipeList from '../Pages/RecipeBook/recipeList';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'recipebook', element: <RecipeList /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default router;
