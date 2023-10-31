"use client";
// pages/upload-images.js
import React from "react";
import axios from "axios";

export default function UploadImages() {
  const [images, setImages] = React.useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const image of images) {
      formData.append("images[]", image);
    }

    const response = await axios.post(
      "https://tahadobucket.s3.eu-central-1.amazonaws.com/gifts_photos/gift_3",
      formData
    );

    if (response.status === 200) {
      alert("Images uploaded successfully");
    } else {
      alert("An error occurred while uploading images");
    }
  };

  return (
    <div>
      <h1>Upload Images</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="images[]"
          multiple
          onChange={(e) => setImages(e.target.files)}
        />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
}
