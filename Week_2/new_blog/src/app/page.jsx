import ArticleList from "../../components/ArticleList"
import RootLayout from "./layout"


export default function Home() {
  return (
    <RootLayout>
      <main>
        <div>
          <ArticleList />
        </div>
      </main>
    </RootLayout>
  )
}
