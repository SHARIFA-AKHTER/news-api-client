import { useEffect, useState } from 'react';
import { fetchNews } from '../services/api';
import NewsCard from '../components/NewsCard';

const Home = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const [category, setCategory] = useState('');
  const [language, setLanguage] = useState('en');
  const [status, setStatus] = useState('active');

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
   
        const params = { category, language, status };
        const res = await fetchNews(params);
        setNewsData(res.data);
      } catch (err) {
        console.error("Error loading news:", err);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [category, language, status]); 
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200 py-6 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 items-center justify-between">
          <h2 className="text-lg font-bold text-gray-700">Filter News:</h2>
          
          <div className="flex flex-wrap gap-3">
            {/* Category Filter */}
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option value="">All Categories</option>
              <option value="business">Business</option>
              <option value="technology">Technology</option>
              <option value="sports">Sports</option>
            </select>

            {/* Language Filter */}
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="es">Spanish</option>
            </select>

            {/* Status Filter */}
            <select 
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option value="active">Active</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 mt-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {newsData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsData.map((item) => (
                  <NewsCard key={item._id} news={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                <p className="text-gray-500 text-xl font-medium">No news found for this selection.</p>
                <button 
                  onClick={() => {setCategory(''); setLanguage('en');}}
                  className="mt-4 text-blue-600 font-bold hover:underline"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Home;