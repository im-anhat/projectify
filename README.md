# 📅 Projectify

> **Projectify** is a comprehensive project management platform designed to enhance organizational workflows. Built with **Next.js**, **Node.js**, and various **AWS services**, Projectify facilitates real-time communication, task management, and collaboration, ensuring teams stay organized and productive.

## 💾 Technologies

- **Frontend:** TypeScript, Next.js, React.js, Tailwind CSS, Redux Toolkit, Redux Toolkit Query, Material UI Data Grid
- **Backend:** Node.js, Express.js, Prisma (PostgreSQL ORM), Socket.io
- **Database:** PostgreSQL
- **Cloud Services:** AWS EC2, AWS RDS, AWS API Gateway, AWS Amplify, AWS S3, AWS Lambda, AWS Cognito

## 🚀 Features

### 🗨️ Real-Time Communication

Developed a collaborative platform with **Next.js** and **Socket.io**, enabling users to communicate and ask questions about projects in real time, fostering seamless teamwork and quick decision-making.

### 📈 Advanced Project Tracking

Built a responsive system using **Tailwind CSS** and **Material UI** that tracks project progress comprehensively. Dynamically displays projects in various views including board view, table view, list view, and timeline view, allowing users to monitor tasks effectively.

### 🛠️ Efficient State Management

Leveraged **Redux Toolkit** to manage global states efficiently, eliminating the need to re-fetch project data and preserving user settings/preferences during navigation. This ensures a smooth and optimized user experience.

### 🔒 Secure and Scalable Backend

Engineered a robust backend with **TypeScript**, **Express.js**, and **Prisma**, ensuring scalability and maintainability. Deployed on **AWS EC2**, **AWS RDS**, and **AWS API Gateway**, with **AWS Cognito** handling secure authentication, safeguarding user data and application integrity.

### 📊 Interactive Dashboard

Created an intuitive dashboard that allows users to manage tasks, events, and collaborations efficiently. Integrated **Material UI Data Grid** for enhanced data visualization and interaction.

## 🛠️ Getting Started

### 📋 Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **PostgreSQL** database (managed with PgAdmin)
- **AWS Account** with necessary services configured

### 🚀 Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/viettech-group3/projectify.git
   cd projectify
   ```

2. **Install the dependencies**

   ```bash
   npm install
   ```

3. **Run Migrations**

   ```bash
   npx prisma migrate dev
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The script above has been configured and ready to use!
