import { render } from '@testing-library/react';
import { AppLayout } from './layout';
import { BrowserRouter } from 'react-router-dom';

describe('AppLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
