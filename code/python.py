# API-REST
from flask import Flask, jsonify, request
app = Flask(__name__)

# Repository
products = [
    {'name': 'laptop', 'price': 800, 'stock': 7},
    {'name': 'mouse', 'price': 50, 'stock': 9},
    {'name': 'monitor', 'price': 300, 'stock': 4}
]

# Testing
@app.route('/ping', methods=['GET'])
def ping():
    return jsonify({'response': 'pong'})

# GET (Routes)
@app.route('/product')
def getProducts():
    # return jsonify(products)
    return jsonify({'products': products})

# Create (Routes)
@app.route('/product', methods=['POST'])
def addProduct():
    new_product = {
        'name': request.json['name'],
        'price': request.json['price'],
        'stock': 10
    }
    products.append(new_product)
    return jsonify({'products': products})

# Update (Route)
@app.route('/product/<string:product_name>', methods=['PUT'])
def editProduct(product_name):
    productsFound = [product for product in products if product['name'] == product_name]
    if (len(productsFound) > 0):
        productsFound[0]['name'] = request.json['name']
        productsFound[0]['price'] = request.json['price']
        productsFound[0]['stock'] = request.json['stock']
        return jsonify({
            'message': 'Product Updated',
            'product': productsFound[0]
        })
    return jsonify({'message': 'Product Not found'})

# Remove (Route)
@app.route('/product/<string:product_name>', methods=['DELETE'])
def deleteProduct(product_name):
    productsFound = [product for product in products if product['name'] == product_name]
    if len(productsFound) > 0:
        products.remove(productsFound[0])
        return jsonify({
            'message': 'Product Deleted',
            'products': products
        })

# Get (Route)
@app.route('/product/<string:product_name>')
def getProduct(product_name):
    productsFound = [
        product for product in products if product['name'] == product_name.lower()]
    if (len(productsFound) > 0):
        return jsonify({'product': productsFound[0]})
    return jsonify({'message': 'Product Not found'})

# Port
if __name__ == '__main__':
    app.run(debug=True, port=8080)