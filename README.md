# Serverless CI/CD Pipeline (Lambda, API Gateway, DynamoDB)


This project demonstrates the deployment of a serverless microservice using AWS Lambda (Node.js), API Gateway, and DynamoDB, with an integrated CI/CD pipeline for automatic deployment.



## Tech Stack

- **AWS Lambda (Node.js):** For executing serverless functions.

- **API Gateway:** For exposing RESTful APIs to trigger Lambda functions.

- **DynamoDB:** For storing and managing data in a NoSQL database.

- **AWS SAM (Serverless Application Model):** For deploying and managing serverless applications.

- **CI/CD Pipeline:** GitHub Actions or AWS CodePipeline for continuous integration and deployment.

## Goal:
Deploy a fully serverless microservice that performs CRUD (Create, Read, Update, Delete) operations using AWS Lambda, API Gateway, and DynamoDB, with a CI/CD pipeline for seamless updates.

## Setup
### Prerequisites:
- AWS Account
- AWS CLI installed and configured
- AWS SAM CLI installed
- Node.js and NPM installed
- GitHub Account (if using GitHub Actions)
- A DynamoDB table to store the data (refer to dynamodb/create-table.json for schema)

### Step 1: Install  awscli.

    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    unzip awscliv2.zip
    sudo ./aws/install --bin-dir /usr/local/bin --install-dir /usr/local/aws-cli --update
    
#### Configure awscli   

    aws configure
### Step 2: Install AWS SAM.
    sudo apt-get install unzip curl
    curl -Lo sam-cli.deb https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-x86_64.deb
    sudo dpkg -i sam-cli.deb
    sam --version

### Step 3: Install Docker (Optional but Recommended for Local Testing)

    sudo apt install docker.io
    docker --version
    sudo usermod -aG docker $USER && newgrp docker

#### Step 1: Create Directory and change the Directory
    mkdir serverless-microservice
    cd serverless-microservice
    sam init --runtime nodejs18.x

#### Step 2: Step 2: Define Lambda Function Code
    nano hello-world.js

#### Step 3: Define API Gateway and DynamoDB Resources
    nano template.yaml

#### Step 4: Build and Deploy
 1. Build your SAM application:
    
    sam build

2. Deploy your application (this will prompt you to configure AWS credentials if needed):

    sam deploy --guided

   
![image](https://github.com/user-attachments/assets/a2c76aa4-3ccf-42ee-817a-e9f3bd3727d7)

###### Go to AWS CloudFormation Console under your stack (my-dynamo-lambda-stack).

- Go to the Outputs tab of the CloudFormation stack.
- Find the MicroserviceApiURL and copy that value. 

    https://n5pqhifhn9.execute-api.us-east-1.amazonaws.com/prod/hello

  
![Screenshot from 2025-02-12 12-56-48](https://github.com/user-attachments/assets/76be0a6c-5eca-4a02-ac79-1d8cc21bdc36)

![Screenshot from 2025-02-13 00-53-06](https://github.com/user-attachments/assets/71fa0b68-e100-4e9f-8081-ba9026a49ad4)
