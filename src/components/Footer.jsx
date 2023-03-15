import { socials } from "../constants"
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, GitHubIcon } from './material'
import { styles } from "../styles"



const socialIcons = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    linkedin: LinkedInIcon,
    instagram: InstagramIcon,
    github: GitHubIcon,
  };
  
const SocialsCard = ({ icon, link }) => {
    const Icon = socialIcons[icon];
  
    return (
      <div
        onClick={() => window.open(link, "blank")}
        className="cursor-pointer w-10 h-10 md:mx-6 mx-4 my-5 rounded-full bg-secondary flex flex-wrap justify-center items-center hover:bg-primary/80"
      >
        <Icon />
      </div>
    );
};

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} w-full flex flex-col items-center justify-center py-10 z-30 bg-primary`}>
        <div className="flex">
        {socials.map((social) => (
            <div key={social.name}>
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
