
import React, { useState } from "react";
import { RiMvAiLine } from "react-icons/ri";
import { BiMailSend, BiMapPin, BiMessageSquare, BiPhone, BiSend } from "react-icons/bi";
import { CgLock, CgNametag } from "react-icons/cg";
  

function ContactSection() {

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: ""
  });
  
  const [focused, setFocused] = useState({
    email: false,
    phone: false,
    message: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ email: "", phone: "", message: "" });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  return (
    <section className="bg-gray-50 py-10">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 shadow-xl rounded-2xl overflow-hidden bg-white">

        {/* Left Image */}
        <div className="min-h-80 lg:h-auto">
          <img
            src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg"
            alt="contact"
            className="w-full h-full object-cover"
          />
        </div>

        

        {/* Right Form */}
        <div className=" lg:p-16 flex flex-col justify-center bg-gray-100">
        


            <div className="bg-white/50 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              
              {/* Background decoration */}
             
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl">
                    <BiMessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Send us a message</h3>
                    <p className="text-gray-500">Fill out the form below and we'll get back to you</p>
                  </div>
                </div>

                <div className="space-y-6">
                       {/* Email Field */}
                  <div className="relative">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all ${focused.email || formData.email ? 'text-blue-600' : 'text-gray-400'}`}>
                      <CgNametag className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('fullname', e.target.value)}
                      onFocus={() => setFocused(prev => ({ ...prev, email: true }))}
                      onBlur={() => setFocused(prev => ({ ...prev, email: false }))}
                      className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl text-gray-900 focus:border-blue-600 focus:outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div className="relative">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all ${focused.email || formData.email ? 'text-blue-600' : 'text-gray-400'}`}>
                      <BiMailSend className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onFocus={() => setFocused(prev => ({ ...prev, email: true }))}
                      onBlur={() => setFocused(prev => ({ ...prev, email: false }))}
                      className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl text-gray-900 focus:border-blue-600 focus:outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all ${focused.phone || formData.phone ? 'text-blue-600' : 'text-gray-400'}`}>
                      <BiPhone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onFocus={() => setFocused(prev => ({ ...prev, phone: true }))}
                      onBlur={() => setFocused(prev => ({ ...prev, phone: false }))}
                      className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl text-gray-900 focus:border-blue-600 focus:outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <div className={`absolute left-4 top-6 transition-all ${focused.message || formData.message ? 'text-blue-600' : 'text-gray-400'}`}>
                      <BiMessageSquare className="w-5 h-5" />
                    </div>
                    <textarea
                      rows="5"
                      required
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onFocus={() => setFocused(prev => ({ ...prev, message: true }))}
                      onBlur={() => setFocused(prev => ({ ...prev, message: false }))}
                      className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl text-gray-900 focus:border-blue-600 focus:outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
                  >
                    Send Message
                    <BiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

           

                </div>
              </div>
            </div>
         
        </div>

      </div>
    </section>
  );
}

export default ContactSection;
