import fs from 'fs/promises';
import path from 'path';


async function getGalleries(category){

  const jsonFilePath = path.join(process.cwd(), 'server/data/gallery.json');
    
    try {
      const jsonFileData = await fs.readFile(jsonFilePath, 'utf-8');
      const data = JSON.parse(jsonFileData);

      if(category)
        return data.galleries.filter((item)=> item.category===category);
      else
        return data;
    } catch (error) {
      console.error('Error reading JSON file:', error);
      return { data: null };
    }

}


export default defineEventHandler(async (event) => {

  const query = getQuery(event);
  
  const galleries = await getGalleries(query.category);

  return galleries ;
});
