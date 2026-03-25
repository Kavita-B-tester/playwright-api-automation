exports.testData = {
  pet: {
    id: Date.now(),
    category: {
      id: 1,
      name: 'Dogs',
    },
    name: 'Doggie',
    photoUrls: ['https://example.com/dog.jpg'], // REQUIRED
    tags: [
      {
        id: 1,
        name: 'tag1',
      },
    ],
    status: 'available',
  },

  order: {
    id: Date.now(),
    petId: null, // will set dynamically
    quantity: 1,
    shipDate: new Date().toISOString(),
    status: 'placed',
    complete: true,
  },
};
