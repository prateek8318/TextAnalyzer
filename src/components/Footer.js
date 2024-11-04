import React from 'react'

function Footer() {
  return (
    <div>
      
<footer class="bg-gray-800 text-white">
  <div class="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    
    <div>
      <h3 class="text-lg font-semibold mb-4">About Us</h3>
      <p class="text-sm text-gray-400">
        We are a company committed to delivering the best Games and services.
      </p>
    </div>

    
    <div>
      <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
      <ul>
        <li class="mb-2"><a href="/board" class="hover:text-gray-300">Home</a></li>
        <li class="mb-2"><a href="/about" class="hover:text-gray-300">About</a></li>
        <li class="mb-2"><a href="/about" class="hover:text-gray-300">Services</a></li>
        <li class="mb-2"><a href="/contact" class="hover:text-gray-300">Contact</a></li>
      </ul>
    </div>

    
    <div>
      <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
      <p class="text-sm text-gray-400 mb-2">Email: pk8041401@gmail.com</p>
      <p class="text-sm text-gray-400">Phone: +91 7388437791</p>
    </div>
  </div>

  
  <div class="border-t border-gray-700 py-4 text-center">
    <p class="text-sm text-gray-500">&copy; 2024 Company Name. All rights reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer