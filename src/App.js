import CategoryBanner from './Categories/CategoryBanner.jsx';
import Card from './Categories/Cards/Card.jsx';
import { CategoryProvider } from './Categories/CategoryContext.js';
import Header from './Header.jsx';
import HandleDailog from './DailogItem/HandleDailog.jsx'
import MainSection from './Section1/MainSection.jsx'
import Footer from './Footer/Footer.jsx'
function App() {
  return (
    <CategoryProvider >
{/* this changed */}
      <Header />
      <MainSection />
      <CategoryBanner />
       <Card />
    <HandleDailog />
    <Footer />
    </CategoryProvider>

  );
}

export default App;
