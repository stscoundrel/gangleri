import fetchMock from 'jest-fetch-mock';
import gangleri from '../src/gangleri';

describe('Visit test', () => {
  test('Visits array of urls.', async () => {
    const urls = [
      'https://vercel.com/',
      'https://github.com/',
      'https://www.typescriptlang.org/',
    ];

    await gangleri.visit(urls);

    expect(fetchMock.mock.calls.length).toBe(3);
  });
});
