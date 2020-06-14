import React from 'react';
import logo from './logo.svg';
import { burgers } from './const/burgers';
import './App.css';
import { boissons } from './const/boissons';
import { sides } from './const/sides';
import { Product } from './models/product';

function App() {
  const burgersList: Array<Product> = burgers;
  const sidesList: Array<Product> = sides;
  const drinksList: Array<Product> = boissons;
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"></img>
        </a>
        <span className="navbar-text">
          Total
        </span>
      </nav>
      <div className="container">
        <div className="row text-left mt-5">
          <div className="col">
            <h3>
              Burgers
              <small className="text-muted"> 10€</small>
            </h3>
          </div>
        </div>

        <div className="row">

          {burgersList.map((burger:Product, index) => {
            return <div className="col-md-3">
              <div className="card">
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{burger.title}</h5>
                  {burger.description}
                </div>
                <button className="btn btn-primary">Ajouter</button>
              </div>
            </div>
          })}
        </div>
        <div className="row text-left mt-5">
          <div className="col">
            <h3>
              Sides
              <small className="text-muted"> 3€</small>
            </h3>
          </div>
        </div>
        <div className="row">
          {sidesList.map((side:Product, index) => {
            return <div className="col-md-3">
              <div className="card">
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{side.title}</h5>
                  {side.description}
                </div>
                <button className="btn btn-primary">Ajouter</button>
              </div>
            </div>
          })}
        </div>
        <div className="row text-left mt-5">
          <div className="col">
            <h3>
              Boisson
              <small className="text-muted"> 3€</small>
            </h3>
          </div>
        </div>
        <div className="row">
          {drinksList.map((drink:Product, index) => {
            return <div className="col-md-3">
              <div className="card">
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{drink.title}</h5>
                  {drink.description}
                </div>
                <button className="btn btn-primary">Ajouter</button>
              </div>
            </div>
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
