import React from 'react';
import workCSS from './../work/work.module.css';

import CardImg1 from './../../assets/work-1.svg';
import CardImg2 from './../../assets/work-2.svg';
import CardImg3 from './../../assets/work-3.svg';
import CardImg4 from './../../assets/work-4.svg';

function Work() {
  const workData = [
    {
      img: CardImg1,
      title: 'Connect Your Wallet',
      desc: 'Easily link your crypto wallet to start your NFT journey.crypto wallet to start your NFT journey',
    },
    {
      img: CardImg2,
      title: 'Select The Quality',
      desc: 'Choose the best quality for your NFT assets.crypto wallet to start your NFT journey',
    },
    {
      img: CardImg3,
      title: 'Confirm The Transaction',
      desc: 'Verify and approve your NFT purchase securely.crypto wallet to start your NFT journey',
    },
    {
      img: CardImg4,
      title: 'Receive Your    NFT',
      desc: 'Get your NFT delivered to your wallet instantly.crypto wallet to start your NFT journey',
    },
  ];

  return (
    <div className={`${workCSS.Work_Wrapper} section`}>
      <h2 className="Section_Title font-bold md:text-4xl text-xl text-white">
        How <span className="text-emerald-500">NOXSTAR</span> Works
      </h2>

      <div className={workCSS.Cards}>
        {workData.map((item, index) => (
          <div key={index} className={`${workCSS.Card} card`}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
