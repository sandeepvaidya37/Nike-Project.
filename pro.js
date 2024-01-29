var tl=gsap.timeline();
gsap.set(".a", {opacity:0, y:10})
gsap.set(".heroimg", {opacity:0, y:10, scale: .6})

tl.from(".left", {
    width: 0,
    ease: Expo.easeInOut,
    duration: 1.5
})
.from(".right", {
    width: 0,
    ease: Expo.easeInOut,
    duration: 1.5
})
.to(".a", {
    delay:-2,
    stagger: .2,
    opacity:1,
    y:0,
    ease: Expo.easeInOut,
    duration: 2
})
.to(".heroimg", {
    delay:-1.8,
    opacity:1,
    y:0,
    scale:1,
    ease: Expo.easeInOut,
    duration:2
})

let Brands=[
    {img:"Nike12.png", Name:"Air Max SYSTM", Price:"MRP:Rs 8595.00 incl. of taxes", Details:"Air Max Attitude Originally designed for performance running, Max Air cushioning delivers time-tested comfort."},
    {img:"Nike14.png", Name:"E-Series AD", Price:"MRP:Rs 6295.00 incl. of taxes", Details:"The E-Series AD was designed with ease of entry in mind, which will have you reaching for them day after day.Breathable mesh and cushiony foam strike the perfect balance between comfort and support, from that first step to wherever the day takes you."},
    {img:"Nike19.png", Name:"Cortez", Price:"MRP:Rs 7495.00 incl. of taxes", Details:"Was 1972. Now 2024. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Re-engineered materials help prevent warping and durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better."},
    {img:"Nike25.png", Name:"Air Max 97", Price:"MRP:Rs 16995.00 incl. of taxes", Details:"Featuring the original ripple design inspired by Japanese bullet trains, The Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colours and crisp details, it lets you ride in first-class comfort."},
    {img:"Nike35.png", Name:"Court Vision Low Next Nature", Price:"MRP:Rs 4995.00 incl. of taxes", Details:"In love with the classic look of '80s basketball but have a thing for the fast-paced culture of today's game? Meet the Nike Court Vision Low. A classic remixed with at least 20% recycled materials by weight, its crisp upper and stitched overlays keeps the soul of the original style. The plush, low-cut collar keeps it sleek and comfortable for your world."},
    {img:"Nike41.png", Name:"Jumpman MVP", Price:"MRP:Rs 15295.00 incl. of taxes", Details:"We didn't invent the remix—but considering the material we get to sample, this one's a no-brainer. We took elements from the AJ6, 7 and 8, making them into a completely new shoe that celebrates MJ's first 3-peat championship run. With leather, textile and nubuck details, these sneakers honour one legacy while encouraging you to cement your own."},
    {img:"Nike46.png", Name:"Metcon 9", Price:"MRP:Rs 12795.00 incl. of taxes", Details:"Whatever your why  is for working out, the Metcon 9 makes it all worth it. We improved on the 8 with a larger Hyperlift plate and added rubber rope wrap. Intended for lifters, trainers and go-getters, some of the greatest athletes in the world swear by it, and it's still the gold standard that delivers day after day."},
    {img:"Nike48.png", Name:"Air Max Alpha Trainer 5", Price:"MRP:Rs 7495.00 incl. of taxes", Details:"Finish your last rep with power and rack it with a roar that stuns the gym floor in the Nike Air Max Alpha Trainer 5. The Max Air cushioning offers comfortable stability for lifting whether it's a light or heavy day. A wide, flat base gives you enhanced stability and grip for all kinds of tough workouts without sacrificing style, as you roam from station to station and set to set."},
    {img:"Nike54.png", Name:"Air Max 90", Price:"MRP:Rs 11895.00 incl. of taxes", Details:"Lace up and feel the legacy in this champion running shoe that helped define the '90s. Worn by presidents, revolutionised through collabs and celebrated through rare colourways, its Waffle outsole, visible Nike Air cushioning and striking visuals keep it alive and well."},
    {img:"Nike67.png", Name:"Full Force Low", Price:"MRP:Rs 8495.00 incl. of taxes", Details:"A new shoe with old-school appeal—your retro dreams just came true. This pared-back design references the classic AF-1, then leans into '80s style with throwback stitching and varsity-inspired colours. Not everything has to be a throwback, though—modern comfort and durability make them easy to wear any time, anywhere. Time to throw them on and go full force."},
    {img:"Nike3.png", Name:"Pegasus Trail 4 GORE-TEX", Price:"MRP:Rs 14995.00 incl. of taxes", Details:"The Nike Pegasus Trail 4 GORE-TEX is your running companion for those days when the weather turns. Its waterproof GORE-TEX layer helps keep your feet dry, and less rubber in the outsole creates a smooth transition from road to trail without breaking stride."},
    {img:"Nike72.png", Name:"Air Force 1 '07", Price:"MRP:Rs 9695.00 incl. of taxes", Details:"The radiance lives on in the Air Force 1 '07. This b-ball icon puts a fresh spin on what you know best: durable materials, rich colours and the perfect amount of flash to make you shine." }

];
let Colors=[
    {Brand:["Nike9.png", "Nike10.png", "Nike11.png", "Nike12.png", "Nike13.png"]},
    {Brand:["Nike14.png", "Nike15.png", "Nike16.png", "Nike17.png", "Nike18.png"]},
    {Brand:["Nike19.png", "Nike20.png", "Nike21.png", "Nike22.png"]},
    {Brand:["Nike25.png", "Nike23.png", "Nike24.png", "Nike26.png", "Nike27.png", "Nike28.png", "Nike29.png", "Nike30.png", "Nike31.png","Nike32.png"]},
    {Brand:["Nike33.png", "Nike34.png", "Nike35.png", "Nike36.png", "Nike37.png"]},
    {Brand:["Nike38.png", "Nike39.png", "Nike40.png", "Nike41.png"]},
    {Brand:["Nike42.png", "Nike43.png", "Nike44.png", "Nike45.png", "Nike46.png"]},
    {Brand:["Nike48.png", "Nike49.png", "Nike50.png", "Nike51.png", "Nike52.png"]},
    {Brand:["Nike53.png", "Nike54.png", "Nike55.png", "Nike56.png"]},
    {Brand:["Nike64.png", "Nike65.png", "Nike66.png", "Nike67.png", "Nike68.png", "Nike69.png", "Nike70.png"]},
    {Brand:["Nike1.png", "Nike2.png", "Nike3.png", "Nike4.png", "Nike5.png", "Nike6.png", "Nike7.png", "Nike8.png"]},
    {Brand:["Nike71.png", "Nike72.png", "Nike73.png", "Nike74.png", "Nike75.png", "Nike76.png", "Nike77.png", "Nike78.png", "Nike79.png", "Nike80.png", "Nike81.png", "Nike82.png", "Nike83.png", "Nike84.png", "Nike85.png", "Nike86.png", "Nike87.png", "Nike88.png"]}

];

var clutter="";
var clutterTwo="";
var clutterThree="";
var length=0;

Brands.forEach(function(val, index){
    clutter+= `<div id="${index}"  style="background-image: url(${val.img});" class="Brand a"></div>`;
});

document.querySelector(".product").innerHTML=clutter;

let scrol=document.querySelector(".product");

scrol.addEventListener("click", function(detais){
    clutterTwo="" ;
      document.querySelector(".heroimg").src=`${Brands[detais.target.id].img}`;
      Colors[detais.target.id].Brand.forEach(function(val, index){
        clutterTwo+=` <div id="${index}" style="background-image: url(${val});" class="colors a"></div>`;
      });

       clutterThree+=`<div class="colors a"></div>`;
      

        document.querySelector(".avlcolors").innerHTML=clutterTwo;
        
    length=detais.target.id;

    document.querySelector(".left .content").innerHTML=`<h1 id="a" class="a"><span>Nike</span> ${Brands[detais.target.id].Name}</h1>
    <h4 id="a" class="a">${Brands[detais.target.id].Price}</h4>
    <p id="a" class="a">${Brands[detais.target.id].Details} </p>
    <button id="a" class="a">Buy This</button>`;

    document.querySelector(".rcontent").innerHTML=`<h1 id="a" class="a"><span>Nike</span> ${Brands[detais.target.id].Name}</h1>
    <h4 id="a" class="a">Exclusively built for India.</h4>
    <p id="a" class="a">Step into the new year with a wardrobe refresh that brings out your best personal style. Shop our Lunar New Year Collection.</p>
    <input id="a" class="a" type="text" placeholder="search for shoe">
    <button id="a" class="a">Search</button>`;


        
      
      
});

let avl=document.querySelector(".avlcolors");

        avl.addEventListener("click", function(val){
        
            

            document.querySelector(".heroimg").src=`${Colors[length].Brand[val.target.id]}`;


        
        });





