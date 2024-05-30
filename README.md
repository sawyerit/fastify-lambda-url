<p align="center">
  <img src="img/readme_image.webp" width="300" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">AWS Lambda Function URL Example</h1>
</p>
<p align="center">
    <em>Supporting the blog article "AWS Lambda Function URLs with SAM Local and Postman"</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/sawyerit/fastify-lambda-url?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/sawyerit/fastify-lambda-url?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/sawyerit/fastify-lambda-url?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/sawyerit/fastify-lambda-url?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#overview)
- [ Features](#features)
- [ Repository Structure](#repository-structure)
- [ Modules](#modules)
- [ Getting Started](#getting-started)
  - [ Installation](#installation)
  - [ Usage](#usage)
  - [ Tests](#tests)
  - [ Building From Scratch](#building-your-own-from-scratch)
- [ License](#license)
</details>
<hr>

##  Overview

This repo is supporting code for the Medium article ["AWS Lambda Function URLs with SAM Local and Postman"](http://todo). In the article, we look specifically at invoking a local Lambda Function via URL using Postman. To simplify the approach we utilize Fastify to quickly set up an API in our Lambda, and include a SAM template to facilitate the local deployment and execution of the function. 

This repo contains all the code needed to run the lambda locally and should be sufficient for deploying to AWS. 

---

##  Features

|    | Feature          | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project leverages AWS Lambda and Fastify to create a serverless web application. |
| 🧪 | **Testing**       | Jest and ts-jest are used for testing, ensuring code reliability and robustness. Test coverage is extensive, covering both unit and integration tests. |
| 📦 | **Dependencies**  | Key dependencies include Fastify, AWS Lambda, Jest, SAM CLI and other related libraries. |

---

##  Repository Structure

```sh
└── fastify-lambda-url/
    ├── LICENSE
    ├── README.md
    ├── event.json
    ├── jest.config.js
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── app.ts
    │   ├── index.ts
    │   └── tests
    ├── template.yaml
    ├── tsconfig.json
    └── webpack.config.js
```

---

##  Modules

<details closed><summary>root</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---                                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [jest.config.js](https://github.com/sawyerit/fastify-lambda-url/blob/master/jest.config.js)       | Configures Jest for TypeScript tests in a Node environment by specifying the TypeScript preset and test file matching patterns.                                                                                                                                                                                                                                                                                                       |
| [event.json](https://github.com/sawyerit/fastify-lambda-url/blob/master/event.json)               | Describes an AWS Lambda event payload for a route related to headers, query parameters, request context, and body data.                                                                                                                                                                                                                                                       |
| [webpack.config.js](https://github.com/sawyerit/fastify-lambda-url/blob/master/webpack.config.js) | The webpack configuration for building the project.                                                                                                                                      |
| [package.json](https://github.com/sawyerit/fastify-lambda-url/blob/master/package.json)           | Manages dependencies, testing, starting the server, and bundling for production. Dependencies include Fastify, AWS Lambda, and Jest for testing.                                                                                                                                                                                                          |
| [tsconfig.json](https://github.com/sawyerit/fastify-lambda-url/blob/master/tsconfig.json)         | Enables strict TypeScript compilation targeting ES2020 and CommonJS modules while excluding test files. Maintains consistent file casing and interop with ES modules, with output to the dist directory.                                                                                                                                                                                                                              |
| [template.yaml](https://github.com/sawyerit/fastify-lambda-url/blob/master/template.yaml)         | Defines SAM template for deployment of the lambda using sam or cfn and creating the Lambda function URL.                                                                                                                                                                                                   |

</details>

<details closed><summary>src</summary>

| File                                                                                | Summary                                                                                                                                                                                                   |
| ---                                                                                 | ---                                                                                                                                                                                                       |
| [index.ts](https://github.com/sawyerit/fastify-lambda-url/blob/master/src/index.ts) | Enables AWS Lambda integration for Fastify app, routing APIGatewayProxyEvent to app logic via awsLambdaFastify. Centralizes Lambda proxy setup within handler method. |
| [app.ts](https://github.com/sawyerit/fastify-lambda-url/blob/master/src/app.ts)     | Implements Fastify routes for hello endpoint using GET and POST methods. Registers routes with Fastify instance for a server.                                                                             |

</details>

---

##  Getting Started

**System Requirements:**

* **TypeScript**
* **NPM**
* **SAM CLI**
* **Postman or ability to issue curl commands**

###  Installation

<h4>From <code>source</code></h4>

> 1. Clone the fastify-lambda-url repository:
>
> ```console
> $ git clone https://github.com/sawyerit/fastify-lambda-url
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd fastify-lambda-url
> ```
>
> 3. Install the dependencies:
> ```console
> $ > npm install
> ```

###  Usage

<h4>From <code>source</code></h4>

> Run fastify-lambda-url using the command below:
> ```console
> $ > npm run build
> $ > npm run start
> ```

###  Tests

> Run the test suite using the command below:
> ```console
> $ > npm run test
> ```

### Building your own from scratch

See [CREATING](/docs/CREATING.md).

---


##  License

This project is protected under the [MIT](https://choosealicense.com/licenses/mit/) License. For more details, refer to the [LICENSE](/LICENSE) file.

---
