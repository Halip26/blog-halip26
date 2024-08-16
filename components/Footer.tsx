import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image'
import SocialIcon from './social-icons'

export default function Footer() {
  const router = useRouter().pathname

  return (
    <footer>
      <div className="flex flex-col items-center mt-16 mb-10">
        <div className="flex mb-3 text-xs text-gray-500 md:text-sm dark:text-gray-400">
          Made with 💙 by{'‏‏‎ ‎'}
          <a
            href="https://halip26.github.io"
            className="font-semibold transition-all duration-300 hover:text-blue-500 dark:hover:text-blue-400 un-effect"
          >
            Halip26
          </a>
        </div>
        {router == '/about' ? (
          ''
        ) : (
          <div className="flex space-x-4 scale-75 opacity-75 md:scale-100">
            <SocialIcon kind="github" href={siteMetadata.github} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} />
            <SocialIcon kind="medium" href={siteMetadata.medium} />
            <SocialIcon kind="spotify" href={siteMetadata.spotify} />
          </div>
        )}
      </div>
    </footer>
  )
}
