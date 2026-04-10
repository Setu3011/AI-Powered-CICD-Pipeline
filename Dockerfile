# Use lightweight Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (for caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy remaining files
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "app.js"]
