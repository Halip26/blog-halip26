import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import Image from 'next/image'
import SectionContainer from '@/components/SectionContainer'
import ImageTransition from '@/components/ImageTransition'
// import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 10

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const imgLink =
    'https://images.unsplash.com/photo-1600775508114-5c30cf911a40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'

  return (
    <>
      <SectionContainer>
        <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
        <div className="divide-y md:divide-y">
          <div className="pt-6 pb-8 space-y-2 md:block md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Latest
            </h1>
            <p className="text-1xl leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, readingTime, image, tags } = frontMatter
              return (
                <li key={slug} className="py-4 md:py-6">
                  <article className="flex items-center justify-between">
                    <div className="w-7/12 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                      <div className="space-y-4 md:space-y-6 xl:col-span-4">
                        <div className="space-y-2 md:space-y-4">
                          <div className="space-y-2">
                            <h2 className="font-bold md:text-2xl text-xl">
                              <Link
                                href={`/post/${slug}`}
                                className="py-1 text-gray-900 dark:text-gray-100 un-effect"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                            <div className="text-base font-medium ">
                              <dl>
                                <dd className="text-xs font-medium leading-6 text-gray-500 md:text-sm dark:text-gray-400">
                                  <dt className="sr-only">Published on</dt>
                                  <time dateTime={date}>{formatDate(date)}</time>
                                  {' · '}
                                  <dt className="sr-only">Reading time</dt>
                                  <span>Dibaca {readingTime} menit</span>
                                </dd>
                              </dl>
                            </div>
                          </div>
                          <div className="text-sm prose text-gray-500 md:text-base max-w-none dark:text-gray-400 line-clamp-2 md:line-clamp-3">
                            {summary}
                          </div>
                          <div className="text-base font-medium leading-6">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              aria-label={`Read "${title}"`}
                            >
                              Baca selengkapnya &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block w-1/12" />

                    <div className="flex-none w-4/12 aspect-w-5 lg:aspect-w-6 aspect-h-1">
                      <ImageTransition
                        src={image || imgLink}
                        quality={80}
                        layout="fill"
                        alt="Image"
                      />
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/post"
              className="transition-all text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 un-effect"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
        {/* {siteMetadata.newsletter.provider !== '' && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm />
          </div>
        )} */}
      </SectionContainer>
    </>
  )
}
