import React from 'react';
import aboutCss from './../about/about.module.css';

function About() {
  return (
    <div className={`${aboutCss.About_wrapper} section`}>
      <h2 className="Section_Title  font-bold md:text-4xl text-xl text-emerald-400"><span className='text-white font-bold'>About</span> Us</h2>

      <p className={`${aboutCss.Section_paragraph}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus ea, eum quas magnam reprehenderit sunt ex repellat, id debitis dolor quos repudiandae aliquid eaque. Officiis, possimus. Veniam, placeat obcaecati.
      </p>

      <div className={aboutCss.Counters}>
        <p><span>2024+</span> Total Items</p>
        <p><span>200+</span> WhiteList Profiles</p>
      </div>

      <div className={aboutCss.AboutCard}>
        {[
          { title: 'High Quality', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste reprehenderit eveniet nisi' },
          { title: 'Big Collection', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste reprehenderit eveniet nisi' },
          { title: 'Top Resources', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste reprehenderit eveniet nisi' },
          { title: 'Big Community', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste reprehenderit eveniet nisi' }
        ].map((item, i) => (
          <div key={i} className={`${aboutCss.About_card} card`} data-count={i + 1}>


            <span></span><span></span>
            <h2 className='' >{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
