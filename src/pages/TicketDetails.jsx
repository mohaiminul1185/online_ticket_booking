import { useParams } from "react-router-dom";
import tickets from "../assets/tickets";

const TicketDetails = () => {
  const { id } = useParams();

  const ticket = tickets.find((item) => item.id == id);

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-10 items-center bg-white shadow-xl rounded-2xl overflow-hidden">
        
        <img
          src={ticket.image}
          alt={ticket.title}
          className="w-full h-full object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6">
            {ticket.title}
          </h1>

          <p className="text-xl mb-4">
            <span className="font-semibold">Price:</span> ৳{ticket.price}
          </p>

          <p className="text-xl mb-4">
            <span className="font-semibold">Available Seats:</span>{" "}
            {ticket.quantity}
          </p>

          <p className="text-xl mb-8">
            <span className="font-semibold">Transport:</span>{" "}
            {ticket.transport}
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;