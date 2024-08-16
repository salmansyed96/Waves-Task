import React from 'react';

const ContactForm: React.FC = () => {
    return (
        <>
            <div className='bg-white flex  mt-40 mb-20'>
                <div> <img className='h-[90%]' src="/assets/contact.png" alt="emty" /></div>




                <div className="backdrop-blur-3xl bg-white/50 bg-cover bg-center opacity-90 p-8 rounded-2xl shadow-lg relative right-[204px] h-[50%] mt-12">
    <div className='text-center'>
        <h2 className="text-2xl font-semibold mb-4 text-[#5F259E]">Contact Us</h2>
        <p className="text-gray-500 mb-6">A specific request can be raised/feedback can be given to the concerned point of contact.</p>
    </div>

    <form className="space-y-4">
        <div>
            <label htmlFor="full-name" className="block text-sm font-extrabold text-gray-700">Full Name</label>
            <input
                type="text"
                id="full-name"
                name="full-name"
                required
                placeholder="Full Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>

        <div>
            <label htmlFor="email" className="block text-sm font-extrabold text-gray-700">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="hello@waves.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>

        <div>
            <label htmlFor="subject" className="block text-sm font-extrabold text-gray-700">Subject*</label>
            <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Your Subject"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>

        <div>
            <label htmlFor="message" className="block text-sm font-extrabold text-gray-700">How can we help you?</label>
            <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Describe your problem in at least 250 characters"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>

        <button
            type="submit"
            className="bg-gradient-to-r from-[#FF0080] to-[#7928CA] text-white py-2 px-4 rounded-md text-sm font-extrabold hover:from-[#D70073] hover:to-[#6C1F9C] transition duration-300"
            style={{ position: 'relative', bottom: '80px', left: '250px' }}
        >
            SEND MESSAGE
        </button>
    </form>
</div>

            </div>
        </>
    );
};

export default ContactForm;
