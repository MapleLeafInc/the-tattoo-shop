import { links, socials } from "../constant/header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <>
            <div>
                <img src={logo} alt='company logo' />
            </div>
            <div>
                {links.map((item, index) => {
                    return <h2 key={index}>{item}</h2>
                })}
            </div>
            <div>
                {socials.map((item, index) => {
                    return <FontAwesomeIcon key={index} icon={item} />
                })}
            </div>
        </>
    )
}

export default Header