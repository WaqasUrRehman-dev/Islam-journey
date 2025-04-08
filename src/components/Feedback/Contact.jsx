import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


const sendEmail = (e) => {
  e.preventDefault();
  const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  // Send to yourself
  emailjs
    .send(
      "service_ij87kcr",
      "template_qsc0faa",
      templateParams,
      "od_waMZP0pWd_oihS"
    )
    .then((response) => {
      console.log("Email sent to me!", response);

      // Send auto-reply to user
      emailjs
        .send(
          "service_ij87kcr",
          "template_jrhn1gd",
          templateParams,
          "od_waMZP0pWd_oihS"
        )
        .then(() => {
          alert("Message sent! You’ll get a confirmation email shortly.");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("Error sending auto-reply:", error);
          alert("Message sent but confirmation email failed.");
        });
    })
    .catch((error) => {
      console.error("Error sending to me:", error);
      alert("Error sending message. Please try again later.");
    });
};





  return (
    <div id="contact" className="w-full h-auto bg-blue-500 py-6">
      <div className="lg:w-1/2 mx-auto p-6">
        <h1 className="text-center text-4xl font-bold text-white">
          Contact Us
        </h1>
        <form onSubmit={sendEmail} className="lg:w-[75%] lg:mx-auto">
          <div className="pt-10">
            <label htmlFor="name" className="text-xl text-white font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-3 text-white placeholder:text-zinc-50 border-b-2 border-gray-300 outline-none bg-transparent "
              placeholder="Enter Your Name"
              autoComplete="off"
            />
          </div>
          <div className="pt-6">
            <label htmlFor="email" className="text-xl text-white font-semibold">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-3 text-white placeholder:text-zinc-50 border-b-2 border-gray-300 outline-none bg-transparent "
              placeholder="Enter Your Email"
              autoComplete="off"
            />
          </div>
          <div className="pt-6">
            <label
              htmlFor="message"
              className="text-xl text-white font-semibold"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="1"
              placeholder="Give your valuable feedback"
              className="w-full p-2 mt-3 text-white placeholder:text-zinc-50 border-b-2 border-gray-300 outline-none bg-transparent "
            ></textarea>
          </div>
          <div className="mt-12 flex justify-center">
            <button className="px-12 py-3 text-xl font-semibold text-white bg-gradient-to-r from-[#005c97] to-[#363795] rounded-full">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
