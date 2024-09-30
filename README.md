# 📅 Projectify

> **Projectify** is a comprehensive project management platform designed to enhance organizational workflows. Built with **Next.js**, **Node.js**, and various **AWS services**, Projectify facilitates real-time communication, task management, and collaboration, ensuring teams stay organized and productive.


<table>
  <tr>
    <td>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/61bbdd13-b3b6-4c7a-b134-58daa97ac8b8">
    </td>
    <td>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/6d16ad61-5d70-4894-a057-eeb4d38db34d">    </td>
  </tr>
</table>

<img width="1238" alt="image" src="https://github.com/user-attachments/assets/7511a989-0948-4d05-a9bd-860c1c4ffe50">

<img width="1234" alt="image" src="https://github.com/user-attachments/assets/9efcdfaf-3ad8-4e63-aa1f-d257f149fea8">


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

<img width="1467" alt="image" src="https://github.com/user-attachments/assets/d7e87191-af0b-40a6-ac7c-ed97d9b5661c">


### 🛠️ Efficient State Management

Leveraged **Redux Toolkit** to manage global states efficiently, eliminating the need to re-fetch project data and preserving user settings/preferences during navigation. This ensures a smooth and optimized user experience.

### 🔒 Secure and Scalable Backend

Engineered a robust backend with **TypeScript**, **Express.js**, and **Prisma**, ensuring scalability and maintainability. Deployed on **AWS EC2**, **AWS RDS**, and **AWS API Gateway**, with **AWS Cognito** handling secure authentication, safeguarding user data and application integrity. Only authorize access to backend API endpoints for users through Cognito ID.

<table>
  <tr>
    <td>
  <img src="https://github.com/user-attachments/assets/891fde68-9db4-4dca-ac20-18b714994fde" alt="Image 1" width="483" />
    </td>
    <td>
  <img src="https://github.com/user-attachments/assets/2abc2828-81ca-4c8d-ad6e-7c6275c2c254" alt="Image 2" width="420" />
  </tr>
</table>

<table>
  <tr>
    <td>
  <img src="https://github.com/user-attachments/assets/22ac1467-74b9-414d-9fa5-7a9b052006ef" alt="Additional Image 1" width="440" />
    </td>
    <td>
  <img src="https://github.com/user-attachments/assets/fdcfb61b-8e28-44cd-a624-ea05f1dba34a" alt="Additional Image 2" width="400" />
  </tr>
</table>

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
