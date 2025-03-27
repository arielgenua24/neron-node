#!/bin/bash

# Crear carpetas
mkdir -p src/{config,controllers,middlewares,models,routes,services,utils}

# Crear archivos base
touch .env .gitignore README.md
touch src/index.js
touch src/config/database.js

echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore

echo "Estructura de carpetas y archivos creada ✅"
