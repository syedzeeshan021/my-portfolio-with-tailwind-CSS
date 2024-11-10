import React from 'react';
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoMailUnreadOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl'data-aos="zoom-out-up">Get in Touch</h2>
          <p className='text-gray-600 text-[18px] pt-2'data-aos="zoom-out-up">
            Give me a call or send your Inquiry
          </p>
          <div className='flex gap-3 items-center'data-aos="zoom-out-up">
            <IoMailUnreadOutline size={30}/> syedzeeshan.021@gmail.com
          </div>
          <div className='flex gap-3 items-center'data-aos="zoom-out-up">
            <HiOutlineDevicePhoneMobile size={30}/> +92-301-8622788
          </div>
        </div>
        
        <div className='space-y-8'>
          <div className='flex flex-col gap-1' data-aos="zoom-out-up">
            <label htmlFor="name">Name</label>
            <input type='text' 
              className='h-[40px] bg-transparent border border-accent'
            id='name'/>                
          </div>
          <div className='flex flex-col gap-1' data-aos="zoom-out-up">
            <label htmlFor="email">Email Address</label>
            <input type='text' 
              className='h-[40px] bg-transparent border border-accent'
            id='email'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-out-up">
            <label htmlFor="message">Message</label>
            <textarea className='bg-transparent border border-accent'
            id='message' rows={8}>    
            </textarea>
            </div>
            <button className='bg-accent p-2 px-6' data-aos="zoom-out-up">Send your Inquiry</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
