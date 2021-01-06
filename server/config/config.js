/**
 * Puerto
 */

process.env.PORT = process.env.PORT || 3000

/**
 * Entorno
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * Base de datos
 */

process.env.URL_DB = process.env.NODE_ENV === 'dev' ? 'mongodb://localhost:27017/cafe' : 'mongodb+srv://mcarbajalc2:OMkllq79vqtxvYOR@cluster0.wnvth.mongodb.net/cafe';