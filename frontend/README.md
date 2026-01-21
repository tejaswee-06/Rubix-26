# Compliance Backend API

A Node.js/Express backend for the Urban Vendor Assist Compliance Checklist & Alerts feature. Uses JSON files for data storage.

## Features

✅ RESTful API for compliance checklist management
✅ Alert management system
✅ JSON file-based storage (no database required)
✅ CORS enabled for frontend integration
✅ Dynamic compliance score calculation
✅ Real-time data updates

## Tech Stack

- **Node.js** - Runtime
- **Express.js** - Web framework
- **fs module** - File system for JSON storage
- **CORS** - Cross-origin support

## Project Structure

```
backend/
├── server.js              # Main Express server
├── package.json           # Dependencies
├── data/
│   ├── compliance.json    # Compliance checklist data
│   └── alerts.json        # Alerts data
├── routes/
│   ├── complianceRoutes.js # Compliance endpoints
│   └── alertRoutes.js      # Alerts endpoints
└── utils/
    └── fileHandler.js      # File I/O utilities
```

## Installation

```bash
cd backend
npm install
```

## Running the Server

```bash
npm start
# or
npm run dev
```

Server will start on **http://localhost:5000**

## API Endpoints

### Compliance Endpoints

**GET /api/compliance**

- Returns all checklist items with calculated compliance score
- Response: `{ score, completed, total, checklist, summary }`

**POST /api/compliance/mark-completed**

- Toggles completion status of a checklist item
- Request body: `{ id: number }`
- Updates JSON file and recalculates score

**PUT /api/compliance/:id**

- Update specific checklist item fields
- Request body: `{ title, status, expiryDate, ... }`

**DELETE /api/compliance/:id**

- Delete a checklist item
- Updates summary statistics

### Alert Endpoints

**GET /api/alerts**

- Returns all alerts with unread count
- Response: `{ alerts: [...], unreadCount: number }`

**POST /api/alerts/mark-read**

- Mark an alert as read
- Request body: `{ id: number }`

**POST /api/alerts**

- Create a new alert
- Request body: `{ message: string, type: "critical"|"warning", date?: string }`

**DELETE /api/alerts/:id**

- Delete an alert

**POST /api/alerts/mark-all-read**

- Mark all alerts as read

### Health Check

**GET /api/health**

- Returns server status

## JSON Data Structure

### compliance.json

```json
{
  "summary": {
    "total": 5,
    "completed": 2
  },
  "checklist": [
    {
      "id": 1,
      "title": "FSSAI Food License",
      "category": "License",
      "status": "pending",
      "expiryDate": "2026-02-01"
    }
  ]
}
```

### alerts.json

```json
{
  "alerts": [
    {
      "id": 1,
      "message": "Your Fire Safety Certificate has expired",
      "type": "critical",
      "date": "2026-01-10",
      "isRead": false
    }
  ]
}
```

## Frontend Integration

In your frontend, configure Axios to connect to the backend:

```typescript
// In frontend/src/lib/api.ts
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const complianceAPI = {
  getCompliance: () => axios.get(`${API_BASE_URL}/compliance`),
  markCompleted: (id: number) =>
    axios.post(`${API_BASE_URL}/compliance/mark-completed`, { id }),
};

export const alertsAPI = {
  getAlerts: () => axios.get(`${API_BASE_URL}/alerts`),
  markRead: (id: number) =>
    axios.post(`${API_BASE_URL}/alerts/mark-read`, { id }),
};
```

## Features Implemented

### Compliance Management

- ✅ Fetch all checklist items
- ✅ Toggle completion status
- ✅ Calculate compliance score dynamically
- ✅ Update summary statistics
- ✅ Full CRUD operations

### Alert Management

- ✅ Fetch all alerts with unread count
- ✅ Mark alerts as read
- ✅ Create new alerts
- ✅ Delete alerts
- ✅ Mark all as read

## Error Handling

All endpoints include error handling:

- 400: Bad request (missing required fields)
- 404: Resource not found
- 500: Server error

## CORS Configuration

CORS is enabled for all routes. To restrict to specific origins:

```javascript
// In server.js
app.use(
  cors({
    origin: "http://localhost:8082",
  }),
);
```

## File Operations

The backend uses async/await for file operations:

- **readFile**: Safely read and parse JSON files
- **writeFile**: Write data with proper formatting
- **getFilePath**: Resolve file paths relative to data directory

## Compliance Score Calculation

```
Score = (Completed Items / Total Items) × 100

Status Colors:
- Green: ≥80% (Good)
- Yellow: 50-79% (Fair)
- Red: <50% (At Risk)
```

## Development Notes

- No authentication required (currently)
- All data persisted in JSON files
- File operations are atomic (read → modify → write)
- Status updates trigger automatic recalculation

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- Authentication & authorization
- Email notifications
- Data backup system
- Rate limiting
- API documentation with Swagger/OpenAPI

## Support

For issues or questions, check:

1. Server logs in terminal
2. JSON file structure
3. CORS configuration
4. File permissions on data directory

---

**Port**: 5000
**Data Format**: JSON
**Database**: File-based (no DB required)
