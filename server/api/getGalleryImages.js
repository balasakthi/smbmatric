// Import necessary modules
import fs from 'fs/promises';
import path from 'path';


// Get the path to the 'public' directory in your Nuxt.js project
const publicPath = path.join(process.cwd(), 'public/images/gallery/');

async function listImageFiles(gallery) {
  try {
    // Use fs.readdir() method to read the contents of the 'public' directory
    const files = await fs.readdir(publicPath+gallery.toLowerCase());

    // Filter the list of files to include only image files (e.g., .jpg, .jpeg, .png, .gif, etc.)
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
    });

    // Construct an array of image file paths
    const imagePaths = imageFiles.map((fileName) => path.join('/images/gallery/'+gallery, fileName));

    console.log('Image files in the public directory:', imagePaths);

    // Return the array of image file paths
    return imagePaths;
  } catch (err) {
    console.error('Error reading public directory:', err);
    return []; // Return an empty array in case of an error
  }
}

// Export your module
export default defineEventHandler(async (event) => {
  // You can define event handlers here if needed
  const query = getQuery(event);

  // Wait for the listImageFiles function to complete
  const images = await listImageFiles(query.gallery);

  // Return the img variable when needed
  return {
    images
  };
});
