const url='http://54.147.212.115:5000/homepages'
                async function fetching(){
                    try {
                        let res= await fetch(url)
                        let data=await res.json();
                        console.log(data)
                        topslider(data)
                        slider2(data)
                        slider3(data)
                        slider4(data)
                        slider5(data)
                        // return data
                    } catch (error) {
                        console.log('eEe',error)
                    }
                } 
                fetching()
    
    console.log('hahahahahahahha')
    var car= document.querySelector('.carousel1')
    var car2= document.querySelector('.carousel2')
    var car3=document.querySelector('.carousel3')
    var car4=document.querySelector('.carousel4')
    var car5=document.querySelector('.carousel5')
function topslider(d){
//banners append
    let ban1=document.createElement('img')
    ban1.setAttribute('class','bimg')
    ban1.src=d[1].bannerimg
    let banim=document.querySelector('.bannerimg2')
    banim.append(ban1)

    let ban2=document.createElement('img')
    ban2.src=d[1].bannerimg2
    let banim2=document.querySelector('.bannerimg')
    banim2.append(ban2)

    let ban3=document.createElement('img')
    ban3.src=d[2].bannerimg
    let banim3=document.querySelector('.bannerimg')
    banim3.append(ban3)

    let ban4=document.createElement('img')
    ban4.src=d[3].bannerimg
    let banim4=document.querySelector('.bannerimg4')
    banim4.append(ban4)

    let ban5=document.createElement('img')
    ban5.src=d[4].bannerimg
    let banim5=document.querySelector('.bannerimg5')
    banim5.append(ban5)

    let ban6=document.createElement('img')
    ban6.src=d[5].bannerimg
    let banim6=document.querySelector('.bannerimg6')
    banim6.append(ban6)
    // console.log(banim4,'bbb')

    let ban7=document.createElement('img')
    ban7.src=d[6].bannerimg
    let banim7=document.querySelector('.bannerimg7')
    banim7.append(ban7)
 //slick append 
    let slick1=document.createElement('div');
    slick1.setAttribute('id','slick');

    let container=document.createElement('div');
    container.setAttribute('class','container')

    let row=document.createElement('div');
    row.setAttribute('class','row')

    let col=document.createElement('div');
    col.setAttribute('class','col-lg-12')

    let slidercont=document.createElement('div');
    slidercont.setAttribute('class','slider_content')

    let item1=document.createElement('div');
    item1.setAttribute('class','slider_items');
    let img1=document.createElement('img');
    img1.src=d[1].img1;
    item1.append(img1);

    let item2=document.createElement('div');
    item2.setAttribute('class','slider_items');
    let img2=document.createElement('img');
    img2.src=d[1].img2;
    item2.append(img2);


    let item3=document.createElement('div');
    item3.setAttribute('class','slider_items');
    let img3=document.createElement('img');
    img3.src=d[1].img3;
    item3.append(img3);

    let item4=document.createElement('div');
    item4.setAttribute('class','slider_items');
    let img4=document.createElement('img');
    img4.src=d[1].img4;
    item4.append(img4);

    let item5=document.createElement('div');
    item5.setAttribute('class','slider_items');
    let img5=document.createElement('img');
    img5.src=d[1].img5;
    item5.append(img5);

    slidercont.append(item1,item2,item3,item4,item5)

    col.append(slidercont)
    row.append(col)
    container.append(row)
    slick1.append(container)
    // console.log(slick1)
    car.append(slick1)
    // console.log(car)
    // --------------------slide2---------------

    // _______________JQuery_______________________
    
    
    var a=document.querySelector('.slider_content');
    // console.log(a)

    $(document).ready(function(){
        $(a).slick({
        // dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        autoplay: true,
        adaptiveHeight: true,
        arrows:false,
        dots:true,
        mobileFirst:true
        });
    });
    
}

function slider2(d){
    let slick1=document.createElement('div');
    slick1.setAttribute('id','slick');

    let container=document.createElement('div');
    container.setAttribute('class','container')

    let row=document.createElement('div');
    row.setAttribute('class','row')

    let col=document.createElement('div');
    col.setAttribute('class','col-lg-12')

    let slidercont=document.createElement('div');
    slidercont.setAttribute('class','slider_content2')

    let item1=document.createElement('div');
    item1.setAttribute('class','slider_items');
    let img1=document.createElement('img');
    img1.src=d[2].img1;
    item1.append(img1);

    let item2=document.createElement('div');
    item2.setAttribute('class','slider_items');
    let img2=document.createElement('img');
    img2.src=d[2].img2;
    item2.append(img2);


    

    slidercont.append(item1,item2)

    col.append(slidercont)
    row.append(col)
    container.append(row)
    slick1.append(container)
    // console.log(slick1)
    car2.append(slick1)
    // console.log(car2)
    // --------------------slide2---------------

    // _______________JQuery_______________________
    
    
    var a=document.querySelector('.slider_content');
    // console.log(a)

    $(document).ready(function(){
        $('.slider_content2').slick({
            
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            autoplay: true,
            adaptiveHeight: true,
            arrows:false,
            dots:true,
            mobileFirst:true
        });
    });
}

function slider3(d){
    let slick1=document.createElement('div');
    slick1.setAttribute('id','slick');

    let container=document.createElement('div');
    container.setAttribute('class','container')

    let row=document.createElement('div');
    row.setAttribute('class','row')

    let col=document.createElement('div');
    col.setAttribute('class','col-lg-12')

    let slidercont=document.createElement('div');
    slidercont.setAttribute('class','slider_content3')

    let item1=document.createElement('div');
    item1.setAttribute('class','slider_items');
    let img1=document.createElement('img');
    img1.src=d[3].img1;
    item1.append(img1);

    let item2=document.createElement('div');
    item2.setAttribute('class','slider_items');
    let img2=document.createElement('img');
    img2.src=d[3].img2;
    item2.append(img2);


    

    slidercont.append(item1,item2)

    col.append(slidercont)
    row.append(col)
    container.append(row)
    slick1.append(container)
    // console.log(slick1)
    car3.append(slick1)
    // console.log(car3)
    // --------------------slide2---------------

    // _______________JQuery_______________________
    
    
    var a=document.querySelector('.slider_content');
    // console.log(a)

    $(document).ready(function(){
        $('.slider_content3').slick({
            
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            autoplay: true,
            adaptiveHeight: true,
            arrows:false,
            dots:true,
            mobileFirst:true
        });
    });
}

function slider4(d){
    
     //slick append 
        let slick1=document.createElement('div');
        slick1.setAttribute('id','slick');
    
        let container=document.createElement('div');
        container.setAttribute('class','container')
    
        let row=document.createElement('div');
        row.setAttribute('class','row')
    
        let col=document.createElement('div');
        col.setAttribute('class','col-lg-12')
    
        let slidercont=document.createElement('div');
        slidercont.setAttribute('class','slider_content4')
    
        let item1=document.createElement('div');
        item1.setAttribute('class','slider_items');
        let img1=document.createElement('img');
        img1.src=d[4].img1;
        item1.append(img1);
    
        let item2=document.createElement('div');
        item2.setAttribute('class','slider_items');
        let img2=document.createElement('img');
        img2.src=d[4].img2;
        item2.append(img2);
    
    
        let item3=document.createElement('div');
        item3.setAttribute('class','slider_items');
        let img3=document.createElement('img');
        img3.src=d[4].img3;
        item3.append(img3);
    
        let item4=document.createElement('div');
        item4.setAttribute('class','slider_items');
        let img4=document.createElement('img');
        img4.src=d[4].img4;
        item4.append(img4);
    
        let item5=document.createElement('div');
        item5.setAttribute('class','slider_items');
        let img5=document.createElement('img');
        img5.src=d[4].img5;
        item5.append(img5);
    
        slidercont.append(item1,item2,item3,item4,item5)
    
        col.append(slidercont)
        row.append(col)
        container.append(row)
        slick1.append(container)
        // console.log(slick1)
        car4.append(slick1)
        // console.log(car)
        // --------------------slide2---------------
    
        // _______________JQuery_______________________
        
        
        var a=document.querySelector('.slider_content4');
        // console.log(a)
    
        $(document).ready(function(){
            $(a).slick({
            // dots: false,
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            autoplay: true,
            adaptiveHeight: true,
            arrows:false,
            dots:true,
            mobileFirst:true
            });
        });
}

function slider5(d){
    
    //slick append 
       let slick1=document.createElement('div');
       slick1.setAttribute('id','slick');
   
       let container=document.createElement('div');
       container.setAttribute('class','container')
   
       let row=document.createElement('div');
       row.setAttribute('class','row')
   
       let col=document.createElement('div');
       col.setAttribute('class','col-lg-12')
   
       let slidercont=document.createElement('div');
       slidercont.setAttribute('class','slider_content5')
   
       let item1=document.createElement('div');
       item1.setAttribute('class','slider_items');
       let img1=document.createElement('img');
       img1.src=d[6].img1;
       item1.append(img1);
   
       let item2=document.createElement('div');
       item2.setAttribute('class','slider_items');
       let img2=document.createElement('img');
       img2.src=d[6].img2;
       item2.append(img2);
   
   
       let item3=document.createElement('div');
       item3.setAttribute('class','slider_items');
       let img3=document.createElement('img');
       img3.src=d[6].img3;
       item3.append(img3);
   
       let item4=document.createElement('div');
       item4.setAttribute('class','slider_items');
       let img4=document.createElement('img');
       img4.src=d[6].img4;
       item4.append(img4);
   
       let item5=document.createElement('div');
       item5.setAttribute('class','slider_items');
       let img5=document.createElement('img');
       img5.src=d[6].img5;
       item5.append(img5);
   
       slidercont.append(item1,item2,item3,item4,item5)
   
       col.append(slidercont)
       row.append(col)
       container.append(row)
       slick1.append(container)
       console.log(slick1,'s')
       car5.append(slick1)
       // console.log(car)
       // --------------------slide2---------------
   
       // _______________JQuery_______________________
       
       
       var a=document.querySelector('.slider_content5');
    //    console.log(a)
   
       $(document).ready(function(){
           
            $(a).slick({
                    // dots: false,
                    infinite: true,
                    speed: 200,
                    slidesToShow: 1,
                    autoplay: true,
                    adaptiveHeight: true,
                    arrows:false,
                    dots:true,
                    mobileFirst:true
            });
       });
}

var slik1=document.getElementById('slick1')
var slik2=document.getElementById('slick2')
function divslider(d){
    let cont1=document.createElement('div')
    cont1.setAttribute('class','cont1')
    let icont=document.createElement('div')
    icont.setAttribute('class','imgcont')
    var img1=document.createElement('img')
    img1.src=d[7].img1
    let txtcon=document.createElement('div')
    txtcon.setAttribute('class','txtcont')
    let top=document.createElement('div')
    top.setAttribute('class','topt')
    
    let phd=document.createElement('p')
    phd.setAttribute('class','prodhead')
    phd.innerText=d[7].ph
    let pd=document.createElement('p')
    pd.setAttribute('class','prodesc')
    pd.innerText=d[7].pd

    let price=document.createElement('div')
    price.setAttribute('class','price')

    let pdprice=document.createElement('p')
    pdprice.setAttribute('class','prodprice')
    pdprice.innerText=d[7].pdprice

    let pstr=document.createElement('p')
    pstr.setAttribute('class','pricestrike')

    let str=document.createElement('strike')
    str.innerText=d[7].sp

    let bot=document.createElement('div')
    bot.setAttribute('class','bottom')
    let addbg=document.createElement('p')
    let ahr=document.createElement('a')
    addbg.setAttribute('class','addbag')
    addbg.innerText=d[7].bag
    ahr.append(addbg)
    bot.append(ahr)
    pdprice.append()


}

