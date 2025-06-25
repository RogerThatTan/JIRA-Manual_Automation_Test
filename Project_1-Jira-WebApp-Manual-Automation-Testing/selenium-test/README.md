<h1 align='center'>Automation Script Details</h1>

---

## Prerequisites

**Firstly**, download the browser driver from this link. [Click Here](https://www.npmjs.com/package/selenium-webdriver)

**Locate the WebDriver Executable:**

- Download the appropriate WebDriver executable (e.g., ChromeDriver, GeckoDriver) for your browser.
- Ensure you know the exact path to this executable file.

**Access Environment Variables:**

Search for "Environment Variables" in the Windows search bar, then click "Edit the system environment variables".

**Modify the PATH Variable:**

In the "Environment Variables" window, locate the "Path" system variable under "System variables," click "Edit," and add the directory containing the WebDriver executable to the list.

**Secondly**, enusre that **Node.Js** and **npm** are installed in your system properly and updated, if not installed please visit this [link](https://nodejs.org/en/download) to install from the official website.

---

## Install Dependencies

```bash
$ npm install
#or
$ npm install selenium-webdriver mocha chai geckodriver
```

## Compile and run the script

```bash
$ npm test
```

---

## Running the Test

Expected Behavior:

1. Opens firefox browser.
2. Navigates to Jira Login.
3. Inputs a **fake/unregistered email** address.
4. Submits the form.
5. Verifies that the **"Sign up"** button appears instead of the password page.
6. Closes the browser after test completion.
7. Generates HTML report in `mochawesome-reports/` folder.

## Script Purpose

This test verifies **Jira's behavior with an unregistered email** , ensuring:

1. Jira **does not proceed to password entry** for unknown users
2. The **"Sign up"** prompt is shown instead.
3. Automated UI behavior is functioning as expected.
4. A **Mochawesome test report** is generated for documentation.
