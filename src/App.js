import CategoryBanner from './Categories/CategoryBanner.jsx';
import Card from './Categories/Cards/Card.jsx';
import { CategoryProvider } from './Categories/CategoryContext.js';
import Header from './Header.jsx';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <CategoryProvider >

        <Header />
        <CategoryBanner />

       <Card />

       
      
    </CategoryProvider>
  );
}

export default App;
