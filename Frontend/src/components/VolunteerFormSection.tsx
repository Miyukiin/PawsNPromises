'use client';

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { checkEmailExists, postVolunteerInformation } from "src/lib/utils";

export interface VolunteerFormData {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  contact: string;
  address: string;
}

const VolunteerFormSection: React.FC = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 700, once: false });

    // Refresh AOS whenever the component is rerendered or navigated back to
    return () => {
      AOS.refresh();
    };
  }, []);

  // Initialize values to store the volunteer information upon submission.
  const [formData, setFormData] = useState<VolunteerFormData>({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    contact: "",
    address: "",
  });

  // Form Level Valdidation.
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";
    if (!formData.age.trim()) newErrors.age = "Age is required.";
    else if (!formData.age || parseInt(formData.age) <= 18) newErrors.age = "You must be above 18 to adopt.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address.";
    if (!formData.contact.trim()) newErrors.contact = "Contact Number is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // When fields' value change, update formData with new value.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Handle negative values for Age Field. If value is less than zero, return 0, else use inputted user value.
  const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseInt(value) < 0 ? "0" : value, 
    }));
    setErrors((prevErrors) => ({ ...prevErrors, age: "" })); // Clear errors for age
  };

  // Upon clicking submit button, open google forms with passed data. Also open modal for gratitude.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Do not reload the page, which the default behavior when form is submitted.
    // Validate that all fields of the form have data before proceeding.
    if (validateForm()) {
      const emailExists = await checkEmailExists(formData.email);

      if (emailExists) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "A volunteer with this email already exists.",
        }));
        return;
      }
      
      console.log("Form Submitted Successfully:", formData);
      postVolunteerInformation(formData as VolunteerFormData);
    } else {
      console.log("Form Validation Failed:", errors);
    }
  };

  return (
    <div
      className="bg-tertiary w-full max-w-4xl mx-auto rounded-lg p-6 md:p-8 mb-16 mt-16"
      data-aos="fade-up"
    >
      <h2
        className="text-white text-1xl md:text-3xl font-bold mb-6 text-center"
        data-aos="fade-up"
      >
        WANT TO MAKE A PAWTASTIC DIFFERENCE? <br />
        <span className="text-4xl md:text-6xl font-extrabold">BE A VOLUNTEER TODAY</span>
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-3 gap-6" onSubmit={handleSubmit}>
        {/* Form fields */}
        {/* First Name */}
        <div data-aos="fade-right">
          <label className="text-white text-sm mb-2 block">First Name:</label>
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="First Name"
            className="w-full p-3 border-2 border-white bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Last Name */}
        <div data-aos="fade-right" data-aos-delay="200">
          <label className="text-white text-sm mb-2 block">Last Name:</label>
          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Last Name"
            className="w-full p-3 border-2 border-white bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Age */}
        <div data-aos="fade-left" data-aos-delay="400">
          <label className="text-white text-sm mb-2 block">Age:</label>
          <input
            name="age"
            type="number"
            min="0"
            value={formData.age}
            onChange={handleChangeAge}
            required
            placeholder="Age"
            className={`w-full p-3 border-2 border-white bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white ${
              errors.age ? "border-red-500" : ""
            }`}
          />
          {errors.age && <span className="text-red-500 text-sm mt-1 block">{errors.age}</span>}
        </div>

        {/* Email */}
        <div className="md:col-span-2" data-aos="fade-left" data-aos-delay="600">
          <label className="text-white text-sm mb-2 block">Email Address:</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className={`w-full p-3 border-2 border-white bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
        </div>

        {/* Contact */}
        <div data-aos="fade-right" data-aos-delay="800">
          <label className="text-white text-sm mb-2 block">Contact Number:</label>
          <input
            name="contact"
            type="tel"
            value={formData.contact}
            onChange={handleChange}
            required
            placeholder="Contact Number"
            className="w-full p-3 border-2 border-white bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Address */}
        <div className="md:col-span-3" data-aos="fade-left" data-aos-delay="1000">
          <label className="text-white text-sm block">Address:</label>
          <input
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Address"
            className="w-full p-3 border-2 border-white bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-3 text-center" data-aos="fade-up" data-aos-delay="1200">
          <button
            type="submit"
            className="bg-white text-tertiary font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in hover:bg-gray-100 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerFormSection;