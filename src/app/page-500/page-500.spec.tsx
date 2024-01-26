import { render } from '@testing-library/react';
import { Page500 } from './page-500';

describe('Page500', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Page500 />
    );
    expect(baseElement).toBeTruthy();
  });
});
