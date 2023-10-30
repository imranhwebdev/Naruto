import {React, useState} from 'react';
import Snowfall from 'react-snowfall';
import herosociallogo1 from '../assets/img/etherscan.png';
import herosociallogo2 from '../assets/img/dextools.svg';
import herosociallogo3 from '../assets/img/telegram.png';
import herosociallogo4 from '../assets/img/x_twitter.svg';
import { FaRegClone } from "react-icons/fa";

export default function Banner(){
    const [textToCopy, setTextToCopy] = useState('0x906c9e8ff93f6d4110e35a0959ef2184e14c5850');
    const [isCopied, setIsCopied] = useState(false);
  
    const handleCopyToClipboard = () => {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          setIsCopied(true);
        })
        .catch(err => {
          console.error('Failed to copy to clipboard: ', err);
        });
    };
    return(
        <div className="banner">
            <div className="snowfall-container">
                <Snowfall snowflakeCount={300}/>
            </div>
            <div className='container'>
                <div className="banner-content">
                    <a href="/" className='boxed__btn'>BUY NARUTO</a>
                    <p>Embark on an epic journey with Naruto <span>ナルト</span>, the ultimate meme project set to take the Ethereum blockchain by storm! It’s a global movement that promises to bring together cultures and communities from every corner of the world. In the bustling metropolis of the Ethereum blockchain, our skilled ninja developers have crafted a world where creativity and innovation reign supreme. So, gear up, join our fantastic community, and become a part of a story guaranteed to make history! Are you ready to unleash your inner ninja and start raids for Konoha? </p>
                    <div className="social__links">
                        <a href="/"><img src={herosociallogo1} alt="" />Etherscan</a>
                        <a href="/"><img src={herosociallogo2} alt="" />Dextools</a>
                        <a href="/"><img src={herosociallogo3} alt="" />Telegram</a>
                        <a href="/"><img src={herosociallogo4} alt="" /> Twitter</a>
                    </div>

                    <div className="copytoclipboard">
                        <input readOnly type="text"  value={textToCopy}
                            onChange={(e) => setTextToCopy(e.target.value)}/>

                        <button onClick={handleCopyToClipboard}> {isCopied && <span className='coppied'><FaRegClone /></span>} <FaRegClone /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
