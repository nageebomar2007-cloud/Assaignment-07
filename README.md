<!-- বাজার দর (Bazar Dor)

A Bengali-language web app that shows daily market prices of everyday products across Bangladesh. Browse products by category, compare prices between markets and divisions, and see how today's price changed from yesterday. Sign-in is required to view full product details.





     ------------0-----------------




Features

------
1. Category browsing - products are grouped by category (rice, vegetables, and more), each with its own icon and product count.
2. Daily price and change indicator - every product shows today's price and whether it went up, went down, or stayed the same compared with yesterday, with the percentage change.
3. Price summary - lowest, highest, and average price for each product, calculated across all markets.
4. Market-wise price table - compare minimum, maximum, and average prices by market and division.
5. Authentication - sign up and sign in with email and password, or continue with Google or GitHub.
6. Protected pages - product details and the profile page are only available to logged-in users; everyone else is redirected to the sign-in page.
7. User menu - navbar dropdown with the user's avatar, name, email, a profile link, and sign out.
8. Bengali UI with Bengali digits - all text and numbers are shown in Bengali.
9. Responsive design - works on mobile, tablet, and desktop.
10. Cached data - API responses are revalidated every hour for fast page loads.



Technologies Used

--------------
Area	                 Technology
---------------------------------------------------------------------
Framework	         Next.js 16 (App Router, Turbopack)
---------------------------------------------------------------------
Language	              JavaScript (JSX)
---------------------------------------------------------------------
UI                	React, Tailwind CSS, daisyUI
-------------------------------------------------------------------
Icons                    	react-icons
---------------------------------------------------------------------
Authentication	    Better Auth (email/password, Google, GitHub)
----------------------------------------------------------------------
Data source     	Bazar Dor products API (/api/bazardor/ products)
-----------------------------------------------------------------------
Database	        MongoDB with the Better Auth MongoDB adapter















Getting Started


---------------------
Prerequisites
----
1. Node.js 20 or later
2. A MongoDB database (for example, MongoDB Atlas)
3. Google and GitHub OAuth apps (only if you want social login)






Installation
--------
# 1. Clone the repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env.local   # or create .env.local manually

# 4. Start the development server
npm run dev









Open http://localhost:3000 in your browser.

Environment Variables

Create a .env.local file in the project root:

env


MONGODB_URL=your_mongodb_connection_string

BETTER_AUTH_SECRET=a_long_random_string
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

For production, set the same variables in your hosting provider's dashboard and change BETTER_AUTH_URL to your deployed URL.

Available Scripts







BETTER_AUTH_URL to your deployed URL.

Available Scripts
Command	Description
npm run dev	Start the development server
npm run build	Create a production build
npm run start	Run the production build
npm run lint	Run ESLint
Routes
Route	Description	Access
/	Home page with banner and categories	Public
/signup	Create an account	Public
/signin	Sign in	Public
/detailsCard/[slug]	Full price details for one product	Logged-in users
/profile	User profile	Logged-in users

Protected routes are guarded by src/proxy.js, which redirects visitors without a session to /signin.

Deployment
Push the project to GitHub.
Import the repository on Vercel.
Add all environment variables from the section above.
In MongoDB Atlas, allow network access from 0.0.0.0/0.
In your Google and GitHub OAuth settings, add these callback URLs:
https://your-app.vercel.app/api/auth/callback/google
https://your-app.vercel.app/api/auth/callback/github
Deploy.
Author

Your Name GitHub: @your-username

License

This project was built for learning purposes.

 -->
