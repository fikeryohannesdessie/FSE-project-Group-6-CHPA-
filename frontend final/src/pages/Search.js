import HeritageLayout from "../components/HeritageLayout";
import { useState } from "react";
import { FiSearch, FiFilter, FiDownload, FiBookmark, FiEye } from "react-icons/fi";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  const categories = ["all", "Manuscript", "Artifact", "Music", "Oral Tradition", "Recipe", "Dance", "Ritual"];
  const languages = ["all", "Amharic", "English", "Oromo", "Tigrinya", "Somali", "Geez"];

  const searchResults = [
    { id: 1, title: "Traditional Coffee Ceremony", category: "Ritual", language: "Amharic", date: "19th Century", description: "Ethiopian traditional coffee preparation ritual." },
    { id: 2, title: "Geez Manuscript from Axum", category: "Manuscript", language: "Geez", date: "Ancient", description: "Religious manuscript in Geez script." },
    { id: 3, title: "Eskista Dance Performance", category: "Dance", language: "Amharic", date: "2024", description: "Traditional Ethiopian shoulder dance." },
    { id: 4, title: "Traditional Instrumental Music", category: "Music", language: "Oromo", date: "20th Century", description: "Recordings of traditional instruments." },
    { id: 5, title: "Injera Recipe Collection", category: "Recipe", language: "Amharic", date: "Traditional", description: "Traditional Ethiopian bread recipes." },
    { id: 6, title: "Historical Artifacts Collection", category: "Artifact", language: "English", date: "Various", description: "Collection of historical Ethiopian artifacts." },
  ];

  const filteredResults = searchResults.filter(item => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesLanguage = selectedLanguage === "all" || item.language === selectedLanguage;

    return matchesSearch && matchesCategory && matchesLanguage;
  });

  return (
    <HeritageLayout>
      <div className="container mx-auto px-6 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Search Cultural Heritage</h1>
          <p className="text-gray-600">
            Explore thousands of cultural heritage items from Ethiopia
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="relative mb-6">
            <FiSearch className="absolute left-4 top-4 text-gray-400 text-xl" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, description, keywords..."
              className="w-full pl-12 p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FiFilter /> Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Language</label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>
                    {lang === "all" ? "All Languages" : lang}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Sort By</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>Relevance</option>
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Title A-Z</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-700">
              Found <span className="font-bold text-blue-600">{filteredResults.length}</span> items
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
        </div>

        {/* Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100" />

              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>

                <div className="flex items-center gap-2 mt-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {item.category}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {item.language}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <p className="text-gray-500 text-xs mb-4">Period: {item.date}</p>

                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <FiEye />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                      <FiDownload />
                    </button>
                    <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg">
                      <FiBookmark />
                    </button>
                  </div>

                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredResults.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No items found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </HeritageLayout>
  );
};

export default Search;






