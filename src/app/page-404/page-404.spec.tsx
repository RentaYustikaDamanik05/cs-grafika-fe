import { render } from '@testing-library/react';
import { Page404 } from './page-404';
import { BrowserRouter } from 'react-router-dom';

describe('Page404', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
