import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Fcs from './components/flexContainerStyle/flexContainerStyle';
import Sac from './components/sac/sac';
import Categories from './components/categories/categories';
import BookList from './components/categories/Bookslist';
import QuotesDisplay from './components/quotes/quotes';
import Footer from './components/footer/footer'







function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (

          <>
          <Navbar/>
            <Fcs/>
            <Sac/>
            <Categories onSelectCategory={setSelectedCategory} />
            {selectedCategory && <BookList category={selectedCategory} />}
            <QuotesDisplay/>
            <Footer/>
            {/* <Card /> */}
          </>
      
    
  
  );
}

export default App;
