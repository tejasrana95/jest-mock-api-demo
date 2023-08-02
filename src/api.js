import axios from 'axios';

export const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data:', error.message);
  }
};
