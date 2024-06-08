# Use an official nginx image to serve static files
FROM nginx:alpine

# Copy built frontend files to nginx server directory
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
