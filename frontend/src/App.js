import CategoryBanner from './Categories/CategoryBanner.jsx';
import Card from './Categories/Cards/Card.jsx';
import { CategoryProvider } from './Categories/CategoryContext.js';
import Header from './Header.jsx';
import MainSection from './Section1/MainSection.jsx'
import Footer from './Footer/Footer.jsx'
function App() {
  return (
    <CategoryProvider >
      <Header />
      <MainSection />
      <CategoryBanner />
       <Card />
    <Footer />
    </CategoryProvider>

  );
}

export default App;
