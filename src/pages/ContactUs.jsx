import {TitlePage } from "../components";

const ContactUs = () => {
  return (
    <section>
      <TitlePage title="Contact Us" subtitle="Home &gt; Contact Us" />
      <div className="container py-12 flexBetween flex-col lg:flex-row lg:gap-20">
        <div className="mb-12 bg-septenary p-8 rounded-3xl shadow-lg w-full lg:w-1/2">
          <h1 className="text-xl font-bold mb-2 text-secondary">Contact Us</h1>
          <h1 className="text-4xl font-bold">Say Hello!</h1>
          <p className=" text-p my-12">LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. 
            This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites.
            Feel free to use this for any purpose. Thank you.
          </p>
          <div className="mb-6">
            <h3 className="mb-2 text-h">Address</h3>
            <p className="text-lg text-gray-400">123 Gaming Street, Game City, GC 12345</p>
          </div>
          <div className="mb-6">
            <h3 className="mb-2 text-h">Phone</h3>
            <p className="text-lg text-gray-400">+123 456 7890</p>
          </div>
          <div className="mb-6">
            <h3 className="mb-2 text-h">Email</h3>
            <p className="text-lg text-gray-400"> lugx@contact.com </p>
          </div>
        </div>
        <div className="flexColumn w-full lg:w-1/2">
          <div className="w-full h-[350px] rounded-3xl overflow-hidden shadow-lg mb-12">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.419415684681!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8b8b8b8b%3A0x5045675218ce6e0!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1620211234567"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form className="bg-white shadow-lg rounded-3xl p-8 w-full">
            <div className="mb-4">
              <label className="block text-h font-semibold mb-2">Name</label>
              <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none" placeholder="Your Name" required/>
            </div>
            <div className="mb-4">
              <label className="block text-h font-semibold mb-2">Email</label>
              <input type="email" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none" placeholder="Your Email" required/>
            </div>
            <div className="mb-4">
              <label className="block text-h font-semibold mb-2">Message</label>
              <textarea className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-full w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs