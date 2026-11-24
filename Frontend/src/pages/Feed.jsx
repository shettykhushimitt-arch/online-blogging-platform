import { useEffect, useState } from 'react'
import axios from "axios"
const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
       axios.get("http://localhost:3000/posts")
       .then((res)=>{
        setPosts(res.data.posts)
      })
    },[])
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6">
      <section className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Community
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Recent posts
          </h1>
        </header>
        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post._id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="h-64 w-full object-cover"
                />
                <p className="px-5 py-4 font-medium text-slate-800">
                  {post.caption}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <p className="text-lg font-semibold text-slate-800">
              No posts available
            </p>
            <p className="mt-2 text-slate-500">
              Check back later to see what people are sharing.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}

export default Feed
