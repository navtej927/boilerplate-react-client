import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Navbar } from '.';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar component', () => {
  beforeAll(() => {});
  afterAll(cleanup);

  it('should have the right message in the dom', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
