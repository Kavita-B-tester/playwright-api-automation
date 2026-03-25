# 🚀 Playwright API Automation Framework

## 📌 Project Overview

This project is an API Automation Framework built using **Playwright (JavaScript)** to test the **Swagger Pet Store API**.

It covers end-to-end testing of **Pet** and **Store** endpoints with proper test structure, reusable utilities, and dynamic test data handling.

---

## 🛠️ Tech Stack

* Playwright
* JavaScript (Node.js)
* REST API Testing

---

## 📂 Project Structure

```
playwright-api-automation/
│
├── tests/
│   ├── pet.spec.js
│   └── store.spec.js
│
├── utils/
│   ├── apiClient.js
│   └── testData.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## ✅ Test Coverage

### 🐶 Pet Endpoints

* Add a new pet
* Find pet by ID
* Update pet details
* Delete pet

### 🛒 Store Endpoints

* Place an order
* Find order by ID
* Delete order

---

## ⚙️ Key Features

* ✅ Dynamic test data generation (using `Date.now()`)
* ✅ API request handling using reusable client
* ✅ Positive & negative test scenarios
* ✅ Proper assertions for response validation
* ✅ Error handling & debugging logs
* ✅ HTML test reports generation

---

## ▶️ How to Run Tests

### 1. Install dependencies

```
npm install
```

### 2. Install Playwright

```
npx playwright install
```

### 3. Run tests

```
npx playwright test
```

---

## 📊 Test Reports

After execution, Playwright generates an HTML report.

To open report:

```
npx playwright show-report
```

---

## 🌐 API Under Test

Swagger Pet Store API:
https://petstore.swagger.io/

---

## ⚠️ Notes

* The Swagger Pet Store API may occasionally return inconsistent responses.
* Dynamic IDs are used to avoid data conflicts during execution.

---

## 👩‍💻 Author

**Kavita Banakar**

---
