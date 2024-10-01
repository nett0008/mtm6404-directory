// Assuming clients.js has been loaded already and contains the clients array

// Function to create the list HTML for clients
function list(clients) {
    return clients.map((client, index) => `
      <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name}
        <strong>$${client.balance}</strong>
      </li>
    `).join('');
  }
  
  // Function to search clients by name
  function search(query) {
    if (typeof clients === 'undefined') {
      console.error("Clients array is undefined");
      return [];
    }
  
    const normalizedQuery = query.toLowerCase().trim();
    
    return clients.filter(client => {
      return client.name.toLowerCase().includes(normalizedQuery);
    });
  }
  
  // Function to order clients based on a specified property
  function order(clients, property) {
    return clients.slice().sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
  }
  
  // Function to calculate total balance of all clients
  function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
  }
  
  // Function to get a specific client's information by index
  function info(index) {
    if (typeof clients === 'undefined') {
      console.error("Clients array is undefined");
      return null;
    }
  
    return clients.find((client, idx) => idx === index) || null;
  }
  
  // Function to handle search input and update the UI
  function handleSearch() {
    const query = document.getElementById('search-query').value;
    const filteredClients = search(query);
    const resultHTML = list(filteredClients);
    document.getElementById('search-results').innerHTML = resultHTML;
  }
  
  // Wait for the DOM to be fully loaded before attaching the event listener
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-query');
    if (searchInput) {
      searchInput.addEventListener('input', handleSearch);
    }
  });
  