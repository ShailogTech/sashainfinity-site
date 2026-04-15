from fastapi import FastAPI, APIRouter, HTTPException, Depends
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from enum import Enum


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Admin Models
class UserRole(str, Enum):
    admin = "admin"
    instructor = "instructor"
    student = "student"

class CourseStatus(str, Enum):
    draft = "draft"
    published = "published"

class User(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    role: UserRole = UserRole.student
    courses_enrolled: int = 0
    join_date: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "active"

class UserCreate(BaseModel):
    name: str
    email: str
    role: UserRole = UserRole.student

class Course(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    instructor: str
    price: float
    enrolled: int = 0
    status: CourseStatus = CourseStatus.draft
    thumbnail: str = "📚"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class CourseCreate(BaseModel):
    title: str
    description: str
    instructor: str
    price: float
    status: CourseStatus = CourseStatus.draft

class DashboardStats(BaseModel):
    total_users: int
    total_courses: int
    total_blog_posts: int
    active_users: int
    revenue: float

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)

    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])

    return status_checks

# Admin Endpoints
@api_router.get("/admin/dashboard", response_model=DashboardStats)
async def get_dashboard_stats():
    """Get dashboard statistics for admin panel"""
    try:
        # In a real application, you'd query the database
        # For now, returning mock data
        return DashboardStats(
            total_users=1250,
            total_courses=45,
            total_blog_posts=128,
            active_users=890,
            revenue=45600.00
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/admin/users", response_model=List[User])
async def get_users():
    """Get all users for admin panel"""
    try:
        # In a real application, you'd query the database
        # For now, returning mock data
        users = [
            {
                "id": "1",
                "name": "John Doe",
                "email": "john@example.com",
                "role": "student",
                "courses_enrolled": 5,
                "join_date": "2024-01-15T00:00:00Z",
                "status": "active"
            },
            {
                "id": "2",
                "name": "Jane Smith",
                "email": "jane@example.com",
                "role": "instructor",
                "courses_enrolled": 2,
                "join_date": "2024-02-20T00:00:00Z",
                "status": "active"
            }
        ]
        return [User(**user) for user in users]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/admin/users", response_model=User)
async def create_user(user: UserCreate):
    """Create a new user"""
    try:
        # In a real application, you'd insert into database
        user_data = user.model_dump()
        user_data['id'] = str(uuid.uuid4())
        user_data['join_date'] = datetime.now(timezone.utc).isoformat()
        # await db.users.insert_one(user_data)
        return User(**user_data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.delete("/admin/users/{user_id}")
async def delete_user(user_id: str):
    """Delete a user"""
    try:
        # In a real application, you'd delete from database
        # await db.users.delete_one({"id": user_id})
        return {"message": "User deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/admin/courses", response_model=List[Course])
async def get_courses():
    """Get all courses for admin panel"""
    try:
        # In a real application, you'd query the database
        # For now, returning mock data
        courses = [
            {
                "id": "1",
                "title": "React Mastery",
                "description": "Complete React development course",
                "instructor": "John Doe",
                "price": 99.99,
                "enrolled": 245,
                "status": "published",
                "thumbnail": "🎯",
                "created_at": "2024-01-15T00:00:00Z"
            },
            {
                "id": "2",
                "title": "Python Basics",
                "description": "Introduction to Python programming",
                "instructor": "Jane Smith",
                "price": 79.99,
                "enrolled": 189,
                "status": "published",
                "thumbnail": "🐍",
                "created_at": "2024-02-20T00:00:00Z"
            }
        ]
        return [Course(**course) for course in courses]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/admin/courses", response_model=Course)
async def create_course(course: CourseCreate):
    """Create a new course"""
    try:
        # In a real application, you'd insert into database
        course_data = course.model_dump()
        course_data['id'] = str(uuid.uuid4())
        course_data['enrolled'] = 0
        course_data['thumbnail'] = "📚"
        course_data['created_at'] = datetime.now(timezone.utc).isoformat()
        # await db.courses.insert_one(course_data)
        return Course(**course_data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.put("/admin/courses/{course_id}", response_model=Course)
async def update_course(course_id: str, course: CourseCreate):
    """Update a course"""
    try:
        # In a real application, you'd update in database
        course_data = course.model_dump()
        course_data['id'] = course_id
        # await db.courses.update_one({"id": course_id}, {"$set": course_data})
        return Course(**course_data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.delete("/admin/courses/{course_id}")
async def delete_course(course_id: str):
    """Delete a course"""
    try:
        # In a real application, you'd delete from database
        # await db.courses.delete_one({"id": course_id})
        return {"message": "Course deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()