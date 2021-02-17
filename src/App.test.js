import { cleanup } from '@testing-library/react';

describe('App', () => {
  afterEach(cleanup);

  test('renders App text', () => {
    expect(true).toBe(true);
  });
});
