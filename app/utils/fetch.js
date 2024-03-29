const API_URL = 'https://dummyjson.com'

export default async (urlParams = '') => {
    try {
        const response = await fetch(`${API_URL}/${urlParams}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}