const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200">
      <img 
        src={news.urlToImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UFJac7tEB1R87wzzlhZjf__YL3CvPYBpng&s'} 
        alt={news.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 line-clamp-2 mb-2">{news.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{news.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs font-semibold text-blue-600 px-2 py-1 bg-blue-50 rounded">
            {news.sourceName}
          </span>
          <a href={news.url} target="_blank" className="text-sm font-bold text-gray-900 hover:underline">
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;