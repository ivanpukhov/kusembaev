import './App.scss';
import './AppMobile.scss';
import Slider from "./Components/Slider";
import Header from "./Components/header/Header";
import Boss from "./Components/boss/Boss";
import Why from "./Components/why/Why";
import Benefit from "./Components/benefit/Benefit";
import Specialists from "./Components/specialists/Spec";
import Photos from "./images/photos/Photos";
import Price from "./Components/price/Price";
import Services from "./Components/services/Services";
import Reviews from "./Components/reviews/Reviews";
import Events from "./Components/event/Events";
import DesignBy from "./Components/watermark/DesignBy";
import JSONLD from './JSON-LD';
import jsonLdData from './jsonLdData'

function App() {
    return (<div className="App">
        <Header/>
        <Boss/>
        <Why/>
        <Benefit/>
        <Specialists/>
        <Photos/>
        <Price/>
        <Slider/>
        <Services/>
        <Reviews/>
        <Events/>
        <DesignBy/>

    </div>);
}

export default App;
