import React, { useState } from "react";
import { BiMailSend, BiMessageSquare, BiPhone, BiSend } from "react-icons/bi";
import { CgNametag } from "react-icons/cg";

function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [focused, setFocused] = useState({
    email: false,
    phone: false,
    message: false
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    console.log("Form Data:", formData);

    try {
      const res = await fetch("https://bostontechindia.in/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          ...formData,
          datafrom: "CatalystSuite Enterprise ",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
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
        <div className="lg:p-16 flex flex-col justify-center bg-gray-50">

          <form onSubmit={handleSubmit}>
            <div className="bg-white/50 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 md:p-12">
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

                {/* Name */}
                <div className="relative">
                  <CgNametag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <BiMailSend className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <BiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                      onChange={(e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // remove non-numbers
    handleChange('phone', value);
    // setFormData({ ...formData, phone: value });
  }}
                    className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl"
                    placeholder="Enter your phone"
                  />
                </div>      

                  <div className="relative">
                    <div className={`absolute left-4 top-6 transition-all ${focused.message || formData.message ? 'text-blue-600' : 'text-gray-400'}`}>
                      <BiMessageSquare className="w-5 h-5" />
                    </div>
                    <textarea
                      rows="5"
                      required
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      // onFocus={() => setFocused(prev => ({ ...prev, message: true }))}
                      // onBlur={() => setFocused(prev => ({ ...prev, message: false }))}
                      className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl text-gray-900 focus:border-blue-600 focus:outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                {/* Message */}
                {/* <textarea
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl"
                  placeholder="Your message"
                /> */}

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-blue-600 text-white rounded-2xl"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {/* Success Message */}
                {success && (
                  <p className="text-green-600 text-center">
                    Message sent successfully!
                  </p>
                )}

              </div>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;