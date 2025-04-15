# Watoto Help Platform

Watoto Help is a compassionate web platform dedicated to connecting generous donors with children's homes across Kenya. The platform facilitates donations of various types including goods, services, and monetary contributions to support children in need.

## Features

### User Features
- **Authentication System**: Secure login and signup functionality
- **Password Recovery**: Forgot password feature for account recovery
- **Donation System**: Easy-to-use donation form with multiple payment options
- **Children's Homes Profiles**: Detailed information about partner children's homes:
  - Mully Children's Home
  - SOS Children's Village Nairobi
  - Mogra Rescue Centre
  - Happy Life Children's Home

### Admin Features
- **Admin Dashboard**: Secure admin panel for managing donations
- **Donation Management**: View and track all donations
- **User Management**: Manage user accounts and permissions

## Tech Stack

### Frontend
- Vue.js 3
- Vue Router for navigation
- Modern responsive design
- Mobile-first approach

### Backend
- Node.js
- Express.js
- MongoDB for database
- JWT for authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/watoto.help.git
cd watoto.help
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../watoto-frontend
npm install
```

4. Set up environment variables
Create a `.env` file in the backend directory with the following:
```
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

5. Start the development servers

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd watoto-frontend
npm run dev
```

## Project Structure

```
watoto.help/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── index.js
│   └── package.json
├── watoto-frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── views/
│   │   ├── router/
│   │   └── App.vue
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- All the children's homes that partnered with us
- The development team and contributors
- All donors and supporters of the platform

## Contact

For any inquiries or support, please contact us at:
- Email: support@watoto.help
- Website: https://watoto.help

---
Made with ❤️ for the children of Kenya 