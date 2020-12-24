import fetch, { Response } from 'node-fetch';
import { parseStringPromise } from 'xml2js';

export async function visit(links: string[]): Promise<void> {
  const visitPromises: Promise<Response>[] = [];

  links.forEach(async (link: string) => {
    visitPromises.push(fetch(link));
  });

  await Promise.all(visitPromises);
}

export async function getSitemap(link: string): Promise<string[]> {
  const rawResult = await fetch(link);
  const xmlResult = await rawResult.text();
  const jsonResult = await parseStringPromise(xmlResult);
  const urls = jsonResult.urlset.url.map((entry) => entry.loc[0]);

  return urls;
}

export default {
  visit,
  getSitemap,
};
