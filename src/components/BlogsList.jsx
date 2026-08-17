import axios from "axios";
import React, { useEffect, useState } from "react";

const BlogsList = () => {

  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  // const [blogsList, setBlogsList] = useState([])

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem("token")
      console.log("Token:", token)

      const response = await axios.get(
        "http://localhost:3000/blog/getAll", 
        {
          headers : { 
          "authorization": 'Bearer ${token}',
    }});

    console.log("getAll:",response.data);
    setBlogs(response.data);

    } catch (error) {
      console.log(Error);
    }
  };


  useEffect(() => {
    fetchBlogs();
  }, []);


  {/* Create blog */}
  const handleSubmit = async () => {

    try {

      const body = {
        title: title,
        description: description,
        category: category,
        likes: 20000,
        status: true,
        author: author,
        image: image
      };

      console.log("Body:", body);

      const response = await axios.post(
     "http://localhost:3000/user/login",
      formData
      );

      console.log(response.data);

      localStorage.setItem("token", response.data.token);

      {/* Refresh */}
      await fetchBlogs();


      {/* Clear form*/}
      setTitle("");
      setDescription("");
      setCategory("");
      setAuthor("");
      setImage("");

    } catch (error) {

      console.log(error.message);
    }
  };


  console.log(blogs, "blogs");


  return (

    <div className="p-6">

     
      {/* Blog Cards */}

      <h1 className="text-3xl font-bold text-center mb-8">
        All Blogs
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {blogs.map((item) => (

          <div
            key={item._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >

            {/* Image */}
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
            )}


            <div className="p-5">
              {/* Category */}
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-3">

                {item?.category?.title}

              </span>


              <h2 className="text-2xl font-bold mb-2">

                {item.title}

              </h2>


              <p className="text-gray-600 mb-4">

                {item.description}

              </p>


              <p className="text-sm text-gray-500 mb-3">

                By{" "}

                <span className="font-semibold">

                  {item.author}

                </span>

              </p>


              <div className="flex justify-between items-center">

                <span className="text-red-500">

                  ❤️ {item.likes} Likes

                </span>


                <span className="text-sm text-gray-400">

                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString()
                    : ""}

                </span>

              </div>

            </div>

          </div>

        ))}

      </div>


      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">

        <h2 className="text-2xl font-bold">
          Create Blog
        </h2>


        <div>

          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title
          </label>

          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            placeholder="Enter post title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
            required
          />

        </div>


        <div>

          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            placeholder="Enter blog description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none resize-none"
            required
          />

        </div>


        <div>

          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category
          </label>

          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
            required
          >

            <option value="">
              Select category
            </option>

            <option value="Sports">
              Sports
            </option>

            <option value="Technology">
              Technology
            </option>

            <option value="Politics">
              Politics
            </option>

            <option value="Entertainment">
              Entertainment
            </option>

            <option value="Business">
              Business
            </option>

          </select>

        </div>


          <div>

          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Author
          </label>

          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
            required
          />

        </div>


        <div>

          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Image URL
          </label>

          <input
            type="url"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
          />

        </div>


             <div className="flex items-center gap-3">

          <input
            type="checkbox"
            id="status"
            name="status"
            defaultChecked
            className="w-4 h-4"
          />

          <label
            htmlFor="status"
            className="text-sm font-medium text-gray-700"
          >
            Active
          </label>

        </div>


          <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200"
        >
          Create Post
        </button>

      </div>

    </div>

  );
};

export default BlogsList;