import fetch from 'node-fetch';

export async function visit(links: string[]): Promise<void> {
  links.forEach(async (link) => {
    await fetch(link);
  });
}

export default {
  visit,
};
