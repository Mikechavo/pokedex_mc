import PageHeader from './layouts/PageHeader'
import Content from './components/Content'
import Footer from './layouts/Footer'
// import Sidebar from './layouts/Sidebar'
import './App.css'

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <PageHeader />
      <div className="flex flex-grow"> {/*flex flex-grow*/}
        {/* <Sidebar /> */}
        <div className="flex flex-col flex-grow overflow-y-auto">
          {/* <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills />
          </div> */}
          <div className="grid gap-4 grid-cols-[repeat(auto-fill, minmax(300px, 1fr))] p-4">
            <Content />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default App


