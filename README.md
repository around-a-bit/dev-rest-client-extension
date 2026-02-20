# 🚀 Dev REST Client – Chrome Extension

A lightweight REST API testing tool built as a Chrome Extension.

This project replicates core Postman functionality directly inside the browser popup, allowing developers to send HTTP requests without leaving Chrome.

---

<img width="1920" height="1080" alt="extention" src="https://github.com/user-attachments/assets/684d1bef-9f10-45e4-997e-425ef799b73a" />


## 📌 Features

- ✅ Supports GET, POST, PUT, PATCH, DELETE
- ✅ Dynamic custom headers
- ✅ JSON request body
- ✅ Response time measurement
- ✅ Status code display
- ✅ Pretty JSON formatting
- ✅ Error handling
---

## 🏗 Architecture

Chrome Extension (Manifest v3)  
→ Uses Fetch API for HTTP requests  
→ Uses Chrome Storage API for persistence  

---

## 📂 Project Structure

```
dev-rest-client-extension/
│
├── manifest.json
├── popup.html
├── popup.js
├── style.css
└── README.md
```

---

## 🛠 Installation (Local Testing Only)

Since this extension is not published to Chrome Web Store, you can load it manually:

1. Open Chrome
2. Go to: `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the project folder

The extension will now appear in your browser toolbar.

---

## 🔥 How to Use

1. Select HTTP method
2. Enter API URL
3. Add custom headers (optional)
4. Add JSON body (if required)
5. Click **Send Request**
6. View response status, response time, and formatted JSON output

---

## 🧪 Public APIs Used for Testing

- https://jsonplaceholder.typicode.com
- https://httpbin.org
- https://reqres.in
- https://randomuser.me

---

## ⚙️ Technologies Used

- JavaScript (ES6+)
- Chrome Extension API (Manifest v3)
- Fetch API

---

## 🎯 Why This Project?

This project demonstrates:

- Asynchronous programming
- REST API communication
- Dynamic DOM manipulation
- Chrome extension architecture
- Performance measurement
- Error handling strategies

---

## 🚧 Future Improvements

- Request collections
- Authorization tab (Bearer, Basic)
- Environment variables
- Request history panel
- Dark/Light theme toggle
- Background service worker proxy for CORS handling
- Export/import collections (JSON)

---

## 📜 License

MIT License

---

## 👨‍💻 Author

Sankar Rajak 
Software Developer  
