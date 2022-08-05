import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 60000, // 1 minute in milliseconds
  max: 5,
  message: 'You have exceeded the allowed 5 requests per minute limit!', 
  standardHeaders: true,
  legacyHeaders: false,
});