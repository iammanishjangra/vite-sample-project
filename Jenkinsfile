echo "Setup Dependencies"
# curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
# sudo apt update && sudo apt install -y git nodejs npm fontconfig openjdk-21-jre
# npm install -g pm2
# We Installed it Manually on Our Agent Server

echo "Cloning Our Repository"
rm -rf vite-sample-project
git clone https://github.com/iammanishjangra/vite-sample-project.git

echo "Install & Build"
cd vite-sample-project
rm -rf node_modules
npm install

echo "Run with PM2"
pm2 restart vite-project || pm2 start npm --name vite-project -- run dev
pm2 save
