import fetch from 'node-fetch';
import PromisePool from '@supercharge/promise-pool';
import { parseStringPromise } from 'xml2js';

export async function visit(links: string[], limit = 1): Promise<void> {
  let count = 1;
  await PromisePool
    .withConcurrency(limit)
    .for(links)
    .process(async (link) => {
      const result = await fetch(link);
      console.log(`${count} status: ${result.status} ${link}`);
      count += 1;
    });
}

export async function getSitemap(link: string): Promise<string[]> {
  const rawResult = await fetch(link);
  const xmlResult = await rawResult.text();
  const jsonResult = await parseStringPromise(xmlResult);
  const urls = jsonResult.urlset.url.map((entry) => entry.loc[0]);

  return urls;
}

export async function visitSitemap(link: string, limit = 1): Promise<void> {
  const links: string[] = await getSitemap(link);
  await visit(links, limit);
}

export default {
  visit,
  getSitemap,
  visitSitemap,
};
