import { Link } from "react-router-dom";

const tickets = [
  {
    id: 1,
    route: "Dhaka to Cox's Bazar",
    price: 1200,
    quantity: 20,
    transport: "Bus",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    route: "Dhaka to Sylhet",
    price: 900,
    quantity: 15,
    transport: "Train",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    route: "Dhaka to Barisal",
    price: 1700,
    quantity: 10,
    transport: "Launch",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HERO SECTION */}
      <div
        className="hero min-h-[500px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>

        <div className="hero-content text-center text-white">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-5">TicketBari</h1>

            <p className="text-xl mb-6">
              Book Bus, Train & Launch Tickets Easily Across Bangladesh
            </p>

            <Link to="/allTickets">
              <button className="btn btn-error text-white px-8">
                Explore Tickets
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* LATEST TICKETS */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest Tickets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:scale-105 duration-300"
            >
              <img
                src={ticket.image}
                alt={ticket.route}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">
                  {ticket.route}
                </h2>

                <p className="mb-2 text-lg">
                  <span className="font-semibold">Price:</span> ৳
                  {ticket.price}
                </p>

                <p className="mb-2 text-lg">
                  <span className="font-semibold">Quantity:</span>{" "}
                  {ticket.quantity}
                </p>

                <p className="mb-5 text-lg">
                  <span className="font-semibold">Transport:</span>{" "}
                  {ticket.transport}
                </p>

                <Link to={`/ticketDetails/${ticket.id}`}>
                  <button className="btn btn-primary w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">⚡</div>

              <h3 className="text-2xl font-bold mb-3">
                Fast Booking
              </h3>

              <p>
                Book your favorite tickets within seconds easily.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">🔒</div>

              <h3 className="text-2xl font-bold mb-3">
                Secure Payment
              </h3>

              <p>
                100% secure payment system with trusted gateway.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">📞</div>

              <h3 className="text-2xl font-bold mb-3">
                24/7 Support
              </h3>

              <p>
                Our support team is always ready to help you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* EXTRA SECTION */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-6">
            Travel Smart With TicketBari
          </h2>

          <p className="text-xl mb-8">
            Enjoy hassle free online ticket booking experience.
          </p>

          <Link to="/register">
            <button className="btn btn-neutral px-8">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;