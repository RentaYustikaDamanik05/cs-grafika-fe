import { render } from '@testing-library/react';
import { Page403 } from './page-403';

describe('Page403', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Page403 />
    );
    expect(baseElement).toBeTruthy();
  });
});
