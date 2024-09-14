/ 
    -src
        -index.js
        -models/
        -controllers/
        -middlewares/
        -services/
        -utils/
        -config/
        -repository/ 
    -tests/ [later]
/

The `src` directory contains the core application logic. This structure is designed with production deployment in mind. When deploying to production, only the `src` folder needs to be included, while other directories like `tests`, temporary files, and configuration files can be excluded. This approach follows best practices for directory structure, ensuring:

1. Clear separation of concerns
2. Easier deployment and maintenance
3. Improved security by not exposing non-essential files in production
4. Better organization for scalability

By keeping all essential logic within the `src` folder, we maintain a clean and efficient codebase that's ready for both development and production environments.
