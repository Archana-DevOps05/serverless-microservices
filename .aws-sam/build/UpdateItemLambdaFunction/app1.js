const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'YourTableName'; // DynamoDB table name

// CRUD operations
module.exports.createItem = async (event) => {
    const { id, name, description } = JSON.parse(event.body);

    const params = {
        TableName: TABLE_NAME,
        Item: { id, name, description }
    };

    try {
        await dynamoDB.put(params).promise();
        return {
            statusCode: 201,
            body: JSON.stringify({ message: 'Item created successfully' })
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to create item' })
        };
    }
};

module.exports.getItem = async (event) => {
    const { id } = event.pathParameters;

    const params = {
        TableName: TABLE_NAME,
        Key: { id }
    };

    try {
        const result = await dynamoDB.get(params).promise();
        if (!result.Item) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'Item not found' })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify(result.Item)
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to get item' })
        };
    }
};

module.exports.updateItem = async (event) => {
    const { id } = event.pathParameters;
    const { name, description } = JSON.parse(event.body);

    const params = {
        TableName: TABLE_NAME,
        Key: { id },
        UpdateExpression: 'SET name = :name, description = :description',
        ExpressionAttributeValues: {
            ':name': name,
            ':description': description
        },
        ReturnValues: 'ALL_NEW'
    };

    try {
        const result = await dynamoDB.update(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Item updated successfully', item: result.Attributes })
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to update item' })
        };
    }
};

module.exports.deleteItem = async (event) => {
    const { id } = event.pathParameters;

    const params = {
        TableName: TABLE_NAME,
        Key: { id }
    };

    try {
        await dynamoDB.delete(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Item deleted successfully' })
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to delete item' })
        };
    }
};
