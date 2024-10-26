import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import NiceSelect from "../ui/nice-select";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiry: "", // for the dropdown if needed later
  });

  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectHandler = (e) => {
    setFormData((prev) => ({ ...prev, inquiry: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting

    emailjs
      .send("service_7dp2l6e", "template_49ovokj", formData, "Qxil87MfQT8ph81Cf")
      .then((response) => {
        console.log("Message sent successfully", response.status, response.text);
        // Clear the form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          inquiry: "",
        });
      })
      .catch((err) => {
        console.error("Failed to send message", err);
      })
      .finally(() => {
        setLoading(false); // Reset loading state regardless of success or error
      });
  };

  return (
    <form onSubmit={handleSubmit} className="box">
      <div className="row gx-20">
        <div className="col-12">
          <div className="postbox__comment-input mb-30">
            <input
              type="text"
              name="name"
              className="inputText"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span className="floating-label">Full Name</span>
          </div>
        </div>
        <div className="col-12">
          <div className="postbox__comment-input mb-30">
            <input
              type="email"
              name="email"
              className="inputText"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="floating-label">Your Email</span>
          </div>
        </div>
        <div className="col-12">
          <div className="postbox__comment-input mb-35">
            <input
              type="text"
              name="phone"
              className="inputText"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <span className="floating-label">Phone Number</span>
          </div>
        </div>
        {/* Uncomment and update the dropdown when needed
        <div className="col-12">
          <div className="postbox__select mb-30">
            <NiceSelect
              options={[
                { value: "Your Inquiry about", text: "Your Inquiry about" },
                { value: "01 Year", text: "01 Year" },
                { value: "02 Year", text: "02 Year" },
                { value: "03 Year", text: "03 Year" },
                { value: "04 Year", text: "04 Year" },
                { value: "05 Year", text: "05 Year" },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
            />
          </div>
        </div>
        */}
        <div className="col-xxl-12">
          <div className="postbox__comment-input mb-30">
            <textarea
              name="message"
              className="textareaText"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <span className="floating-label-2">Message...</span>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__btn-box">
            <button className="submit-btn w-100" disabled={loading}>
              {loading ? "Sending..." : "Send your Request"} {/* Change button text based on loading state */}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;
