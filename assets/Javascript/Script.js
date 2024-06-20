var arr=[
    {
        //"data member": "value";
        "img": "https://th.bing.com/th/id/OIP.CVq384Zy5N31nCvJkcWj1gHaEo?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "name": "Naruto Uzumaki",
        "price": "120$"
    },
    {
        //"data member": "value";
        "img": "https://cdn.shopify.com/s/files/1/0118/4632/0192/files/Nagato-Top-10-Strongest-Akatsuki-Member_large.jpg?v=1561676442",
        "name": "Pain",
        "price": "130$"
    },
    {
        //"data member": "value";
        "img": "https://th.bing.com/th/id/OIP.zT69U8d9UAL5Oys62iZucgAAAA?w=464&h=381&rs=1&pid=ImgDetMain",
        "name": "Kakashi Hatake",
        "price": "140$"
    },
    {
        //"data member": "value";
        "img": "https://vignette.wikia.nocookie.net/geekpediabr/images/1/18/Minato.jpg/revision/latest?cb=20200722190539",
        "name": "Minato Namikaze",
        "price": "150$"
    },
    {
        //"data member": "value";
        "img": "https://th.bing.com/th/id/OIP.R2nvOrWfu5eWIU2SPMeyXwAAAA?pid=ImgDet&w=181&h=346&c=7&dpr=1.3",
        "name": "Sasuke Uchiha",
        "price": "160$"
    },
    {
        //"data member": "value";
        "img": "https://comicvine.gamespot.com/a/uploads/scale_medium/11145/111450787/8692971-8321969576-97840.jpg",
        "name": "Sakura Haruka",
        "price": "170$"
    }
];
var add=0;

function Next(){
    add++;
    if(add >= 4){
        alert('Out of data');
        return 0;
    }else{
        var img = document.getElementsByClassName('card-img');
        var img = document.getElementsByClassName('card-img');
        var name= document.getElementsByTagName('h5');
        var price= document.getElementsByClassName('card-text');
        for(var i=0; i<4; i++){
            img[i].src= arr[i+add].img;
            name[i].innerText=arr[i+add].name;
            price[i].innerText=arr[i+add].price;
        }
    }
    
}
function Prev(){
    add--;
    if(add <=-1){
        alert('Out of data');
        return 0;
    }else{
        var img = document.getElementsByClassName('card-img');
        var name= document.getElementsByTagName('h5');
        var price= document.getElementsByClassName('card-text');
        for(var i=3; i>=0; i--){
            img[i].src= arr[i+add].img;
            name[i].innerText= arr[i+add].name;
            price[i].innerText= arr[i+add].price;
        }
    }
    
}