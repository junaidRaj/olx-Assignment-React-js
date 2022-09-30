import React, { useState} from "react";
import Data from "./Data";
import PageviewIcon from '@mui/icons-material/Pageview';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo1 from "./Img/logo1.png";
import logo2 from "./Img/logo2.png"
import img1 from "./Img/img1.jpg"
import img20 from "./Img/img20.jpg"
import img2 from "./Img/img2.jpg"
import img3 from "./Img/img3.jpg"
import img4 from "./Img/img4.jpg"
import img5 from "./Img/img5.jpg"
import img6 from "./Img/img6.jpg"
import img7 from "./Img/img7.jpg"
import img8 from "./Img/img8.jpg"
import img9 from "./Img/img9.jpg"
import img10 from "./Img/img10.jpg"
import img11 from "./Img/img11.jpg"
import img12 from "./Img/img12.jpg"
import img14 from "./Img/img13.jpg"
import img15 from "./Img/img15.jpg"
import img16 from "./Img/img16.jpg"
import img61 from "./Img/img61.png"
import img71 from "./Img/img71.png"
import img21 from "./Img/img21.png"


const Search = () => {
   let  [filter, setFilter] = useState('');
   const searchText = (event) => {
      setFilter(event.target.value);
      
   }
   let dataSearch = Data.cardData.filter(item =>{
      return Object.keys(item).some(keys =>
         item[keys].toString().toLowerCase().includes(filter.toString().toLocaleLowerCase())
         )
   })
   return (
      <>
        <div className="Main sticky-top bg-white">
      <div className="ps-4 mt-2">
       <img height={40} width={50} src={logo1}/>
       <label className="iconDone px-4"><DirectionsCarIcon/> Motors </label>
       <label className="iconDone"><ApartmentIcon/> Properties </label>
      </div>
      <div className="">
         <img height={60} width={70} src={logo2} />
                  <select className="py-2 w-25 mx-3">
                     <option value="Pakistan">Pakistan</option>
                     <option value="America">America</option>
                     <option value="Euorup">Euorup</option>
                     <option value="India">India</option>
                  </select>
                   <input type="text"
                   placeholder="Find Car, MobilsPhone and more..."
                   className="from-control py-2 w-50" 
                   value={filter}
                   onChange={searchText.bind(this)}/>
                   <PageviewIcon onClick="dataSearch()" className="Icoon" />
                   </div>
          </div>
         <section className="py-4 container">
         <div className="row justify-content-center">
     {dataSearch.map((item, index) => {
               return (
                  <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 mt-4">
                     <div className="card p-0 overflow-hidden h-100 shadow">
                        <img src={item.img} className="card-img-top img-fluid" />
                        <h5 className="card_title text-center">{item.title}</h5>
                        <p className="card_text text-center">{item.desc}</p>
                     </div>
                  </div>
               )
            })}
         </div>
      </section>
      <div class="container text-center">
  <div class="row">
    <div class="col-lg-6">
   <img src={img5} />
    </div>
    <div class="col-lg-6">
      <div>
      <h5>GET YOUR APP TODAY</h5>
      </div>
      <div>
         <img  src={img6} />
         <img  src={img7} />
         <img width={130} src={img20} />
      </div>
    </div>
  </div>
</div>
<div className="Back">
<div class="container text-center">
  <div class="row">
    <div class="col-lg-2">
      <div>
         <h6 className="look">POPULAR CATEGORIES</h6>
         <li>Cars</li>
         <li>Flats for rent</li>
         <li>Mobile Phones</li>
         <li>Jobs</li>
      </div>
    </div>
    <div class="col-lg-2">
    <div>
         <h6 className="look">TRENDING SEARCHES</h6>
        <li>Bikes</li>
        <li>Watches</li>
        <li>Books</li>
        <li>Dog</li>
      </div>
    </div>
    <div class="col-lg-2">
      <h6 className="look">About Us</h6>
      <li>About EMPG</li>
      <li>OLX Blog</li>
      <li>Contact Us</li>
      <li>OLX for bussinies</li>
    </div>
    <div class="col-lg-2">
      <h6 className="look">OLX</h6>
      <li>Help</li>
      <li>SiteMap</li>
      <li>Terms of use Policy</li>
      <li>Privacy Policy</li>
    </div>
    <div class="col-lg-4">
      <h6 className="look">Follow Us</h6>
      <div>
        <FacebookIcon/>
        <TwitterIcon/>
        <PlayArrowIcon/>
        <InstagramIcon/>
      </div>
      <div>
         <img width={90} src={img61} />
         <img width={90} src={img71} />
         <img width={90} src={img21} />
      </div>
    </div>
  </div>
</div>
</div>
     </>
   );
}

export default Search;
