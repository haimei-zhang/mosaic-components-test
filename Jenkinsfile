@Library('build-scripts') _
pipeline {
    agent {
        label 'java8'
    }
    options { 
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr:'10'))
    }
    tools {
        maven 'mvn3.2'
    }
    environment {
        GIT_CREDS             = '29721e96-87c9-4cbe-b076-b9c0a1d40c8c'
        GIT_BUILD_SCRIPTS_URL = 'git@github.com:advancedcsg/PSE-CMp-buildScripts.git'
        app                   = 'catalogue-attribute-management'
        AWS_CREDENTIAL_ID     = '4fa0b5a0-1091-4946-800a-e2c42e72807e'
        HARNESS_APP_API_KEY   = 'MkK63TvosW7Lnqwl1ct5OeEj3xbleidS0VPaOLAU'
        HARNESS_APP_KEY       = 'KHBJg8FyR-WFyYu5mIZ71A'
    }
    stages {
        stage ('Prepare') {
            steps {
                dir ('build-scripts') {
                    git url: "$GIT_BUILD_SCRIPTS_URL", credentialsId: "$GIT_CREDS"
                }
            }
            post {
                success {
                    stash includes: 'build-scripts/resources/*', name: 'buildScripts'
                }
             }
        }
        stage('Build') {
            steps {
                sh 'cp /usr/share/maven/ref/settings.xml /home/jenkins/tools/hudson.tasks.Maven_MavenInstallation/mvn3.2/conf/settings.xml'
                sh "mvn -X -P test versions:set -DnewVersion=2.0.$BUILD_NUMBER"
                sh "mvn -P test -Dmaven.test.failure.ignore clean package verify"
            }
            post {
                success {
                    junit '**/target/surefire-reports/TEST-*.xml'
                    stash includes: 'target/**/*, src/main/java/**/*.java, pom.xml, src/main/resources/*/**, *.sh, appspec.yml, deploy/*, *.zip, public/**/*', name: 'build'
                    slackSend (color: '#00FF00', message: "BUILT: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
                }
            }
        }
        stage('Quality') {
            steps {
                deleteDir()
                unstash 'build'
                sonar '-Dsonar.sources=src/main/java \
                 -Dsonar.exclusions=**/test/**/*.java \
                 -Dsonar.java.binaries=target/classes/ \
                 -Dsonar.jacoco.reportPath=target/jacoco.exec \
                 -Dsonar.jacoco.itReportPath=target/jacoco-it.exec \
                 -Dsonar.dynamicAnalysis=reuseReports \
                 -Dsonar.dependencyCheck.reportPath=target/dependency-check-report.xml'
            }
        }
        stage('Deploy') {
            options { 
                timeout(time: 5, unit: 'HOURS') 
            }
            input {
                message "Deploy to Dev?"
                ok "Yes"
            }
            steps {
                deleteDir()
                unstash 'build'
                unstash 'buildScripts'

                //will expect a set of environment variables to be available - as well as expect the appspec and script files
                //will also need to be in an AWS environment
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_KEY', credentialsId: "${AWS_CREDENTIAL_ID}", secretKeyVariable: 'AWS_SECRET']]) {
                    withEnv(["AWS_ACCESS_KEY_ID=${AWS_KEY}",
                    "AWS_SECRET_ACCESS_KEY=${AWS_SECRET}", 
                    "ENVIRONMENT=ew1-dev", 
                    "version=${BUILD_NUMBER}", 
                    "app=${app}",
                    "API_KEY=${HARNESS_APP_API_KEY}",
                    "APP_KEY=${HARNESS_APP_KEY}",
                    "region=eu-west-1"]) {
                        sh 'build-scripts/resources/prepare-deployment.sh'
                        //this expects a version number - switch to harness deploy
                        sh 'build-scripts/resources/deploy-service-harness.sh'
                    }
               }
            }
            post {
                success {
                    slackSend (color: '#00FF00', message: "DEPLOYED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
                }
                failure {
                    slackSend (color: '#FF0000', message: "FAILED DEPLOY: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
                }
            }
        }
        stage('Tests') {
            parallel {
                stage('QA') {
                    steps {
                        echo 'QA step'
                    }
                }
                stage('Component Tests') {
                    steps {
                        echo 'Component test step'
                    }
                }
            }
        }
        stage('Manual test') {
            options { 
                timeout(time: 5, unit: 'HOURS') 
            }
            input {
                message "Manual testing completed?"
                ok "Yes"
            }
            agent {label 'java8'}
            steps {
                echo 'Manual testing complete'
            }
        }
        stage('Security') {
            steps {
                deleteDir()
                unstash 'buildScripts'
                withCredentials([string(credentialsId: 'blackduck_token', variable: 'BD_TOKEN')]) {
                    sh 'build-scripts/blackduck-security.sh'
                }
            }
        }
        stage('Stage') {
            steps {
                build job: "$app-deployment", wait: false, parameters: [string(name: 'version', value: "$BUILD_NUMBER"), string(name: 'app', value: "$app")]
            }
        }
    }
    post {
        success {
            slackSend (color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
        failure {
            slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
    }
}