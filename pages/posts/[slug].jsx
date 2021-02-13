import Head from "next/head"
import fs from "fs"
import path from "path"
import getMatter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import MdxBtn from "../../components/mdxBtn"

const components = { MdxBtn }

const Post = ({ data, mdxContent }) => {
  const content = hydrate(mdxContent, {
    components,
  })
  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="">{content}</div>
    </div>
  )
}

export default Post

export async function getStaticPaths() {
  const filenames = fs.readdirSync("posts")
  const paths = filenames.map(f => ({
    params: {
      slug: f.replace(".md", "")
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const postString = fs.readFileSync(path.join("posts", slug + ".md")).toString()
  const { data, content } = getMatter(postString)
  const mdxContent = await renderToString(content, {
    components,
  })

  return {
    props: {
      data,
      mdxContent,
    }
  }
}