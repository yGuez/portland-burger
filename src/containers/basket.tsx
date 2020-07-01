import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import { groupBy } from '../utils/utils';

function BasketContainer() {
    const { state, dispatch } = useContext(AppContext);
    const productGroup = groupBy(state.products, 'type');

    return (
        <div className="container">
            <h2 className="text-center text-primary mb-5">Récapitulatif de votre commande</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Produit</th>
                        <th scope="col">Quantité</th>
                        <th scope="col">Prix</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(productGroup).map((product, i) => {
                        return <tr>
                            <td>{productGroup[product][0].title} <small className="text-muted">- {productGroup[product][0].description}</small></td>
                            <td>{productGroup[product].length}</td>
                            <td>{productGroup[product][0].price}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div className="text-sm-right mt-5">
                <h5 className="mb-3">Total : {state.total} $</h5>
                <Link to="/">
                    <button className="btn btn-secondary mr-sm-3">Retour</button>
                </Link>
                <Link to="/payment">
                    <button className="btn btn-primary">Valider</button>
                </Link>
            </div>
        </div>
    )
}

export default BasketContainer;