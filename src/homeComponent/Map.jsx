import React from 'react';

const Map = () => {
  return (
    <div className=" mx-auto justify-center ">
      <div className="relative">
        <div className="container flex md:flex-row flex-col items-center gap-16  pb-4 ">
          <div className=" w-full md:px-4 px-2 ">
            <iframe
              className=" "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9306445522857!2d-73.98160272504131!3d40.763550134459784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f9c69e166d%3A0x86b0e5488151ce61!2sestiatorio%20Milos!5e0!3m2!1sen!2sid!4v1690503267127!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div class="  flex flex-col gap-6 ">
          <div className='flex  items-center gap-6'>
            <span class="inline-block p-5 text-gray-300 rounded-full bg-red-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            <div className=''>

            <h2 class="mt-2 text-xl font-normal text-gray-600 ">Email</h2>
            <p class="mt-1 font-semibold text-base text-gray-800">info@techsolutions.com</p>
            </div>
          </div>

          <div className='flex  items-center gap-6'>
            <span class="inline-block p-5 text-gray-300 rounded-full bg-red-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            <div>

            <h2 class="mt-2 text-xlfont-normal text-gray-600">Office</h2>
            <p class="mt-1 font-semibold text-base text-gray-800">Townsville, NY 54321</p>
            </div>
          </div>

          <div className='flex  items-center gap-6'>

            <span class="inline-block p-5 text-gray-300 rounded-full bg-red-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            <div>

            <h2 class="mt-2 text-xl font-normal text-gray-600">Phone</h2>
            <p class="mt-1 font-semibold text-base text-gray-800">(555) 123-4567</p>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, content }) => {
  return (
    <div>
      <span className="inline-block p-5 text-gray-600 rounded-full bg-yellow-400">
        {icon === 'email' && (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />

            {/* Email icon SVG path */}
          </svg>
        )}
        {icon === 'office' && (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            {/* Office icon SVG path */}
          </svg>
        )}
        {icon === 'phone' && (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            {/* Phone icon SVG path */}
          </svg>
        )}
      </span>
      <h2 className="mt-2 text-sm font-normal text-gray-600">{title}</h2>
      <p className="mt-1 font-semibold text-base text-gray-800">{content}</p>
    </div>
  );
};

export default Map;
