import HeritageLayout from "../components/HeritageLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUpload, FiFile, FiTag, FiGlobe, FiType, FiCalendar } from "react-icons/fi";

const Upload = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    language: "Amharic",
    origin: "",
    date: "",
  });

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const categories = [
    "Manuscript", "Artifact", "Music", "Oral Tradition",
    "Recipe", "Dance", "Ritual", "Historical Document",
    "Photograph", "Video"
  ];

  const languages = [
    "Amharic", "English", "Oromo", "Tigrinya",
    "Somali", "Afar", "Geez"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setUploading(true);

    try {
      // STEP 1: Upload media file
      const mediaData = new FormData();
      mediaData.append("media", file);

      const uploadRes = await fetch("http://localhost:3001/media/upload", {
        method: "POST",
        body: mediaData
      });

      const uploadResult = await uploadRes.json();

      if (!uploadRes.ok) {
        throw new Error("Media upload failed");
      }

      // STEP 2: Save heritage item metadata
      const itemRes = await fetch("http://localhost:3001/items/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          category: formData.category,
          language: formData.language,
          origin: formData.origin,
          date: formData.date,
          media_path: uploadResult.original,
          optimized_path: uploadResult.optimized
        })
      });

      const itemResult = await itemRes.json();

      if (!itemRes.ok) {
        throw new Error("Item creation failed");
      }

      alert("Item uploaded successfully! Awaiting admin approval.");
      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <HeritageLayout>
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Upload Cultural Heritage Item
          </h1>

          <p className="text-gray-600 mb-8">
            Preserve Ethiopia's cultural heritage by uploading artifacts or media.
          </p>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Title */}
            <div>
              <label className="block text-gray-700 mb-2 flex items-center gap-2">
                <FiType /> Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 mb-2">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            {/* Category, Language, Date */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="p-3 border rounded-lg"
                required
              >
                <option value="">Select category</option>
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="p-3 border rounded-lg"
              >
                {languages.map(l => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>

              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="e.g. 19th Century"
                className="p-3 border rounded-lg"
              />
            </div>

            {/* Origin */}
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              placeholder="Origin / Region"
              className="w-full p-3 border rounded-lg"
            />

            {/* File */}
            <input type="file" onChange={handleFileChange} />

            {/* Buttons */}
            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-blue-600 text-white p-3 rounded-lg"
            >
              {uploading ? "Uploading..." : "Upload Cultural Item"}
            </button>
          </form>
        </div>
      </div>
    </HeritageLayout>
  );
};

export default Upload;
