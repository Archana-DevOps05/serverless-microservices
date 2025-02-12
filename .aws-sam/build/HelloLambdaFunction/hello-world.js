exports.app = {
  createItem: async (event) => {
    // Your create item logic here
  },
  getItem: async (event) => {
    // Your get item logic here
  },
  updateItem: async (event) => {
    // Your update item logic here
  },
  deleteItem: async (event) => {
    // Your delete item logic here
  },
  hello: async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello World!" }),
    };
  },
};
