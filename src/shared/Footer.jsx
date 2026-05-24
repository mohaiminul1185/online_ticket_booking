const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* logo */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Ticket<span className="text-red-500">Bari</span>
          </h2>

          <p className="text-gray-400">
            Book bus, train & launch tickets easily across Bangladesh.
          </p>
        </div>

        {/* links */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>All Tickets</li>
            <li>Dashboard</li>
            <li>Login</li>
          </ul>
        </div>

        {/* contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Contact
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Email: ticketbari@gmail.com</li>
            <li>Phone: +880123456789</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* social */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-3xl">
            <span>📘</span>
            <span>📸</span>
            <span>❌</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-400">
        © 2026 TicketBari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;