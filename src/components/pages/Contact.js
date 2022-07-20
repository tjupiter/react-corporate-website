import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from '../sections/Hero'
import Footer from '../sections/Footer';
import assets from '../assets'

import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    message: '',
    newsletter: false
  })

  function handleChange(event) {
    const {name, value, type, checked} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
        // ES6 - computed property []
        // https://eloquentcode.com/computed-property-names-in-javascript
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Your form has been submitted, see submitted data below`)
    console.log(formData)
    alert('Thank you. Form has been submitted.')
    // submitToApi(formData)
    setFormData({
      name: '',
      email: '',
      tel: '',
      message: '',
      newsletter: false
    })
    document.querySelector('.form-submit-btn').blur()
  }

  const location = useLocation();
  
  return (
    <>
      <Hero
        heroImgSrc={assets.heroAbout}
        title="Contact Us"
      />
      <div className='contact-container'>
        <div className='contact-inner-container '>
          <form onSubmit={handleSubmit}>
            <section className='form-input-container'>
              <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Name'
                  onChange={handleChange}
                  value={formData.name}
                  autoComplete='name'
                  required
                  />
            </section>
            <section className='form-input-container'>
              <label htmlFor='name'>Email</label>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Email'
                onChange={handleChange}
                value={formData.email}
                autoComplete='email'
                required
                />
            </section>
            <section className='form-input-container'>
              <label htmlFor='name'>Telephone</label>
              <input
                type='text'
                id='tel'
                name='tel'
                placeholder='Telephone number'
                onChange={handleChange}
                value={formData.tel}
                autoComplete='tel'
                required
                />
            </section>
            <section className='form-textarea'>
              <label htmlFor='name'>Leave a message:</label>
              <textarea
                id='message'
                name='message'
                placeholder='Type your message here...'
                onChange={handleChange}
                value={formData.message}
                
                />
            </section>
            <div className='form-checkbox-and-button'>
              <section className='form-checkbox'>
                <input
                  type='checkbox'
                  id='newsletter'
                  name='newsletter'
                  onChange={handleChange}
                  checked={formData.newsletter}
                  />
                <label htmlFor='name'>Sign up to newsletter</label>
              </section>
              
              <button className="form-submit-btn ">Submit</button>
            </div>
          </form>

        </div>
      </div>
    <Footer location={location}/>
    </>
  )
}

export default Contact