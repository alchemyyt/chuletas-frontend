import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
const linkedinIcon = <FontAwesomeIcon icon={faLinkedinIn} />
const bagIcon = <FontAwesomeIcon icon={faBriefcase} />
const SocialMedia = () => {
  return (
    <div className='socialMediaCtn'>
      <a href='#'>{bagIcon}</a>
      <a href='#'>{linkedinIcon}</a>
      <a href='#'>{twitterIcon}</a>
    </div>
  )
}

export default SocialMedia
