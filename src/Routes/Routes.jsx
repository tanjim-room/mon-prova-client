import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import PatientLogin from '../pages/PatientLogin';
import PatientRegister from '../pages/PatientRegister';
import DoctorLogin from '../pages/DoctorLogin';
import DoctorRegister from '../pages/DoctorRegister';
import PatientDashboard from '../pages/PatientDashboard';
import Assessment from '../pages/Assessment';
import Appointment from '../pages/Appointment';
import DoctorList from '../pages/DoctorList';
import Prescription from '../pages/Prescription';
import Resources from '../pages/Resources';
import PatientProfile from '../pages/PatientProfile';

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
            },
            {
                path: 'patientDashboard',
                element: <PatientDashboard></PatientDashboard>
            },
            {
                path: 'assessment',
                element: <Assessment></Assessment>
            },
            {
                path: 'appoinment',
                element: <Appointment></Appointment>
            },
            {
                path: 'doctors',
                element: <DoctorList></DoctorList>
            },
            {
                path: 'prescription',
                element: <Prescription></Prescription>
            },
            {
                path: 'resources',
                element: <Resources></Resources>
            },
            {
                path: 'games',
                element: <Games></Games>
            },
            {
                path: 'patientProfile',
                element: <PatientProfile></PatientProfile>
            }


            
        ]
    },
]);

export  { routes };