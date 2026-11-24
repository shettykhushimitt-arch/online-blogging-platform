import axios from "axios"
import {useNavigate} from "react-router-dom"

const CreatePost = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    axios.post("http://localhost:3000/create-post", formData)
    .then((res)=>{
        // console.log(res);
        navigate("/about")
        
    })
    .catch((err)=>{
      console.log(err);
      alert("Error while creating post")
    })
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6">
      <section className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Share a moment
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Create a post
          </h1>
          <p className="mt-2 text-slate-600">
            Add an image and a caption to share with everyone.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Upload your image
            </label>
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              className="block w-full cursor-pointer rounded-lg border border-slate-300 bg-white text-sm text-slate-600 file:mr-4 file:border-0 file:bg-slate-100 file:px-4 file:py-3 file:font-medium file:text-slate-700 hover:file:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="caption"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Caption
            </label>
            <input
              id="caption"
              type="text"
              name="caption"
              required
              placeholder="Enter caption"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create post
          </button>
        </form>
      </section>
    </main>
  );
};

export default CreatePost;
