import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import Select from 'react-select';
import AdminLayout from '../components/AdminLayout';
// import visaData from '../Datas/visaData'; // Import visaData

const REACT_APP_API_URL = process.env.REACT_APP_REACT_APP_API_URL || 'http://localhost:5000';

const defaultCard = {
  country: '',
  image: '',
  visaCount: '',
  date: '',
  price: '',
  category: '',
  includesTruckIcon: false,
  stickerVisa: false,
  trending: false,
};

// Prepare country options for react-select using a comprehensive list of countries
const allCountries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. \"Swaziland\")", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Holy See", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
  "Vanuatu", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

const countryOptions = allCountries.map(country => ({ value: country, label: country }));

// Pagination range helper inspired by user reference
function getPageRange(currentPage, totalPages, PAGE_LIMIT = 5) {
  let startPage, endPage;
  if (totalPages <= PAGE_LIMIT) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const halfLimit = Math.floor(PAGE_LIMIT / 2);
    if (currentPage <= halfLimit) {
      startPage = 1;
      endPage = PAGE_LIMIT;
    } else if (currentPage + halfLimit >= totalPages) {
      startPage = totalPages - PAGE_LIMIT + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - halfLimit;
      endPage = currentPage + halfLimit;
    }
  }
  return { startPage, endPage };
}

function AdminCardsPage() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('country');
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [truckFilter, setTruckFilter] = useState(false);
  const [stickerFilter, setStickerFilter] = useState(false);

  const { register, handleSubmit, reset, setValue, formState: { errors }, control } = useForm({ defaultValues: defaultCard });

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${REACT_APP_API_URL}/api/cards`);
      const data = await res.json();
      setCards(data);
    } catch (err) {
      // handle error
    }
    setLoading(false);
  };

  const onSubmit = async (data) => {
    console.log('Submitting card data:', data);

    // Extract the value from react-select country object and use category string
    const dataToSend = {
      ...data,
      country: data.country ? data.country.value : '',
      category: data.category, // Use the category string directly
    };

    if (editingCard) {
      await fetch(`${REACT_APP_API_URL}/api/cards/${editingCard._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
    } else {
      await fetch(`${REACT_APP_API_URL}/api/cards`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
    }
    setShowForm(false);
    setEditingCard(null);
    reset(defaultCard);
    fetchCards();
  };

  const handleEdit = (card) => {
    setEditingCard(card);
    setShowForm(true);
    Object.keys(defaultCard).forEach((key) => setValue(key, card[key]));
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this card?')) {
      await fetch(`${REACT_APP_API_URL}/api/cards/${id}`, { method: 'DELETE' });
      fetchCards();
    }
  };

  const handleAdd = () => {
    setEditingCard(null);
    reset(defaultCard);
    setShowForm(true);
  };

  const filteredCards = useMemo(() => {
    let filtered = cards;
    if (search) {
      filtered = filtered.filter(card =>
        (card.country && card.country.toLowerCase().includes(search.toLowerCase())) ||
        (card.price && card.price.toLowerCase().includes(search.toLowerCase()))
      );
    }
    if (categoryFilter) {
      filtered = filtered.filter(card => card.category === categoryFilter);
    }
    if (truckFilter) {
      filtered = filtered.filter(card => card.includesTruckIcon === true);
    }
    if (stickerFilter) {
      filtered = filtered.filter(card => card.stickerVisa === true);
    }
    filtered = filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
    return filtered;
  }, [cards, search, sortBy, sortOrder, categoryFilter, truckFilter, stickerFilter]);

  const startIdx = (page - 1) * pageSize;
  const endIdx = Math.min(startIdx + pageSize, filteredCards.length);
  const paginatedCards = filteredCards.slice(startIdx, endIdx);
  const totalPages = Math.ceil(filteredCards.length / pageSize);

  const { startPage, endPage } = getPageRange(page, totalPages, 5);
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Cards Management</h1>
        <button
          className="bg-primary text-white px-5 py-2 rounded hover:bg-secondary flex items-center gap-2 shadow"
          onClick={handleAdd}
        >
          <FaPlus /> Add Card
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <div className="relative">
          <input
            className="border rounded pl-8 pr-2 py-2 focus:outline-primary min-w-[220px]"
            placeholder="Search by country, price, or status..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-2 top-3 text-gray-400" />
        </div>
        <select
          className="border rounded px-2 py-2 focus:outline-primary"
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Instant">Instant</option>
        </select>
        <label className="flex items-center gap-1 text-sm">
          <input type="checkbox" checked={truckFilter} onChange={e => setTruckFilter(e.target.checked)} />
          Truck Icon
        </label>
        <label className="flex items-center gap-1 text-sm">
          <input type="checkbox" checked={stickerFilter} onChange={e => setStickerFilter(e.target.checked)} />
          Sticker Visa
        </label>
        <select
          className="border rounded px-2 py-2 focus:outline-primary"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="country">Country</option>
          <option value="price">Price</option>
          <option value="visaCount">Visa Count</option>
          <option value="date">Date</option>
        </select>
        <select
          className="border rounded px-2 py-2 focus:outline-primary"
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select
          className="border rounded px-2 py-2 focus:outline-primary"
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 50].map(size => (
            <option key={size} value={size}>{size} / page</option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full bg-white rounded">
          <thead className="sticky top-0 bg-primary text-white z-10">
            <tr>
              <th className="py-3 px-4 text-left">Country</th>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Visa Count</th>
              <th className="py-3 px-4 text-left">Date/Time</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Trending</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={7} className="text-center py-8">Loading...</td></tr>
            ) : paginatedCards.length === 0 ? (
              <tr><td colSpan={7} className="text-center py-8">No cards found.</td></tr>
            ) : paginatedCards.map(card => (
              <tr key={card._id} className="border-b hover:bg-gray-50 transition">
                <td className="py-2 px-4 font-medium">{card.country}</td>
                <td className="py-2 px-4"><img src={card.image} alt={card.country} className="w-16 h-10 object-cover rounded" /></td>
                <td className="py-2 px-4">{card.visaCount}</td>
                <td className="py-2 px-4">{card.date}</td>
                <td className="py-2 px-4">₹{card.price}</td>
                <td className="py-2 px-4">{card.trending ? <span className="text-green-600 font-bold">Yes</span> : 'No'}</td>
                <td className="py-2 px-4 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800" onClick={() => handleEdit(card)}><FaEdit /></button>
                  <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(card._id)}><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div>
          Showing {filteredCards.length === 0 ? 0 : startIdx + 1}-{endIdx} of {filteredCards.length} cards
        </div>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 rounded bg-blue-600 text-white disabled:opacity-50"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
          >Prev</button>
          {startPage > 1 && (
            <button
              className={`px-3 py-1 rounded ${page === 1 ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-800'} font-semibold`}
              onClick={() => setPage(1)}
            >1</button>
          )}
          {startPage > 2 && <span className="px-2 select-none">...</span>}
          {pages.map((p) => (
            <button
              key={p}
              className={`px-3 py-1 rounded ${page === p ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-800'} font-semibold`}
              onClick={() => setPage(p)}
            >{p}</button>
          ))}
          {endPage < totalPages - 1 && <span className="px-2 select-none">...</span>}
          {endPage < totalPages && (
            <button
              className={`px-3 py-1 rounded ${page === totalPages ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-800'} font-semibold`}
              onClick={() => setPage(totalPages)}
            >{totalPages}</button>
          )}
          <button
            className="px-3 py-1 rounded bg-blue-600 text-white disabled:opacity-50"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages || totalPages === 0}
          >Next</button>
        </div>
      </div>
      {/* Modal Form */}
      <Dialog open={showForm} onClose={() => setShowForm(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md max-h-[90vh] overflow-y-auto relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl" onClick={() => setShowForm(false)}>&times;</button>
            <Dialog.Title className="text-xl font-bold mb-4 text-primary">{editingCard ? 'Edit Card' : 'Add Card'}</Dialog.Title>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Country <span className="text-red-500">*</span></label>
                <Controller
                  name="country"
                  control={control}
                  rules={{ required: 'Country is required' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={countryOptions}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      isClearable
                      isSearchable
                      placeholder="Select Country"
                    />
                  )}
                />
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
              </div>
              <div>
                <label className="block mb-1 font-medium">Image URL <span className="text-red-500">*</span></label>
                <input className="border rounded px-3 py-2 w-full" {...register('image', { required: 'Image URL is required' })} placeholder="Enter image URL" />
                {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
              </div>
              <div>
                <label className="block mb-1 font-medium">Visa Count</label>
                <input className="border rounded px-3 py-2 w-full" {...register('visaCount')} placeholder="Enter visa count" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Date</label>
                <input
                  type="date"
                  className="border rounded px-3 py-2 w-full"
                  {...register('date')}
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    selectedDate.setHours(0, 0, 0, 0);

                    const timeDiff = selectedDate.getTime() - today.getTime();
                    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                    let category = '';
                    if (diffDays >= 0 && diffDays <= 1) {
                      category = 'Instant';
                    } else if (diffDays > 1 && diffDays <= 7) {
                      category = 'Weekly';
                    } else if (diffDays > 7 && diffDays <= 30) {
                      category = 'Monthly';
                    }

                    setValue('category', category);
                  }}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Price</label>
                <input
                  type="number"
                  className="border rounded px-3 py-2 w-full"
                  {...register('price', { valueAsNumber: true, validate: value => !isNaN(value) || 'Price must be a number' })}
                  placeholder="Enter price"
                />
                {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
              </div>
              <div>
                <label className="block mb-1 font-medium">Category</label>
                <input
                  type="text"
                  className="border rounded px-3 py-2 w-full bg-gray-100 cursor-not-allowed"
                  {...register('category')}
                  readOnly
                  placeholder="Auto-calculated based on date"
                />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" {...register('trending')} id="trending" />
                <label htmlFor="trending" className="font-medium">Trending</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" {...register('includesTruckIcon')} id="includesTruckIcon" />
                <label htmlFor="includesTruckIcon" className="font-medium">Includes Truck Icon</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" {...register('stickerVisa')} id="stickerVisa" />
                <label htmlFor="stickerVisa" className="font-medium">Sticker Visa</label>
              </div>
              <button className="w-full bg-primary text-white py-2 rounded hover:bg-secondary" type="submit">
                {editingCard ? 'Update Card' : 'Add Card'}
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </AdminLayout>
  );
}

export default AdminCardsPage; 