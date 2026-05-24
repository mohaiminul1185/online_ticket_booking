const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 p-4 md:p-8">
      {/* top heading */}
      <div className="bg-black text-white rounded-3xl p-6 md:p-10 shadow-2xl mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
          Welcome to Dashboard
        </h1>

        <p className="text-gray-300 text-sm md:text-lg">
          Manage your bookings, tickets and travel activities easily.
        </p>
      </div>

      {/* stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* card 1 */}
        <div className="bg-white rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="text-5xl mb-4">🎫</div>

          <h2 className="text-3xl font-bold text-black">12</h2>

          <p className="text-gray-600 mt-2">Total Bookings</p>
        </div>

        {/* card 2 */}
        <div className="bg-white rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="text-5xl mb-4">🚌</div>

          <h2 className="text-3xl font-bold text-black">5</h2>

          <p className="text-gray-600 mt-2">Bus Tickets</p>
        </div>

        {/* card 3 */}
        <div className="bg-white rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="text-5xl mb-4">🚆</div>

          <h2 className="text-3xl font-bold text-black">4</h2>

          <p className="text-gray-600 mt-2">Train Tickets</p>
        </div>

        {/* card 4 */}
        <div className="bg-white rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="text-5xl mb-4">🚢</div>

          <h2 className="text-3xl font-bold text-black">3</h2>

          <p className="text-gray-600 mt-2">Launch Tickets</p>
        </div>
      </div>

      {/* middle section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* recent booking */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">
            Recent Bookings
          </h2>

          <div className="space-y-4">
            {/* item */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-slate-100 rounded-2xl p-4 gap-3">
              <div>
                <h3 className="font-bold text-lg">
                  Dhaka → Cox's Bazar
                </h3>

                <p className="text-gray-600">
                  Bus Ticket
                </p>
              </div>

              <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-red-500 transition">
                View
              </button>
            </div>

            {/* item */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-slate-100 rounded-2xl p-4 gap-3">
              <div>
                <h3 className="font-bold text-lg">
                  Dhaka → Sylhet
                </h3>

                <p className="text-gray-600">
                  Train Ticket
                </p>
              </div>

              <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-red-500 transition">
                View
              </button>
            </div>

            {/* item */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-slate-100 rounded-2xl p-4 gap-3">
              <div>
                <h3 className="font-bold text-lg">
                  Dhaka → Barisal
                </h3>

                <p className="text-gray-600">
                  Launch Ticket
                </p>
              </div>

              <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-red-500 transition">
                View
              </button>
            </div>
          </div>
        </div>

        {/* profile */}
        <div className="bg-black text-white rounded-3xl p-6 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="user"
              className="w-28 h-28 rounded-full border-4 border-white mb-5"
            />

            <h2 className="text-2xl font-bold">
              Mohaiminul
            </h2>

            <p className="text-gray-300 mt-2">
              TicketBari User
            </p>

            <button className="mt-6 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;