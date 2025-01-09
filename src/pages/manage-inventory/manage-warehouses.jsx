import React, { useState } from "react";
import { Card } from "../../component/dashboard";
import { Popup } from "../../component/manage-inventory";

export function ManageWarehouse({ isDarkMode }) {
  const [showPopup, setShowPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [entries, setEntries] = useState(10);
  const [warehouses, setWarehouses] = useState([
    { id: 1, name: "Warehouse 1", location: "Location 1", address: "Address 1" },
    { id: 2, name: "Warehouse 2", location: "Location 2", address: "Address 2" },
  ]);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleEditClosePopup = () => {
    setShowEditPopup(false);
  };

  const handleEntriesChange = (event) => {
    setEntries(event.target.value);
  };

  const handleEditClick = (warehouseId) => {
    const warehouse = warehouses.find((w) => w.id === warehouseId);
    setSelectedWarehouse(warehouse);
    setShowEditPopup(true);
  };

  const handleSaveEdit = () => {
    // Update the warehouses state with the edited warehouse
    setWarehouses((prevWarehouses) =>
      prevWarehouses.map((warehouse) =>
        warehouse.id === selectedWarehouse.id ? selectedWarehouse : warehouse
      )
    );
    setShowEditPopup(false); // Close the edit popup after saving
  };

  const handleChange = (field, value) => {
    setSelectedWarehouse({
      ...selectedWarehouse,
      [field]: value,
    });
  };

  return (
    <div className={`p-8 h-screen ${isDarkMode ? "bg-[#2d313e]" : "bg-[#f5f6f8]"}`}>
      <h1 className="text-xl font-semibold pt-5">Manage Warehouse</h1>

      <Card
        isDarkMode={isDarkMode}
        Padding={"p-5"}
        Heading1={"Warehouses"}
        description1={`<span class="text-gray-700">Total 1 warehouses</span>`}
        Heading2={"No of SKU"}
        description2={`<span class="text-gray-700">Total 0 SKU</span>`}
        Heading3={"Low stock SKU"}
        description3={`<span class="text-gray-700">Total 0</span>`}
        Heading4={"Best Seller"}
        description4={`<span class="text-gray-700">Total 0</span>`}
        showImage={true}
      />

      <div className="mt-8 bg-white p-8 shadow rounded">
        <div className="flex justify-end pb-12">
          <button
            onClick={handleButtonClick}
            className="bg-[#2eb679] text-white px-4 py-2 rounded shadow"
          >
            + Add New
          </button>
        </div>

        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-2">
            <label htmlFor="entries" className="text-gray-700">Show</label>
            <select
              id="entries"
              value={entries}
              onChange={handleEntriesChange}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="text-gray-700">entries</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Search:</span>
            <input
              type="text"
              placeholder="Search warehouse"
              className="border border-gray-300 rounded px-2 py-1"
            />
          </div>
        </div>

        <table className="w-full text-[#495058] text-center border-t border-gray-300">
          <thead>
            <tr>
              <th className="border-t border-gray-300 p-2">#</th>
              <th className="border-t border-gray-300 p-2">Warehouse Name</th>
              <th className="border-t border-gray-300 p-2">Product Location</th>
              <th className="border-t border-gray-300 p-2 w-1/3">Address</th>
              <th className="border-t border-gray-300 p-2">View Details</th>
              <th className="border-t border-gray-300 p-2">Edit</th>
            </tr>
          </thead>
          <tbody className="bg-[#F8F9FA]">
            {warehouses.slice(0, entries).map((warehouse) => (
              <tr key={warehouse.id}>
                <td className=" p-2">{warehouse.id}</td>
                <td className=" p-2">{warehouse.name}</td>
                <td className=" p-2">{warehouse.location}</td>
                <td className=" p-2 w-1/3">{warehouse.address}</td>
                <td className=" p-2">
                  <button
                    onClick={() => alert(`Viewing details for ${warehouse.name}`)}
                    className="text-white bg-[#2eb679] rounded-md px-2 py-2 "
                  >
                    View Inventory
                  </button>
                </td>
                <td className="bg-gray-100 p-2">
                  <button
                    onClick={() => handleEditClick(warehouse.id)}
                    className="text-orange-500"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPopup && <Popup handleClosePopup={handleClosePopup} />}

      {showEditPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Warehouse</h2>
            <div>
              <label className="block text-gray-700">Warehouse Name</label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2 mb-4"
                value={selectedWarehouse?.name || ""}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700">Product Location</label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2 mb-4"
                value={selectedWarehouse?.location || ""}
                onChange={(e) => handleChange("location", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2 mb-4"
                value={selectedWarehouse?.address || ""}
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleEditClosePopup}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
