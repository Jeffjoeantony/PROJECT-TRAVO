// Hotel data
const hotels = [
    {
      id: 1,
      name: "Grand Plaza Hotel",
      rating: 4.5,
      reviews: 1234,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      price: "$200",
      location: "Downtown",
      description: "Luxury hotel with stunning city views"
    },
    {
      id: 2,
      name: "Seaside Resort",
      rating: 4.8,
      reviews: 2156,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      price: "$350",
      location: "Beachfront",
      description: "Beautiful beachfront resort with private access"
    },
    {
      id: 3,
      name: "Mountain Lodge",
      rating: 4.6,
      reviews: 987,
      image: "https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=800&q=80",
      price: "$180",
      location: "Mountain View",
      description: "Cozy lodge with breathtaking mountain views"
    }
  ];
  
  // DOM Elements
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  const searchInput = document.getElementById('searchInput');
  const hotelsGrid = document.getElementById('hotelsGrid');
  
  // Toggle mobile menu
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Create hotel card
  function createHotelCard(hotel) {
    return `
      <div class="hotel-card">
        <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
        <div class="hotel-content">
          <div class="hotel-header">
            <h3 class="hotel-name">${hotel.name}</h3>
            <span class="hotel-price">${hotel.price}</span>
          </div>
          <div class="hotel-rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="star-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>${hotel.rating}</span>
            <span class="dot">•</span>
            <span>${hotel.reviews} reviews</span>
          </div>
          <div class="hotel-location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${hotel.location}
          </div>
          <p class="hotel-description">${hotel.description}</p>
          <button class="view-details-btn">View Details</button>
        </div>
      </div>
    `;
  }
  
  // Render hotels
  function renderHotels(hotelsList) {
    hotelsGrid.innerHTML = hotelsList.map(hotel => createHotelCard(hotel)).join('');
  }
  
  // Search functionality
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredHotels = hotels.filter(hotel => 
      hotel.name.toLowerCase().includes(searchTerm) ||
      hotel.location.toLowerCase().includes(searchTerm) ||
      hotel.description.toLowerCase().includes(searchTerm)
    );
    renderHotels(filteredHotels);
  });
  
  // Initial render
  renderHotels(hotels);