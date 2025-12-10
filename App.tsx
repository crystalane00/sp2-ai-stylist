import React, { useState } from 'react';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const customers = [
    {
      id: 1,
      name: "Ananya Desai",
      phone: "+91 98765 43210",
      purchaseCount: 12,
      totalSpent: "₹18,400",
      avatar: "https://i.pravatar.cc/150?img=1",
      preferences: {
        brands: ["Zara", "H&M", "Forever 21"],
        colors: ["Pastels", "White", "Beige"],
        styles: ["Boho", "Minimalist", "Casual Chic"],
        sizes: ["S", "M"],
        priceRange: "₹500-1500"
      },
      recentActivity: "2 days ago",
      retention: "VIP",
      gradient: "from-rose-400 via-pink-500 to-purple-500"
    },
    {
      id: 2,
      name: "Riya Kapoor",
      phone: "+91 98234 56789",
      purchaseCount: 8,
      totalSpent: "₹14,200",
      avatar: "https://i.pravatar.cc/150?img=5",
      preferences: {
        brands: ["Mango", "Zara", "Vero Moda"],
        colors: ["Black", "Navy", "Maroon"],
        styles: ["Office Wear", "Smart Casual"],
        sizes: ["M"],
        priceRange: "₹800-2000"
      },
      recentActivity: "5 days ago",
      retention: "Active",
      gradient: "from-violet-400 via-purple-500 to-indigo-500"
    },
    {
      id: 3,
      name: "Priya Sharma",
      phone: "+91 97654 32109",
      purchaseCount: 15,
      totalSpent: "₹22,900",
      avatar: "https://i.pravatar.cc/150?img=9",
      preferences: {
        brands: ["Free People", "Urban Outfitters", "Zara"],
        colors: ["Florals", "Earth Tones", "Prints"],
        styles: ["Boho", "Vintage", "Festival"],
        sizes: ["S"],
        priceRange: "₹600-1800"
      },
      recentActivity: "Yesterday",
      retention: "VIP",
      gradient: "from-fuchsia-400 via-pink-500 to-rose-500"
    }
  ];

  const newArrivals = [
    {
      id: 1,
      brand: "Zara",
      type: "Floral Midi Dress",
      color: "Pink & White Florals",
      size: "S",
      price: "₹899",
      retail: "₹3,999",
      discount: "78%",
      condition: "Like New",
      matchedCustomers: [1, 3],
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
      tag: "Best Seller"
    },
    {
      id: 2,
      brand: "H&M",
      type: "Silk Blouse",
      color: "Cream",
      size: "M",
      price: "₹649",
      retail: "₹2,499",
      discount: "74%",
      condition: "Excellent",
      matchedCustomers: [1, 2],
      image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=600&h=800&fit=crop",
      tag: "New"
    },
    {
      id: 3,
      brand: "Mango",
      type: "High-Waist Trousers",
      color: "Black",
      size: "M",
      price: "₹1,099",
      retail: "₹3,499",
      discount: "69%",
      condition: "Like New",
      matchedCustomers: [2],
      image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&h=800&fit=crop",
      tag: "Trending"
    },
    {
      id: 4,
      brand: "Forever 21",
      type: "Boho Maxi Skirt",
      color: "Rust Orange",
      size: "S",
      price: "₹799",
      retail: "₹2,999",
      discount: "73%",
      condition: "Excellent",
      matchedCustomers: [1, 3],
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop",
      tag: "Hot"
    }
  ];

  const matchingStats = {
    totalCustomers: 247,
    activeCustomers: 148,
    retentionRate: "62%",
    avgRepeatPurchases: 4.3,
    monthlyRevenue: "₹2,84,000",
    automatedMatches: 156
  };

  const CustomerCard = ({ customer, onClick }) => (
    <div 
      onClick={() => onClick(customer)}
      onMouseEnter={() => setHoveredCard(customer.id)}
      onMouseLeave={() => setHoveredCard(null)}
      className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 cursor-pointer overflow-hidden"
      style={{
        transform: hoveredCard === customer.id ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: hoveredCard === customer.id 
          ? '0 30px 60px -12px rgba(236, 72, 153, 0.4), 0 18px 36px -18px rgba(168, 85, 247, 0.4)'
          : '0 10px 30px -10px rgba(0, 0, 0, 0.15)'
      }}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${customer.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
           style={{padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}} />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4">
            <div className={`w-20 h-20 bg-gradient-to-br ${customer.gradient} rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-2xl ring-4 ring-white/50 group-hover:scale-110 transition-transform duration-500`}>
              {customer.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-black text-xl text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-300">
                {customer.name}
              </h3>
              <p className="text-sm text-gray-500 font-medium mt-1">{customer.phone}</p>
            </div>
          </div>
          <div className={`px-4 py-2 rounded-full text-xs font-black shadow-lg ${
            customer.retention === 'VIP' 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
              : 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
          }`}>
            {customer.retention === 'VIP' ? '👑 VIP' : '✨ Active'}
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-5 p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-inner">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1.5 font-bold uppercase tracking-wide">Orders</p>
            <p className="font-black text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {customer.purchaseCount}
            </p>
          </div>
          <div className="text-center border-x border-gray-200">
            <p className="text-xs text-gray-500 mb-1.5 font-bold uppercase tracking-wide">Spent</p>
            <p className="font-black text-2xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {customer.totalSpent}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1.5 font-bold uppercase tracking-wide">Active</p>
            <p className="text-xs font-black text-green-600">{customer.recentActivity}</p>
          </div>
        </div>
        
        {/* Preferences */}
        <div className="space-y-3">
          <div>
            <p className="text-xs font-black text-gray-600 mb-2 uppercase tracking-wider">Style Vibe</p>
            <div className="flex flex-wrap gap-2">
              {customer.preferences.styles.slice(0, 3).map((style, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-bold shadow-sm">
                  {style}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="text-xs font-black text-gray-600 uppercase">Sizes</span>
            <div className="flex gap-2">
              {customer.preferences.sizes.map((size, idx) => (
                <span key={idx} className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-lg flex items-center justify-center text-xs font-black shadow-lg">
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProductCard = ({ product }) => {
    const matchedCustomerNames = product.matchedCustomers.map(id => 
      customers.find(c => c.id === id)?.name.split(' ')[0]
    );
    
    return (
      <div className="group relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
        {/* Product Image */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.type} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Tags */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-4 py-2 bg-white/95 backdrop-blur-md text-gray-800 rounded-full text-xs font-black shadow-xl">
              {product.condition}
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-xs font-black shadow-xl animate-pulse">
              {product.tag}
            </span>
          </div>
          
          {/* Discount Badge */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <div className="text-center">
              <div className="text-white font-black text-lg leading-none">{product.discount}</div>
              <div className="text-white text-xs font-bold">OFF</div>
            </div>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-6">
          <div className="mb-4">
            <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">{product.brand}</p>
            <h3 className="font-black text-2xl text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-300">
              {product.type}
            </h3>
            <p className="text-sm text-gray-600 font-semibold">{product.color} • Size {product.size}</p>
          </div>
          
          {/* Price */}
          <div className="flex items-baseline gap-3 mb-5">
            <p className="text-4xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {product.price}
            </p>
            <p className="text-sm text-gray-400 line-through font-semibold">{product.retail}</p>
          </div>
          
          {/* Matched Customers */}
          <div className="p-4 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 rounded-2xl mb-5 border-2 border-pink-200/50 shadow-inner">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-2xl">💕</span>
              <span className="font-black text-gray-700">Perfect for:</span>
              <span className="font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {matchedCustomerNames.join(', ')}
              </span>
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="w-full py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-2xl font-black text-lg hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-purple-500/50 hover:shadow-purple-600/60 hover:scale-105 transform group/btn">
            <span className="text-2xl group-hover/btn:animate-bounce">💬</span>
            <span>Send to {product.matchedCustomers.length} Customer{product.matchedCustomers.length > 1 ? 's' : ''}</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>
      
      <div className="max-w-7xl mx-auto p-6 relative z-10">
        {/* Hero Header */}
        <div className="mb-10 bg-white/80 backdrop-blur-2xl rounded-[3rem] p-10 shadow-2xl border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-indigo-500/5" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-6">
              <div className="p-6 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-3xl shadow-2xl transform hover:rotate-6 transition-transform duration-300">
                <span className="text-6xl">👗</span>
              </div>
              <div>
                <h1 className="text-5xl font-black mb-2">
                  <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    SP2 AI Stylist
                  </span>
                </h1>
                <p className="text-xl text-gray-600 font-bold">
                  Intelligent WhatsApp Recommendations for Women's Thrift Fashion
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl font-black text-sm shadow-xl flex items-center gap-2">
                <span className="text-xl">✨</span>
                62% Retention Rate
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl font-black text-sm shadow-xl flex items-center gap-2">
                <span className="text-xl">💕</span>
                247 Happy Customers
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-black text-sm shadow-xl flex items-center gap-2">
                <span className="text-xl">💰</span>
                ₹2.84L Monthly Revenue
              </div>
            </div>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-10">
          {[
            { icon: "👥", label: "Total", value: matchingStats.totalCustomers, color: "from-blue-500 to-cyan-500" },
            { icon: "✨", label: "Active", value: matchingStats.activeCustomers, color: "from-pink-500 to-rose-500" },
            { icon: "📈", label: "Retention", value: matchingStats.retentionRate, color: "from-purple-500 to-indigo-500" },
            { icon: "🔄", label: "Avg Orders", value: matchingStats.avgRepeatPurchases, color: "from-orange-500 to-red-500" },
            { icon: "🎯", label: "Matches", value: matchingStats.automatedMatches, color: "from-green-500 to-emerald-500" },
            { icon: "💰", label: "Revenue", value: matchingStats.monthlyRevenue, color: "from-yellow-500 to-orange-500" }
          ].map((stat, idx) => (
            <div key={idx} className="group bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className={`text-4xl p-3 bg-gradient-to-br ${stat.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="filter drop-shadow-lg">{stat.icon}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-black uppercase tracking-wider mb-1">{stat.label}</p>
              <p className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-6 mb-8 bg-white/80 backdrop-blur-xl rounded-[2rem] p-3 shadow-2xl border border-white/20">
          <button
            onClick={() => setActiveView('dashboard')}
            className={`flex-1 py-4 px-8 rounded-[1.5rem] font-black text-lg transition-all duration-300 ${
              activeView === 'dashboard'
                ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-xl scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <span className="mr-2">✨</span>
            New Arrivals
          </button>
          <button
            onClick={() => setActiveView('customers')}
            className={`flex-1 py-4 px-8 rounded-[1.5rem] font-black text-lg transition-all duration-300 ${
              activeView === 'customers'
                ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-xl scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <span className="mr-2">💕</span>
            Style Profiles
          </button>
        </div>

        {/* Content */}
        {activeView === 'dashboard' ? (
          <div>
            {/* How It Works */}
            <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 backdrop-blur-xl rounded-[3rem] p-10 mb-10 border-2 border-white/30 shadow-2xl">
              <h2 className="text-4xl font-black mb-8 flex items-center gap-4">
                <span className="text-5xl">💡</span>
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  How The AI Works
                </span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: "📊", title: "Learn Preferences", desc: "Tracks each customer's style DNA through purchase history and preferences", gradient: "from-pink-500 to-rose-500" },
                  { icon: "🎯", title: "Smart Matching", desc: "AI algorithm matches new arrivals to customers based on their unique style profile", gradient: "from-purple-500 to-indigo-500" },
                  { icon: "💬", title: "Auto WhatsApp", desc: "Personalized recommendations sent directly via WhatsApp with product photos", gradient: "from-indigo-500 to-blue-500" }
                ].map((step, idx) => (
                  <div key={idx} className="group bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border-2 border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-4xl mb-5 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {step.icon}
                    </div>
                    <h3 className={`font-black mb-3 text-xl bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-700 font-semibold leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Fresh Finds → Perfect Matches
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {newArrivals.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            {!selectedCustomer ? (
              <>
                <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Customer Style Profiles
                </h2>
                <p className="text-lg text-gray-600 font-bold mb-8">Showing 3 of 247 customers</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {customers.map(customer => (
                    <CustomerCard 
                      key={customer.id} 
                      customer={customer}
                      onClick={setSelectedCustomer}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div>
                <button 
                  onClick={() => setSelectedCustomer(null)}
                  className="mb-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black rounded-2xl shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <span className="text-xl">←</span>
                  Back to Customers
                </button>
                
                <div className="bg-white/90 backdrop-blur-2xl rounded-[3rem] p-12 shadow-2xl border-2 border-white/30">
                  <div className="flex items-start justify-between mb-10">
                    <div className="flex items-center gap-6">
                      <div className={`w-32 h-32 bg-gradient-to-br ${selectedCustomer.gradient} rounded-3xl flex items-center justify-center text-white font-black text-5xl shadow-2xl ring-8 ring-white/50`}>
                        {selectedCustomer.name.charAt(0)}
                      </div>
                      <div>
                        <h2 className="text-5xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                          {selectedCustomer.name}
                        </h2>
                        <p className="text-gray-600 text-2xl font-bold">{selectedCustomer.phone}</p>
                      </div>
                    </div>
                    <div className={`px-8 py-4 rounded-2xl text-lg font-black shadow-xl ${
                      selectedCustomer.retention === 'VIP' 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                        : 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
                    }`}>
                      {selectedCustomer.retention === 'VIP' ? '👑 VIP Member' : '✨ Active'}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                      { label: "Total Orders", value: selectedCustomer.purchaseCount, gradient: "from-pink-500 to-rose-500" },
                      { label: "Total Spent", value: selectedCustomer.totalSpent, gradient: "from-purple-500 to-indigo-500" },
                      { label: "Last Order", value: selectedCustomer.recentActivity, gradient: "from-green-500 to-emerald-500" }
                    ].map((stat, idx) => (
                      <div key={idx} className={`p-8 bg-gradient-to-br ${stat.gradient} rounded-3xl shadow-2xl text-white transform hover:scale-105 transition-all duration-300`}>
                        <p className="text-sm mb-3 font-black uppercase tracking-wider opacity-90">{stat.label}</p>
                        <p className="text-5xl font-black">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-4xl font-black mb-8 flex items-center gap-4">
                    <span className="text-5xl">💅</span>
                    <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Her Style DNA
                    </span>
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      { title: "💕 Favorite Brands", items: selectedCustomer.preferences.brands, color: "pink" },
                      { title: "🎨 Color Palette", items: selectedCustomer.preferences.colors, color: "purple" },
                      { title: "✨ Style Vibe", items: selectedCustomer.preferences.styles, color: "indigo" },
                      { title: "💰 Budget Range", items: [selectedCustomer.preferences.priceRange], color: "rose" }
                    ].map((section, idx) => (
                      <div key={idx} className={`p-8 bg-gradient-to-br from-${section.color}-50 to-white rounded-3xl border-2 border-${section.color}-200 shadow-lg`}>
                        <p className="text-lg font-black text-gray-700 mb-5">{section.title}</p>
                        <div className="flex flex-wrap gap-3">
                          {section.items.map((item, i) => (
                            <span key={i} className={`px-5 py-3 bg-gradient-to-r from-${section.color}-500 to-${section.color}-600 text-white rounded-2xl font-black text-base shadow-lg hover:scale-110 transition-transform duration-300`}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
