
//Yelp API key
const apiKey = 'u7qRHdai8H3p3h-ZtytR49bVl8o4e5HL5XZyT-Lhquai_QebOTmvGwzd-WCKRR6czk2UdcWrQ83N9DaX797b0dppO-b_i8H9sZfF7eyESxhkwIp-rit9PsaR2pqkZ3Yx'

const Yelp = {
    async search(searchTerm, location, sortBy) {
        //Creating url
        //const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const endpoint = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&sort_by=${sortBy}`;
        const url = endpoint;

        return fetch(url, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        }).then(response => {

            if(!response.ok) {
                throw new Error(`HTTP error, status = ${response.status}`);
            }
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
            return [];
        }).catch(error => {
            console.error('Error fetching Yelp data: ', error);
        })
    }
}
export default Yelp;