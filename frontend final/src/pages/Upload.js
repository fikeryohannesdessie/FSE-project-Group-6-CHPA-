import React, { useState } from "react";
import HeritageLayout from "../components/HeritageLayout";
import { useNavigate } from "react-router-dom";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
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
      // 1) Upload media to the backend route that works in Postman
      const mediaData = new FormData();
      mediaData.append("media", file);

      const mediaRes = await fetch("http://localhost:3001/upload", {
        method: "POST",
        body: mediaData,
      });

      if (!mediaRes.ok) {
        const text = await mediaRes.text();
        console.error("Media upload failed:", mediaRes.status, text);
        throw new Error(`Media upload failed: ${mediaRes.status}`);
      }

      let mediaResult;
      try {
        mediaResult = await mediaRes.json();
      } catch {
        const raw = await mediaRes.text();
        console.warn("Media upload returned non-JSON body:", raw);
        mediaResult = { raw };
      }

      console.log("media upload result:", mediaResult);

      // Build media paths (robust for different backend key names)
      const mediaPath =
        mediaResult.original ||
        mediaResult.originalPath ||
        mediaResult.path ||
        mediaResult.filePath ||
        mediaResult.filename ||
        (typeof mediaResult === "string" ? mediaResult : null);

      const optimizedPath =
        mediaResult.optimized || mediaResult.optimizedPath || null;

      // 2) Create the heritage item
      // Include role: "contributor" to satisfy backend role requirement (demo-friendly)
      const itemPayload = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        language: formData.language,
        origin: formData.origin,
        date: formData.date,

        // TEMPORARY: role in body to satisfy backend check (replace with auth token flow later)
        role: "contributor",

        // file path fields (send multiple common names)
        media_path: mediaPath,
        optimized_path: optimizedPath,
        originalFile: mediaPath,
        optimizedFile: optimizedPath,
      };

      console.log("item payload being sent:", itemPayload);

      const itemRes = await fetch("http://localhost:3001/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemPayload),
      });

      // Read response (try JSON, fallback to text)
      let itemBody;
      try {
        itemBody = await itemRes.json();
      } catch {
        itemBody = await itemRes.text();
      }

      if (!itemRes.ok) {
        console.error("Item creation failed:", itemRes.status, itemBody);
        throw new Error(`Item creation failed: ${itemRes.status} - see console`);
      }

      console.log("item creation result:", itemRes.status, itemBody);

      alert("Item uploaded successfully! Awaiting admin approval.");
      navigate("/dashboard");
    } catch (err) {
      console.error("Upload error:", err);
      setError(err.message || "Upload failed. Please try again.");
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

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            >
              <option value="">Select category</option>
              <option>Manuscript</option>
              <option>Artifact</option>
              <option>Music</option>
              <option>Oral Tradition</option>
              <option>Recipe</option>
              <option>Dance</option>
              <option>Ritual</option>
              <option>Historical Document</option>
              <option>Photograph</option>
              <option>Video</option>
            </select>

            <input
              type="file"
              accept="image/*,video/*,audio/*,.pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />

            <button
              type="submit"
              disabled={uploading}
              className="bg-blue-600 text-white px-6 py-3 rounded"
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </form>
        </div>
      </div>
    </HeritageLayout>
  );
};

export default Upload;