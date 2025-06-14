terraform {
  required_providers {
    aws = {
      version = ">=4.9.0"
      source  = "hashicorp/aws"
    }
  }
}

provider "aws" {
  profile = "acharyanamol"
  region  = "us-east-2"
}
