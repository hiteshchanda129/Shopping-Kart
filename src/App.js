
import './App.css';
import Header from './container/Header';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import ProductListing from './container/ProductListing';
import ProductDetails from './container/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<ProductListing />}/>
        <Route path='/product/:productId' exact element={<ProductDetails />} />
        <Route >404 Not Found</Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
