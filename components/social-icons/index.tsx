import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import X_Twittter from './x-twitter-official.svg'
import Medium from './medium.svg'
import Spotify from './spotify.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: X_Twittter,
  medium: Medium,
  spotify: Spotify,
}

const SocialIcon = ({ kind, href }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition-all hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`h-6 w-6 fill-current transition-all duration-300 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 `}
      />
    </a>
  )
}

export default SocialIcon
