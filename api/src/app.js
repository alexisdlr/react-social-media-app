import express from 'express'
import indexRouter from './routes/index.routes.js'
import userRoutes from './routes/users.routes.js'
import postsRoutes from './routes/posts.routes.js'
import likesRoutes from './routes/likes.routes.js'
import commentsRoutes from './routes/comments.routes.js'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});


app.use(express.json())
app.use(cors({origin: 'http://localhost:3000'}))
app.use(cookieParser())
app.use(indexRouter)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postsRoutes)
app.use('/api/comments', commentsRoutes)
app.use('/api/likes', likesRoutes)


export default app
