import React, { Component } from "react";

import { Link } from "react-router-dom";

import { ProductConsumer } from "../globalData/Context";


import { Breadcrumb, BreadcrumbItem, Label, CustomInput, FormGroup, Form } from 'reactstrap';

import '../../css/checkout.css';

import emailjs from 'emailjs-com';

export default class CheckoutPage extends Component {
    constructor (props){
        super(props);
      
        this.state = {
            email: '',
        };
      
    //    this.onToggleLoop = this.onToggleLoop.bind(this);
      
      }
    
    handleSubmit(e) {
       const {email}  = this.state
        let templateParams = {
            "userEmail": email
        }
        emailjs.send(
            'gmail',
            'template_agIxxU2q',
            templateParams,
            'user_0OeoWWZunBF7cHZVazUnV'
        ).then(res => {
            console.log('Email successfully sent!')
          })
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
        //this.resetForm()
    }
    
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
        console.log(this.state.email)
      }

    render() {
        return (
            <>
                <ProductConsumer>
                    {(value) => {
                        return (
                            <div class="ps-content pt-80 pb-80" style={{}}>
                                <h3 class="ps-section__title" data-mask="Ma COMMANDE">Réglement de commande</h3>

                                <Breadcrumb style={{
                                    margin: '36px',
                                    textAlign: 'left',
                                    display: "flex",
                                    flexWrap: "wrap",
                                }}>
                                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                                    <BreadcrumbItem><a href="/cart">Panier</a></BreadcrumbItem>
                                    <BreadcrumbItem style={{
                                        color: "#2ac37d",
                                        fontWeight: "bold"


                                    }} active>Commande</BreadcrumbItem>
                                </Breadcrumb>

                                <h2 style={{
                                    marginLeft: '36px',
                                    marginBottom: '24px',
                                }}>
                                    Détails acheteur
                    </h2>
                                <div class="ps-container">
                                    <div class="row" style={{
                                        margin: '24px'
                                    }}>
                                        <div class="column" style={{
                                            paddingRight: '24px'
                                        }}>
                                            <h3><i class="fas fa-user"></i> Informations personnelles</h3>
                                            <hr></hr>
                                            <div class="ps-home-contact__form" style={{
                                                textAlign: "left",
                                            }}>
                                                <div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Nom <span style={{
                                                            color: "red",
                                                        }}><b>*</b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Nom' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div>
                                                <div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Prénom <span style={{
                                                            color: "red",
                                                        }}><b>*</b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Prénom' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div><div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Email <span style={{
                                                            color: "red",
                                                        }}><b>*</b></span>
                                                    </label>
                                                    <input class="form-control" type="email"name="email" placeholder='Email' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} onChange={this.handleChange.bind(this, 'email')}/>
                                                </div><div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Téléphone <span style={{
                                                            color: "red",
                                                        }}><b>*</b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Téléphone' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div>
                                                <hr></hr>

                                                <h3 style={{
                                                    textAlign: "center",
                                                }}><i class="fas fa-money-check-alt"></i> Méthode de paiement</h3>
                                                <hr></hr>
                                                <Form>
                                                    <FormGroup>

                                                        <div>
                                                            <div className="row" style={{
                                                            }}>< CustomInput type="radio" className="column" id="exampleCustomRadio" name="customRadio" label=" Paiement à la livraison" style={{

                                                            }} />
                                                                <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label=" Paiement en ligne" className="column" />

                                                            </div>

                                                        </div>
                                                    </FormGroup>
                                                </Form>
                                            </div>


                                        </div>

                                        <div class="column" style={{
                                            paddingLeft: '24px'
                                        }}>
                                            <h3><i class="fas fa-map-marker-alt"></i> Adresse</h3>
                                            <hr></hr>
                                            <div class="ps-home-contact__form" style={{
                                                textAlign: "left",
                                            }}>
                                                <div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Entreprise <span style={{
                                                            color: "red",
                                                        }}><b></b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Entreprise' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div>
                                                <div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",

                                                    }}>
                                                        Adresse 1 <span style={{
                                                            color: "red",
                                                        }}><b>*</b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Adresse' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div><div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Adresse <span style={{
                                                            color: "red",
                                                        }}><b></b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Adresse' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div><div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Ville <span style={{
                                                            color: "red",
                                                        }}><b>*</b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Ville' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div>
                                                <div class="form-group">
                                                    <label style={{
                                                        fontWeight: "normal",
                                                    }}>
                                                        Code postal <span style={{
                                                            color: "red",
                                                        }}><b>*</b></span>
                                                    </label>
                                                    <input class="form-control" type="text" placeholder='Code postal' style={{
                                                        backgroundColor: "#f5f5f5"
                                                    }} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="ps-cart-listing" style={{
                                        margin: "auto auto"

                                    }}>

                                        <div class="ps-cart__actions" style={{
                                            margin: "auto auto"

                                        }}>

                                            <div class="ps-cart__total" style={{
                                                margin: "auto auto"

                                            }}>

                                                <Link to="/ValidateOrder"><a class="ps-btn" onClick={this.handleSubmit.bind(this)} >
                                                    Suivant<i class="ps-icon-next"></i>
                                                </a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </ProductConsumer>
            </>
        );
    }
}
