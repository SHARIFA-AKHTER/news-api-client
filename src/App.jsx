
// import { useEffect, useState } from 'react';
// import { fetchNews } from './services/api';
// import NewsCard from './components/NewsCard';

// function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchNews()
//       .then(res => {
//         setData(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
//         <h1 className="text-2xl font-black text-blue-600 text-center">MERN NEWS</h1>
//       </nav>

//       {/* Responsive Grid Layout */}
//       <div className="max-w-7xl mx-auto p-6">
//         {loading ? (
//           <div className="flex justify-center items-center h-40 font-medium">Loading Database...</div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {data.map((item) => (
//               <NewsCard key={item._id} news={item} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;



import Footer from './components/Footer';
import Navbar from './components/navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
    
      <Navbar />
      
    
      <main className="grow">
        <Home />
      </main>

     
      <Footer />
    </div>
  );
}

export default App;