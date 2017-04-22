// // Mocking the global.fetch included in React Native
import fetchMock from 'jest-fetch-mock';

global.fetch = fetchMock;
