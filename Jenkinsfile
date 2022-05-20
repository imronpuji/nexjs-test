pipeline {
    agent {
        docker {
            image 'node:nextjstest' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'docker build -t ./' 
            }
        }
    }
}