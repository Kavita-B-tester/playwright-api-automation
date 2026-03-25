// tests/store.spec.js
  const { test, expect } = require('@playwright/test');
  const { APIClient } = require('../utils/apiClient');
  const { testData } = require('../utils/testData');

  let apiContext;
  const api = new APIClient();

  test.beforeAll(async () => {
    apiContext = await api.createContext();
  });

test('Place order', async () => {
  const orderPayload = {
    ...testData.order,
    id: Date.now(),
    petId: testData.pet.id, // ✅ MUST match created pet
  };

  const res = await apiContext.post('/store/order', {
    data: orderPayload,
  });

  expect(res.status()).toBe(200);
});

  test('Find order by ID', async () => {
    const response = await apiContext.get(`/store/order/${testData.order.id}`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(testData.order.id);
  });

  test('Delete order', async () => {
    const response = await apiContext.delete(
      `/store/order/${testData.order.id}`,
    );

    expect(response.status()).toBe(200);
  });
  test('Find pet with invalid ID', async () => {
    const response = await apiContext.get('/pet/999999999');

    expect(response.status()).toBe(404);
  });