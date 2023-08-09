'use client'
import { useState, useEffect } from "react"
import { useRouter } from "next/router"


const SingleArticle = ({params}) => {
  const [article, setArticle] = useState()
  const router = useRouter()
  const articleId = params.id

  const getSingleArticle = async () => {
    const fetchedArticle = fetch(`http://localhost:3001/articles?id=${articleId}`)
    setArticle(fetchedArticle)
  }

  useEffect(() => {
    getSingleArticle()
  }, [])

  if(article) {
    return (
      <div key={article.id}>
  
      </div>
    )
  } else {
    return <p>Article Not Found</p>
  }
}

export default SingleArticle