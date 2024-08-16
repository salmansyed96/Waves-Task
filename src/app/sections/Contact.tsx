import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <>
    <div className='bg-white flex  mt-40 mb-20'>
        <div> <img className='h-[90%]' src="/assets/contact.png" alt="emty" /></div>




    <div className="bg-cover bg-center opacity-90 p-8 rounded-lg shadow-lg relative right-[204px] bg-white h-[50%] mt-12" >
      <div className='text-center'>
      <h2 className="text-2xl font-semibold  mb-4 text-[#5F259E]">Contact Us</h2>
      <p className=" text-gray-500 mb-6">A specific request can be raised/ feedback can be given to the concerned point of contact.</p>
      </div>
      
      <form className="space-y-4">
        <div>
          <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" id="full-name" name="full-name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject*</label>
          <input type="text" id="subject" name="subject" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">How can we help you?</label>
          <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        
        <button type="submit" className="w-full bg-[#5F259E] text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-[#4B1D7A] transition duration-300">SEND MESSAGE</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default ContactForm;
