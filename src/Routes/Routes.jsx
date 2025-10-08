import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';

import PatientLogin from '../pages/patientPages/PatientLogin';
import PatientRegister from '../pages/patientPages/PatientRegister';
import PatientDashboard from '../pages/patientPages/PatientDashboard';
import Assessment from '../pages/patientPages/Assessment';
import DoctorList from '../pages/patientPages/DoctorList';
import Prescription from '../pages/patientPages/Prescription';
import Resources from '../pages/patientPages/Resources';
import BlogPage from '../pages/patientPages/BlogPage';
import Appointment from '../pages/patientPages/Appointment';
import Games from '../pages/patientPages/Games';
import PatientProfile from '../pages/patientPages/PatientProfile';

import DoctorLogin from '../pages/doctorPages/DoctorLogin';
import DoctorRegister from '../pages/doctorPages/DoctorRegister';
import Test from '../pages/testPages/Test';
import DoctorDetails from '../pages/patientPages/DoctorDetails';
import AppointmentForm from '../pages/patientPages/AppointmentForm';
import TwoLoader from '../components/TwoLoader';

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
                path: 'appointment',
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
            },
            {
                path: 'test',
                element: <Test></Test>
            },
            {
                path: 'doctorDetails/:doctorID',
                element: <DoctorDetails></DoctorDetails>,
                loader: () => fetch("../../../../public/doctorInfo.json")
                
            },
            {
                path: 'appointmentForm/:doctorID',
                element: <AppointmentForm></AppointmentForm>,
                loader: TwoLoader
            },
            {
                path: 'blog/:slug',
                element: <BlogPage></BlogPage>
            }


            
        ]
    },
]);

export  { routes };