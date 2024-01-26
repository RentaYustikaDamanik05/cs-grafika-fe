import { render } from '@testing-library/react';
import { Page500 } from './page-500';
import { BrowserRouter } from 'react-router-dom';

describe('Page500', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Page500 />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
