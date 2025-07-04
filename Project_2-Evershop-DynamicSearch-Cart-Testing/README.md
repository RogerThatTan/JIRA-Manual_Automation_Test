<h1 align='center'>Evershop Dynamic Search & Cart Testing</h1>

---

## Project Overview

This project demonstrates end-to-end testing of a dynamic search and cart system implemented on the [Evershop](https://demo.evershop.io/) e-commerce platform. It covers requirements gathering, test case design, execution, and defect reporting across both UI and API levels.

---

### **1.Project Scope**

Defines each feature with:

- **Dynamic Search** behavior.
- **Cart Functionality** including Add/Remove/Update.
- **Happy Path Journey** for specific products.
- **API and UI** consistency checks.

### 2.Functional Test Coverage

**UI Test Activities**

- Performed search with “Nike react” and verified listed products.
- Added black-size “M” shoes to cart.
- Verified if product details matched in cart view.
- Tested cart responsiveness, remove button, checkout button.
- Identified defects like mismatched SKU/Color/Image, incorrect quantity reflection.

**API Test Activities (via Postman)**

- **GET** `/search?keyword=Nike react` – Fetched relevant products
- **GET** `/cart` – Fetched current cart contents
- **POST** `/api/cart/mine/items` – Added product to cart
- **PATCH** `/api/cart/{cartId}/items/{uuid}` – Increased/Decreased quantity
- **DELETE** `/api/cart/{cartId}/items/{itemId}` – Removed product

### 3. Tools Used

- Postman (API testing & validation).
- Google Chrome, Mozila Firefox (UI testing).
- Manual exploratory testing.
- Excel & Word (Test case and bug documentation).

### 4. Notable Defects Identified

- SKU mismatch between product page and cart.
- Incorrect quantity update behavior.
- UI issues in slow networks (3G).
- Product color not shown in API cart response.
