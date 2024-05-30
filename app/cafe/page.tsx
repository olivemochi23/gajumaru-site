'use client'

import React from 'react';
import Contact from '../components/contact'
import Access from '../components/access'

import Hero from './components/hero';
import Info from './components/info';
import Menu from './components/menu';

const CafePage: React.FC = () => {
  return (
    <div className="">

        <main className="">
              <section id="access" className='bg-pink-400'>
                <Hero/>
              </section>

              <section id="access" className='bg-pink-400'>
                <Info/>
              </section>

              <section id="access" className='bg-pink-400'>
                <Menu/>
              </section>
              
              <section id="access" className='bg-white'>
                <Access/>
              </section>

              <section id="contact" className='bg-pink-100'>
                <Contact />
                <div className=""></div>
              </section>
        </main>
    </div>
  );
};

export default CafePage;