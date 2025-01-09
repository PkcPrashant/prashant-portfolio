import { FaLink, FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const isMobile = () => {
 return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent || navigator.vendor || window.opera);
}

const socials = [
  {
    href: "https://github.com/pkcprashant",
    displayText: "Prashant Choudhary",
    icon: LuGithub,
  },
  {
    href: "mailto:pc22230@gmail.com",
    displayText: "pc22230@gmail.com",
    icon: MdOutlineEmail,
  },
  {
    href: "https://www.linkedin.com/in/pkcprashant/",
    displayText: "Prashant Choudhary",
    icon: FaLinkedinIn,
  },
  {
    href: isMobile() ? "tel:+91-7543990436" : "",
    displayText: "+91-7543990436",
    icon: IoCall,
  },
];

const Contact = () => {
  return (
    <div className="d-flex flex-column contact-card position-relative p-4">
      <div className="position-relative z-1">
        <div className="d-flex align-items-center justify-start gap-2 fs-5">
          <FaLink />
          <div className="text-white fw-bold">Connect with me</div>
        </div>
        <div className="d-flex contact-container">
          {socials.map(({ href, displayText, icon: Icon }) => (
            <div key={href} className="d-flex my-2 contact-detail">
              {href ? 
                <a href={href} target="_blank" className="d-flex align-items-center justify-content-center gap-2 socials">
                  <Icon />
                  <div>{displayText}</div>
                </a> :
                <span className="d-flex align-items-center justify-content-center gap-2 socials">
                  <Icon />
                  <div>{displayText}</div>
                </span>
              }
            </div>
          ))}
        </div>
      </div>
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full background-svg">
        <defs>
          <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse" x="-1" y="-1">
            <path d="M.5 30V.5H30" fill="none" strokeDasharray="4 2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)"/>
      </svg>
    </div>
  )
}

export default Contact