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

const AllTickets = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 py-16 px-6">
      {/* heading */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          All Available Tickets
        </h1>

        <p className="text-gray-600 text-lg">
          Choose your favorite destination and enjoy a comfortable journey.
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-2"
          >
            {/* image */}
            <div className="overflow-hidden">
              <img
                src={ticket.image}
                alt={ticket.route}
                className="h-64 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {ticket.route}
              </h2>

              <div className="space-y-2 text-gray-700">
                <p>💰 Price: ৳{ticket.price}</p>
                <p>🎫 Quantity: {ticket.quantity}</p>
                <p>🚌 Transport: {ticket.transport}</p>
              </div>

              <Link to={`/ticketDetails/${ticket.id}`}>
                <button className="mt-6 w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-red-500 transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* bottom banner */}
      <div className="max-w-5xl mx-auto mt-20">
        <div className="bg-black text-white rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Travel Anywhere in Bangladesh
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Book bus, train, launch & flight tickets easily with TicketBari.
          </p>

          <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-xl font-semibold text-lg transition">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTickets;