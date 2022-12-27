import Footer from "../components/Footer"
import Nav from "../components/Nav"
import "../styles/globals.css"


export default function RootLayout({ children}: { children: React.ReactNode}) {

  return (
    <html className="">
      <head>
          <title>ClickDate | Find Your Dream Partner Online</title>
      </head>


      <body className="scroll-smooth">
        <Nav/>
        {children}
        <Footer/>
      </body>


    </html>
  )
}
