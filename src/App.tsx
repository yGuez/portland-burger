import React, { useReducer, createContext, Dispatch } from 'react';
import './App.scss';
import ProductsContainer from './containers/products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BasketContainer from './containers/basket';
import { productReducer } from './reducers';
import FormContainer from './containers/payment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { InitialStateType, ProductActions } from './models/reducerTypes';


export const initialState: InitialStateType = {
  products: [],
  total: 0
};

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (state: InitialStateType, action: ProductActions) => productReducer(state, action);

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Router>
      <div className="App">
        <nav className="navbar sticky-top navbar-dark bg-primary mb-5">
          <Link to="/">
            <span className="navbar-brand">
              <FontAwesomeIcon className="mr-3" icon={faHamburger} />
              Portland Burger
            </span>
          </Link>
          <Link to="/basket">
            <span className="navbar-text">
              Total : {state.total} $
            </span>
          </Link>
        </nav>
        <AppContext.Provider value={{ state, dispatch }}>
          <Switch>
            <Route path="/basket">
              <BasketContainer />
            </Route>
            <Route path="/payment">
              <FormContainer />
            </Route>
            <Route path="/">
              <ProductsContainer />
            </Route>
          </Switch>
        </AppContext.Provider>
      </div>
    </Router>
  );
}


export default App;
