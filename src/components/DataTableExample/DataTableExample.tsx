import React, { useState, useEffect } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const DataTable = () => {
  const [data, setData] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterColumn, setFilterColumn] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    // Simulating API call to fetch data
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await response.json();
      setData(result.map((user: { id: any; name: any; email: any; company: { bs: any; }; })  => ({ id: user.id, name: user.name, email: user.email, role: user.company.bs })));
    };
    fetchData();
  }, []);

  const handleSort = (column: any) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const handleFilter = (e: any) => {
    e.preventDefault();
    // Filtering logic here
  };

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleEdit = (id: any) => {
    setEditingId(id);
  };

  const handleSave = (id: any) => {
    // Save edited item logic here
    setEditingId(null);
  };

  const handleDelete = (id: any) => {
    setData(data.filter(item => item.id !== id));
  };

  const handleAdd = (e: any) => {
    e.preventDefault();
    const id = Math.max(...data.map(item => item.id)) + 1;
    setData([...data, { id, ...newItem }]);
    setNewItem({ name: '', email: '', role: '' });
  };

  const filteredData = data
    .filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .filter(item =>
      filterColumn && filterValue
        ? (item as Record<string, any>)[filterColumn]?.toString().toLowerCase().includes(filterValue.toLowerCase())
        : true
    )
    .sort((a, b) => {
      const aValue = (a as Record<string, any>)[sortColumn];
      const bValue = (b as Record<string, any>)[sortColumn];
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">User Management Table</h1>
      
      <div className="mb-4 flex flex-wrap items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearch}
            />
            {/* <FaSearch className="absolute left-3 top-3 text-gray-400" /> */}
          </div>
        </div>
        
        <form onSubmit={handleFilter} className="w-full md:w-2/3 flex flex-wrap items-center">
          <select
            className="w-full md:w-1/3 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 mb-2 md:mb-0"
            value={filterColumn}
            onChange={(e) => setFilterColumn(e.target.value)}
          >
            <option value="">Select column</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="role">Role</option>
          </select>
          <input
            type="text"
            placeholder="Filter value"
            className="w-full md:w-1/3 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 mb-2 md:mb-0"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <button
            type="submit"
            className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Apply Filter
          </button>
        </form>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort('name')}>
                Name {sortColumn === 'name' /* && <FaSort className="inline ml-1" /> */}
              </th>
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort('email')}>
                Email {sortColumn === 'email' /* && <FaSort className="inline ml-1" /> */}
              </th>
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => handleSort('role')}>
                Role {sortColumn === 'role' /* && <FaSort className="inline ml-1" /> */}
              </th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {currentItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {editingId === item.id ? (
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => setData(data.map(d => d.id === item.id ? { ...d, name: e.target.value } : d))}
                      className="w-full px-2 py-1 border rounded"
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td className="py-3 px-6 text-left">
                  {editingId === item.id ? (
                    <input
                      type="email"
                      value={item.email}
                      onChange={(e) => setData(data.map(d => d.id === item.id ? { ...d, email: e.target.value } : d))}
                      className="w-full px-2 py-1 border rounded"
                    />
                  ) : (
                    item.email
                  )}
                </td>
                <td className="py-3 px-6 text-left">
                  {editingId === item.id ? (
                    <input
                      type="text"
                      value={item.role}
                      onChange={(e) => setData(data.map(d => d.id === item.id ? { ...d, role: e.target.value } : d))}
                      className="w-full px-2 py-1 border rounded"
                    />
                  ) : (
                    item.role
                  )}
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    {editingId === item.id ? (
                      <button
                        onClick={() => handleSave(item.id)}
                        className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                      >
                        {/* <FaEdit /> */}
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                    >
                      {/* <FaTrash /> */}
                      Trash
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <p className="text-sm text-gray-600">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} entries
          </p>
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              {/* <FaChevronLeft className="h-5 w-5" aria-hidden="true" /> */}
            </button>
            {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === index + 1
                  ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                  }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              {/* <FaChevronRight className="h-5 w-5" aria-hidden="true" /> */}
            </button>
          </nav>
        </div>
      </div>

      <form onSubmit={handleAdd} className="mt-6 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newItem.email}
            onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Role"
            value={newItem.role}
            onChange={(e) => setNewItem({ ...newItem, role: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default DataTable;