// Previous JavaScript code remains, add these new functions

const destinationData = {
    'Kumarakom-bird': {
        title: 'Kumarakom Bird Sanctuary',
        mainImage: 'https://images.pexels.com/photos/16989695/pexels-photo-16989695/free-photo-of-river-on-marsh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        overview: 'Set along the tranquil Vembanad Lake, Kumarakom Bird Sanctuary is a paradise of lush greenery, serene backwaters, and exotic migratory birds. A perfect retreat for nature lovers!',
        bestTime: 'December to March',
        avgBudget: '₹3000 per day',
        idealDuration: '5-7 days',
        activities: [
            {
                title: 'Bird Watching',
                image: 'https://images.unsplash.com/photo-1480044965905-02098d419e96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                description1: 'Vembanad | Mid-day',
            },
            {
                title: 'Boating on Vembanad Lake',
                image: 'https://images.pexels.com/photos/5374224/pexels-photo-5374224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                description1: 'Vembanad  | Morning',
            },
            {
                title: 'Nature Walks',
                image: 'https://images.pexels.com/photos/16989695/pexels-photo-16989695/free-photo-of-river-on-marsh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                description1: 'Vayitharamattom | Morning',
            }
        ],
        hotels: [
            {
                name: 'Taj Kumarakom Resort & Spa',
                image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/5e/91/facade.jpg?w=1200&h=-1&s=1',
                price: '₹38000/night',
                rating: 4.5
            },
            {
                name: 'Kumarakom Lake Resort',
                image: 'https://www.i-escape.com/image/hotel/kumarakom-lake-resort/overview/294639.jpg',
                price: '₹39000/night',
                rating: 4.8
            }
        ],
        transportation: [
            {
                mode: 'Airport Transfer',
                details: '2 hours from Cochin International Airport',
            },
            {
                mode: 'Local Transport',
                details: 'Taxis and rental bikes available',
            }
        ],
        localTips: [
            'Visit local markets early morning for fresh seafood',
            'Book water activities in advance during peak season',
            'Try the local coconut dishes',
            'Bring reef-safe sunscreen'
        ],
        nearby: [
            {
                title: 'Pathiramanal Island',
                image: 'https://images.pexels.com/photos/15308719/pexels-photo-15308719/free-photo-of-a-view-of-a-river-with-palm-trees-and-houses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                description1: 'Vembanad | Mid-day',
            },
            {
                title: 'Kumarakom Backwaters',
                image: 'https://images.pexels.com/photos/5374224/pexels-photo-5374224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                description1: 'Kumarakom | Morning',
            },
            {
                title: 'Bay Island Driftwood Museum',
                image: 'https://yathra360.com/615231253612536/1686583317bay.jpg',
                description1: 'Vayitharamattom | Morning',
            }
        ]
    },
    

    'Illikkal-Kallu': {
        title: 'Illikkal-Kallu',
        mainImage: 'https://images.unsplash.com/photo-1697739577207-cedebc84f9d4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        overview: 'Perched in the Western Ghats, Illikkal Kallu offers breathtaking panoramic views of Kottayam\'s lush hills and valleys. Known for its unique rock formations, this stunning peak provides a perfect blend of adventure and tranquility. Trek through its scenic trails, enjoy the cool breeze, and witness nature\'s grandeur at its best. An ideal destination for nature lovers and adventure enthusiasts!',
        bestTime: 'December to March',
        avgBudget: '₹1000 per day',
        idealDuration: '5-7 days',
        activities: [
            {
                title: 'Trekking',
                image: 'https://plus.unsplash.com/premium_photo-1661810803959-f91f5195138e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                description1: 'Vembanad | Mid-day',
            },
            {
                title: 'Photography',
                image: 'https://images.unsplash.com/photo-1697739577183-098fb4448a2a?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                description1: 'Vembanad  | Morning',
            },
            {
                title: 'Camping',
                image: 'https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                description1: 'Vayitharamattom | Morning',
            }
        ],
        hotels: [
            {
                name: 'Daan Orchid Residency',
                image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/b3/d2/64/orchid-residency.jpg?w=700&h=-1&s=1',
                price: '₹2800/night',
                rating: 4.5
            },
            {
                name: 'Mistywindvalley Resort',
                image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/147295080.jpg?k=b2ecfa036a40d0d4a8560873ff062aedf86d37995470db9d3bf724af891c66b0&o=&hp=1',
                price: '₹2600/night',
                rating: 4.8
            }
        ],
        transportation: [
            {
                mode: 'Airport Transfer',
                details: '2 hours from Cochin International Airport',
            },
            {
                mode: 'Local Transport',
                details: 'Taxis and rental bikes available',
            }
        ],
        localTips: [
            'Visit local markets early morning for fresh seafood',
            'Book water activities in advance during peak season',
            'Try the local coconut dishes',
            'Bring reef-safe sunscreen'
        ],
        nearby: [
            {
                title: 'Kattikayam Waterfalls',
                image: 'https://www.keralatourism.org/images/enchanting_kerala/hri/Kattikkayam_Waterfall_A_Captivating_Spot_for_Adventure_Seekers_1397.jpg',
                description1: 'Vembanad | Mid-day',
            },
            {
                title: 'Ilaveezhapoonchira',
                image: 'https://images.unsplash.com/photo-1701484019691-fe75fd48b866?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                description1: 'Kumarakom | Morning',
            },
            {
                title: 'Marmala Waterfall',
                image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/19/ce/79/marmala-waterfall.jpg?w=1200&h=-1&s=1',
                description1: 'Vayitharamattom | Morning',
            }
        ]
    },

    'Malarikkal-River': {
        title: 'Malarikkal-River',
        mainImage: 'https://www.kanyakumarians.com/data/catalog/Kottayam/Malarikkal/arun_gopi_photography.jpg',
        overview: 'Nestled in the heart of nature, Malarikkal River offers a peaceful retreat with its crystal-clear waters and lush surroundings. The river winds through tranquil landscapes, perfect for a relaxing day amidst the beauty of Kerala’s serene environment. Ideal for nature lovers and those seeking a quiet getaway.',
        bestTime: 'July to October',
        avgBudget: '₹100-150 per boat',
        idealDuration: '5-7 days',
        activities: [
            {
                title: 'Witness the Water Lily Bloom',
                image: 'https://www.keralatourpackages.com/wp-content/uploads/2024/08/kerala-tour-package-image-1-1024x576.png',
                description1: 'Vembanad | Mid-day',
            },
            {
                title: 'Fishing',
                image: 'https://images.pexels.com/photos/2878835/pexels-photo-2878835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                description1: 'Vembanad  | Morning',
            },
            {
                title: 'Photography',
                image: 'https://images.pexels.com/photos/20830782/pexels-photo-20830782/free-photo-of-view-of-a-man-in-a-boat-on-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                description1: 'Vayitharamattom | Morning',
            }
        ],
        hotels: [
            {
                name: 'Mango Meadows',
                image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/5b/e5/d4/mango-meadows.jpg?w=1200&h=-1&s=1',
                price: '₹3500/night',
                rating: 4.5
            },
            {
                name: 'Rain Forest Ayur County Resort',
                image: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/69/fd/62/cottage-exterior.jpg',
                price: '₹6500/night',
                rating: 4.8
            }
        ],
        transportation: [
            {
                mode: 'Airport Transfer',
                details: '2 hours from Cochin International Airport',
            },
            {
                mode: 'Local Transport',
                details: 'Taxis and rental bikes available',
            }
        ],
        localTips: [
            'Visit local markets early morning for fresh seafood',
            'Book water activities in advance during peak season',
            'Try the local coconut dishes',
            'Bring reef-safe sunscreen'
        ],
        nearby: [
            {
                title: 'Kumarakom Bird Sanctuary',
                image: 'https://images.pexels.com/photos/16989695/pexels-photo-16989695/free-photo-of-river-on-marsh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                description1: 'Vembanad | Mid-day',
            },
            {
                title: 'Vembanad Lake',
                image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTUy5B6X0Ew_ezrPDjJXBf2dmCWKjZ1w5a6rZyA4yDS3W6SdsRXP5qz15uu55MGFqssLvDXxoVNr2mhF_Co1Z6rxkpwr7scvSPFX9KyDw',
                description1: 'Kumarakom | Morning',
            },
            {
                title: 'Aruvikuzhy Waterfalls',
                image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRDMD0wos8Sy5k83rELa2tlsKn68TYkDRBI50SQGlteHxZBdl6_qMwD-OF-BZViywxf8Gtb3a9JfPE_qhqqtJYSR9YvNVSSqKJNeFMU2A',
                description1: 'Vayitharamattom | Morning',
            }
        ]
    },
};

function showDestinationDetail(destinationId) {
    const destination = destinationData[destinationId];
    if (!destination) return;

    // Set main content
    document.getElementById('destination-main-image').src = destination.mainImage;
    document.getElementById('destination-title').textContent = destination.title;
    document.getElementById('destination-overview').textContent = destination.overview;
    document.getElementById('best-time').textContent = destination.bestTime;
    document.getElementById('avg-budget').textContent = destination.avgBudget;
    document.getElementById('ideal-duration').textContent = destination.idealDuration;

    // Populate activities
    const activitiesContainer = document.getElementById('activities');
    activitiesContainer.innerHTML = destination.activities.map(activity => `
        <div class="activity-card">
            <img src="${activity.image}" alt="${activity.title}">
            <div class="card-content">
                <h4>${activity.title}</h4>
                <p>${activity.description1}</p>
            </div>
        </div>
    `).join('');

    // Populate hotels
    const hotelsContainer = document.getElementById('hotels');
    hotelsContainer.innerHTML = destination.hotels.map(accommodation => `
        <div class="accommodation-card">
            <img src="${accommodation.image}" alt="${accommodation.name}">
            <div class="card-content">
                <h4>${accommodation.name}</h4>
                <p>Price: ${accommodation.price}</p>
                <p>Rating: ${accommodation.rating}⭐</p>
            </div>
        </div>
    `).join('');

    // Populate transportation
    const transportationContainer = document.getElementById('transportation');
    transportationContainer.innerHTML = destination.transportation.map(transport => `
        <div class="transport-option">
            <h4>${transport.mode}</h4>
            <p>${transport.details}</p>
        </div>
    `).join('');

    // Populate local tips
    const tipsContainer = document.getElementById('local-tips');
    tipsContainer.innerHTML = destination.localTips.map(tip => `
        <li>💡 ${tip}</li>
    `).join('');

    // Populate nearby attractions
    const nearbyContainer = document.getElementById('nearby');
    nearbyContainer.innerHTML = destination.nearby.map(place => `
        <div class="nearby-card">
            <img src="${place.image}" alt="${place.name}">
            <div class="card-content">
                <h4>${place.title}</h4>
                <p>${place.description1}</p>
            </div>
        </div>
    `).join('');

    // Show modal
    document.getElementById('destination-detail').style.display = 'block';
}

function closeDestinationDetail() {
    document.getElementById('destination-detail').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('destination-detail');
    if (event.target == modal) {
        closeDestinationDetail();
    }
}