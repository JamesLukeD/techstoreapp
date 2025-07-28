const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ALL 6 products with working image URLs
const products = [
  {
    id: 1,
    title: "Premium Street Deck - Classic Design",
    category: "Decks",
    price: 89.99,
    originalPrice: null,
    image: "adrien-vajas-6rPugl6sVmY-unsplash.jpg",
    rating: 5,
    reviews: 24,
    badge: "New",
    badgeClass: "badge-new",
    inStock: true,
    description: "High-quality maple skateboard deck perfect for street skating"
  },
  {
    id: 2,
    title: "Pro Performance Wheels - 52mm",
    category: "Wheels", 
    price: 45.99,
    originalPrice: null,
    image: "erik-mclean-qcKAq5nUcOU-unsplash.jpg",
    rating: 4,
    reviews: 18,
    badge: null,
    badgeClass: "",
    inStock: true,
    description: "Durable polyurethane wheels for smooth rides"
  },
  {
    id: 3,
    title: "Street Style Hoodie - Black",
    category: "Apparel",
    price: 65.99,
    originalPrice: 89.99,
    image: "lukas-bato-Vbbn4xNBfnM-unsplash.jpg",
    rating: 5,
    reviews: 32,
    badge: "Sale",
    badgeClass: "badge-sale",
    inStock: true,
    description: "Comfortable cotton hoodie with SkateZone branding"
  },
  {
    id: 4,
    title: "Premium ABEC-7 Bearings Set",
    category: "Hardware",
    price: 29.99,
    originalPrice: null,
    image: "mikolaj-felinski-1Wj3SLoQGcU-unsplash.jpg",
    rating: 4,
    reviews: 15,
    badge: null,
    badgeClass: "",
    inStock: true,
    description: "High-performance bearings for smooth rolling"
  },
  {
    id: 5,
    title: "Pro Skate Shoes - Durable Grip",
    category: "Footwear",
    price: 119.99,
    originalPrice: null,
    image: "niket-nigde-9N3rS-xLfkI-unsplash.jpg",
    rating: 5,
    reviews: 41,
    badge: "New",
    badgeClass: "badge-new",
    inStock: true,
    description: "Professional skateboarding shoes with enhanced grip"
  },
  {
    id: 6,
    title: "Heavy Duty Trucks - 8.5\"",
    category: "Hardware",
    price: 75.99,
    originalPrice: null,
    image: "v2osk-oWt--QQVNr4-unsplash.jpg",
    rating: 4,
    reviews: 28,
    badge: null,
    badgeClass: "",
    inStock: true,
    description: "Strong and reliable skateboard trucks"
  }
];

// Routes
app.get("/", (req, res) => {
  res.send("SkateZone Backend is running 🚀🛹");
});

// Get all products
app.get("/api/products", (req, res) => {
  console.log("GET /api/products called - returning", products.length, "products");
  res.json({
    success: true,
    products: products,
    count: products.length
  });
});

// Get single product by ID
app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }
  
  res.json({
    success: true,
    product: product
  });
});

// Get products by category
app.get("/api/products/category/:category", (req, res) => {
  const category = req.params.category;
  const filteredProducts = products.filter(p => 
    p.category.toLowerCase() === category.toLowerCase()
  );
  
  res.json({
    success: true,
    products: filteredProducts,
    count: filteredProducts.length,
    category: category
  });
});

app.listen(PORT, () => {
  console.log(`🚀 SkateZone Server running on http://localhost:${PORT}`);
  console.log(`📦 Serving ${products.length} products with working images`);
  console.log(`🖼️ All images are from Unsplash and will load properly`);
});
