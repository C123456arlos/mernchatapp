import { connectDB } from '../lib/db.js'
import User from '../models/user.model.js'
import { config } from 'dotenv'
config()
const seedUsers = [
    {
        email: 'emma.thompson@example.com',
        fullName: 'emma thompson',
        password: '123456',
        profilePic:'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        email: 'olivia.miller@example.com',
        fullName: 'olivia miller',
        password: '123456',
        profilePic:'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        email: 'sophia.davis@example.com',
        fullName: 'sophia davis',
        password: '123456',
        profilePic:'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        email: 'isabella.brown@example.com',
        fullName: 'isabella brown',
        password: '123456',
        profilePic:'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
        email: 'mia.johnson@example.com',
        fullName: 'mia johnson',
        password: '123456',
        profilePic:'https://randomuser.me/api/portraits/men/5.jpg'
    },
    {
        email: 'charlotte.williams@example.com',
        fullName: 'charlotte williams',
        password: '123456',
        profilePic:'https://randomuser.me/api/portraits/men/6.jpg'
    },
    {
        email: 'amelia.garcian@example.com',
        fullName: 'amelia garcia',
        password: '123456',
        profilePic:'https://randomuser.me/api/portraits/men/7.jpg'
    },
    {
        email: 'james.anderson@example.com',
        fullName: 'james anderson',
        password: '123456',
        profilePic:'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        email: 'william.clerk@example.com',
        fullName: 'william clerk',
        password: '123456',
        profilePic:'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        email: 'benjamin.taylor@example.com',
        fullName: 'benjamin taylor',
        password: '123456',
        profilePic:'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        email: 'henry.jackson@example.com',
        fullName: 'henry jackson',
        password: '123456',
        profilePic:'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
        email: 'alexander.martin@example.com',
        fullName: 'alexander martin',
        password: '123456',
        profilePic:'https://randomuser.me/api/portraits/men/5.jpg'
    },
    {
        email: 'daniel.rodriguez@example.com',
        fullName: 'daniel rodriguez',
        password: '123456',
        profilePic:'https://randomuser.me/api/portraits/men/7.jpg'
    }
]



const seedDatabase = async () => {
    try {
        await connectDB()
        await User.insertMany(seedUsers)
        console.log('database seeded successfully')
    } catch (error) {
        console.error('error seeding database', error)
    }
}
seedDatabase()