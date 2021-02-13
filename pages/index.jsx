import fs from "fs"
import path from "path"
import Layout from "../components/layout"
import getMatter from "gray-matter"
import Link from "next/link"
import { useEffect } from "react"

export default function Home({ postsList }) {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/"
          })
        }
      })
    }
  }, [])
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full h-screen font-bot">
        <p className=" text-3xl">Hello World!</p>
        {
          postsList.map(post => (
            <Link key={post.slug} href={"/posts/" + post.slug}><a className="text-xl">{post.title}</a></Link>
          ))
        }
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const filenames = fs.readdirSync("posts")
  const postsList = filenames.reduce((reducePostsList, f) => {
    const postString = fs.readFileSync(path.join("posts", f)).toString()
    const { data } = getMatter(postString)
    reducePostsList.push({ title: data.title, slug: f.replace(".md", "") })
    return reducePostsList
  }, [])

  return {
    props: {
      postsList,
    }
  }
}
