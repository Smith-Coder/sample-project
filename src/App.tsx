import './App.css'
import Menu from './Component/Menus/Menu'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Content from './Component/Content/Content'
import FavColor from './Component/Color/FavColor'
import Message from './Component/Message/Message'
import Alert from './Component/Alert/Alert'
import Button from './Component/Button/button'
function App() {
  const text = "hello world, good world"
  let items = ["Redbull racing", "Ferrari", "mclaren", "AMG Petronas", "Alphine Racing", "Aston Martin"]
  let heading = "F1 Racing"
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-12">
          <Header></Header>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <Menu heading={heading} items={items}></Menu>
        </div>
        <div className="col-lg-8">
          <Content></Content>
          <FavColor></FavColor>
          <Message text={text}></Message>
          {/* <Alert message='This is an alert message'></Alert> */}
          <Alert>
            <h1>Hello world</h1>
          </Alert>
          <Button></Button>
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
