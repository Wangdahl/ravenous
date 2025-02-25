# Ravenous

Ravenous is a Yelp clone built with React that allows users to search for restaurants by keyword and location, sort results by different criteria, and view restaurant details with links to Google Maps. The app integrates with the Yelp API to retrieve live restaurant data and provides an interactive, responsive user interface.

## Features

- **Live Restaurant Search:** Users can search for restaurants using a keyword and location.
- **Sorting Options:** Sort results by Best Match, Highest Rated, or Most Reviewed.
- **Clickable Cards:** Each restaurant card is clickable (using a JavaScript event handler) to open its location on Google Maps.
- **Loading Indicator:** A CSS spinner animation displays while search results load.
- **Error Handling:** Inline error messages prompt users when required inputs (like location) are missing.

## Technologies Used

- **React:** For building the user interface and managing state.
- **HTML & CSS:** For layout, styling, and animations (e.g., the CSS spinner).
- **JavaScript (ES6):** For application logic and API interactions.
- **Yelp API:** For fetching real-time restaurant data.
- **whatwg-fetch:** Polyfill for the Fetch API.
- **Git & GitHub:** For version control and project collaboration.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine. Visit https://nodejs.org/ for installation instructions.
- A Yelp API key (obtainable via https://www.yelp.com/developers).

### Installation

Clone the repository:
git clone https://github.com/yourusername/ravenous.git

Install the dependencies:
npm install

Configure Environment Variables: Create a `.env` file in the root directory and add your Yelp API key:
REACT_APP_YELP_API_KEY=your_yelp_api_key_here

Start the development server:
npm start


## Usage

1. **Search for Restaurants:** Enter a search term (e.g., "Italian") and a location (e.g., "New York") in the search bar.
2. **Trigger the Search:** Either click the "Search now!" button or press Enter while in one of the input fields.
3. **View Results:** Restaurant cards will appear with details like name, address, rating, and a clickable link that opens the restaurant's location on Google Maps.
4. **Loading Feedback:** A spinner animation appears while the search request is in progress.

## Future Enhancements

- Enhanced UI/UX: Refine error messaging and add additional animations.
- Advanced Filters: Introduce filters such as price range, distance, etc.
- Pagination: Support for paginated results.
- Backend Integration: Shift API calls to a backend server for better security.
- User Features: Allow users to save favorites or share restaurant details on social media.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests for improvements, bug fixes, or additional features.

## License

This project is open source and available under the MIT License.

## Acknowledgements

- Yelp API: https://www.yelp.com/developers
- React: https://reactjs.org/
- whatwg-fetch: https://github.com/github/fetch
- Inspiration from Codecademy projects and the open source community.
