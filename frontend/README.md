### Frontend

This folder contains the frontend React application for yralvisa.com.

**Getting Started:**

1.  Navigate to this directory in your terminal.
2.  Install dependencies: `npm install`
3.  Create a `.env` file in the root of the `frontend` directory.
4.  Add the following line to your `.env` file, replacing the URL with your backend API URL:
    `REACT_APP_API_URL=http://localhost:5000`
5.  Start the development server: `npm start`

**Available Routes:**

*   `/` - Homepage
*   `/careers` - Careers Page
*   `/blog` - Blog Page
*   `/product-page` - Product Page
*   `/admin/cards` - Admin Cards Management
*   `/admin/blogs` - Admin Blogs Management

**Note:**

To see content on the public-facing pages (e.g., blogs on `/blog`), you need to add cards and blogs through the respective admin panel sections (`/admin/cards` and `/admin/blogs`).
