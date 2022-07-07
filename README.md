# Gangleri

Walk through pages in a sitemap.

Simply connects to each page in a sitemap. Useful if connecting to a page triggers action, like revalidation or build.

### Install

`yarn add gangleri`

### Usage

Visiting sites in sitemap.xml.

```javascript
const gangleri = require('gangleri');

const sitemapUrl = 'https://yoursite.com/sitemap.xml'

// Second argument is number of allowed simultaneous connections.
await gangleri.visitSitemap(sitemapUrl, 10)

```

Visiting sites in array of urls.

```javascript
const gangleri = require('gangleri');

const urls = [
	'https://page.com/1',
	'https://page.com/2',
	'https://page.com/3',
	'https://page.com/4',
]

// Second argument is number of allowed simultaneous connections.
await gangleri.visit(urls, 2)

```

#### Example Next.js / Vercel projects using Gangleri:
- [Old Icelandic Dictionary](https://github.com/stscoundrel/gangleri-zoega)
- [Old Norse Dictionary](https://github.com/stscoundrel/gangleri-cleasby-vigfusson)


#### What's in the name?

Gangleri means "strider", "wanderer", or literally, "walker" in Old Norse. It comes from Old Norse verb "ganga" (to walk). Gangleri was an alias used by Swedish king Gylfi in Prose Edda, while appearing in disguise.
