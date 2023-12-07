import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const EmailForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log(name);
  const serviceId = "service_i078ko2";
  const templateId = "template_x4kvkfe";
  const publicId = "rDE_40wAe5h_VxRqu";

  const templateParams = {
    form_name: name,
    form_email: email,
    to_name: "Web Wizard",
    message: message,
  };
  console.log(form.current);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i078ko2",
        "template_z5x12kb",
        form.current,
        "rDE_40wAe5h_VxRqu"
      )
      .then(
        (result) => {
          console.log(result)
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="px-6 md:px-20 lg:w-[60vw] lg:ml-6">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full py-10 flex flex-col   text-slate-200 bg-opacity-70 rounded-xl bg-[#003] px-10"
      >
        <h1 className="text-slate-200 text-2xl  mb-8">Send Me a Message :</h1>
        <label>Name</label>
        <input
          value={name}
          type="text"
          name="user_name"
          className="px-4 outline-none py-3 bg-purple-950 opacity-75 rounded-lg"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label className="mt-5">Email</label>
        <input
          value={email}
          type="email"
          name="user_email"
          className="px-4 outline-none py-3 bg-purple-950 opacity-75 rounded-lg"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="mt-5">Message</label>
        <textarea
          value={message}
          name="message"
          className="h-20 py-3 bg-purple-950 opacity-75 rounded-lg"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <div className="w-full flex justify-center">
          <input
            type="submit"
            value="Send"
            className="w-32 py-3 bg-purple-950 opacity-80 hover:opacity-100 duration-200 rounded-lg mt-4 cursor-pointer "
          />
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
