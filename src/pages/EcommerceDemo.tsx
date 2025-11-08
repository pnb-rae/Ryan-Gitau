import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ShoppingCart, Star, Filter, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"

interface Product {
  id: number
  name: string
  price: number
  image: string
  rating: number
  category: string
  inStock: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    image: "/api/placeholder/300/300",
    rating: 4.8,
    category: "Electronics",
    inStock: true
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    image: "/api/placeholder/300/300",
    rating: 4.6,
    category: "Electronics",
    inStock: true
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 79.99,
    image: "/api/placeholder/300/300",
    rating: 4.7,
    category: "Accessories",
    inStock: false
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 129.99,
    image: "/api/placeholder/300/300",
    rating: 4.5,
    category: "Electronics",
    inStock: true
  }
]

export default function EcommerceDemo() {
  const [cart, setCart] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">E-commerce Platform Demo</h1>
              <p className="text-muted-foreground">Modern shopping experience</p>
            </div>
          </div>
          <Button variant="outline" className="relative">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Cart ({cart.length})
            {cart.length > 0 && (
              <Badge className="absolute -top-2 -right-2 px-2 py-1 text-xs">
                {cart.length}
              </Badge>
            )}
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card-gradient rounded-2xl overflow-hidden hover-scale group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                  style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive">Out of Stock</Badge>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">
                  ${product.price}
                </p>
                
                <Button
                  className="w-full"
                  onClick={() => addToCart(product.id)}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Features */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Platform Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-muted rounded-lg text-center">
              <h4 className="font-medium mb-2">Payment Integration</h4>
              <p className="text-sm text-muted-foreground">Secure Stripe payments</p>
            </div>
            <div className="p-4 bg-muted rounded-lg text-center">
              <h4 className="font-medium mb-2">Inventory Management</h4>
              <p className="text-sm text-muted-foreground">Real-time stock tracking</p>
            </div>
            <div className="p-4 bg-muted rounded-lg text-center">
              <h4 className="font-medium mb-2">Admin Dashboard</h4>
              <p className="text-sm text-muted-foreground">Complete store management</p>
            </div>
            <div className="p-4 bg-muted rounded-lg text-center">
              <h4 className="font-medium mb-2">User Analytics</h4>
              <p className="text-sm text-muted-foreground">Purchase behavior insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}