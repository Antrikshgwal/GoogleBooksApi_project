import React from 'react';
import App from './App.jsx';
import Card from './components/Books/card.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MoreAbtBook from './components/MoreAbtBook/MoreAbtBook';
import Results from './components/search/results.jsx';
import BookList from './components/categories/Bookslist.jsx';




const router = createBrowserRouter([{
    path:'/',
    element: <App/>
  },
  {
    path:'/:BookId',
    element:<Card/>
  },

  {
    path:'/MoreAbtBook/:BookId',
    element:<MoreAbtBook/>
  },
{
  path:'/:BookId',
  element:<Results/>
},
{
  path:'/:BookId',
  element:<BookList/>
}
]);

  export default router;
  