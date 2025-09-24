import React from 'react'

interface IFooter{
    className?: string
}

export default function Footer({className}: IFooter) {
  return (
    <footer className={`${className} text-white`}>
      <div className="container mx-auto px-6 py-8 text-center">
        <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
          <a
            className="text-base font-normal leading-normal min-w-64"
            href="#"
          >
            Terms of Service
          </a>
          <a  className="text-base font-normal leading-normal min-w-64"
            href="#">
            Privacy Policy
          </a>
          <a
            className="text-base font-normal leading-normal min-w-64"
            href="#"
          >
            Contact Us
          </a>
        </div>
        <p className='mt-4 font-semibold'>© 2025 TreeAnalytics. All rights reserved.</p>
      </div>
    </footer>
  );
}
