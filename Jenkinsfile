pipeline {
    agent {label 'agent-1'}

    stages {
        stage('Code') {
            steps {
                echo "Cloning Repository"
                // sh 'rm -rf vite-sample-pipeline'
                git url: 'https://github.com/iammanishjangra/vite-sample-project.git',
                branch: 'main'
            }
        }
        stage('Build') {
            steps {
                sh 'cd /home/manish/workspace/vite-project-pipeline'
                sh 'rm -rf node_modules'
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                sh 'pm2 restart vite-project || pm2 start npm --name vite-project -- run dev'
                sh 'pm2 save'
            }
        }
    }
}
