echo "Install Dependencies"
sudo apt install -y fontconfig openjdk-21-jre git 
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
echo "Cloning Vite Project"
rm -rf vite-sample-project
git clone https://github.com/iammanishjangra/vite-sample-project.git
cd vite-sample-project
echo "Install Node Modules"
npm install
echo "Run Node Service"
npm run dev -- --port 4600
