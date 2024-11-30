import ActiveTicketsPriority from "../ActiveTicketsPriority";
import TicketOverview from "../TicketOverview";

const AdminMenuChart = () => {
  
  return (
    <div className="flex justify-end gap-8 p-8 mt-6 bg-white rounded-lg shadow-md w-full">
      {/* Line Chart */}
      <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-cyan-500 mb-6">
          Tickets Overview
        </h2>
        <TicketOverview/>
      </div>

      {/* Donut Chart */}
      <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-sm flex items-center justify-center">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-cyan-500 mb-6 text-center">
            Active Tickets Priority
          </h2>
          <ActiveTicketsPriority/>
        </div>
      </div>
    </div>
  );
};

export default AdminMenuChart;
