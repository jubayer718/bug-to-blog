
# 🚀 Bug To Blog


## 🧠 About
>This is a modern, full-stack tech blog platform built with Next.js and TypeScript, featuring seamless content management, fast performance, and scalable architecture. It uses RTK Query for efficient data fetching and caching, and stores blog posts, users, and metadata in a PostgreSQL database hosted on Neon. Ideal for developers and tech writers looking to publish and manage articles with a clean, responsive interface.



---



````markdown

![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Neon](https://img.shields.io/badge/Neon%20DB-00F894?logo=data&logoColor=white)
![License](https://img.shields.io/github/license/your-username/your-repo-name)

---

## 📋 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Features](#features)
- [Database Setup](#database-setup)
- [Configuration](#configuration)
- [API](#api)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Contact](#contact)



## 🛠 Tech Stack

- ⚛️ [Next.js](https://nextjs.org/)
- 🧑‍💻 [TypeScript](https://www.typescriptlang.org/)
- 🔄 [Redux Toolkit & RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- 🛢 [PostgreSQL](https://www.postgresql.org/)
- ☁️ [Neon Database](https://neon.tech/)
- 🌐 [Vercel](https://vercel.com/) (optional for deployment)

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v15 or later
- Yarn or npm
- Neon account and database
- `.env` configuration (see [Configuration](#configuration))

### Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
# or
yarn install
````

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## ▶️ Usage

* Register/login users
* Fetch and cache data using RTK Query
* Perform CRUD operations on PostgreSQL
* Responsive UI with server-rendered content

---

## ✨ Features

* 🔐 JWT-based authentication
* 🚀 SSR and static generation with Next.js
* 💾 PostgreSQL queries via Prisma (or pg)
* 📡 RTK Query for API state
* ☁️ Serverless PostgreSQL with Neon

---

## 🗄️ Database Setup

You can use Neon’s dashboard to:

1. Create a new project
2. Copy the connection string (with password and `sslmode=require`)
3. Use schema management tool (like Prisma or SQL scripts)

---

## ⚙️ Configuration

Create a `.env.local` file in the root with the following:

```env
DATABASE_URL=postgresql://<user>:<password>@<host>/<db>?sslmode=require
JWT_SECRET=your_jwt_secret
NEXTAUTH_SECRET=your_nextauth_secret (if using)
```



## 🤝 Contributing

1. Fork the repo
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes
4. Push the branch
5. Open a pull request

---

## 🧪 Troubleshooting

| Issue                           | Solution                                     |
| ------------------------------- | -------------------------------------------- |
| Cannot connect to DB            | Verify Neon connection string & SSL settings |
| TypeScript build errors         | Check TS config and update interfaces        |
| CORS or 500 errors on fetch     | Check API route handler structure            |
| RTK Query not caching correctly | Ensure `baseQuery` and cache tags are set    |

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

## 📬 Contact

**Your Name**
GitHub: [@yourusername](https://github.com/yourusername)
Email: [youremail@example.com](mailto:youremail@example.com)

---

## 🙏 Acknowledgements

* [Next.js Documentation](https://nextjs.org/docs)
* [Redux Toolkit Docs](https://redux-toolkit.js.org/)
* [Neon Tech](https://neon.tech/)
* [shadcn/ui](https://ui.shadcn.dev/) (Optional: for UI)

---
### Live overview

[Live Site](https://bug-to-blog.vercel.app/blog/feed/1)

