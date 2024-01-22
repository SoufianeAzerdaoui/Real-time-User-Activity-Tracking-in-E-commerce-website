import CategoryBanner from './Categories/CategoryBanner.jsx';
import Card from './Categories/Cards/Card.jsx';
import { CategoryProvider } from './Categories/CategoryContext.js';
import Header from './Header.jsx';

function App() {
  return (
    
    <CategoryProvider >
{/* this changed */}
      <Header />

      <CategoryBanner />

       <Card />

    </CategoryProvider>
  );
}

export default App;
