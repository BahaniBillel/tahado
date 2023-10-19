"use client";
import React, { useState } from "react";
import CreateUserAPI from "../../app/api/createUser";
import { useRouter } from "next/navigation";
import { z, ZodError } from "zod";

// Create Zod schema
const userSchema = z.object({
  email: z.string().email("Invalid email format"),
  password_hash: z.string().min(8, "Password must be at least 8 characters"),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
});

const RegisterForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate data using Zod schema
      const parsedData = userSchema.parse(formData);

      const response = await CreateUserAPI(parsedData);
      if (response.status === 201) {
        router.push("/thankyou");
      }
      setFormData({});
      setErrors({});
    } catch (error) {
      if (error instanceof ZodError) {
        const newErrors = {};
        error.errors.forEach(({ path, message }) => {
          newErrors[path[0]] = message;
        });
        setErrors(newErrors);
      } else {
        console.error("Error creating user:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign Up
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                onChange={handleInputChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password_hash"
                type="password"
                required
                onChange={handleInputChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>

            {/* First Name */}
            <div>
              <label htmlFor="first_name" className="sr-only">
                First Name
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                onChange={handleInputChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="last_name" className="sr-only">
                Last Name
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                onChange={handleInputChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
              />
            </div>

            {/* More fields can be added here */}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm
               font-medium rounded-md text-white bg-charcoal hover:bg-charcoal focus:outline-none focus:ring-2
                focus:ring-offset-2 focus:ring-charcoal/80"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
