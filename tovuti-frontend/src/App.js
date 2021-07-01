import './App.css';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Homepage from './components/ProductMS/Homepage';
import Categoriespage from './components/ProductMS/Categoriespage';
import CartScreen from './pages/CartScreen';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/productDetails/:id" component={ProductScreen} />
        <Route path="/product-ms" component={Homepage} />
        <Route path="/categories" component={Categoriespage} />
        <Route path="/cart" component={CartScreen} />
      </Switch>
    </Router>
  );
}

export default App;
