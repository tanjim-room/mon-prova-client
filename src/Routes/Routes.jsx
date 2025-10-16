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
import PatientHelp from '../pages/patientPages/PatientHelp';
import PatientProfile from '../pages/patientPages/PatientProfile';

import DoctorLogin from '../pages/doctorPages/DoctorLogin';
import DoctorRegister from '../pages/doctorPages/DoctorRegister';
import Test from '../pages/testPages/Test';
import DoctorDetails from '../pages/patientPages/DoctorDetails';
import AppointmentForm from '../pages/patientPages/AppointmentForm';
import TwoLoader from '../components/TwoLoader';
import DoctorDashboard from '../pages/doctorPages/DoctorDashboard';
import DoctorAppointment from '../pages/doctorPages/DoctorAppointment';
import Schedule from '../pages/doctorPages/Schedule';
import Income from '../pages/doctorPages/Income';
import DoctorHelp from '../pages/doctorPages/DoctorHelp';
import DoctorProfile from '../pages/doctorPages/DoctorProfile';
import AppointmentDetailsPatient from '../pages/patientPages/AppointmentDetailsPatient';
import AppointmentDetailsDoctor from '../pages/doctorPages/AppointmentDetailsDoctor';
import AdminDashboard from '../pages/adminPages/AdminDashboard';
import AdminDoctors from '../pages/adminPages/AdminDoctors';
import AdminDoctorVerification from '../pages/adminPages/AdminDoctorVerification';
import AdminResources from '../pages/adminPages/AdminResources';


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
                path: 'appointmentDetailsPatient/:aID',
                element: <AppointmentDetailsPatient></AppointmentDetailsPatient>
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
                path: 'patientHelp',
                element: <PatientHelp></PatientHelp>
            },
            {
                path: 'patientProfile',
                element: <PatientProfile></PatientProfile>
            },
            {
                path: 'tester',
                element: <Test></Test>
            },
            {
                path: 'doctorDetails/:doctorID',
                element: <DoctorDetails></DoctorDetails>,
                loader: () => fetch("doctorInfo.json")
                
            },
            {
                path: 'appointmentForm/:doctorID',
                element: <AppointmentForm></AppointmentForm>,
                loader: TwoLoader
            },
            {
                path: 'blog/:slug',
                element: <BlogPage></BlogPage>
            },
            {
                path: 'doctorDashboard',
                element: <DoctorDashboard></DoctorDashboard>
            },
            {
                path: 'appointmentDoctor',
                element: <DoctorAppointment></DoctorAppointment>
            },
            {
                path: 'schedule',
                element:<Schedule></Schedule>
            },
            {
                path: 'income',
                element: <Income></Income>
            },
            {
                path: 'doctorHelp',
                element: <DoctorHelp></DoctorHelp>
            },
            {
                path: 'doctorProfile',
                element: <DoctorProfile></DoctorProfile>
            },
            // Admin routes
            {
                path: 'admin',
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: 'admin/doctors',
                element: <AdminDoctors></AdminDoctors>
            },
            {
                path: 'admin/doctor/:doctorID',
                element: <AdminDoctorVerification></AdminDoctorVerification>
            },
            {
                path: 'admin/resources',
                element: <AdminResources></AdminResources>
            },
            {
                path: 'appointmentDetailsDoctor/:aID',
                element: <AppointmentDetailsDoctor></AppointmentDetailsDoctor>
            }


            
        ]
    },
]);

export  { routes };