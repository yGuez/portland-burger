import React from 'react';


function ProductComponent(productComponent: { image: string | undefined; title: React.ReactNode; description: React.ReactNode; onClicked: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; }) {
    return (
        <div className="card p-3 h-100">
            <img src={productComponent.image} className="card-img-top" alt="product"></img>
            <div className="card-body">
                <h5 className="card-title">{productComponent.title}</h5>
                <small>{productComponent.description}</small>
            </div>
            <button onClick={productComponent.onClicked} className="btn btn-primary">Ajouter</button>
        </div>
    )
}

export default ProductComponent;