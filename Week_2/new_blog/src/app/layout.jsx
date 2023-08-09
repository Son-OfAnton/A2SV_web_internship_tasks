import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <div>
            <Link href='/'> Home </Link>
            <Link href='/createPost'>Create Post</Link>
          </div>
        </div>
          <div>{children}</div>
      </body>
    </html>
  )
}
