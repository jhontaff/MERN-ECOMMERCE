import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import ProductView from './screens/ProductView';

function App() {
  return (
    <BrowserRouter>
      {' '}
      {/* uso del react-router-dom  package para realizar rutas*/}
      <div>
        <header>
          <Link to="/">TIF Store</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<ProductView />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
