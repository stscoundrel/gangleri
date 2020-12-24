import fetchMock from 'jest-fetch-mock';
import gangleri from '../src/gangleri';

fetchMock.dontMock();

describe('GetSiteMap tests', () => {
  test('Gets sitemap from url.', async () => {
    const url = 'https://www.sitemaps.org/sitemap.xml';

    const result = await gangleri.getSitemap(url);

    expect(Array.isArray(result)).toBeTruthy();
    expect(result[0]).toBe('https://www.sitemaps.org/');
    expect(result[1]).toBe('https://www.sitemaps.org/protocol.html');
  });
});
