
import S3 from "aws-sdk/clients/s3";
import axios from "axios"
const AWS = require("aws-sdk")




AWS.config.update({
  region:process.env.local.AWS_REGION,
  accessKeyId:process.env.local.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.local.AWS_SECRET_ACCESS_KEY,

})



const s3 = new AWS.S3();


import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
  region: process.env.AWS_REGION 
});



export default async function handler(req, res) {
  const params = {
    Bucket: 'tahadobucket',
    Prefix: 'gifts-images/    ' // Optional
  };

  s3.listObjectsV2(params, (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Something went wrong' });
      return;
    }
    
    const images = data.Contents.map((content) => {
      return `https://${params.Bucket}.s3.amazonaws.com/${content.Key}`;
    
    });
    
    res.status(200).json(images);
  });
}
