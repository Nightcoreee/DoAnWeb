// filter array 
let filterarray =[];

// gallery card array

let galleryarray = [
    {
        id:1,
        name : "áo thun cổ tròn",
        src: "img/Nam/Aothun/Aothun1.jpg",
        desc : "244.000đ."
    },
    {
        id:2,
        name : "áo thun airism",
        src: "img/Nam/Aothun/Aothun2.jpg",
        desc : "391.000đ"
    },
    {
        id:3,
        name : "áo thun kẻ dọc dài tay",
        src: "img/Nam/Aothun/Aothun3.jpg",
        desc : "489.000đ"
    },
    {
        id:4,
        name : "áo polo airism ngắn tay",
        src: "img/Nam/Aothun/Aothun4.png",
        desc : "489.000đ"
    },
    {
        id:5,
        name : "áo khoác blookteck",
        src: "img/Nam/Aokhoac/Aokhoac1.jpg",
        desc : "2.944.000đ"
    },
    {
        id:6,
        name : "áo khoác dáng ngắn",
        src: "img/Nam/Aokhoac/Aokhoac2.jpg",
        desc : "2.453.000đ"
    },
    {
        id:7,
        name : "áo khoác track",
        src: "img/Nam/Aokhoac/Aokhoac3.jpg",
        desc : "980.000đ"
    },
    {
        id:8,
        name : "áo khoác giả lông cừu",
        src: "img/Nam/Aokhoac/Aokhoac4.jpg",
        desc : "686.000đ"
    },
    {
        id:9,
        name : "áo sơ mi cổ trụ",
        src: "img/Nam/Aosomi/Aosomi1.png",
        desc : "489.000đ"
    },
    {
        id:10,
        name : "áo sơ min extra fine",
        src: "img/Nam/Aosomi/Aosomi2.png",
        desc : "489.000đ"
    },
    {
        id:11,
        name : "áo sơ mi auspicious",
        src: "img/Nam/Aosomi/Aosomi3.png",
        desc : "784.000đ"
    },
    {
        id:12,
        name : "áo sơ mi caro",
        src: "img/Nam/Aosomi/Aosomi4.png",
        desc : "784.000đ"
    },
    {
        id:13,
        name : "quần jeans classic cut",
        src: "img/Nam/Quandai/quandai1.png",
        desc : "2.453.000đ"
    },
    {
        id:14,
        name : "quần jeans regular fit",
        src: "img/Nam/Quandai/quandai2.png",
        desc : "1.275.000đ"
    },
    {
        id:15,
        name : "quần ống thể thao ôm",
        src: "img/Nam/Quandai/quandai3.jpg",
        desc : "784.000đ"
    },
    {
        id:16,
        name : "quần smart pants",
        src: "img/Nam/Quandai/quandai4.jpg",
        desc : "980.000đ"
    },
    {
        id:17,
        name : "quần short in họa tiết",
        src: "img/Nam/Quanshort/quanshort1.jpg",
        desc : "489.000đ"
    },
    {
        id:18,
        name : "quần short co giãn",
        src: "img/Nam/Quanshort/quanshort2.jpg",
        desc : "489.000đ"
    },
    {
        id:19,
        name : "quần short chino",
        src: "img/Nam/Quanshort/quanshort3.jpg",
        desc : "391.000đ"
    },
    {
        id:20,
        name : "quần short siêu nhẹ",
        src: "img/Nam/Quanshort/quanshort4.jpg",
        desc : "784.000đ"
    },
    {
        id:21,
        name : "mũ heattch",
        src: "img/Nam/Khác/Mu1.jpg",
        desc : "244.000đ"
    },
    {
        id:22,
        name : "mũ nhung chống tia uv",
        src: "img/Nam/Khác/Mu2.jpg",
        desc : "489.000đ"
    },
    {
        id:23,
        name : "mũ melton metro",
        src: "img/Nam/Khác/Mu3.jpg",
        desc : "489.000đ"
    },
    {
        id:24,
        name : "mũ blocktech",
        src: "img/Nam/Khác/Mu4.jpg",
        desc : "489.000đ"
    },
    {
        id:25,
        name : "găng tay blocktech",
        src: "img/Nam/Khác/Gangtay1.jpg",
        desc : "489.000đ"
    },
    {
        id:26,
        name : "găng tay",
        src: "img/Nam/Khác/Gangtay2.jpg",
        desc : "489.000đ"
    },
    {
        id:27,
        name : "găng tay heattech",
        src: "img/Nam/Khác/Gangtay3.jpg",
        desc : "489.000đ"
    },
    {
        id:28,
        name : "túi đeo hai kiểu",
        src: "img/Nam/Khác/Tui1.jpg",
        desc : "489.000đ"
    },
    {
        id:29,
        name : "balo nắp cuộn",
        src: "img/Nam/Khác/Tui2.jpg",
        desc : "980.000đ"
    },
    {
        id:30,
        name : "túi eco",
        src: "img/Nam/Khác/Tui3.jpg",
        desc : "48.000đ"
    },
    {
        id:31,
        name : "adidas hoops 2.0",
        src: "img/Nam/Khác/Giay1.jpg",
        desc : "1.550.000đ"
    },
    {
        id:32,
        name : "adidas new grand court",
        src: "img/Nam/Khác/Giay2.jpg",
        desc : "1.550.000đ"
    },
    {
        id:33,
        name : "adidas campus",
        src: "img/Nam/Khác/Giay3.jpg",
        desc : "2.700.000đ"
    },
    {
        id:34,
        name : "adidas galaxy 5",
        src: "img/Nam/Khác/Giay4.jpg",
        desc : "1.275.000đ"
    },
    {
        id:35,
        name : "áo hoddie adidas",
        src: "img/Nam/Aokhoac/Aokhoac5.jpg",
        desc : "2.350.000đ"
    },
    {
        id:36,
        name : "kính mác boston",
        src: "img/Nam/Khác/Kinh1.jpg",
        desc : "391.000đ"
    },
    {
        id:37,
        name : "kính mác wellington",
        src: "img/Nam/Khác/Kinh2.jpg",
        desc : "391.000đ"
    },
    {
        id:38,
        name : "kính mác hình giọt nước",
        src: "img/Nam/Khác/Kinh3.jpg",
        desc : "391.000đ"
    },
    {
        id:39,
        name : "kính mác boston",
        src: "img/Nam/Khác/Kinh4.jpg",
        desc : "391.000đ"
    },
    {
        id:40,
        name : "khăn heattech",
        src: "img/Nam/Khác/Khan1.jpg",
        desc : "391.000đ"
    },
    {
        id:41,
        name : "khăn choàng heattech",
        src: "img/Nam/Khác/Khan2.jpg",
        desc : "391.000đ"
    },
    {
        id:42,
        name : "khăn heattech đa năng",
        src: "img/Nam/Khác/Khan3.jpg",
        desc : "391.000đ"
    },
    {
        id:43,
        name : "khăn heattech caro",
        src: "img/Nam/Khác/Khan4.jpg",
        desc : "489.000đ"
    },
    {
        id:44,
        name : "khăn heattech",
        src: "img/Nam/Khác/Khan5.jpg",
        desc : "489.000đ"
    },
    {
        id:45,
        name : "áo sơ mi vải nhung",
        src: "img/Nam/Aosomi/Aosomi5.png",
        desc : "784.000đ"
    },
    {
        id:46,
        name : "áo sơ mi vải denim",
        src: "img/Nam/Aosomi/Aosomi6.jpg",
        desc : "686.000đ"
    },
    {
        id:47,
        name : "áo khoác track",
        src: "img/Nam/Aokhoac/Aokhoac6.jpg",
        desc : "980.000đ"
    },
    {
        id:48,
        name : "áo thun soft touch",
        src: "img/Nam/Aothun/Aothun5.jpg",
        desc : "391.000đ"
    },
    {
        id:49,
        name : "áo thun cổ tròn",
        src: "img/Nam/Aothun/Aothun6.jpg",
        desc : "489.000đ"
    },
    {
        id:50,
        name : "quần jean skinny fit",
        src: "img/Nam/Quandai/quandai5.jpg",
        desc : "686.000đ"
    },
    {
        id:51,
        name : "quần jean regular",
        src: "img/Nam/Quandai/quandai6.png",
        desc : "1.275.000đ"
    },
    {
        id:52,
        name : "quần short thể thao",
        src: "img/Nam/Quanshort/quanshort5.jpg",
        desc : "293.000đ"
    },
    {
        id:53,
        name : "quần short bơi thể thao",
        src: "img/Nam/Quanshort/quanshort6.jpg",
        desc : "489.000đ"
    },
    {
        id:54,
        name : "thắt lưng sọc ngang",
        src: "img/Nam/Khác/Thatlung1.jpg",
        desc : "489.000đ"
    },
    {
        id:55,
        name : "thắt lưng canvas",
        src: "img/Nam/Khác/Thatlung2.jpg",
        desc : "784.000đ"
    },
    {
        id:56,
        name : "thắt lưng da thuộc",
        src: "img/Nam/Khác/Thatlung3.jpg",
        desc : "980.000đ"
    },
    {
        id:57,
        name : "thắt lưng dạng lưới",
        src: "img/Nam/Khác/Thatlung3.jpg",
        desc : "784.000đ"
    },
    {
        id:58,
        name : "thắt lưng bản hẹp",
        src: "img/Nam/Khác/Thatlung4.jpg",
        desc : "784.000đ"
    },
    {
        id:59,
        name : "mũ len gân heattech",
        src: "img/Nam/Khác/Mu5.jpg",
        desc : "244.000đ"
    },
    {
        id:60,
        name : "mũ bucket",
        src: "img/Nam/Khác/Mu6.jpg",
        desc : "489.000đ"
    },
];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra){
   document.getElementById("card").innerText = "";
   for(var i=0;i<curarra.length;i++){
       document.getElementById("card").innerHTML += `
            <div class="inner-product">
                <img src="${curarra[i].src}"/>
                <div class="product-detail">
                    <h4>${curarra[i].name}</h4>
                    <p>${curarra[i].desc}</p>
                </div>
            </div>
       `
   }

}

// For Live Searching Product

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray= galleryarray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
           }

   });
   if(this.value==""){
       showgallery(galleryarray);
   }
   else{
       if(filterarray == ""){
           document.getElementById("card").innerHTML = ""; 
       }
       else{
           showgallery(filterarray);
       }
   }

});

//
function opbtn(){
    document.getElementById('card').style.maxHeight='400px'
}
function cbtn(){
    document.getElementById('card').style.maxHeight='0px'
}