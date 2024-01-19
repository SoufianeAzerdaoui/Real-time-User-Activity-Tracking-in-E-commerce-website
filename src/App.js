import CategoryBanner from './Categories/CategoryBanner.jsx';
import Dashboard from './Dashboard.jsx'
import Card from './Categories/Cards/Card.jsx';
import { CategoryProvider } from './Categories/CategoryContext.js';


function App() {
  return (
    <CategoryProvider>

      <Dashboard />
       
       <CategoryBanner /> 

       <Card />

    </CategoryProvider>
  );
}

export default App;
