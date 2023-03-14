import { socials } from "../constants"
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, GitHubIcon } from './material'
import { styles } from "../styles"



const SocialsCard = ({ icon, link }) => {

    function img(icon) {
        if (icon === 'facebook') {
         return <FacebookIcon />
        }
        else if  (icon === 'twitter') {
         return <TwitterIcon />
        }
        else if  (icon === 'linkedin') {
            return <LinkedInIcon />
        }
        else if  (icon === 'instagram') {
         return <InstagramIcon />
        }
        else if  (icon === 'github') {
        return <GitHubIcon />
        }
    } 

    return (
        <div 
        onClick={() => window.open
            (link, "blank")
          }
        className="cursor-pointer w-10 h-10 md:mx-6 mx-4 my-5 rounded-full bg-secondary flex flex-wrap justify-center items-center hover:bg-primary/80"
        >            
            {img(icon)}
        </div>
    )
}

const Footer = () => {
  return (
    <footer className='className={`${styles.paddingX} w-full flex flex-col items-center justify-center py-10 z-30 bg-primary`}'>
        <div className="flex">
        {socials.map((social) => (
            <div className="key={social.name}">
                <SocialsCard icon={social.name} link={social.link}/>
            </div>
        ))}
        </div>

        <div className="flex items-center md:mt-6 mt-4">
            <p className="sm:text-[13px] text-[11px] text-secondary uppercase tracking-wider mr-2">Made By.</p>
            <h2 className="text-white font-semibold md:text-[15px] sm:text-[15px] xs:text-[15px] text-[11px]">Anzhy</h2>
        </div>
    </footer>
  )
}

export default Footer
