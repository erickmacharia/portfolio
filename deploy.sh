#!/bin/bash
echo "ÔøΩÔøΩ Starting deployment to GitHub Pages..."

# Backup package.json
cp package.json package.json.backup

# Add homepage for GitHub Pages
echo "Ì≥ù Adding homepage for production..."
sed -i '/"private": true,/a\  "homepage": "https://erickmacharia.github.io/portfolio",' package.json

# Build and deploy
echo "‚öôÔ∏è Building and deploying..."
npm run deploy

# Restore package.json for development
echo "‚Ü©Ô∏è Restoring package.json for local development..."
mv package.json.backup package.json

echo ""
echo "‚úÖ DEPLOYMENT COMPLETE!"
echo "Ìºê Live at: https://erickmacharia.github.io/portfolio"
echo ""
echo "Ì≤ª To work locally: npm start"
echo "Ì∫Ä To deploy updates: ./deploy.sh"
