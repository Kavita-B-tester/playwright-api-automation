
  const { test, expect } = require('@playwright/test');
  const { APIClient } = require('../utils/apiClient');
  const { testData } = require('../utils/testData');

  let apiContext;
  const api = new APIClient();

  test.beforeAll(async () => {
    apiContext = await api.createContext();
  });

  test.afterAll(async () => {
    await apiContext.dispose(); // ✅ cleanup
  });

  test.describe('Pet API', () => {
    let petId;

    test('Add pet', async () => {
      const petPayload = {
        ...testData.pet,
        id: Date.now(),
      };

      const res = await apiContext.post('/pet', {
        data: petPayload,
      });

      console.log(await res.text()); // 🔥 MUST KEEP FOR DEBUG

      expect(res.status()).toBe(200);

      const body = await res.json();
      testData.pet.id = body.id;
    });
    test('Find pet by ID', async () => {
      const res = await apiContext.get(`/pet/${petId}`);

      expect(res.status()).toBe(200);

      const body = await res.json();
      expect(body.id).toBe(petId);
    });

    test('Update pet', async () => {
      const updated = { ...testData.pet, id: petId, name: 'UpdatedDog' };

      const res = await apiContext.put('/pet', {
        data: updated,
      });

      expect(res.status()).toBe(200);

      const body = await res.json();
      expect(body.name).toBe('UpdatedDog');
    });

    test('Delete pet', async () => {
      const res = await apiContext.delete(`/pet/${petId}`);

      expect(res.status()).toBe(200);
    });
  });

  // ✅ Negative test
  test('Find pet with invalid ID', async () => {
    const apiContext = await new APIClient().createContext();

    const res = await apiContext.get('/pet/999999999');

    expect(res.status()).toBe(404);

    await apiContext.dispose();
  });