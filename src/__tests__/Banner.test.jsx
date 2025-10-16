import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '../components/Banner';
import { MemoryRouter } from 'react-router-dom';

describe('Banner', () => {
  it('renders headline and support cards and CTAs', () => {
    render(
      <MemoryRouter>
        <Banner />
      </MemoryRouter>
    );

    // Headline text should be present
    const headline = screen.getByText(/ডিপ্রেশন, উদ্বিগ্ন|ডিপ্রেশন, উদ্বেগ/i);
    expect(headline).toBeInTheDocument();

    // CTA buttons
    const patientCta = screen.getByText(/রোগী হিসেবে প্রবেশ করুন/i);
    const doctorCta = screen.getByText(/ডাক্তার হিসেবে প্রবেশ করুন/i);
    expect(patientCta).toBeInTheDocument();
    expect(doctorCta).toBeInTheDocument();

    // Support cards
    const support1 = screen.getByText(/সাহায্য সেবা/i);
    const support2 = screen.getByText(/ডাক্তার সহায়তা/i);
    const support3 = screen.getByText(/তত্বাবধান ও রিসোর্স/i);
    expect(support1).toBeInTheDocument();
    expect(support2).toBeInTheDocument();
    expect(support3).toBeInTheDocument();
  });
});
