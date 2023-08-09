'use client'
import { useRouter } from "next/router"
import { useState, useEffect } from "react"


const ArticleList = () => {
  // const router = useRouter()

  const [articles, setArticlces] = useState()

  const fetchArticles = async () => {
    const fetchedArticles = await fetch('http://localhost:3001/articles')
    setArticlces(fetchedArticles)
  }

  useEffect(() => {
    fetchArticles();
  }, [])

  console.log(`>> ${articles}`)
  return (
    <div>
      <div>
        {
          articles.map(article => {
            return (
              <div key={article.id}>
                <h4>{article.title}</h4>
                <p>{article.body}</p>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default ArticleList