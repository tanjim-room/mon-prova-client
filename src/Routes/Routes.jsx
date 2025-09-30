import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import PatientLogin from '../pages/PatientLogin';
import PatientRegister from '../pages/PatientRegister';
import DoctorLogin from '../pages/DoctorLogin';
import DoctorRegister from '../pages/DoctorRegister';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'patientLogin',
                element: <PatientLogin></PatientLogin>
            },
            {
                path: 'patientRegister',
                element: <PatientRegister></PatientRegister>
            },
            {
                path: 'doctorLogin',
                element: <DoctorLogin></DoctorLogin>
            },
            {
                path: 'doctorRegister',
                element: <DoctorRegister></DoctorRegister>
            }
            
        ]
    },
]);

export  { routes };