import fetch, { Response } from 'node-fetch';

export async function visit(links: string[]): Promise<void> {
  const visitPromises: Promise<Response>[] = [];

  links.forEach(async (link: string) => {
    visitPromises.push(fetch(link));
  });

  await Promise.all(visitPromises);
}

export default {
  visit,
};
