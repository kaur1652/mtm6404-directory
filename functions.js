// LIST - using map()
const list = clients =>
  clients
    .map((client, index) => `
      <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name}
        <strong>$ ${client.balance}</strong>
      </li>
    `)
    .join('');

    // ORDER - using sort()
const order = (clients, property) =>
  clients.sort((a, b) => {
    if (property === 'index') {
      return a.index - b.index;
    }

    if (property === 'balance') {
      return a.balance - b.balance;
    }


    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });

  // TOTAL - using reduce()
const total = clients =>
  clients.reduce((sum, client) => sum + client.balance, 0);


// INFO - using find()
const info = index =>
  clients.find(client => client.index === index);
c

// SEARCH - using filter()
const search = query =>
  clients.filter(client =>
    client.name.toLowerCase().includes(query.toLowerCase())
  );

