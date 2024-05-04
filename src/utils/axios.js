import PropTypes from 'prop-types';
import axios from 'axios';

// Author Information
/**
 * Author: Deepak Chaurasiya
 * Email: connects.deepak@gmail.com
 */

// Create an Axios instance with common configuration
const API = axios.create({
	baseURL: process.env.REACT_APP_API_URL, // Replace with your API endpoint
	headers: {
		'Content-Type': 'application/json',
		// Add other common headers if needed
	},
});

// Request interceptor for adding common headers
API.interceptors.request.use(
	(config) => {
		// You can modify the config here, such as adding headers, modifying data, etc.
		// For example, you might add an authentication token:
		// config.headers['Authorization'] = `Bearer ${getToken()}`;
		return config;
	},
	(error) => {
		// Handle request errors
		console.error('Request Error:', error.message);
		return Promise.reject(error);
	}
);

// Response interceptor for handling common error responses
API.interceptors.response.use(
	(response) => {
		// You can modify the response here, such as transforming data, handling status codes, etc.
		return response.data;
	},
	(error) => {
		// Handle response errors
		console.error('Response Error:', error.message);

		// Display a Swal alert for the error

		// You can also throw the error again to allow the caller to handle it
		return Promise.reject(error);
	}
);

// Prop Types for the API module
API.propTypes = {
	baseURL: PropTypes.string.isRequired,
	headers: PropTypes.objectOf(PropTypes.string),
	interceptors: PropTypes.shape({
		request: PropTypes.func,
		response: PropTypes.func,
	}),
};

// Author Information Prop Types
API.authorPropTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
};

// Set Author Information
API.author = {
	name: 'Deepak Chaurasiya',
	email: 'connects.deepak@gmail.com',
};

export default API;

// Exporting APIPropTypes along with the default export
export const APIPropTypes = {
	baseURL: PropTypes.string.isRequired,
	headers: PropTypes.objectOf(PropTypes.string),
	interceptors: PropTypes.shape({
		request: PropTypes.func,
		response: PropTypes.func,
	}),
};
