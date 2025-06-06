<h1 align='center'>Manual and Automation Test on Jira</h1>

---

## Project Overview

This QA project tests the **Jira web application** by verifying 10 core features through:

1. Functional testing
2. Positive/negative test scenarios
3. Manual test design
4. UI test automation using Selenium + Mocha + Chai

---

## Deliverables

### **1.Project Requirement Document (PRD)**

Defines each feature with:

- Feature Name
- Functional Description
- Use Case
- Acceptance Criteria

### 2.Test Plan

Includes:

- Project scope and objective
- Test types (functional, sanity, regression, automation)
- Roles and responsibilities
- Test approach, environment, entry/exit criteria
- Estimated schedule

### 3. Test Cases

- 10 Jira features tested
- 3 test cases per feature (2 happy, 1 negative)
- Test template used as per assignment format

### 4. Automation Scripts

- Written in **Node.js** using **Selenium WebDriver**, **Mocha**, and **Chai**
- **test-login-positive.js** – Valid login scenario
- **test-login-negative.js** – Invalid email scenario, verifies “Sign up” prompt
- Generates Mochawesome report
