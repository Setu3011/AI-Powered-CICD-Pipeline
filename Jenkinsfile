pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "your-dockerhub-username/ai-cicd-app"
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/your-username/ai-cicd-project.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
    steps {
        script {
            try {
                sh 'npm test'
            } catch (Exception e) {
                sh 'echo "Test failed" > error.log'
                sh 'npm test >> error.log || true'
                error("Failing build")
            }
        }
    }
}

        stage('Docker Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([string(credentialsId: 'docker-pass', variable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u your-dockerhub-username --password-stdin'
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Deploy to K8s') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }
    }

    post {
        failure {
            echo "Pipeline failed 🚨"
        }
    }
}
    post {
    failure {
        echo "Pipeline failed. Capturing logs..."

        // Save logs to file
        sh '''
        echo "===== BUILD LOGS =====" > error.log
        cat /var/lib/jenkins/jobs/$JOB_NAME/builds/$BUILD_NUMBER/log >> error.log || true
        '''
        
        sh 'python3 ai_debug.py'
        withCredentials([string(credentialsId: 'openai-key', variable: 'OPENAI_API_KEY')]) {
    sh 'export OPENAI_API_KEY=$OPENAI_API_KEY && python3 ai_debug.py'
}
    }
}
