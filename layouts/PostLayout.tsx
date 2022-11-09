import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
// import Comments from '@/components/comments'
import { ReactNode } from 'react'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'
import ImageTransition from '@/components/ImageTransition'
import ImageAvatarTransition from '@/components/ImageAvatarTransition'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/post/${slug}`
  )}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface Props {
  frontMatter: PostFrontMatter
  authorDetails: AuthorFrontMatter[]
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
  children: ReactNode
}

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }: Props) {
  const { slug, fileName, date, title, tags, image, readingTime } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/post/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div className="">
          <header className="pt-6">
            <div className="space-y-2 md:text-center">
              <div className="pb-5 lg:pt-0">
                {image && (
                  <div className="shadow-md aspect-w-2 aspect-h-1 md:aspect-w-3 md:aspect-h-1 2xl:aspect-w-16 2xl:aspect-h-5">
                    <ImageTransition
                      src={image}
                      quality={80}
                      alt="Image"
                      layout="fill"
                      // className="object-cover rounded-md"
                    />
                  </div>
                )}
              </div>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div>
                <dd className="text-sm font-medium leading-6 text-gray-500 md:mt-3 md:text-base dark:text-gray-400">
                  <dt className="sr-only">Published on</dt>
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </time>
                  {' · '}
                  <dt className="sr-only">Reading time</dt>
                  <span>Dibaca {readingTime} menit</span>
                </dd>
              </div>
            </div>
            <div className="flex pt-6 border-b border-gray-200 pb-7 md:justify-center xl:pt-8 dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="space-x-8 md:justify-center xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2 " key={author.name}>
                      {author.avatar && (
                        <ImageAvatarTransition
                          src={author.avatar}
                          width="50px"
                          height="50px"
                          alt="avatar"
                          quality="80"
                          // className="w-10 h-10 rounded-full"
                        />
                      )}
                      <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </header>
          <div className="pb-8">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0">
              <div className="pb-8 prose pt-7 dark:prose-dark max-w-none md:text-xl md:leading-9">
                {children}
              </div>
              <div className="text-center font-semibold pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Diskusikan di Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'Lihat di GitHub'}</Link>
              </div>
              <div />
              {/* <Comments frontMatter={frontMatter} /> */}
            </div>
            <footer>
              <footer>
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                  {prev && (
                    <div className="pt-4 xl:pt-8">
                      <Link
                        href={`/post/${prev.slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        &larr; {prev.title}
                      </Link>
                    </div>
                  )}
                  {next && (
                    <div className="pt-4 xl:pt-8">
                      <Link
                        href={`/post/${next.slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {next.title} &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              </footer>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
