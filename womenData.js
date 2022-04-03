// let url = 'http://52.43.72.73:5000/women'

// async function getData() {
//   let res = await fetch(url)

//   var data = await res.json()

//   // showdata1(data)
//   Showdata(data)
// }

var onclickdata;
var container = document.getElementById('GPContainer')
function getData(){
  onclickdata=JSON.parse(localStorage.getItem("onclickdatacart"))
  console.log(onclickdata)
}
getData()

Showdata(onclickdata)
let womenData=[  
  {
  image1:"https://sslimages.shoppersstop.com/sys-master/images/hf6/he1/26864156737566/S22EP3153BLUE_BLUE_alt1.jpg_1088Wx1632H",
  image2:"https://sslimages.shoppersstop.com/sys-master/images/h7c/hf2/26863494397982/S22EP3153BLUE_BLUE_alt2.jpg_1088Wx1632H",
  image3:"https://sslimages.shoppersstop.com/sys-master/images/hd3/h9f/26864249143326/S22EP3153BLUE_BLUE.jpg_1088Wx1632H",
  image4:"https://sslimages.shoppersstop.com/sys-master/images/h1d/h10/26863764111390/S22EP3153BLUE_BLUE_alt3.jpg_1088Wx1632H",
  image5:"https://sslimages.shoppersstop.com/sys-master/images/he2/h01/26866565939230/S22EP3153BLUE_BLUE_alt4.jpg_1088Wx1632H",
  BrandName:"Rare",
  ProductName:"Floral Polyester V Neck Womens Flared Dress",
  Price:349,
  strikeoffPrice:699,
  offer:"Buy Any 1 Or More Of Rare And Get 50% Off",
  countryOrigin:"India",
  Sleeves:"Half Sleeves",
  Fit:"Regular",
  Neckline:"V Neck",
  Pattern:"Floral",
  Fabric:"Polyster",
  PackOf:"Single",
  Occasion:"Casual",
},
{
  image1:"https://sslimages.shoppersstop.com/sys-master/images/hb3/he5/27071879675934/S22346DR215_BLUE_alt1.jpg_1088Wx1632H",
  image2:"https://sslimages.shoppersstop.com/sys-master/images/hac/hb4/27071896780830/S22346DR215_BLUE_alt2.jpg_1088Wx1632H",
  image3:"https://sslimages.shoppersstop.com/sys-master/images/h7f/h9d/27070352195614/S22346DR215_BLUE.jpg_1088Wx1632H",
  image4:"https://sslimages.shoppersstop.com/sys-master/images/h73/h92/27071265243166/S22346DR215_BLUE_alt3.jpg_1088Wx1632H",
  image5:"https://sslimages.shoppersstop.com/sys-master/images/hb7/hf8/27072285311006/S22346DR215_BLUE_alt4.jpg_1088Wx1632H",
  BrandName:"Fratini",
  ProductName:"Printed Polyester Round Neck Womens A-Line Dress",
  Price:249,
  strikeoffPrice:499,
  offer:"Buy Any 1 Or More Of Fratini And Get 50% Off",
  countryOrigin:"India",
  Sleeves:"Full Sleeves",
  Fit:"Regular",
  Neckline:"Round",
  Pattern:"Printed",
  Fabric:"Polyster",
  PackOf:"Single",
  Occasion:"Casual",
},
{
  image1:"https://sslimages.shoppersstop.com/sys-master/images/hea/h35/26955181129758/A21VHFRGP755515_MID_BLUE_alt1.jpg_1088Wx1632H",
  image2:"https://sslimages.shoppersstop.com/sys-master/images/hd8/hb8/26954598776862/A21VHFRGP755515_MID_BLUE_alt2.jpg_1088Wx1632H",
  image3:"https://sslimages.shoppersstop.com/sys-master/images/h42/h1c/26954673160222/A21VHFRGP755515_MID_BLUE.jpg_1088Wx1632H",
  image4:"https://sslimages.shoppersstop.com/sys-master/images/hc5/h20/26955237752862/A21VHFRGP755515_MID_BLUE_alt3.jpg_1088Wx1632H",
  image5:"https://sslimages.shoppersstop.com/sys-master/images/h69/hfe/26954484088862/A21VHFRGP755515_MID_BLUE_alt4.jpg_1088Wx1632H",
  BrandName:"Van Heusen",
  ProductName:"Printed V-Neck Polyester Womens Fit And Flare Dress",
  Price:349,
  strikeoffPrice:699,
  offer:"Buy Any 1 Or More Of Van Heusen And Get 50% Off",
  countryOrigin:"India",
  Sleeves:"Full Sleeves",
  Fit:"Regular",
  Neckline:"V Neck",
  Pattern:"Printed",
  Fabric:"100% Polyster",
  PackOf:"Single",
  Occasion:"Formal",
},
{
  image1:"https://sslimages.shoppersstop.com/sys-master/images/h50/hba/26980422877214/S22COV4CI9021PI_PINK_alt1.jpg_1088Wx1632H",
  image2:"https://sslimages.shoppersstop.com/sys-master/images/ha0/h28/26982636617758/S22COV4CI9021PI_PINK_alt2.jpg_1088Wx1632H",
  image3:"https://sslimages.shoppersstop.com/sys-master/images/h79/h6d/26983027802142/S22COV4CI9021PI_PINK.jpg_1088Wx1632H",
  image4:"https://sslimages.shoppersstop.com/sys-master/images/hb1/h98/26983675723806/S22COV4CI9021PI_PINK_alt3.jpg_1088Wx1632H",
  image5:"https://sslimages.shoppersstop.com/sys-master/images/h0c/h91/26981051826206/S22COV4CI9021PI_PINK_alt4.jpg_1088Wx1632H",
  BrandName:"Cover Story",
  ProductName:"Solid V-Neck Polyeter Metalic Fiber Womens Regular Dress",
  Price:449,
  strikeoffPrice:899,
  offer:"Buy Any 1 Or More Of Cover Story And Get 50% Off",
  countryOrigin:"India",
  Sleeves:"Full Sleeves",
  Fit:"Regular",
  Neckline:"V Neck",
  Pattern:"Solid",
  Fabric:"Polyster Metalic Fibre",
  PackOf:"Single",
  Occasion:"Casual",
},
{
  image1:"https://sslimages.s3-ap-southeast-1.amazonaws.com/sys-master/images/hd5/ha6/26948187881502/S21FABDRS04050_PINK_alt1.jpg_1088Wx1632H",
  image2:"https://sslimages.shoppersstop.com/sys-master/images/h89/h43/26946087026718/S21FABDRS04050_PINK_alt2.jpg_1088Wx1632H",
  image3:"https://sslimages.shoppersstop.com/sys-master/images/hdb/h8d/26946048163870/S21FABDRS04050_PINK.jpg_1088Wx1632H",
  image4:"https://sslimages.shoppersstop.com/sys-master/images/ha1/hbc/26945543176222/S21FABDRS04050_PINK_alt3.jpg_1088Wx1632H",
  image5:"https://sslimages.shoppersstop.com/sys-master/images/h55/ha3/26945679360030/S21FABDRS04050_PINK_alt4.jpg_1088Wx1632H",
  BrandName:"Faballey",
  ProductName:"Solid Collar Neck Georgette Womens Regular Dress",
  Price:549,
  strikeoffPrice:1099,
  offer:"Buy Any 1 Or More Of Faballey And Get 50% Off",
  countryOrigin:"India",
  Sleeves:"Three Quarter Sleeves",
  Fit:"Regular",
  Neckline:"Coller Neck",
  Pattern:"Solid",
  Fabric:"Geogette",
  PackOf:"Single",
  Occasion:"Casual",
},
{
  image1:"https://sslimages.shoppersstop.com/sys-master/images/h7d/h78/27176785412126/S22ZINKD02081_BLACK_alt1.jpg_1088Wx1632H",
  image2:"https://sslimages.shoppersstop.com/sys-master/images/h35/hbe/27176876605470/S22ZINKD02081_BLACK_alt2.jpg_1088Wx1632H",
  image3:"https://sslimages.shoppersstop.com/sys-master/images/h1a/h70/27176853995550/S22ZINKD02081_BLACK.jpg_1088Wx1632H",
  image4:"https://sslimages.shoppersstop.com/sys-master/images/hf0/hde/27176875819038/S22ZINKD02081_BLACK_alt3.jpg_1088Wx1632H",
  image5:"https://sslimages.shoppersstop.com/sys-master/images/h76/hd4/27176842625054/S22ZINKD02081_BLACK_alt5.jpg_1088Wx1632H",
  BrandName:"Zink London",
  ProductName:"Textured Polyester Round Neck Womens Dress",
  Price:549,
  strikeoffPrice:1099,
  offer:"Buy Any 1 Or More Of Zink London And Get 50% Off",
  countryOrigin:"India",
  Sleeves:"Short Sleeves",
  Fit:"Regular",
  Neckline:"Round",
  Pattern:"Textured",
  Fabric:"Polyster",
  PackOf:"Single",
  Occasion:"Party",
},
{
  image1:"https://sslimages.shoppersstop.com/sys-master/images/ha4/h88/27060679311390/A21LQD9095_BLACK_alt1.jpg_1088Wx1632H",
  image2:"https://sslimages.shoppersstop.com/sys-master/images/h61/h9c/27060666138654/A21LQD9095_BLACK_alt2.jpg_1088Wx1632H",
  image3:"https://sslimages.shoppersstop.com/sys-master/images/hcf/h3e/27060816936990/A21LQD9095_BLACK.jpg_1088Wx1632H",
  image4:"https://sslimages.shoppersstop.com/sys-master/images/h6d/h79/27060915765278/A21LQD9095_BLACK_alt3.jpg_1088Wx1632H",
  image5:"https://sslimages.shoppersstop.com/sys-master/images/hb5/h9d/27060784431134/A21LQD9095_BLACK_alt5.jpg_1088Wx1632H",
  BrandName:"Latin Quarters",
  ProductName:"Solid Polyester Tie Up Neck Womens Regular Dress",
  Price:649,
  strikeoffPrice:1299,
  offer:"Buy Any 1 Or More Of Latin Quarters And Get 50% Off",
  countryOrigin:"India",
  Sleeves:"3/4th Sleeves",
  Fit:"Regular",
  Neckline:"Rie Up",
  Pattern:"Solid",
  Fabric:"Polyster",
  PackOf:"Single",
  Occasion:"Casual",
},
{
  image1:"https://sslimages.shoppersstop.com/sys-master/images/hea/h5f/26743134781470/A21SERALA2926BL_BLUE_alt1.jpg_1088Wx1632H",
  image2:"https://sslimages.shoppersstop.com/sys-master/images/h96/hcd/26744644108318/A21SERALA2926BL_BLUE_alt2.jpg_1088Wx1632H",
  image3:"https://sslimages.shoppersstop.com/sys-master/images/h15/h74/26743394664478/A21SERALA2926BL_BLUE.jpg_1088Wx1632H",
  image4:"https://sslimages.shoppersstop.com/sys-master/images/h5b/h78/26742666821662/A21SERALA2926BL_BLUE_alt3.jpg_1088Wx1632H",
  image5:"https://sslimages.shoppersstop.com/sys-master/images/h84/hb7/26744067129374/A21SERALA2926BL_BLUE_alt4.jpg_1088Wx1632H",
  BrandName:"Sera",
  ProductName:"Solid V Neck Polyester Womens Regular Dress",
  Price:749,
  strikeoffPrice:1499,
  offer:"Buy Any 1 Or More Of Sera And Get 50% Off",
  countryOrigin:"India",
  Sleeves:"Three Quarter Sleeves",
  Fit:"Regular",
  Neckline:"V Neck",
  Pattern:"Solid",
  Fabric:"Polyster",
  PackOf:"Single",
  Occasion:"Casual",
},
{
  image1:"https://sslimages.shoppersstop.com/sys-master/images/h56/hdf/26505565569054/A21SM5004BLACK_BLACK_alt1.jpg_1088Wx1632H",
  image2:"https://sslimages.shoppersstop.com/sys-master/images/hc8/h2d/26505026011166/A21SM5004BLACK_BLACK_alt2.jpg_1088Wx1632H",
  image3:"https://sslimages.shoppersstop.com/sys-master/images/h48/h14/26505607053342/A21SM5004BLACK_BLACK.jpg_1088Wx1632H",
  image4:"https://sslimages.shoppersstop.com/sys-master/images/h48/hc7/26505896755230/A21SM5004BLACK_BLACK_alt3.jpg_1088Wx1632H",
  image5:"https://sslimages.shoppersstop.com/sys-master/images/hc8/h2d/26505026011166/A21SM5004BLACK_BLACK_alt2.jpg_1088Wx1632H",
  BrandName:"Samshek",
  ProductName:"Solid Round Neck Crepe Womens Regular Dress",
  Price:849,
  strikeoffPrice:1699,
  offer:"Buy Any 1 Or More Of Samshek And Get 50% Off",
  countryOrigin:"India",
  Sleeves:"Half Sleeves",
  Fit:"Relaxed",
  Neckline:"Round",
  Pattern:"Solid",
  Fabric:"Crepe",
  PackOf:"Single",
  Occasion:"Casual",
},
{
  image1:"https://sslimages.shoppersstop.com/sys-master/images/h15/h71/13464083726366/206112177_9212_alt1.jpg_1088Wx1632H",
  image2:"https://sslimages.shoppersstop.com/sys-master/images/hb6/hfd/13468436758558/206112177_9212_alt2.jpg_1088Wx1632H",
  image3:"https://sslimages.shoppersstop.com/sys-master/images/hb8/h49/13466515570718/206112177_9212.jpg_1088Wx1632H",
  image4:"https://sslimages.shoppersstop.com/sys-master/images/hb1/h20/13466153975838/206112177_9212_alt3.jpg_1088Wx1632H",
  image5:"https://sslimages.shoppersstop.com/sys-master/images/hb6/hfd/13468436758558/206112177_9212_alt2.jpg_1088Wx1632H",
  BrandName:"Madame",
  ProductName:"Womens High Neck Solid Shift Dress",
  Price:749,
  strikeoffPrice:1499,
  offer:"Buy Any 1 Or More Of Madame And Get 50% Off",
  countryOrigin:"India",
  Sleeves:"Sleevesless",
  Fit:"Relaxed",
  Neckline:"High Neck",
  Pattern:"Solid",
  Fabric:"Polyster",
  PackOf:"Single",
  Occasion:"Casual",
},
{
  image1:"https://sslimages.shoppersstop.com/sys-master/images/h2a/h37/15643248066590/A20MISSD122562_RED_alt1.jpg_1088Wx1632H",
  image2:"https://sslimages.shoppersstop.com/sys-master/images/h9b/hb6/15643134984222/A20MISSD122562_RED_alt2.jpg_1088Wx1632H",
  image3:"https://sslimages.shoppersstop.com/sys-master/images/h42/h32/15642536443934/A20MISSD122562_RED.jpg_1088Wx1632H",
  image4:"https://sslimages.shoppersstop.com/sys-master/images/hff/hb1/15643142914078/A20MISSD122562_RED_alt3.jpg_1088Wx1632H",
  image5:"https://sslimages.shoppersstop.com/sys-master/images/hdb/hed/15643041529886/A20MISSD122562_RED_alt4.jpg_1088Wx1632H",
  BrandName:"Miss Chase",
  ProductName:"Womens Regular Fit Solid Flared Dress",
  Price:949,
  strikeoffPrice:1899,
  offer:"Buy Any 1 Or More Of Miss Chase And Get 50% Off",
  countryOrigin:"India",
  Sleeves:"Regular Sleeves",
  Fit:"Regular",
  Neckline:"Boat Neck",
  Pattern:"Solid",
  Fabric:"Polyster",
  PackOf:"Single",
  Occasion:"Party",
},
{
  image1:"https://sslimages.shoppersstop.com/sys-master/images/h93/h87/14524454993950/206723615_9557_alt1.jpg_1088Wx1632H",
  image2:"https://sslimages.shoppersstop.com/sys-master/images/hbd/h25/14521345671198/206723615_9557_alt2.jpg_1088Wx1632H",
  image3:"https://sslimages.shoppersstop.com/sys-master/images/h93/hcc/14524193734686/206723615_9557.jpg_1088Wx1632H",
  image4:"https://sslimages.shoppersstop.com/sys-master/images/he4/h19/14524948938782/206723615_9557_alt3.jpg_1088Wx1632H",
  image5:"https://sslimages.shoppersstop.com/sys-master/images/hbd/h03/14523109113886/206723615_9557_alt4.jpg_1088Wx1632H",
  BrandName:"Gipsy",
  ProductName:"Womens Solid Shirt Dress",
  Price:1049,
  strikeoffPrice:2099,
  offer:"Buy Any 1 Or More Of Gipsy And Get 50% Off",
  countryOrigin:"India",
  Sleeves:"Roll-Up Sleeves",
  Fit:"Straight",
  Neckline:"Collared",
  Pattern:"Solid",
  Fabric:"Geogette",
  PackOf:"Single",
  Occasion:"Casual",
},
]
var container = document.getElementById('GPContainer')
function Showdata(el) {

    //----------------------------left div start-----------------------------//
    var Leftdiv = document.createElement('div')
    Leftdiv.setAttribute('id', 'Leftdiv')
    //-----------------first-leftdiv---------------------//
    var FirstLeftdiv = document.createElement('div')
    FirstLeftdiv.setAttribute('id', 'First-leftDiv')
    var img1 = document.createElement('img')
    img1.src = el.image1
    var img2 = document.createElement('img')
    img2.src = el.image2
    FirstLeftdiv.append(img1, img2)
    //-----------------Second-leftdiv----------------------//
    var SecondLeftdiv = document.createElement('div')
    SecondLeftdiv.setAttribute('id', 'Second-leftDiv')
    var img3 = document.createElement('img')
    img3.src = el.image3
    SecondLeftdiv.append(img3)
    //----------------------Third-LeftDiv------------------//
    var ThirdLeftdiv = document.createElement('div')
    ThirdLeftdiv.setAttribute('id', 'Third-leftDiv')
    var img4 = document.createElement('img')
    img4.src = el.image4

    var img5 = document.createElement('img')
    img5.src = el.image5
    ThirdLeftdiv.append(img4, img5)

    Leftdiv.append(FirstLeftdiv, SecondLeftdiv, ThirdLeftdiv)
    //----------------------left div end-----------------------------//
    //---------------------Right div Start---------------------------//
    var Rightdiv = document.createElement('div')
    Rightdiv.setAttribute('id', 'Rightdiv')
    //-----------------First  right  Div start---------------------//
    var FirstRightdiv = document.createElement('div')
    FirstRightdiv.setAttribute('id', 'first-RightDiv')
    //-----------------First first right  Div start---------------------//
    var firstFirstRightDiv = document.createElement('div')
    firstFirstRightDiv.setAttribute('id', 'first-First-RightDiv')

    var p1 = document.createElement('p')
    p1.innerText = el.BrandName

    firstFirstRightDiv.append(p1)
    //-----------------First second right  Div start---------------------//
    var firstSecondRightDiv = document.createElement('div')
    firstSecondRightDiv.setAttribute('id', 'first-Second-RightDiv')

    var p2 = document.createElement('p')
    p2.innerText = el.ProductName

    firstSecondRightDiv.append(p2)
    //-----------------First Third right  Div start---------------------//
    var firstThirdRightDiv = document.createElement('div')
    firstThirdRightDiv.setAttribute('id', 'first-Third-RightDiv')

    var firstThirdRightDiv1 = document.createElement('div')
    var h2_1 = document.createElement('h2')
    h2_1.innerText = `₹${el.Price}`
    var p3 = document.createElement('p')
    p3.innerText = `₹${el.strikeoffPrice}`
    var h3_1 = document.createElement('h3')
    h3_1.innerText = '50% OFF'

    firstThirdRightDiv1.append(h2_1, p3, h3_1)

    var p4 = document.createElement('p')
    p4.innerText = 'Includes all Taxes'

    firstThirdRightDiv.append(firstThirdRightDiv1, p4)

    //-----------------First Fourth right  Div start---------------------//
    var firstFourthRightDiv = document.createElement('div')
    firstFourthRightDiv.setAttribute('id', 'first-Fourth-RightDiv')

    var h3_2 = document.createElement('h3')
    h3_2.innerText = 'Natural'
    var img6 = document.createElement('img')
    img6.src = el.image1

    firstFourthRightDiv.append(h3_2, img6)

    //-----------------First Five right  Div start---------------------//
    var firstFifthRightDiv = document.createElement('div')
    firstFifthRightDiv.setAttribute('id', 'first-Fifth-RightDiv')

    var p5 = document.createElement('p')
    p5.innerText = 'Find your perfect match!'

    var h4_1 = document.createElement('h4')
    h4_1.innerText = 'Ask your Expert Advisor'
    firstFifthRightDiv.append(p5, h4_1)

    //-----------------First six right  Div start---------------------//
    var firstSixthRightDiv = document.createElement('div')
    firstSixthRightDiv.setAttribute('id', 'first-Sixth-RightDiv')

    firstSixthRightDiv1 = document.createElement('div')
    var h4_2 = document.createElement('h4')
    h4_2.innerText = 'Size'
    var h5_1 = document.createElement('h4')
    h5_1.innerText = 'Size'
    firstSixthRightDiv1.append(h4_2, h5_1)

    firstSixthRightDiv2 = document.createElement('div')
    var button1 = document.createElement('button')
    button1.innerHTML = 'LARGE'
    var button2 = document.createElement('button')
    button2.innerHTML = 'MEDIUM'
    var button3 = document.createElement('button')
    button3.innerHTML = 'SMALL'
    var button4 = document.createElement('button')
    button4.innerHTML = 'X-LARGE'
    var button5 = document.createElement('button')
    button5.innerHTML = 'XX-LARGE'
    firstSixthRightDiv2.append(button1, button2, button3, button4, button5)

    var span1 = document.createElement('span')
    span1.innerHTML =
      '14 days easy return and exchange applicable for this item'

    firstSixthRightDiv.append(firstSixthRightDiv1, firstSixthRightDiv2, span1)

    //-----------------First seven right  Div start---------------------//
    var firstSeventhRightDiv = document.createElement('div')
    firstSeventhRightDiv.setAttribute('id', 'first-Seventh-RightDiv')
    //    var img7= document.createElement('img')
    //    img7.src="https://cdn-icons.flaticon.com/png/512/1358/premium/1358023.png?token=exp=1645699779~hmac=9d6e160a373fdb2612e852190b69418d"
    var img8 = document.createElement('img')
    img8.src = 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png'
    var button6 = document.createElement('button')
    button6.innerHTML = 'ADD TO CART'

    firstSeventhRightDiv.append(img8, button6)

    //-----------------First eight right  Div start---------------------//

    var firstEightRightDiv = document.createElement('div')
    firstEightRightDiv.setAttribute('id', 'first-Eight-RightDiv')

    var firstEightRightDiv1 = document.createElement('div')
    var img9 = document.createElement('img')
    img9.src = 'https://cdn-icons-png.flaticon.com/128/726/726476.png'
    var p6 = document.createElement('p')
    p6.innerText = 'Offers'
    firstEightRightDiv1.append(img9, p6)

    var firstEightRightDiv2 = document.createElement('div')
    var p7 = document.createElement('p')
    p7.setAttribute('class', 'Eight-firstP')
    p7.innerText = 'FLAT 50% OFF'
    var p8 = document.createElement('p')
    p8.setAttribute('class', 'Eight-SecondP')
    p8.innerText = el.offer
    firstEightRightDiv2.append(p7, p8)

    firstEightRightDiv.append(firstEightRightDiv1, firstEightRightDiv2)

    //-----------------------------------FirstRightdiv end--------------------------------------//
    //-----------------------------------SecondRightdiv start---------------------------------//

    var SecondRightdiv = document.createElement('div')
    SecondRightdiv.setAttribute('class', 'a')
    //--------------------------------------------------------------------------//
    var SecondRightdiv1 = document.createElement('div')
    SecondRightdiv1.setAttribute('class', 'a_question')
    var p9 = document.createElement('p')
    p9.innerText = 'Product Details'

    var downarrow = document.createElement('div')
    downarrow.innerHTML =
      '<i style="margin-top: 20px;"class="fa fa-chevron-down"aria-hidden="true"></i>'

    SecondRightdiv1.append(p9, downarrow)
    //----------------------------------------------------------------------//
    var SecondRightdiv2 = document.createElement('div')
    SecondRightdiv2.setAttribute('class', 'a_answer')

    var h4_3 = document.createElement('h4')
    h4_3.innerText = 'Product Description'

    var innerdiv = document.createElement('div')
    innerdiv.setAttribute('id', 'innerdiv')

    var innerdiv1 = document.createElement('div')
    var p10 = document.createElement('p')
    p10.innerText = 'Country of Origin'
    var p11 = document.createElement('p')
    p11.innerText = 'Sleeves'
    var p12 = document.createElement('p')
    p12.innerText = 'Fit'
    var p13 = document.createElement('p')
    p13.innerText = 'Neckline'
    var p14 = document.createElement('p')
    p14.innerText = 'Pattern'
    var p15 = document.createElement('p')
    p15.innerText = 'Fabric'
    var p16 = document.createElement('p')
    p16.innerText = 'Pack Of'
    var p17 = document.createElement('p')
    p17.innerText = 'Occasion'
    var p18 = document.createElement('p')
    p18.innerText = 'Collar'
    innerdiv1.append(p10, p11, p12, p13, p14, p15, p16, p17, p18)

    var innerdiv2 = document.createElement('div')
    var p19 = document.createElement('p')
    p19.innerText = el.countryOrigin
    var p20 = document.createElement('p')
    p20.innerText = el.Sleeves
    var p21 = document.createElement('p')
    p21.innerText = el.Fit
    var p22 = document.createElement('p')
    p22.innerText = el.Neckline
    var p23 = document.createElement('p')
    p23.innerText = el.Pattern
    var p24 = document.createElement('p')
    p24.innerText = el.Fabric
    var p25 = document.createElement('p')
    p25.innerText = el.PackOf
    var p26 = document.createElement('p')
    p26.innerText = el.Occasion
    var p27 = document.createElement('p')
    p27.innerText = el.Collar
    innerdiv2.append(p19, p20, p21, p22, p23, p24, p25, p26, p27)

    innerdiv.append(innerdiv1, innerdiv2)
    SecondRightdiv2.append(h4_3, innerdiv)

    SecondRightdiv.append(SecondRightdiv1, SecondRightdiv2)

    //-----------------------------------ThirdRightdiv start---------------------------------//

    var ThirdRightdiv = document.createElement('div')
    ThirdRightdiv.setAttribute('class', 'a')
    //--------------------------------------------------------------------------//
    var ThirdRightdiv1 = document.createElement('div')
    ThirdRightdiv1.setAttribute('class', 'a_question')
    var p28 = document.createElement('p')
    p28.innerText = 'Style Note'

    var downarrow1 = document.createElement('div')
    downarrow1.innerHTML =
      '<i style="margin-top: 20px;"class="fa fa-chevron-down"aria-hidden="true"></i>'

    ThirdRightdiv1.append(p28, downarrow1)
    //----------------------------------------------------------------------//
    ThirdRightdiv.append(ThirdRightdiv1)

    //-----------------------------------FourthRightdiv start---------------------------------//

    var FourthRightdiv = document.createElement('div')
    FourthRightdiv.setAttribute('class', 'a')
    //--------------------------------------------------------------------------//
    var FourthRightdiv1 = document.createElement('div')
    FourthRightdiv1.setAttribute('class', 'a_question')
    var p28 = document.createElement('p')
    p28.innerText = 'About Brand'

    var downarrow1 = document.createElement('div')
    downarrow1.innerHTML =
      '<i style="margin-top: 20px;"class="fa fa-chevron-down"aria-hidden="true"></i>'

    FourthRightdiv1.append(p28, downarrow1)
    //----------------------------------------------------------------------//
    FourthRightdiv.append(FourthRightdiv1)

    //-----------------------------------FifthRightdiv start---------------------------------//

    var FifthRightdiv = document.createElement('div')
    FifthRightdiv.setAttribute('class', 'a')
    //--------------------------------------------------------------------------//
    var FifthRightdiv1 = document.createElement('div')
    FifthRightdiv1.setAttribute('class', 'a_question')
    var p28 = document.createElement('p')
    p28.innerText = 'Delivery Service'

    var downarrow1 = document.createElement('div')
    downarrow1.innerHTML =
      '<i style="margin-top: 20px;"class="fa fa-chevron-down"aria-hidden="true"></i>'

    FifthRightdiv1.append(p28, downarrow1)
    //----------------------------------------------------------------------//
    FifthRightdiv.append(FifthRightdiv1)

    //-----------------------------------sixthRightdiv start---------------------------------//

    var SixRightdiv = document.createElement('div')
    SixRightdiv.setAttribute('class', 'a')
    //--------------------------------------------------------------------------//
    var SixRightdiv1 = document.createElement('div')
    SixRightdiv1.setAttribute('class', 'a_question')
    var p28 = document.createElement('p')
    p28.innerText = 'Rating & Review'

    var downarrow1 = document.createElement('div')
    downarrow1.innerHTML =
      '<i style="margin-top: 20px;"class="fa fa-chevron-down"aria-hidden="true"></i>'

    SixRightdiv1.append(p28, downarrow1)
    //----------------------------------------------------------------------//
    SixRightdiv.append(SixRightdiv1)

    //-----------------------------------seventhRightdiv start---------------------------------//

    var SeventhRightdiv = document.createElement('div')
    SeventhRightdiv.setAttribute('class', 'a')
    //--------------------------------------------------------------------------//
    var SeventhRightdiv1 = document.createElement('div')
    SeventhRightdiv1.setAttribute('class', 'a_question')
    var p28 = document.createElement('p')
    p28.innerText = 'More Jackets From Tommy Hilfiger'

    var downarrow1 = document.createElement('div')
    downarrow1.innerHTML =
      '<i style="margin-top: 20px;"class="fa fa-chevron-down"aria-hidden="true"></i>'

    SeventhRightdiv1.append(p28, downarrow1)
    //----------------------------------------------------------------------//
    SeventhRightdiv.append(SeventhRightdiv1)

    //-----------------------------------eightRightdiv start---------------------------------//

    var eightRightdiv = document.createElement('div')
    eightRightdiv.setAttribute('class', 'a')
    //--------------------------------------------------------------------------//
    var eightRightdiv1 = document.createElement('div')
    eightRightdiv1.setAttribute('class', 'a_question')
    var p28 = document.createElement('p')
    p28.innerText = 'More products From Tommy Hilfiger'

    var downarrow1 = document.createElement('div')
    downarrow1.innerHTML =
      '<i style="margin-top: 20px;"class="fa fa-chevron-down"aria-hidden="true"></i>'

    eightRightdiv1.append(p28, downarrow1)
    //----------------------------------------------------------------------//
    eightRightdiv.append(eightRightdiv1)

    //-----------------------------------ninthRightdiv start---------------------------------//

    var ninthRightdiv = document.createElement('div')
    ninthRightdiv.setAttribute('class', 'a')
    //--------------------------------------------------------------------------//
    var ninthRightdiv1 = document.createElement('div')
    ninthRightdiv1.setAttribute('class', 'a_question')
    var p28 = document.createElement('p')
    p28.innerText = 'More Jackets'

    var downarrow1 = document.createElement('div')
    downarrow1.innerHTML =
      '<i style="margin-top: 20px;"class="fa fa-chevron-down"aria-hidden="true"></i>'

    ninthRightdiv1.append(p28, downarrow1)
    //----------------------------------------------------------------------//
    ninthRightdiv.append(ninthRightdiv1)

    FirstRightdiv.append(
      firstFirstRightDiv,
      firstSecondRightDiv,
      firstThirdRightDiv,
      firstFourthRightDiv,
      firstFifthRightDiv,
      firstSixthRightDiv,
      firstSeventhRightDiv,
      firstEightRightDiv,
    )
    Rightdiv.append(
      FirstRightdiv,
      SecondRightdiv,
      ThirdRightdiv,
      FourthRightdiv,
      FifthRightdiv,
      SixRightdiv,
      SeventhRightdiv,
      eightRightdiv,
      ninthRightdiv,
    )
    container.append(Leftdiv, Rightdiv)

}
// Showdata(mensdata)

//----------------------------------dropdown menu-------------------------------------------------------------------------------//
let answers = document.querySelectorAll('.a')
answers.forEach((event) => {
  event.addEventListener('click', () => {
    if (event.classList.contains('active')) {
      event.classList.remove('active')
    } else {
      event.classList.add('active')
    }
  })
})

//   import { showdata } from './scripts/main.js'
//   var parent1 = document.querySelector('#FirstSlider')
//   var res1 = showdata(PeopleAlsoView, parent1)

//   var parent2 = document.querySelector('#SecondSlider')
//   var res2 = showdata(CompleteTheLook, parent2)

//-------------------------------------------------slider js-----------------------------------------------------//

var cartdata=[]
var parent1 = document.querySelector('#FirstSlider')
function showdata1(data) {
  data.forEach((element) => {

    var div = document.createElement('div')
    div.setAttribute('class', 'carousel-cell1')
    div.setAttribute('class', 'Card-div')

    var img = document.createElement('img')
    img.src = element.image1

    var h3 = document.createElement('h3')
    h3.innerText = element.BrandName

    var descriptiondiv = document.createElement('div')
    descriptiondiv.setAttribute('class', 'descriptionDiv')
    var description = document.createElement('p')
    description.innerText = element.ProductName
    descriptiondiv.append(description)

    var prize = document.createElement('h3')
    prize.innerText = element.Price

    var buttondiv = document.createElement('div')
    buttondiv.setAttribute('class', 'dataButtondiv')
    var button = document.createElement('button')
    button.innerText = 'Add To Bag'
    buttondiv.append(button)
    button.addEventListener('click', function (){
      cartdata.push(element)
      localStorage.setItem("cartarrfinal",JSON.stringify(cartdata))
    })

    div.append(img, h3, descriptiondiv, prize, buttondiv)
    parent1.append(div)
  })
  

}

showdata1(womenData)
