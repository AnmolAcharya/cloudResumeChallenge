# ☁️ AWS Cloud Resume Challenge

![CloudResumeChallenge'](https://github.com/user-attachments/assets/b5e10363-6976-42ad-b856-ab4e19d93a85)

This project is my implementation of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/), a hands-on initiative that demonstrates core cloud engineering skills through the deployment of a personal resume website on AWS.

## Engineering Considerations

## How can this solution scale?

The architecture is serverless and fully managed, allowing each component (S3, CloudFront, API Gateway, Lambda, DynamoDB) to automatically scale with demand. This ensures the solution can handle high traffic without manual intervention.

---

## How is it made highly available?

All AWS services used are regionally or globally distributed:
- S3 and DynamoDB offer multi-AZ availability
- API Gateway and Lambda are fault-tolerant
- CloudFront serves content from global edge locations
Together, this ensures resilience and uptime across geographies.

---

## How is the solution cost-optimized?

- Serverless architecture avoids idle costs
- S3 and DynamoDB are pay-as-you-go
- API Gateway and Lambda only incur charges on usage
Additional optimizations include CloudFront caching and avoiding over-provisioning compute/storage resources.

---

## How is the solution secured and how can it be improved?

- IAM roles restrict resource access (least privilege)
- S3 access is restricted via CloudFront OAC
- HTTPS enforced via CloudFront
- DNS managed securely via Route 53 + domain registrar

To improve security further:
- Integrate WAF with CloudFront
- Use Cognito or API key auth for API Gateway
- Enable logging and monitoring via CloudWatch

---

## Infrastructure as Code (IaC) [In Process]

Terraform is used for automating the provisioning of AWS resources, ensuring:
- Reproducibility
- Version control
- Easier collaboration and deployment

This also supports scaling, security, and cost-control through consistent infrastructure practices.




