// api.test.js - Test file for the API module
import { fetchDataFromAPI } from './api';

// Mock the Axios API call using jest.mock()
jest.mock('axios');

describe('fetchDataFromAPI', () => {
  test('should fetch data from the API', async () => {
    // Mock the Axios response with the data you want to return
    const mockData = {
      title: 'Mocked Data',
      body: 'This is a mocked response',
    };
    axios.get.mockResolvedValue({ data: mockData });

    // Call the function being tested
    const data = await fetchDataFromAPI();

    // Assertions
    expect(data).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
  });

  test('should handle errors when API call fails', async () => {
    // Mock the Axios response with a rejected promise (error)
    const mockError = new Error('API call failed');
    axios.get.mockRejectedValue(mockError);

    // Call the function being tested
    try {
      await fetchDataFromAPI();
    } catch (error) {
      // Assertions for error handling
      expect(error.message).toBe('Error fetching data:', mockError.message);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
    }
  });
});
