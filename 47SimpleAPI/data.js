const data = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    age: 28,
    address: {
      street: "123 Main St",
      city: "Metropolis",
      state: "NY",
      zip: "12345",
    },
    phoneNumbers: [
      { type: "home", number: "555-555-5555" },
      { type: "work", number: "555-555-5556" },
    ],
    isActive: true,
    roles: ["admin", "editor"],
    createdAt: "2024-11-17T10:00:00Z",
    updatedAt: "2024-11-17T12:00:00Z",
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
      },
    },
    tags: ["developer", "designer", "freelancer"],
    orders: [
      {
        orderId: 101,
        date: "2024-10-15",
        amount: 250.75,
        items: [
          { productId: 201, name: "Laptop", quantity: 1, price: 1000.0 },
          { productId: 202, name: "Mouse", quantity: 2, price: 25.0 },
        ],
      },
      {
        orderId: 102,
        date: "2024-11-01",
        amount: 75.0,
        items: [
          { productId: 203, name: "Keyboard", quantity: 1, price: 50.0 },
          { productId: 204, name: "Monitor Stand", quantity: 1, price: 25.0 },
        ],
      },
    ],
  };

  module.exports = data;
  