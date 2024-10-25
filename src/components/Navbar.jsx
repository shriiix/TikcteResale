import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TicketContext } from "../context/context";

const Navbar = () => {
  const { search, setSearch, filterType, setFilterType } =
    useContext(TicketContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to handle dropdown visibility

  const handleFilterChange = (type) => {
    if (filterType.includes(type)) {
      // Remove the type from the filter if it's already selected
      setFilterType(filterType.filter((t) => t !== type));
    } else {
      // Add the type to the filter if it's not selected
      setFilterType([...filterType, type]);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate("/create-ticket");
  };

  const role = "admin";

  const [islogin, setislogin] = useState(true);
  return (
    <nav className="bg-yellow-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Brand</h1>
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by venue..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded p-2 shadow-md mx-4"
          />

          {/* Filter Button */}
          <div className="relative">
            <button
              onClick={toggleDropdown} // Show/hide dropdown on click
              className="border rounded p-2 shadow-md"
            >
              {/* Replace with your SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1h-16a1 1 0 01-1-1v-2zM4 9h16m-7 4h7m-7 4h7m-7-4h-3v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4H1"
                />
              </svg>
            </button>

            {/* Dropdown for Ticket Types */}
            {isDropdownOpen && ( // Conditional rendering of the dropdown
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                <ul className="py-1">
                  <li
                    className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleFilterChange("Entertainment")}
                  >
                    Entertainment {filterType.includes("Entertainment") && "✓"}
                  </li>
                  <li
                    className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleFilterChange("Sports")}
                  >
                    Sports {filterType.includes("Sports") && "✓"}
                  </li>
                  <li
                    className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleFilterChange("Art")}
                  >
                    Art {filterType.includes("Art") && "✓"}
                  </li>
                  <li
                    className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleFilterChange("Movie")}
                  >
                    Movie {filterType.includes("Movie") && "✓"}
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Items aligned at the end */}
          <div className="flex space-x-4 ml-auto items-center ">
            <Link className="text-gray-700 hover:text-blue-500" to='/'>Home</Link>
            <Link className="text-gray-700 hover:text-blue-500" to='/dashboard'>Dashboard</Link>
            <button
              onClick={()=>navigate("/create-ticket")}
              className="bg-black text-white shadow-lg hover:bg-gray-800 focus:outline-none ml-[150px]  focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 px-4 py-2 rounded"
            >
              {role == "admin" ? "Create Ticket" : "connect wallet"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
