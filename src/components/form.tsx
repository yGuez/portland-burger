import React from 'react';
import * as Yup from "yup";
import { Form, Field, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FormValues } from '../models/formPayment';


const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    nom: Yup.string()
        .required("Nom is required"),
    prenom: Yup.string()
        .required("Prenom is required"),
    adresse: Yup.string()
        .required("Adresse is required"),
    codePostal: Yup.string()
        .required("Code postal is required"),
    ville: Yup.string()
        .required("Ville is required"),
    cardNumber: Yup.string()
        .required("Numero de carte is required"),
    cardExpiration: Yup.string()
        .required("Expiration is required"),
    cardCrytograme: Yup.string()
        .required("Crytograme is required"),
});

const initialValues: FormValues = {
    email: '',
    nom: '',
    prenom: '',
    adresse: '',
    codePostal: '',
    ville: '',
    cardNumber: '',
    cardExpiration: '',
    cardCrytograme: '',

}
function MyForm() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={({ }) => {
            }}
        >
            {({ touched, errors, isSubmitting, isValid }) => (
                <div className="col-12">
                    <Form>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Nom *</label>
                                    <Field className={`form-control ${touched.nom && errors.nom ? "is-invalid" : ""}`} type="text" name="nom" />
                                    {touched.nom && errors.nom && <div className="invalid-feedback">{errors.nom}</div>}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group">
                                    <label>Prenom *</label>
                                    <Field className={`form-control ${touched.prenom && errors.prenom ? "is-invalid" : ""}`} type="text" name="prenom" />
                                    {touched.prenom && errors.prenom && <div className="invalid-feedback">{errors.prenom}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label>Email *</label>
                                    <Field className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`} type="email" name="email" />
                                    {touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label>Adresse *</label>
                                    <Field className={`form-control ${touched.adresse && errors.adresse ? "is-invalid" : ""}`} type="text" name="adresse" />
                                    {touched.adresse && errors.adresse && <div className="invalid-feedback">{errors.adresse}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="form-group">
                                    <label>Code postal *</label>
                                    <Field className={`form-control ${touched.codePostal && errors.codePostal ? "is-invalid" : ""}`} type="number" name="codePostal" />
                                    {touched.codePostal && errors.codePostal && <div className="invalid-feedback">{errors.codePostal}</div>}
                                </div>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="form-group">
                                    <label>Ville *</label>
                                    <Field className={`form-control ${touched.ville && errors.ville ? "is-invalid" : ""}`} type="text" name="ville" />
                                    {touched.ville && errors.ville && <div className="invalid-feedback">{errors.ville}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="alert alert-success" role="alert">
                                    <h5 className="text-left"><FontAwesomeIcon icon={faLock} /> Carte bancaire *</h5>
                                    <div className="row mt-3">
                                        <div className="col-12 col-md-6">
                                            <div className="form-group">
                                                <label>Numéro de carte</label>
                                                <Field className={`form-control ${touched.cardNumber && errors.cardNumber ? "is-invalid" : ""}`} type="text" name="cardNumber" />
                                                {touched.cardNumber && errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="form-group">
                                                <label>Expiration</label>
                                                <Field className={`form-control ${touched.cardExpiration && errors.cardExpiration ? "is-invalid" : ""}`} type="month" name="cardExpiration" />
                                                {touched.cardExpiration && errors.cardExpiration && <div className="invalid-feedback">{errors.cardExpiration}</div>}
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                            <div className="form-group">
                                                <label>Crytograme</label>
                                                <Field className={`form-control ${touched.cardCrytograme && errors.cardCrytograme ? "is-invalid" : ""}`} type="text" name="cardCrytograme" />
                                                {touched.cardCrytograme && errors.cardCrytograme && <div className="invalid-feedback">{errors.cardCrytograme}</div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <Link to="/basket">
                                <button className="btn btn-secondary mr-sm-3">Retour</button>
                            </Link>
                            <button className="btn btn-primary" type="submit" disabled={isValid || isSubmitting}>Confirmer</button>
                        </div>

                    </Form>
                </div>
            )
            }

        </Formik >
    )
}

export default MyForm;