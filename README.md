                                            Sales Admin Panel

Overview

        This project is a Sales Admin Panel built using Node.js, Express, Sequelize, and PostgreSQL. It manages wholesalers, retailers, and stock transactions between them, following an MVC architecture.

Tech Stack
Backend: Node.js, Express.js
Database: PostgreSQL
ORM: Sequelize
Environment Management: dotenv

Features
Wholesaler & Retailer Management
Stock Transactions (Wholesalers selling to Retailers)
Many-to-Many Relationships using Sequelize
Monthly Turnover Calculation
Max Turnover Analysis per Retailer

Installation & Setup
1️⃣ Clone the Repository
git clone <repository_url>
cd sales-admin-panel
2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables
DB_URL=postgresql://neondb_owner:npg_LhMbi6kCTpY9@ep-snowy-feather-a1k2npyx-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
PORT=3000
4️⃣ Start the Server
npm run dev

API Endpoints

    1️⃣ Get Wholesaler with Associated Retailers
        URL: GET /wholesalers/:id
        Example Response:
          {
             "id": 1,
             "name": "Amit01 Kanaujiya",
                "Retailers": [
                          { "id": 1, "name": "Amit Kanaujiya" },
                          { "id": 4, "name": "Sumit Kanaujiya" }
                              ]
          }

    2️⃣ Get Retailers with Only One Wholesaler
        URL: GET /retailer/single-wholesaler
        Example Response:
         [
            {
                 "id": 4,
                 "name": "Sumit Kanaujiya",
                 "Wholesalers": [
                 { "id": 1, "name": "Amit01 Kanaujiya" }
          ]
            }
         ]
    3️⃣ Get Monthly Turnover of Each Wholesaler
        URL: GET /wholesalers/monthly/turnover
        Example Response:
           [
            {
             "wholesaler_id": 3,
             "year": "2021",
             "month": "1",
             "total_turnover": "500.75",
             "wholesaler_name": "Amit02 Kanaujiya"
           }
        ]
    4️⃣ Get Max Turnover per Wholesaler from a Single Retailer
        URL: GET /wholesalers/max/turnover
        Example Response:
         [
            {
             "wholesaler_id": 3,
             "retailer_id": 1,
             "max_turnover": "500.75",
             "wholesaler_name": "Amit02 Kanaujiya",
            "retailer_name": "Amit Kanaujiya"
            }
        ]
         
