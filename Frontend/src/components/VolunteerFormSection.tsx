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

  // Form Level Validation.
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
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
    const numericValue = parseInt(value);
    setFormData((prev) => ({
      ...prev,
      [name]: isNaN(numericValue) || numericValue < 0 ? "0" : value, 
    }));
    setErrors((prevErrors) => ({ ...prevErrors, age: "" })); // Clear errors for age
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Optionally reset the form after successful submission
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      contact: "",
      address: "",
    });
  };

  // Upon clicking submit button, process the form submission.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Do not reload the page, which the default behavior when form is submitted.

    // Validate that all fields of the form have data before proceeding.
    if (validateForm()) {
      try {
        const emailExists = await checkEmailExists(formData.email);

        if (emailExists) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "A volunteer with this email already exists.",
          }));
          return;
        }
        
        // Submit the volunteer information
        await postVolunteerInformation(formData as VolunteerFormData);
        
        console.log("Form Submitted Successfully:", formData);
        
        // Open the success modal
        setIsModalOpen(true);
        
        // Optionally, reset the form
        setFormData({
          firstName: "",
          lastName: "",
          age: "",
          email: "",
          contact: "",
          address: "",
        });
        
      } catch (error) {
        console.error("Submission Error:", error);
        // Handle submission error if needed
      }
    } else {
      console.log("Form Validation Failed:", errors);
    }
  };

  return (
    <>
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
              className={`w-full p-3 border-2 border-white bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white ${errors.firstName ? 'border-red-500' : ''}`}
            />
            {errors.firstName && <span className="text-red-500 text-sm mt-1 block">{errors.firstName}</span>}
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
              className={`w-full p-3 border-2 border-white bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white ${errors.lastName ? 'border-red-500' : ''}`}
            />
            {errors.lastName && <span className="text-red-500 text-sm mt-1 block">{errors.lastName}</span>}
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
              className={`w-full p-3 border-2 border-white bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white ${errors.age ? "border-red-500" : ""}`}
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
              className={`w-full p-3 border-2 border-white bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white ${errors.email ? "border-red-500" : ""}`}
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
              className={`w-full p-3 border-2 border-white bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white ${errors.contact ? 'border-red-500' : ''}`}
            />
            {errors.contact && <span className="text-red-500 text-sm mt-1 block">{errors.contact}</span>}
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
              className={`w-full p-3 border-2 border-white bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white ${errors.address ? 'border-red-500' : ''}`}
            />
            {errors.address && <span className="text-red-500 text-sm mt-1 block">{errors.address}</span>}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-3 text-center" data-aos="fade-up" data-aos-delay="1200">
            <button
              type="submit"
              className="bg-white text-tertiary font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">Thank You! 🐕🐈</h3>
            <p className="text-center mb-6">Your volunteer information has been submitted successfully.</p>
            <div className="flex justify-center">
              <button
                onClick={closeModal}
                className="bg-tertiary text-white px-4 py-2 rounded-md hover:bg-tertiary-dark focus:outline-none focus:ring-2 focus:ring-tertiary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VolunteerFormSection;
