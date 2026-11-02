# 🔍 AI-Powered Financial Fraud Detection System

An AI-powered financial transaction fraud detection application built using **Node.js, Express.js, HTML, CSS, JavaScript, and IBM watsonx.ai**. The system analyzes financial transaction details and predicts whether a transaction is legitimate or potentially fraudulent using a deployed machine learning model on IBM Cloud.

---

## 📌 Project Overview

Financial fraud is a major challenge in digital banking and online financial transactions. This project provides a simple and interactive web application that leverages machine learning to identify potentially fraudulent transactions.

Users can enter transaction details through a web-based interface, and the application sends the information to a Node.js backend. The backend securely communicates with an IBM watsonx.ai deployed machine learning model to generate a fraud prediction.

The prediction is then displayed on the frontend, helping users identify suspicious financial activities.

## ✨ Key Features

- 🤖 **AI-Powered Fraud Detection:** Uses a deployed machine learning model through IBM watsonx.ai.
- 💻 **Interactive Web Interface:** Simple and user-friendly interface for entering transaction details.
- ⚡ **Real-Time Predictions:** Sends transaction information to the ML model and displays predictions.
- 🔐 **IBM Cloud Authentication:** Uses IBM IAM authentication to obtain access tokens.
- 🌐 **REST API Integration:** Connects the frontend and backend using HTTP POST requests.
- 📊 **Transaction Analysis:** Evaluates transaction attributes, including amount and account balances.
- 🚨 **Fraud Alerts:** Displays clear results for fraudulent and legitimate transactions.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Frontend structure |
| CSS3 | User interface styling |
| JavaScript | Frontend functionality |
| Node.js | Backend runtime |
| Express.js | REST API development |
| node-fetch | HTTP requests to IBM Cloud |
| CORS | Cross-origin resource sharing |
| Body-parser | JSON request parsing |
| IBM watsonx.ai | Machine learning model deployment |
| IBM Cloud IAM | Authentication and access tokens |

## 🏗️ System Architecture

The application follows a frontend-backend-machine-learning architecture.

```text
          👤 User
             |
             v
     🌐 Web Interface
        (HTML/CSS/JS)
             |
             | POST /predict
             v
       ⚙️ Node.js Backend
          (Express.js)
             |
             v
       🔐 IBM IAM API
       Generate Access Token
             |
             v
       🤖 IBM watsonx.ai
       Deployed ML Model
             |
             v
       📊 Fraud Prediction
             |
             v
       🌐 Display Result
```

## 📂 Project Structure

```text
Fraud-Detection/
│
├── index.html          # Frontend user interface
├── server.js           # Express.js backend server
├── package.json        # Project dependencies
├── .env                # Environment variables (not committed)
├── .gitignore          # Git ignored files
└── README.md           # Project documentation
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Pratham-U-dev/financial-fraud-detection.git
```

### 2. Navigate to the Project Directory

```bash
cd your-repository
```

### 3. Install Dependencies

```bash
npm install express node-fetch cors body-parser dotenv
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
IBM_API_KEY=your_ibm_cloud_api_key
IBM_MODEL_URL=your_ibm_watsonx_model_endpoint
PORT=5000
```

Replace the placeholder values with your IBM Cloud credentials and deployed model endpoint.

**Important:** Never expose your IBM Cloud API key in frontend JavaScript, public repositories, or committed source files.

### 5. Start the Backend Server

```bash
node server.js
```

If everything is configured correctly, the server will run at:

```text
http://localhost:5000
```

### 6. Launch the Frontend

Open `index.html` in your browser to access the fraud detection interface.

Enter the transaction details and click **Predict Fraud** to generate a prediction.

## 📡 API Documentation

### Predict Transaction Fraud

**Endpoint:**

```http
POST /predict
```

**Base URL:**

```text
http://localhost:5000
```

**Request Headers:**

```http
Content-Type: application/json
```

**Request Body:**

The application accepts transaction information in the IBM watsonx.ai prediction payload format.

```json
{
  "input_data": [
    {
      "fields": [
        "step",
        "type",
        "amount",
        "nameOrig",
        "oldbalanceOrg",
        "newbalanceOrig",
        "nameDest",
        "oldbalanceDest",
        "newbalanceDest"
      ],
      "values": [
        [
          1,
          "TRANSFER",
          5000,
          "ORIG456",
          10000,
          5000,
          "DEST123",
          2000,
          7000
        ]
      ]
    }
  ]
}
```

**Response:**

The backend forwards the request to the deployed IBM watsonx.ai model and returns its prediction response.

The frontend reads the prediction from:

```javascript
result.predictions[0].values[0][0]
```

**Prediction Results:**

| Prediction | Result |
|---|---|
| `1` | 🚨 Fraud Detected |
| `0` | ✅ Transaction is Legitimate |

*Note: The interpretation of prediction values depends on the deployed model's output-label configuration.*

## 🖥️ Application Workflow

1. The user opens the fraud detection web application.
2. The user enters the financial transaction details.
3. The frontend collects the input values and creates a JSON payload.
4. The payload is sent to the backend through the `/predict` API.
5. The backend generates an IBM IAM access token.
6. The backend forwards the transaction data to the deployed IBM watsonx.ai model.
7. The machine learning model processes the transaction and returns a prediction.
8. The backend sends the prediction response to the frontend.
9. The frontend displays whether the transaction is fraudulent or legitimate.

## 🔐 Security Considerations

- Store IBM Cloud API keys in environment variables.
- Never commit `.env` files to GitHub.
- Use `.gitignore` to exclude sensitive credentials.
- Implement proper request validation and error handling.
- Use HTTPS when deploying the application.
- Configure CORS to allow only trusted frontend origins in production.
- Rotate any API keys that have previously been exposed in source code or public repositories.

## 🚀 Future Enhancements

- 📊 Transaction analytics and fraud statistics dashboard.
- 📈 Visual representation of fraud detection results.
- 🗃️ Database integration for transaction history.
- 🔔 Automated alerts for suspicious transactions.
- 👤 User authentication and role-based access.
- 📱 Responsive design for mobile devices.
- ☁️ Cloud deployment for public accessibility.
- 📉 Model performance evaluation and monitoring.

## 🎯 Project Objective

The primary objective of this project is to demonstrate how machine learning and cloud-based AI services can be integrated into a web application to detect potentially fraudulent financial transactions.

By combining a user-friendly frontend, a Node.js backend, and IBM watsonx.ai, this project demonstrates a practical approach to building an AI-powered financial fraud detection solution.



**Built with ❤️ using Node.js, JavaScript, and IBM watsonx.ai.**
