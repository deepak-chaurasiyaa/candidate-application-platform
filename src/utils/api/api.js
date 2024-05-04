import PropTypes from 'prop-types';
import API from '../axios';

/**
 * Author: Deepak Chaurasiya
 * Email: connects.deepak@gmail.com
 */

/**
 * Fetch data based on specified parameters.
 *
 * @param {Object} params - Parameters for fetching data
 * @param {number} params.page - Page number
 * @param {number} params.limit - Number of items per page
 * @returns {Promise} - Promise representing the fetched data
 */
export const fetchJobDetails = async ({ page = 1, limit = 10 }) => {
	try {
		// Prepare request body
		const data = {
			limit: limit,
			offset: (page - 1) * limit, // Calculate offset based on page and limit
		};

		// Send request to API
		const response = await API.post('/adhoc/getSampleJdJSON', data);
		
		return response;
	} catch (error) {
		// Handle error
		throw error;
	}
};

// PropTypes for fetchJobDetails function
fetchJobDetails.propTypes = {
	page: PropTypes.number,
	limit: PropTypes.number,
};
