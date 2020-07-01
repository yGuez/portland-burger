import { Product } from "../models/product";
import React, { useContext } from 'react';
import { burgers } from "../const/burgers";
import { sides } from "../const/sides";
import { boissons } from "../const/boissons";
import ProductComponent from "../components/product";
import { Types } from "../reducers";
import { AppContext } from "../App";

function ProductsContainer() {
  const burgersList: Array<Product> = burgers;
  const sidesList: Array<Product> = sides;
  const drinksList: Array<Product> = boissons;
  

  const {state, dispatch} = useContext(AppContext);

  const addToCart = (product: any) => {

      dispatch({ type: Types.Add, payload: product});
  };

  return (
    <div className="container">
      <h2 className="text-center text-primary">Les Burgers vegan et écologiques nantais</h2>
      <div className="row text-left mt-5">
        <div className="col">
          <h3>
            Burgers
              <small className="text-muted"> 10€</small>
          </h3>
        </div>
      </div>
      <div className="row">
        {burgersList.map((burger: Product, i) => {
          return <div className="col-md-3 mt-3" key={i}>
            <ProductComponent             
              title={burger.title}
              image={burger.image}
              description={burger.description}
              onClicked={() => addToCart(burger)}></ProductComponent>
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
        {sidesList.map((side: Product, i) => {
          return <div className="col-md-3 mt-3" key={i}>
            <ProductComponent              
              image={side.image}
              title={side.title}
              description={side.description}
              onClicked={() => addToCart(side)}></ProductComponent>
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
        {drinksList.map((drink: Product, i) => {
          return <div className="col-md-3 mt-3" key={i}>
            <ProductComponent              
              image={drink.image}
              title={drink.title}
              description={drink.description}
              onClicked={() => addToCart(drink)}></ProductComponent>
          </div>
        })}
      </div>
    </div>
  )
}


export default ProductsContainer;