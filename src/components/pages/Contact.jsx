import React from 'react'
import './contact.css'

export const Contact = () => {
  return (
    <div className='contact-main'>
      <div className='contact-container'>
         <div className='contact-header'>
            <span className='fw-bold'>Contact Me</span>
          </div>
          <div className='contact-box'>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.375 19.5C24.375 19.6649 24.3433 19.8209 24.2978 19.9696L17.0625 12.1875L24.375 6.5V19.5ZM2.88925 21.0811L10.2212 13.2681L13 15.3684L15.6585 13.2551L23.1108 21.0811C22.9946 21.1079 3.00544 21.1079 2.88925 21.0811ZM1.625 19.5V6.5L8.9375 12.1875L1.70219 19.9696C1.65669 19.8209 1.625 19.6649 1.625 19.5ZM23.5625 4.875L13 13L2.4375 4.875H23.5625ZM22.75 3.25H3.25C1.45519 3.25 0 4.70519 0 6.5V19.5C0 21.2948 1.45519 22.75 3.25 22.75H22.75C24.5448 22.75 26 21.2948 26 19.5V6.5C26 4.70519 24.5448 3.25 22.75 3.25Z" fill="#C7F5F5"/>
            </svg>
            <span className='fw-bold'>weyen.lars@gmail.com</span>
            <a className='linkedin-link' href="https://www.linkedin.com/in/lars-weyen/" target="_blank" rel="noopener noreferrer">
            <svg width="43" height="34" viewBox="0 0 43 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_469_98)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M32 24H28.2V17.3509C28.2 15.5269 27.3954 14.5093 25.9523 14.5093C24.382 14.5093 23.45 15.5697 23.45 17.3509V24H19.65V11.65H23.45V13.0388C23.45 13.0388 24.6422 10.9468 27.3288 10.9468C30.0164 10.9468 32 12.5868 32 15.9802V24ZM15.3199 9.67485C14.0384 9.67485 13 8.62801 13 7.33696C13 6.04686 14.0384 5 15.3199 5C16.6005 5 17.6388 6.04686 17.6388 7.33696C17.6398 8.62801 16.6005 9.67485 15.3199 9.67485ZM13 24H17.75V11.65H13V24Z" fill="#C7F5F5"/>
              </g>
              <path d="M1 12.3778V1H11.6442M32.9327 33H42V24.1111" stroke="#C7F5F5"/>
              <defs>
              <clipPath id="clip0_469_98">
              <rect width="19" height="19" fill="white" transform="translate(13 5)"/>
              </clipPath>
              </defs>
            </svg>
            <span className='fw-bold'>LinkedIn</span>
            </a>
          </div>
      </div>
    </div>
  )
}
