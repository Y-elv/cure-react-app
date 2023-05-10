import '../css/Home.css'
import img from '../assets/logos/logo.PNG';

const  Home=()=>{
    return (
<>

<div className="container">
<img src={img} alt="logo"/>
<div className="text">
    <h1>CURE</h1>
    <p>CHAT APP & THERAPY</p>
</div>
<div className="btn">
    <button>continue</button>
</div>
</div>

</>
    )
}
export default Home