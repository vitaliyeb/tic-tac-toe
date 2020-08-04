import React from 'react';
import {ServicesConsumer} from '../servicesContext/servicesContext'

const withServices = () => (Wrapped) =>{
    return (props) =>{
        return (
            <ServicesConsumer>
                {
                    (services) => {
                        <Wrapped {...props} services />
                    }
                }
            </ServicesConsumer>
        )
    }
}