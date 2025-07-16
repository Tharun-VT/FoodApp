import React, { useState, createContext, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { restaurants, users } from "./mockData";
import './App.css';
// Placeholder components
const Home = () => {
  // Get top 5 restaurants by rating
  const topRestaurants = [...restaurants].sort((a, b) => b.rating - a.rating).slice(0, 5);
  return (
    <div className="home-container">
      <div className="hero">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Food Delivery" className="hero-img" />
        <div className="hero-text">
          <h1>Welcome to Bangalore's Best Food Delivery with FoodieHub</h1>
          <p>Order from the top restaurants in Bangalore. Fast delivery, great taste, and easy ordering!</p>
          <Link to="/restaurants" className="btn">Order Now</Link>
        </div>
      </div>
      <div className="welcome-card">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Top-rated restaurants and fresh food</li>
          <li>Lightning fast delivery</li>
          <li>Easy and secure payments</li>
          <li>Track your orders in real time</li>
        </ul>
      </div>
      <div className="top-restaurants">
        <h2>Top Restaurants in Bangalore</h2>
        <div className="top-restaurants-list">
          {topRestaurants.map(r => (
            <div key={r.id} className="card top-restaurant-card">
              <img src={r.image} alt={r.name} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: '16px 16px 0 0' }} />
              <div style={{ padding: '1rem' }}>
                <h3>{r.name}</h3>
                <div style={{ color: '#888', marginBottom: 4 }}>{r.cuisine}</div>
                <div>⭐ {r.rating}</div>
                <Link to={`/restaurants/${r.id}`} className="btn" style={{ marginTop: 8, display: 'inline-block' }}>View Menu</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const Login = () => <h2>Login</h2>;
const Restaurants = () => {
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("");
  // Get unique cuisines
  const cuisines = Array.from(new Set(restaurants.map(r => r.cuisine)));
  const filtered = restaurants.filter(r =>
    (!search || r.name.toLowerCase().includes(search.toLowerCase())) &&
    (!cuisine || r.cuisine === cuisine)
  );
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Restaurants</h2>
      <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
        <input
          style={{ maxWidth: 220 }}
          placeholder="Search restaurants..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={cuisine} onChange={e => setCuisine(e.target.value)} style={{ maxWidth: 180 }}>
          <option value="">All Cuisines</option>
          {cuisines.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {filtered.length === 0 ? <div>No restaurants found.</div> : filtered.map((r) => (
          <div key={r.id} className="card" style={{ width: 250 }}>
            <a href={`/restaurants/${r.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={r.image} alt={r.name} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
              <div style={{ padding: '1rem' }}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>{r.name}</h3>
                <div style={{ color: '#888', marginBottom: 4 }}>{r.cuisine}</div>
                <div>⭐ {r.rating}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === Number(id));
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [dummy, setDummy] = useState(0); // force re-render for reviews
  if (!restaurant) return <div>Restaurant not found</div>;
  const filteredMenu = restaurant.menu.filter(item =>
    !search || item.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleReview = (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in to review.");
      return;
    }
    if (!review.trim()) {
      setError("Please enter a comment.");
      return;
    }
    restaurant.reviews.push({ user: user.username, rating, comment: review });
    setReview("");
    setRating(5);
    setError("");
    setSuccess("Review submitted!");
    setDummy(d => d + 1);
    setTimeout(() => setSuccess(""), 2000);
  };
  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 16 }}>Back</button>
      <h2>{restaurant.name}</h2>
      <img src={restaurant.image} alt={restaurant.name} style={{ width: 300, borderRadius: 8, marginBottom: 16 }} />
      <div style={{ color: '#888', marginBottom: 8 }}>{restaurant.cuisine}</div>
      <div>⭐ {restaurant.rating}</div>
      <div style={{ margin: '24px 0' }}>
        <input
          style={{ maxWidth: 260 }}
          placeholder="Search menu items..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <h3>Menu</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {filteredMenu.length === 0 ? <div>No items found.</div> : filteredMenu.map((item) => (
          <div key={item.id} className="card" style={{ width: 220, padding: 12 }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 6 }} />
            <h4 style={{ margin: '0.5rem 0 0.25rem 0' }}>{item.name}</h4>
            <div style={{ color: '#888', fontSize: 14 }}>{item.description}</div>
            <div style={{ margin: '0.5rem 0' }}>₹{item.price}</div>
            <button className="btn" onClick={() => addToCart(restaurant.id, item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h3 style={{ marginTop: 32 }}>Reviews</h3>
      <ul>
        {restaurant.reviews.map((rev, idx) => (
          <li key={idx} style={{ marginBottom: 8 }}>
            <b>{rev.user}</b>: {rev.comment} <span style={{ color: '#fbc02d' }}>({rev.rating}★)</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 24, maxWidth: 400 }}>
        <form onSubmit={handleReview}>
          <div style={{ fontWeight: 500, marginBottom: 6 }}>Add a Review</div>
          <select value={rating} onChange={e => setRating(Number(e.target.value))} style={{ width: 80, marginBottom: 8 }}>
            {[5,4,3,2,1].map(r => <option key={r} value={r}>{r}★</option>)}
          </select>
          <textarea
            placeholder="Your review..."
            value={review}
            onChange={e => setReview(e.target.value)}
            required
            style={{ minHeight: 48 }}
          />
          {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
          {success && <div style={{ color: 'green', marginBottom: 8 }}>{success}</div>}
          <button className="btn" type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};
const Cart = () => <h2>Cart</h2>;
const Orders = () => <h2>Orders</h2>;

// Cart context
const CartContext = createContext();
const useCart = () => useContext(CartContext);

// Authentication context
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

function App() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);

  const addToCart = (restaurantId, item) => {
    setCart((prev) => {
      const found = prev.find(
        (ci) => ci.restaurantId === restaurantId && ci.item.id === item.id
      );
      if (found) {
        return prev.map((ci) =>
          ci.restaurantId === restaurantId && ci.item.id === item.id
            ? { ...ci, qty: ci.qty + 1 }
            : ci
        );
      } else {
        return [...prev, { restaurantId, item, qty: 1 }];
      }
    });
  };
  const removeFromCart = (restaurantId, itemId) => {
    setCart((prev) => prev.filter((ci) => !(ci.restaurantId === restaurantId && ci.item.id === itemId)));
  };

  const placeOrder = (order) => {
    setOrders((prev) => [...prev, order]);
    setCart([]);
  };

  const login = (username, password) => {
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      setUser({ username: found.username });
      return true;
    }
    return false;
  };
  const register = (username, password) => {
    if (users.find(u => u.username === username)) return false;
    users.push({ id: Date.now(), username, password, orders: [] });
    setUser({ username });
    return true;
  };
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, placeOrder }}>
        <Router>
          <nav className="navbar">
            <Link to="/" className="navbar-logo">FoodieHub</Link>
            <div className="navbar-links">
              <Link to="/restaurants">Restaurants</Link>
              <Link to="/cart">Cart ({cart.length})</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/account">My Account</Link>
            </div>
            <div className="navbar-user">
              {user ? (
                <>
                  <span style={{ marginRight: 10, color: '#fa5d00', fontWeight: 600 }}>Hi, {user.username}</span>
                  <button className="btn" style={{ padding: '6px 14px', fontSize: '0.95rem' }} onClick={logout}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </div>
          </nav>
          <div className="app-main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/restaurants/:id" element={<RestaurantMenu />} />
              <Route path="/cart" element={user ? <CartPage /> : <LoginPage />} />
              <Route path="/checkout" element={user ? <CheckoutPage /> : <LoginPage />} />
              <Route path="/orders" element={user ? <OrdersPage orders={orders} /> : <LoginPage />} />
              <Route path="/account" element={user ? <MyAccountPage /> : <LoginPage />} />
            </Routes>
          </div>
          <footer className="footer">
            <div className="footer-content">
              <div className="footer-copy">&copy; {new Date().getFullYear()} FoodieHub. All rights reserved. <span style={{color:'#fa5d00'}}>Eat Fresh, Live Well!</span></div>
            </div>
          </footer>
        </Router>
      </CartContext.Provider>
    </AuthContext.Provider>
  );
}

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (login(username, password)) navigate("/");
    else setError("Invalid credentials");
  };
  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <div className="card" style={{ padding: '2rem', boxShadow: '0 2px 12px #e0e0e0' }}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
          <button className="btn" type="submit" style={{ width: '100%' }}>Login</button>
        </form>
      </div>
    </div>
  );
};

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (register(username, password)) navigate("/");
    else setError("Username already exists");
  };
  return (
    <div style={{ maxWidth: 350, margin: '2rem auto' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
        <button className="btn" type="submit">Register</button>
      </form>
    </div>
  );
};

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  if (cart.length === 0) return (
    <div style={{ padding: '2rem' }}>
      <div className="card" style={{ maxWidth: 400, margin: '2rem auto', padding: '2rem', textAlign: 'center' }}>
        <h2>Your cart is empty.</h2>
      </div>
    </div>
  );
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Cart</h2>
      <div className="card-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {cart.map((ci, idx) => (
          <div key={idx} className="card" style={{ width: 320, minWidth: 220, display: 'flex', alignItems: 'center', gap: 16, padding: 16 }}>
            <img src={ci.item.image} alt={ci.item.name} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 10 }} />
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 0.3rem 0' }}>{ci.item.name}</h4>
              <div style={{ color: '#888', fontSize: 15 }}>₹{ci.item.price} x {ci.qty}</div>
              <div style={{ fontWeight: 500, marginTop: 4 }}>Total: ₹{ci.item.price * ci.qty}</div>
            </div>
            <button className="btn" style={{ background: '#c62828', marginLeft: 8 }} onClick={() => removeFromCart(ci.restaurantId, ci.item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24, fontWeight: 'bold', fontSize: 18 }}>
        Total: ₹{cart.reduce((sum, ci) => sum + ci.item.price * ci.qty, 0)}
      </div>
      <button style={{ marginTop: 16 }} className="btn" onClick={() => navigate('/checkout')}>
        Proceed to Checkout
      </button>
    </div>
  );
};

const MyAccountPage = () => {
  const { user } = useAuth();
  const [address, setAddress] = useState(() => {
    return localStorage.getItem(`address_${user?.username}`) || "";
  });
  const [firstName, setFirstName] = useState(() => localStorage.getItem(`firstName_${user?.username}`) || "");
  const [lastName, setLastName] = useState(() => localStorage.getItem(`lastName_${user?.username}`) || "");
  const [email, setEmail] = useState(() => localStorage.getItem(`email_${user?.username}`) || "");
  const [contact, setContact] = useState(() => localStorage.getItem(`contact_${user?.username}`) || "");
  const [success, setSuccess] = useState("");
  const handleSave = e => {
    e.preventDefault();
    localStorage.setItem(`address_${user.username}`, address);
    localStorage.setItem(`firstName_${user.username}`, firstName);
    localStorage.setItem(`lastName_${user.username}`, lastName);
    localStorage.setItem(`email_${user.username}`, email);
    localStorage.setItem(`contact_${user.username}`, contact);
    setSuccess("Account details saved!");
    setTimeout(() => setSuccess(""), 2000);
  };
  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h2>My Account</h2>
      <form onSubmit={handleSave}>
        <label>First Name:</label>
        <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required />
        <label>Last Name:</label>
        <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" required />
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <label>Contact:</label>
        <input type="tel" value={contact} onChange={e => setContact(e.target.value)} placeholder="Contact Number" required />
        <label>Delivery Address:</label>
        <textarea value={address} onChange={e => setAddress(e.target.value)} style={{ minHeight: 60 }} required />
        {success && <div style={{ color: 'green', marginBottom: 8 }}>{success}</div>}
        <button className="btn" type="submit">Save Details</button>
      </form>
    </div>
  );
};

const CheckoutPage = () => {
  const { cart, placeOrder } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [address, setAddress] = useState(() => {
    return (user && localStorage.getItem(`address_${user.username}`)) || "";
  });
  const [placing, setPlacing] = useState(false);
  if (cart.length === 0) return <div style={{ padding: '2rem' }}><h2>No items to checkout.</h2></div>;
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setPlacing(true);
    setTimeout(() => {
      placeOrder({
        id: Date.now(),
        items: cart,
        address,
        date: new Date().toLocaleString(),
        status: "Preparing",
      });
      setPlacing(false);
      navigate('/orders');
    }, 1000);
  };
  return (
    <div style={{ padding: '2rem', maxWidth: 400 }}>
      <h2>Checkout</h2>
      <form onSubmit={handlePlaceOrder}>
        <div style={{ marginBottom: 16 }}>
          <label>Delivery Address:</label>
          <textarea required value={address} onChange={e => setAddress(e.target.value)} style={{ width: '100%', minHeight: 60 }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Payment (mocked):</label>
          <input type="text" value="**** **** **** 1234" disabled style={{ width: '100%' }} />
        </div>
        <button type="submit" disabled={placing} className="btn">
          {placing ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

const OrdersPage = ({ orders }) => (
  <div style={{ padding: '2rem' }}>
    <h2>Your Orders</h2>
    {orders.length === 0 ? <div>No orders yet.</div> : (
      <div className="card-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {orders.map(order => (
          <div key={order.id} className="card" style={{ minWidth: 280, maxWidth: 400, padding: 18 }}>
            <div style={{ fontWeight: 600, marginBottom: 6 }}>Date: {order.date}</div>
            <div style={{ color: '#888', marginBottom: 6 }}>Address: {order.address}</div>
            <div style={{ marginBottom: 8 }}><b>Status:</b> {order.status}</div>
            <div><b>Items:</b>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {order.items.map((ci, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    {ci.item.image && <img src={ci.item.image} alt={ci.item.name} style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 6 }} />}
                    <span style={{ fontWeight: 500 }}>{ci.item.name}</span>
                    <span style={{ color: '#888', fontSize: 14 }}>x{ci.qty}</span>
                    <span style={{ marginLeft: 'auto', fontWeight: 500 }}>₹{ci.item.price * ci.qty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default App;
