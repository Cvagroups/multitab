# 🚀 Multitab - Installation Guide

## 📌 Overview
The **Multitab** is a powerful and responsive web application designed to automate tab openings for testing and educational purposes. It supports **Render, Shared Hosting, VPS, Dedicated Servers, and other hosting environments**.

---

## 🛠️ System Requirements
- **Node.js** (Latest LTS version recommended)
- **NPM** (Comes with Node.js)
- **Git** (For cloning repository)
- **Web Browser** (Chrome recommended)

---

## ⚡ Installation on Local Machine (Windows/Linux/Mac)
### **Step 1: Clone the Repository**
```sh
git clone https://github.com/cvagroups/multitab.git
cd multitab
```

### **Step 2: Install Dependencies**
```sh
npm install
```

### **Step 3: Run the Application**
```sh
node src/server.js
```
Now, open **http://localhost:3000** in your browser.

---

## 🌍 Deployment on Shared Hosting (cPanel)
### **Step 1: Upload Files**
- ZIP the **project folder** and upload it to your hosting account.
- Extract the files inside the `public_html` directory.

### **Step 2: Set Up Node.js**
- Go to **cPanel → Software → Setup Node.js App**
- Select **Node.js version**
- Set `Application root` to your project folder
- Set `Application URL` to your domain
- Click **Create**

### **Step 3: Install Dependencies**
Run the following command inside the hosting terminal:
```sh
npm install
```

### **Step 4: Start the App**
```sh
node src/server.js
```

---

## 🚀 Deployment on VPS/Dedicated Server
### **Step 1: Connect to Your Server**
```sh
ssh user@your-server-ip
```

### **Step 2: Clone the Repository**
```sh
git clone https://github.com/cvagroups/multitab.git
cd multitab
```

### **Step 3: Install Node.js and Dependencies**
```sh
sudo apt update && sudo apt install nodejs npm -y
npm install
```

### **Step 4: Run the Server**
```sh
node src/server.js
```

### **Step 5: Use PM2 for Auto-Restart (Recommended for Production)**
```sh
npm install -g pm2
pm2 start src/server.js --name multitab
pm2 save
pm2 startup
```

---

## 📜 Notes & Best Practices
✅ **For public deployment, ensure firewall allows port `3000`**  
✅ **Use Nginx/Apache as a reverse proxy for domain-based access**  
✅ **For maximum performance, optimize server resources based on usage**  

Your **Multitab** is now successfully deployed! 🎉

---

## 🤝 Developed by Cvagroups
For more projects and updates, visit [Cvagroups](https://github.com/Cvagroups). 🚀

