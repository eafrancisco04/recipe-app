import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaPinterestP, FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import styled from 'styled-components';

function Footer() {
    return(
        <Bottom>
            <div>
                <h3>Follow us on:</h3>
                <BsInstagram size={40} />{' '}
                <FaPinterestP size={40} />{' '}
                <BsYoutube size={40} />{' '}
                <FiTwitter size={40} />{' '}
                <FaFacebookF size={40} />{' '}
            </div>
            <small>2022 Ea Francisco © All Rights Reserved.</small>
        </Bottom>
    )
}

const Bottom = styled.div`
    padding: 1rem 5rem;
    background-color: #4A3726;
    color: #F4EBE8;
    align-content: center;
    text-align: center;

    h3 {
        color: #D0B49F;
    }
`
export default Footer;