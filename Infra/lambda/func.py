import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('ResumeVisitorCounter')

def lambda_handler(event, context):
    # Use a placeholder for "views" to avoid keyword conflict
    response = table.update_item(
        Key={'id': '1'},
        UpdateExpression="ADD #v :inc",
        ExpressionAttributeNames={"#v": "views"},
        ExpressionAttributeValues={':inc': 1},
        ReturnValues="UPDATED_NEW"
    )

    views = response['Attributes']['views']
    print(f"Updated view count: {views}")

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,OPTIONS'
        },
        'body': json.dumps({'views': int(views)})
    }

