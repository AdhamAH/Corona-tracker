import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/more/About';

test('renders About component', () => {
  render(<About />);
});

// TODO test invalid card data (image, text, etc)
