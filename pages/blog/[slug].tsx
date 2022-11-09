import Link from 'next/link'

export function getServerSideProps(context) {
  const { slug } = context.query

  return {
    redirect: {
      permanent: true,
      destination: `/post/${slug}`,
    },
    props: { slug },
  }
}

export default function BlogPath({ slug }) {
  return (
    <div>
      Redirect to{' '}
      <Link href={`/post/${slug}`}>
        <a className="text-blue-500 underline">here</a>
      </Link>
    </div>
  )
}
