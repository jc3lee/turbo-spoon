import fs from "fs"
import path from "path"
import Layout from "../components/layout"
import getMatter from "gray-matter"
import Link from "next/link"

export default function Home({ postsList }) {
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
    reducePostsList.push({ title: data.title, slug: f.replace(".mdx", "") })
    return reducePostsList
  }, [])

  return {
    props: {
      postsList,
    }
  }
}
