import './App.css';
import Navbar from "./Components/Navbar"
import Navbar2 from "./Components/Navbar2"
import Banner from "./Components/Banner"
import AutoGrid from "./Components/Products"
import Advertisement from "./Components/Advertisement"
import MediaCard from "./Components/Card"
import TopProduct from "./Components/Toppproducts"
import CenteredGrid from "./Components/FeaturedBrands"
import Footer from "./Components/Footer"


function App() {
  return (
  <>
    <div className="App">
        <Navbar />
        <Navbar2 />
        <Banner />
        <br/><br/>
        <AutoGrid 
        title="Weekly Deals"
        src="https://secureservercdn.net/160.153.138.177/snj.4aa.myftpupload.com/wp-content/uploads/2020/12/weekly.jpg?time=1618664696" />
        <br/>
        <AutoGrid
        title="Smart Gadgets"
         src="https://secureservercdn.net/160.153.138.177/snj.4aa.myftpupload.com/wp-content/uploads/2021/02/wearable.jpg?time=1618664696"/>
        <Advertisement />
        <AutoGrid 
        title="Audio Devices"
        src="https://secureservercdn.net/160.153.138.177/snj.4aa.myftpupload.com/wp-content/uploads/2021/02/Audio-Accessories.png?time=1618664696"
        />
        <h5 style={{paddingTop: 20}}>Featured Brands</h5>
        <hr style={{widht: 80, alignContent: 'center'}} />
        <CenteredGrid />
        <hr/>
        <Footer />
    </div>
  </>
  );
}

export default App;
