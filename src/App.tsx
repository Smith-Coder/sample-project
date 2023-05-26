import './App.css'
import Menu from './Component/Menus/Menu'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Content from './Component/Content/Content'
import FavColor from './Component/Color/FavColor'


function App() {

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-12">
          <Header></Header>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <Menu></Menu>
        </div>
        <div className="col-lg-8">
          <Content></Content>
          <FavColor></FavColor>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
export default App
