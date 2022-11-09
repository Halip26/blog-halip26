import { escape } from '@/lib/utils/htmlEscaper'

import siteMetadata from '@/data/siteMetadata'
import { PostFrontMatter } from 'types/PostFrontMatter'

const generateRssItem = (post: PostFrontMatter) => `
  <item>
    <title>${escape(post.title)}</title>
    <link>${siteMetadata.siteUrl}/post/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`

const generateRss = (posts: PostFrontMatter[], page = 'feed.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(siteMetadata.title)}</title>
      <link>${siteMetadata.siteUrl}/post</link>
      <description>${escape(siteMetadata.description)}</description>
      <language>${siteMetadata.language}</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${siteMetadata.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`
export default generateRss
