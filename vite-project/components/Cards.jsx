import CardCompanent from "./Card"

let products = [
    {
        "id": "001",
        "name": "Wireless Headphones",
        "description": "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
        "price": 89.99,
        "sale": false
    },
    {
        "id": "002",
        "name": "Smartwatch",
        "description": "A sleek smartwatch with fitness tracking, heart rate monitor, and customizable watch faces.",
        "price": 199.99,
        "sale": false
    },
    {
        "id": "003",
        "name": "Portable Charger",
        "description": "Compact portable charger with 10,000mAh capacity, perfect for on-the-go charging.",
        "price": 29.99,
        "sale": false
    },
    {
        "id": "004",
        "name": "Bluetooth Speaker",
        "description": "Waterproof Bluetooth speaker with 360-degree sound and 12-hour battery life.",
        "price": 49.99,
        "sale": false
    },
    {
        "id": "005",
        "name": "Laptop Stand",
        "description": "Adjustable laptop stand for ergonomic use, made from durable aluminum.",
        "price": 39.99,
        "sale": false
    },
    {
        "id": "006",
        "name": "Gaming Mouse",
        "description": "Ergonomic gaming mouse with customizable RGB lighting and high precision sensor.",
        "price": 59.99,
        "discount": 39.99,
        "sale": true
    },
    {
        "id": "007",
        "name": "4K Monitor",
        "description": "27-inch 4K UHD monitor with HDR support and ultra-thin bezels.",
        "price": 399.99,
        "discount": 300.00,
        "sale": true
       },
    {
        "id": "008",
        "name": "Mechanical Keyboard",
        "description": "RGB mechanical keyboard with customizable keys and tactile feedback.",
        "price": 79.99,
        "sale": false
    }
]
function Cards() {
  return (
   <div className="container d-flex flex-wrap gap-3">
        {products.map((product)=>(
            <CardCompanent
            name={product.name}
            price={product.price}
            description={product.description}

            key={product.id}
        />
        ))}
   </div>
  )
}

export default Cards