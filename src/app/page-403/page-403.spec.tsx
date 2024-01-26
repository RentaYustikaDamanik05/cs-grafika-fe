import { render } from '@testing-library/react';
import { Page403 } from './page-403';
import { BrowserRouter } from 'react-router-dom';

describe('Page403', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Page403 />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
