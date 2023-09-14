import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import DashBoard from './pages/dashboard/DashBoard';
import Order from './pages/order/Order';
import Products from './pages/products/Products';
import Overview from './pages/overview/Overview';
import Customer from './pages/customer/Customer';
import Message from './pages/message/Message';
import Settings from './pages/settings/Settings';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Sidebar />
          <Switch>
            <Route path='/' exact><DashBoard /></Route>
            <Route path='/orders' exact> <Order/> </Route>
            <Route path='/products' exact> <Products/></Route>
            <Route path='/overviews' exact><Overview/></Route>
            <Route path='/customers' exact><Customer/></Route>
            <Route path='/messages' exact><Message/></Route>
            <Route path='/settings' exact><Settings/></Route>
            
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
