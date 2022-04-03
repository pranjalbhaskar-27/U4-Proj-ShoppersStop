var onclickdata;
var container = document.getElementById('GPContainer')
function getData(){
  onclickdata=JSON.parse(localStorage.getItem("onclickdatacart"))
  console.log(onclickdata)
}
getData()

Showdata(onclickdata)
var kidData=[
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/hc9/h37/15831150657566/A20VMYCRNPVCRCR_CREAM_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/hf8/h16/15831184965662/A20VMYCRNPVCRCR_CREAM_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/hff/h95/15831296049182/A20VMYCRNPVCRCR_CREAM.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/hc4/h6f/15831532208158/A20VMYCRNPVCRCR_CREAM_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/hbd/h81/15831380459550/A20VMYCRNPVCRCR_CREAM_alt4.jpg_1088Wx1632H',
    BrandName: 'Vastramay',
    ProductName: 'Boys Multicolor Base Cream Cotton Blend Kurta and Pyjama Set',
    Price: 949,
    strikeoffPrice: 1899,
    offer: 'Buy Any 1 Or More Of Vastramay And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Full Sleeves',
    Fit: 'Regular',
    Neckline: '\tCollared',
    Pattern: '\tEmbroidered',
    Fabric: '\tCotton Blend',
    PackOf: 'Pack of 1',
    Occasion: 'Party',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/ha9/h00/15832211554334/A20VMY6YWNPWHYE_YELLOW_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h5f/hd9/15831187980318/A20VMY6YWNPWHYE_YELLOW_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/h00/ha1/15831227432990/A20VMY6YWNPWHYE_YELLOW.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/h08/h6a/15830885105694/A20VMY6YWNPWHYE_YELLOW_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h00/h94/15831270785054/A20VMY6YWNPWHYE_YELLOW_alt4.jpg_1088Wx1632H',
    BrandName: 'Vastramay',
    ProductName: 'Boys Yellow Cotton Blend Kurta and Pyjama Set',
    Price: 849,
    strikeoffPrice: 1699,
    offer: 'Buy Any 1 Or More Of Vastramay And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Full Sleeves',
    Fit: 'Regular',
    Neckline: '\tCollared',
    Pattern: '\tEmbroidered',
    Fabric: '\tCotton Blend',
    PackOf: 'Pack of 1',
    Occasion: 'Party',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/h4a/hae/15021974650910/A20VMYRDNPWH057_RED_alt3.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/hd6/h03/15023142797342/A20VMYRDNPWH057_RED_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/hf0/hd1/15022144127006/A20VMYRDNPWH057_RED.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/h46/h29/15023480471582/A20VMYRDNPWH057_RED_alt4.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h6e/h83/15023251357726/A20VMYRDNPWH057_RED_alt1.jpg_1088Wx1632H',
    BrandName: 'Vastramay',
    ProductName: 'Boys Red and White Pure Cotton Kurta and Pyjama Set',
    Price: 749,
    strikeoffPrice: 1499,
    offer: 'Buy Any 1 Or More Of Vastramay And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Full Sleeves',
    Fit: 'Regular',
    Neckline: '\tCollared',
    Pattern: '\tEmbroidered',
    Fabric: '\tCotton Blend',
    PackOf: 'Pack of 1',
    Occasion: 'Festive',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/hc3/h13/15831130013726/A20VMY6BLNPWHBL_BLACK_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h35/h85/15832136450078/A20VMY6BLNPWHBL_BLACK_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/h97/h89/15831102554142/A20VMY6BLNPWHBL_BLACK.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/hf0/h46/15831558684702/A20VMY6BLNPWHBL_BLACK_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h56/h5b/15831728947230/A20VMY6BLNPWHBL_BLACK_alt4.jpg_1088Wx1632H',
    BrandName: 'Vastramay',
    ProductName: 'Boys Black Cotton Blend Kurta and Pyjama Set',
    Price: 649,
    strikeoffPrice: 1299,
    offer: 'Buy Any 1 Or More Of Vastramay And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Full Sleeves',
    Fit: 'Regular',
    Neckline: '\tCollared',
    Pattern: '\tEmbroidered',
    Fabric: '\tCotton Blend',
    PackOf: 'Pack of 1',
    Occasion: 'Party',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/hff/he4/15830886613022/A20VMY6CRNPWHCR_CREAM_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h90/h67/15830880583710/A20VMY6CRNPWHCR_CREAM_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/h8a/h2e/15831074013214/A20VMY6CRNPWHCR_CREAM.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/h16/hde/15831310794782/A20VMY6CRNPWHCR_CREAM_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/ha6/hab/15831917494302/A20VMY6CRNPWHCR_CREAM_alt4.jpg_1088Wx1632H',
    BrandName: 'Vastramay',
    ProductName: 'Boys Black Cotton Blend Kurta and Pyjama Set',
    Price: 649,
    strikeoffPrice: 1299,
    offer: 'Buy Any 1 Or More Of Vastramay And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Full Sleeves',
    Fit: 'Regular',
    Neckline: 'Collared',
    Pattern: 'Solid',
    Fabric: '\tCotton Blend',
    PackOf: 'Pack of 1',
    Occasion: 'Party',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/h43/hff/15831239360542/A20VMYGYNPVGYGR_GREY_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h7e/hd3/15830996353054/A20VMYGYNPVGYGR_GREY_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/h08/hca/15831858774046/A20VMYGYNPVGYGR_GREY.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/hf6/h5c/15831312302110/A20VMYGYNPVGYGR_GREY_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h24/h77/15831298998302/A20VMYGYNPVGYGR_GREY_alt4.jpg_1088Wx1632H',
    BrandName: 'Vastramay',
    ProductName: 'Boys Grey Silk Blend Kurta and Pyjama Set',
    Price: 549,
    strikeoffPrice: 1099,
    offer: 'Buy Any 1 Or More Of Vastramay And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Full Sleeves',
    Fit: 'Regular',
    Neckline: 'Collared',
    Pattern: 'Printed',
    Fabric: '\tCotton Blend',
    PackOf: 'Pack of 1',
    Occasion: 'Party',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/hef/h2e/15832059117598/A20VMYDK005GNGR_GREEN_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/ha6/h86/15830951067678/A20VMYDK005GNGR_GREEN_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/h6e/h60/15831717609502/A20VMYDK005GNGR_GREEN.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/he1/h41/15830903193630/A20VMYDK005GNGR_GREEN_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h9d/h15/15830936027166/A20VMYDK005GNGR_GREEN_alt4.jpg_1088Wx1632H',
    BrandName: 'Vastramay',
    ProductName:
      'Boys Multicolor Base Green Cotton Blend Kurta and Dhoti Pant Set',
    Price: 549,
    strikeoffPrice: 1099,
    offer: 'Buy Any 1 Or More Of Vastramay And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Full Sleeves',
    Fit: 'Regular',
    Neckline: 'Collared',
    Pattern: 'Printed',
    Fabric: '\tCotton Blend',
    PackOf: 'Pack of 1',
    Occasion: 'Party',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/he4/h9f/15831479812126/A20VMYKP001YWYE_YELLOW_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h22/h8d/15834113277982/A20VMYKP001YWYE_YELLOW_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/h5c/hb3/15832081039390/A20VMYKP001YWYE_YELLOW.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/hc7/he4/15831048585246/A20VMYKP001YWYE_YELLOW_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h1d/hf9/15831386357790/A20VMYKP001YWYE_YELLOW_alt4.jpg_1088Wx1632H',
    BrandName: 'Vastramay',
    ProductName: 'Boys Multicolor Base Yellow Silk Blend Kurta and Pyjama Set',
    Price: 849,
    strikeoffPrice: 1699,
    offer: 'Buy Any 1 Or More Of Vastramay And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Full Sleeves',
    Fit: 'Regular',
    Neckline: 'Collared',
    Pattern: 'Printed',
    Fabric: 'Silk Blend',
    PackOf: 'Pack of 1',
    Occasion: 'Party',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/h33/h49/15831070933022/A20VMYDK004AQAQ_AQUA_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/hb5/h05/15830850961438/A20VMYDK004AQAQ_AQUA_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/hd5/hd8/15831523131422/A20VMYDK004AQAQ_AQUA.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/h17/haf/15831084433438/A20VMYDK004AQAQ_AQUA_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/hbb/he5/15831955570718/A20VMYDK004AQAQ_AQUA_alt4.jpg_1088Wx1632H',
    BrandName: 'Vastramay',
    ProductName: 'Boys Blue Silk Blend Kurta and Dhoti Pant Set',
    Price: 999,
    strikeoffPrice: 1999,
    offer: 'Buy Any 1 Or More Of Vastramay And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: '\tSleeveless',
    Fit: 'Regular',
    Neckline: '\tRound',
    Pattern: '\tEmbellished',
    Fabric: 'Silk Blend',
    PackOf: 'Pack of 1',
    Occasion: 'Party',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/h55/h10/15830999302174/A20VMY6ORNPWHOR_ORANGE_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h55/h3e/15831236345886/A20VMY6ORNPWHOR_ORANGE_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/hd9/h92/15831209410590/A20VMY6ORNPWHOR_ORANGE.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/h69/h66/15831998627870/A20VMY6ORNPWHOR_ORANGE_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h1e/h29/15831045373982/A20VMY6ORNPWHOR_ORANGE_alt4.jpg_1088Wx1632H',
    BrandName: 'Vastramay',
    ProductName: 'Boys Orange Cotton Blend Kurta and Pyjama Set',
    Price: 699,
    strikeoffPrice: 1399,
    offer: 'Buy Any 1 Or More Of Vastramay And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Full Sleeves',
    Fit: 'Regular',
    Neckline: 'Collared',
    Pattern: 'Solid',
    Fabric: 'Cotton Blend',
    PackOf: 'Pack of 1',
    Occasion: 'Party',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/h51/h72/15832262344734/A20VMYORNPVOROR_ORANGE_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h48/h8b/15831086006302/A20VMYORNPVOROR_ORANGE_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/hf0/h66/15831582081054/A20VMYORNPVOROR_ORANGE.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/h47/hdf/15832182063134/A20VMYORNPVOROR_ORANGE_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/he2/h36/15831119331358/A20VMYORNPVOROR_ORANGE_alt4.jpg_1088Wx1632H',
    BrandName: 'Vastramay',
    ProductName: 'Boys Printed Orange Cotton Blend Kurta and Pyjama Set',
    Price: 899,
    strikeoffPrice: 1799,
    offer: 'Buy Any 1 Or More Of Vastramay And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Full Sleeves',
    Fit: 'Regular',
    Neckline: 'Collared',
    Pattern: 'Printed',
    Fabric: 'Cotton Blend',
    PackOf: 'Pack of 1',
    Occasion: 'Party',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/h51/h72/15832262344734/A20VMYORNPVOROR_ORANGE_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h48/h8b/15831086006302/A20VMYORNPVOROR_ORANGE_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/hf0/h66/15831582081054/A20VMYORNPVOROR_ORANGE.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/h47/hdf/15832182063134/A20VMYORNPVOROR_ORANGE_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/he2/h36/15831119331358/A20VMYORNPVOROR_ORANGE_alt4.jpg_1088Wx1632H',
    BrandName: 'Vastramay',
    ProductName: 'Boys Orange Cotton Blend Kurta and Pyjama Set',
    Price: 699,
    strikeoffPrice: 1399,
    offer: 'Buy Any 1 Or More Of Vastramay And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Full Sleeves',
    Fit: 'Regular',
    Neckline: 'Collared',
    Pattern: 'Printed',
    Fabric: 'Cotton Blend',
    PackOf: 'Pack of 1',
    Occasion: 'Party',
  },
  {
    image1:
      'https://sslimages.shoppersstop.com/sys-master/images/h10/h89/15831943577630/A20VMYWHNPVCRWH_WHITE_alt1.jpg_1088Wx1632H',
    image2:
      'https://sslimages.shoppersstop.com/sys-master/images/h46/h94/15832092475422/A20VMYWHNPVCRWH_WHITE_alt2.jpg_1088Wx1632H',
    image3:
      'https://sslimages.shoppersstop.com/sys-master/images/hee/he6/15831098097694/A20VMYWHNPVCRWH_WHITE.jpg_1088Wx1632H',
    image4:
      'https://sslimages.shoppersstop.com/sys-master/images/h32/hab/15831836098590/A20VMYWHNPVCRWH_WHITE_alt3.jpg_1088Wx1632H',
    image5:
      'https://sslimages.shoppersstop.com/sys-master/images/h97/h8a/15831804444702/A20VMYWHNPVCRWH_WHITE_alt4.jpg_1088Wx1632H',
    BrandName: 'Vastramay',
    ProductName: 'Boys Multicolor Base White Cotton Blend Kurta and Pyjama Set',
    Price: 599,
    strikeoffPrice: 1199,
    offer: 'Buy Any 1 Or More Of Vastramay And Get 50% Off',
    countryOrigin: 'India',
    Sleeves: 'Full Sleeves',
    Fit: 'Regular',
    Neckline: 'Collared',
    Pattern: '\tEmbroidered',
    Fabric: 'Cotton Blend',
    PackOf: 'Pack of 1',
    Occasion: 'Party',
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

showdata1(kidData)
