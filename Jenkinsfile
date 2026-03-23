pipeline {
    agent any

    stages {
        stage('Branch Check') {
            steps {
                script {
                    // Use BRANCH_NAME for multibranch pipelines
                    def branch = env.BRANCH_NAME ?: 'unknown'

                    if (branch.contains('main')) {
                        echo "=============================="
                        echo " MAIN BRANCH detected!"
                        echo "=============================="

                        // Checkout main branch
                        git url: 'https://github.com/iammanishjangra/vite-sample-project.git', branch: 'main'

                        // Build and run Docker
                        sh "docker build -t vite-docker-sample ."
                        sh "docker run --rm -p 4600:4600 vite-docker-sample"

                    } else if (branch.contains('feature')) {
                        echo "=============================="
                        echo " FEATURE BRANCH detected!"
                        echo " Sirf unit tests chal rahe hain"
                        echo "=============================="

                        // Checkout feature branch
                        git url: 'https://github.com/iammanishjangra/vite-sample-project.git', branch: 'feature'

                        // Build and run Docker
                        sh "docker build -t vite-docker-sample ."
                        sh "docker run --rm -p 4700:4700 vite-docker-sample"

                    } else {
                        echo "Branch: ${branch} — koi specific test nahi"
                    }
                }
            }
        }

        stage('Build Complete') {
            steps {
                echo "Pipeline successfully complete!"
                echo "Branch ${env.BRANCH_NAME ?: 'unknown'} ka build done!"
            }
        }
    }

    post {
        success {
            echo "BUILD SUCCESSFUL - Branch: ${env.BRANCH_NAME ?: 'unknown'}"
        }
        failure {
            echo "BUILD FAILED - Branch: ${env.BRANCH_NAME ?: 'unknown'}"
        }
    }
}
