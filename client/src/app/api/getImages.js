// Import AWS SDK and config
import AWS from "aws-sdk";
import "../aws-config";

export default async (req, res) => {
  const s3 = new AWS.S3();

  const params = {
    Bucket: "tahadobucket", // your bucket name
    Key: "gift-images/", // path to the image or file
  };

  // Fetch or read data from AWS S3
  try {
    const { Body } = await s3.getObject(params).promise();
    res.setHeader("Content-Type", "image/jpeg");
    res.send(Body);
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 400).json({ error: error.message });
  }
};
