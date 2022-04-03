// let url = 'http://52.43.72.73:5000/men'

// async function getData() {
//   let res = await fetch(url)

//   var data = await res.json()

//   // showdata1(data)
//   Showdata(data)
// }
var alredycart=[];
let mensdata = [
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/ha1/h5d/17556108050462/AW21IST018_OLIVE_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h48/hed/17556167819294/AW21IST018_OLIVE_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/h07/hb6/17556104019998/AW21IST018_OLIVE.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/h6d/he3/17556154908702/AW21IST018_OLIVE_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h71/h5a/17556106870814/AW21IST018_OLIVE_alt4.jpg_1088Wx1632H',
    BrandName: 'Infuse',
    ProductName: 'Solid Cotton Jersey Regular Fit Mens T-Shirt',
    Price: 249,
    strikeoffPrice: 499,
    offer: 'Buy Any 1 Of Select Infuse And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Half Sleeves',
    Fit: 'Regular',
    Neckline: 'crew',
    Pattern: 'Solid',
    Fabric: '100%Cotton Jersey',
    PackOf: 'Pack of 1',
    Occasion: 'Casual',
    Collar: 'Regular',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/h09/ha2/27272590753822/S22KCURGPP51010_YELLOW_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h5a/h0d/27272274935838/S22KCURGPP51010_YELLOW_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/hec/h38/27272576729118/S22KCURGPP51010_YELLOW.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/h9b/h87/27272755937310/S22KCURGPP51010_YELLOW_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h5a/h0d/27272274935838/S22KCURGPP51010_YELLOW_alt2.jpg_1088Wx1632H',
    BrandName: 'Van Heusen Sport',
    ProductName: 'Solid Cotton Regular Fit Mens T-Shirt',
    Price: 349,
    strikeoffPrice: 699,
    offer: "Shop For 7999 And Get 1000 Off On Van Heusen Men's Wear",
    countryOrigin: 'India',
    Sleeves: 'Half Sleeves',
    Fit: 'Regular',
    Neckline: 'crew',
    Pattern: 'Printed',
    Fabric: 'Cotton',
    PackOf: 'Single',
    Occasion: 'Casual',
    Collar: 'Regular Collar',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/ha1/h72/17550891909150/A21VFSUPCRWBL_BLACK_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/hc3/h5c/17550856880158/A21VFSUPCRWBL_BLACK_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/h0f/hba/17550828666910/A21VFSUPCRWBL_BLACK.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/hfc/h63/17550888763422/A21VFSUPCRWBL_BLACK_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/hf9/ha0/17550844133406/A21VFSUPCRWBL_BLACK_alt4.jpg_1088Wx1632H',
    BrandName: 'Fratini',
    ProductName: 'Solid Cotton Stretch Regular Fit Mens T-Shirt',
    Price: 499,
    strikeoffPrice: 999,
    offer: 'Buy Any 1 Of Selected Products And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Half Sleeves',
    Fit: 'Regular',
    Neckline: 'crew',
    Pattern: 'Solid',
    Fabric: 'Cotton Stretch',
    PackOf: 'Pack of 1',
    Occasion: 'Casual',
    Collar: 'Regular',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/h19/had/27082026057758/S22THPOA1AMK286_WHITE_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h98/h93/27082055614494/S22THPOA1AMK286_WHITE_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/h1a/hd4/27081745793054/S22THPOA1AMK286_WHITE.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/hf1/h04/27081612656670/S22THPOA1AMK286_WHITE_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h68/hcd/27081999384606/S22THPOA1AMK286_WHITE_alt5.jpg_1088Wx1632H',
    BrandName: 'Tommy Hilfiger',
    ProductName: 'Solid Cotton Slim Fit Mens T-Shirt',
    Price: 399,
    strikeoffPrice: 799,
    offer: 'Buy Any 1 Of Select Tommy Hilfiger And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Half Sleeves',
    Fit: 'Slim',
    Neckline: 'Polo Collar',
    Pattern: 'Solid',
    Fabric: 'Cotton',
    PackOf: 'Single',
    Occasion: 'Casual',
    Collar: 'Regular',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/hd3/hc8/27148098797598/S22MARWANIPWHI_WHITE_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h36/h40/27145754607646/S22MARWANIPWHI_WHITE_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/h5f/hf6/27149159333918/S22MARWANIPWHI_WHITE.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/ha3/hdf/27149922107422/S22MARWANIPWHI_WHITE_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h98/hf2/27149094879262/S22MARWANIPWHI_WHITE_alt4.jpg_1088Wx1632H',
    BrandName: 'Pepe',
    ProductName: 'Solid Cotton Lycra Slim Mens T-Shirt',
    Price: 499,
    strikeoffPrice: 999,
    offer: "Shop For 7999 And Get 1000 Off On Pepe Men's Wear",
    countryOrigin: 'India',
    Sleeves: 'Half Sleeves',
    Fit: 'Slim',
    Neckline: 'Round',
    Pattern: 'Solid',
    Fabric: 'Cotton Lycra',
    PackOf: 'Single',
    Occasion: 'Casual',
    Collar: 'Regular',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/hc5/h6d/15483070119966/S20CSRNCAO2WWH_WHITE_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h19/h27/15482721304606/S20CSRNCAO2WWH_WHITE_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/hb6/hb2/15483573862430/S20CSRNCAO2WWH_WHITE.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/h5a/h7e/15483072872478/S20CSRNCAO2WWH_WHITE_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/ha4/ha4/15482939768862/S20CSRNCAO2WWH_WHITE_alt4.jpg_1088Wx1632H',
    BrandName: 'Campus Sutra',
    ProductName: 'Regular Fit Mens T-Shirt',
    Price: 599,
    strikeoffPrice: 1199,
    offer: 'Buy Any 1 Of Select Campus Sutra And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Full Sleeves',
    Fit: 'Regular',
    Neckline: 'Round',
    Pattern: 'Solid',
    Fabric: 'Cotton',
    PackOf: 'Single',
    Occasion: 'Casual',
    Collar: 'Regular',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/ha4/hbb/27298413740062/S22TSOVAL3_GREY_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/ha4/h50/27297878179870/S22TSOVAL3_GREY_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/hef/h5c/27298240921630/S22TSOVAL3_GREY.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/he6/hc8/27298337259550/S22TSOVAL3_GREY_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/hb1/h6e/27298263400478/S22TSOVAL3_GREY_alt4.jpg_1088Wx1632H',
    BrandName: 'Rare Rabbit',
    ProductName: 'Solid Cotton Slim Mens T-Shirt',
    Price: 499,
    strikeoffPrice: 999,
    offer: 'Buy Any 1 Of Select Rare Rabbit And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Half Sleeves',
    Fit: 'Slim',
    Neckline: 'Round',
    Pattern: 'Solid',
    Fabric: 'Cotton',
    PackOf: 'Pack of 1',
    Occasion: 'Casual',
    Collar: 'Regular',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/h89/h75/26943800311838/S22MKT01BB015BL_BLACK_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/he6/h0c/26944227475486/S22MKT01BB015BL_BLACK_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/ha1/he4/26943945080862/S22MKT01BB015BL_BLACK.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/ha2/he2/26944893124638/S22MKT01BB015BL_BLACK_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h5d/h2f/26944667353118/S22MKT01BB015BL_BLACK_alt4.jpg_1088Wx1632H',
    BrandName: 'Spykar',
    ProductName: 'Printed Blended Slim Fit Mens T-Shirt',
    Price: 299,
    strikeoffPrice: 599,
    offer: "Shop For 7999 And Get 1250 Off On Spykar Men's Wear",
    countryOrigin: 'India',
    Sleeves: 'Half Sleeves',
    Fit: 'Slim',
    Neckline: 'Round',
    Pattern: 'Printed',
    Fabric: 'Cotton',
    PackOf: 'Single',
    Occasion: 'Casual',
    Collar: 'Regular',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/h5a/hd6/27294688739358/S22ITMTS01198Y_YELLOW_alt2.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/hbf/h1a/27294830690334/S22ITMTS01198Y_YELLOW_alt3.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/h7b/ha4/27294959927326/S22ITMTS01198Y_YELLOW.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/hdb/h2c/27295211454494/S22ITMTS01198Y_YELLOW_alt4.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h5a/hd6/27294688739358/S22ITMTS01198Y_YELLOW_alt2.jpg_1088Wx1632H',
    BrandName: 'Indian Terrain',
    ProductName: 'Solid Cotton Regular Mens T-Shirt',
    Price: 399,
    strikeoffPrice: 799,
    offer: "Shop For 3999 And Get 499 Off On Indian Terrain Men's Wear",
    countryOrigin: 'India',
    Sleeves: 'Half Sleeves',
    Fit: 'Regular',
    Neckline: 'Polo Collar',
    Pattern: 'Solid',
    Fabric: 'Cotton',
    PackOf: 'Single',
    Occasion: 'Casual',
    Collar: 'Regular',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/hcd/h29/26962624315422/S22WMTS003376YE_YELLOW_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h47/hd8/26961566367774/S22WMTS003376YE_YELLOW_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/hf3/hdf/26963139690526/S22WMTS003376YE_YELLOW.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/h44/h70/26959861973022/S22WMTS003376YE_YELLOW_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/he7/hb7/26959702196254/S22WMTS003376YE_YELLOW_alt4.jpg_1088Wx1632H',
    BrandName: 'Wrangler',
    ProductName: 'Stripes Cotton Regular Fit Mens T-Shirt',
    Price: 399,
    strikeoffPrice: 799,
    offer: "Shop For 4499 And Get 750 Off On Lee Wrangler Men's Wear",
    countryOrigin: 'India',
    Sleeves: 'Half Sleeves',
    Fit: 'Regular',
    Neckline: 'Polo Collar',
    Pattern: 'Stripe',
    Fabric: 'Cotton',
    PackOf: 'Single',
    Occasion: 'Casual',
    Collar: 'Regular',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/hff/h6e/27230405230622/S2267015545BL_BLUE_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h1e/hff/27230587912222/S2267015545BL_BLUE_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/h21/hfe/27230231953438/S2267015545BL_BLUE.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/hcd/h8c/27230497112094/S2267015545BL_BLUE_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h8c/h0b/27230199513118/S2267015545BL_BLUE_alt4.jpg_1088Wx1632H',
    BrandName: 'Puma',
    ProductName: 'Cotton Regular Fit Mens T-Shirt',
    Price: 699,
    strikeoffPrice: 1399,
    offer: 'Buy Any 1 Of Select Puma And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Short Sleeves',
    Fit: 'Regular',
    Neckline: 'Polo',
    Pattern: 'Stripe',
    Fabric: 'Cotton',
    PackOf: 'Single',
    Occasion: 'Active Wear',
    Collar: 'Regular',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/h6c/h5d/27092281294878/S22JJ151981002_GREY_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h28/hc6/27093073133598/S22JJ151981002_GREY_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/h48/hae/27092002897950/S22JJ151981002_GREY.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/h63/h74/27091678396446/S22JJ151981002_GREY_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h28/hc6/27093073133598/S22JJ151981002_GREY_alt2.jpg_1088Wx1632H',
    BrandName: 'Jack And Jones',
    ProductName: 'Solid Cotton Slim Fit Mens T-Shirt',
    Price: 599,
    strikeoffPrice: 1199,
    offer: 'Buy Any 1 Of Select Jack And Jones And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Half Sleeves',
    Fit: 'Slim',
    Neckline: 'Round',
    Pattern: 'Solid',
    Fabric: 'Cotton',
    PackOf: 'Single',
    Occasion: 'Casual',
    Collar: 'Regular',
  },
]
var onclickdata;
var container = document.getElementById('GPContainer')
function getData(){
  onclickdata=JSON.parse(localStorage.getItem("onclickdatacart"))
  console.log(onclickdata)
}
getData()

Showdata(onclickdata)
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
    button6.addEventListener("click",function (){



      alredycart.push(JSON.parse(localStorage.getItem("cartarrharsh")));
if(alredycart==null || alredycart==undefined || alredycart==[]){

  localStorage.setItem("cartarrharsh",JSON.stringify(onclickdata
    ))
}
else if(alredycart!=null || alredycart!=undefined || alredycart!=[]){
  console.log(alredycart,alredycart.length)
  let alredycart2=alredycart;
  let alredycart3=JSON.parse(localStorage.getItem("onclickdatacart"))
  alredycart2.push(alredycart3)
localStorage.setItem("cartarrharsh",JSON.stringify(alredycart2

  ))
}
    })

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

showdata1(mensdata)
