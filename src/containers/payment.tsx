import React from 'react';
import MyForm from '../components/form'

function FormContainer() {
    return (
        <div className="container">
            <h2 className="text-center text-primary mb-5">Procédez au paiement</h2>
            <div className="row">
                <MyForm />
            </div>
        </div>
    )
};

export default FormContainer;