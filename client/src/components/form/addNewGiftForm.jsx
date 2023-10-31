"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AddGift } from "../../app/api/giftsAPIs";

const productSchema = z.object({
  giftname: z.string().max(100),
  description: z.string(),
  price: z.number(),
  category: z.string().max(50),
  url: z.string(),
  occasion: z.string(),
});

const AddNewGiftForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = async (data) => {
    data.price = parseFloat(data.price);
    try {
      const response = await AddGift(data);
      console.log("API Response:", response);
      reset();
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700">Gift Name</label>
          <input
            type="text"
            {...register("giftname")}
            className="w-full p-2 border rounded"
          />
          {errors.giftname && (
            <p className="text-red-500">{errors.giftname.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Description</label>
          <input
            type="text"
            {...register("description")}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            step="0.01"
            {...register("price", {
              setValueAs: (value) => parseFloat(value),
            })}
            className="w-full p-2 border rounded"
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            {...register("category")}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700">URL</label>
          <input
            type="text"
            {...register("url")}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700">Occasion</label>
          <input
            type="text"
            {...register("occasion")}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <button type="submit" className="bg-charcoal text-white p-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewGiftForm;
