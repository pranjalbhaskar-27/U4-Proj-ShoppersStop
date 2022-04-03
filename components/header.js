function header(){
    return ` 

    <div id="top_header" >
      <div id="store_contact"><a id="store_a"> <span><img id="home_logo" src="https://cdn-icons-png.flaticon.com/512/3443/3443338.png"></span> All Store</a>  
        <a id="contact_a"> <span><img id="home_logo" src="https://cdn-icons-png.flaticon.com/512/1250/1250646.png"></span> Contact Us</a></div>
        <div id="name_logo" onclick=window.location.href="/index.html" ><img  src="https://prodstatic.shoppersstop.com/_ui/updated_path/images/newLogo.svg"></div>
         <div id="right_head">
        <div id="input_bar"> 
        
        <input id="search_bar" type="text" placeholder="Search Products & Brands">
          <img id="search_btn" src="https://cdn-icons-png.flaticon.com/128/54/54481.png"></div>
        
        <div> <a href="./cart.html"><img id="page_logo"  src="https://cdn-icons-png.flaticon.com/128/535/535285.png" ></a> </div>
        <div> <a href="./cart.html"><img id="page_logo"  src="https://cdn-icons-png.flaticon.com/128/102/102665.png"></a> <p1 id="headercounthe"></p1></div>
        <div> <a href="./frontend/signup.html"><img id="page_logo"  src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"></a> </div>
      </div>
    </div>
    

    <div id="sub_header">
      <a href="./kartik/beauty.html">BEAUTY</a>
      <a href="./kartik/men.html">MENS</a>
      <a href="./kartik/women.html">WOMEN</a>
      <a href="./kartik/kids.html">KIDS</a>
      <a href="./kartik/beauty.html">BEAUTY</a>
      <a href="./kartik/homestop.html">HOMESTOP</a>
      <a href="./kartik/watch.html">WATCHES</a>
      <a href="./kartik/brands.html">BRANDS</a>
      <a href="./kartik/gift.html">GIFTS</a>
      <a href="./kartik/luxe.html">LUXE</a>

    </div>
    <style>
    #top_header{
      padding-left:30px;
      margin:auto;
      display: flex;
      justify-content: space-around !important; text-align: center !important;
    }

#headercounthe{
  text-decoration: none !important;
  color: #FF6B35  !important;
}
    </style>

    `
}

export default header;