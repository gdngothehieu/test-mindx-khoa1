const bauCuaList = [
    {
        id: 1,
        img: "./images/bau.png",
        count : 0,
        selected: false,
        name: "Bầu",
        counter: 0

    },
    {
        id: 2,
        img: "./images/ca.png",
        count : 0,
        selected: false,
        name: "Cá"
,        counter: 0

    },    
    {
        id: 3,
        img: "./images/cua.png",
        count : 0,
        selected: false,
        name: "Cua"
        ,        counter: 0

    },   
     {
        id: 4,
        img: "./images/ga.png",
        count : 0,
        selected: false,
        name: "Gà"

        ,        counter: 0

    },   
     {
        id: 5,
        img: "./images/huou.png",
        count : 0,
        selected: false, 
        name: "Hươu"

        ,        counter: 0

    }, 
       {
        id: 6,
        img: "./images/tom.png",
        count : 0,
        selected: false,
        name: "Tôm"
        ,        counter: 0

    }
]

let shuffleArray = [
    {
        id: 1,
        img: "./images/bau.png",
        count : 0,
        selected: false,
        name: "Bầu"
        ,        counter: 0

    },
    {
        id: 2,
        img: "./images/ca.png",
        count : 0,
        selected: false,
        name: "Cá"
        ,        counter: 0

    },    
    {
        id: 3,
        img: "./images/cua.png",
        count : 0,
        selected: false,
        name: "Cua"
        ,        counter: 0

    },   
     {
        id: 4,
        img: "./images/ga.png",
        count : 0,
        selected: false,
        name: "Gà"
        ,        counter: 0

    },   
     {
        id: 5,
        img: "./images/huou.png",
        count : 0,
        selected: false,
        name: "Hươu"
        ,        counter: 0

    }, 
       {
        id: 6,
        img: "./images/tom.png",
        count : 0,
        selected: false,
        name: "Tôm"
        ,        counter: 0

    }
]

const ketQua = [
    {
        id: 1,
        img: "./images/bau.png",
        count : 0,
        name: "Bầu",
    },    {
        id: 2,
        img: "./images/bau.png",
        count : 0,
        name: "Bầu",


    },    {
        id: 3,
        img: "./images/bau.png",
        count : 0,
        name: "Bầu",


    },
]
let pickedArray = [];

const xepKetQua = () => {
    for(let i = 0 ; i < ketQua.length; i++){
        let result = ketQua[i];
        document.getElementById("ket-qua-bau-cua").innerHTML += `
            <img id="so-bau-cua-${result.id}"src=${result.img} alt=""/>
        `
    }
}

const shuffleKetQua = () => {
    document.getElementById("ket-qua-bau-cua").innerHTML = ``;
    let counter = 100;
    const shuffle = (array) => {
        let currentIndex = array.length;
        while (currentIndex) {
      
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
    }
    const compareResult = () => {
        let isMatch = false;
        document.getElementById("ket-qua-in-chu").innerHTML = ``;
        let matchArray= []
        let ketQuaGhiChu = ``
    
        for(let i = 0 ; i < 3; i++){
            let randomIndex = Math.floor(Math.random() * 6);
            shuffleArray.push(bauCuaList[randomIndex]);
            }

        let resultImages = `
        <img id="so-bau-cua-${shuffleArray[0].id}"src=${shuffleArray[0].img} alt=""/>
        <img id="so-bau-cua-${shuffleArray[1].id}"src=${shuffleArray[ 1].img} alt=""/>
        <img id="so-bau-cua-${shuffleArray[2].id}"src=${shuffleArray[ 2].img} alt=""/>

    `
        document.getElementById("ket-qua-bau-cua").innerHTML = resultImages;
        // shuffleArray = []
        //     shuffleArray = [    {
        //     id: 1,
        //     img: "./images/bau.png",
        //     count : 0,
        //     selected: false,
        //     name: "Bầu"
        //     ,        counter: 0
    
        // },
        // {
        //   id: 1,
        //     img: "./images/bau.png",
        //     count : 0,
        //     selected: false,
        //     name: "Bầu"
        //     ,        counter: 0
    
        // },  {
        //    id: 1,
        //     img: "./images/bau.png",
        //     count : 0,
        //     selected: false,
        //     name: "Bầu"
        //     ,        counter: 0
    
        // }];
        pickedArray.sort((a,b) => a.id -b.id)
        let reducedPickedArray = pickedArray.map(pick => {return pick.id})
        shuffleArray.sort((a,b) => a.id - b.id)
        let reducedShuffleArray = shuffleArray.map(shuffle => {return shuffle.id});
        for(let i = 0; i < pickedArray.length; i++){
            ketQuaGhiChu += pickedArray[i].name + " 1 ";
            
        }
        for(let i = 0; i < pickedArray.length; i++){

            if(JSON.stringify(reducedPickedArray) !== JSON.stringify(reducedShuffleArray)){
                
            document.getElementById("ket-qua-in-chu").innerHTML = "Bạn đã đoán sai với kết quả: " + ketQuaGhiChu;
            document.getElementById("ket-qua-in-chu").style.color = "red";
            console.log("Bạn đã đoán sai với kết quả: " + ketQuaGhiChu);

                return;
            } else {
            }
        }

        document.getElementById("ket-qua-in-chu").innerHTML = "Bạn đã đoán đúng với kết quả:" + ketQuaGhiChu;
        document.getElementById("ket-qua-in-chu").style.color = "green";
        console.log("Bạn đã đoán đúng với kết quả:" + ketQuaGhiChu);
                
    }
    let shuffleInterval = setInterval(function(){
                // while(counter > 0){
                    shuffle(shuffleArray)
                    document.getElementById("quay").disabled = true;
                    document.getElementById("datLai").disabled = true;

                    for(let i = 0 ; i < 3; i++){
                        // let result = shuffleArray[i];
                        let resultImages = `
                        <img id="so-bau-cua-${shuffleArray[0].id}"src=${shuffleArray[0].img} alt=""/>
                        <img id="so-bau-cua-${shuffleArray[1].id}"src=${shuffleArray[ 1].img} alt=""/>
                        <img id="so-bau-cua-${shuffleArray[2].id}"src=${shuffleArray[ 2].img} alt=""/>
                
                    `
                        document.getElementById("ket-qua-bau-cua").innerHTML = resultImages;
                        
                    }
                   counter--;
                // }fh
               
            }
    , 100)
    
    setTimeout(function(){
        clearInterval(shuffleInterval)
        compareResult();
       
        document.getElementById("quay").disabled = false;
        document.getElementById("datLai").disabled = false;


    }, 1000);
  
}
let counter = 3;


const xepBauCua = () => {
    document.getElementById("xep-bau-cua").innerHTML = ``
    for(let i = 0 ; i < bauCuaList.length; i++){
        let bauCua = bauCuaList[i];
        document.getElementById("xep-bau-cua").innerHTML += `
        <div class="order">
        <p id="so-bau-cua-${bauCua.id}"  class="so-bau-cua">${bauCua.counter}</p>
        <img id="hinh-anh-${bauCua.img}" src=${bauCua.img} alt="" onclick="clickOnImage(${bauCua.id})"/>
        </div>
`
    window.clickOnImage = (id) => {
        // for(let i = 0; i < pickedArray.length; i++){
        //     if(pickedArray[i].id === bauCuaList[id-1].id){
        //         return;
        //     }
        // }
        if(counter > 0 && document.getElementById(`so-bau-cua-${id}`).value !== 1){

            bauCuaList[id-1].match = false;
            bauCuaList[id-1].counter++;
            document.getElementById(`so-bau-cua-${id}`).innerHTML++
            pickedArray.push(bauCuaList[id-1]);
            bauCuaList[id-1].selected = true;
            counter--;
            xepBauCua();
        }
        if (counter === 0){
            document.getElementById("quay").disabled = false;
        }
    };
    }
}

const datLai = () => {
    counter = 3;
    pickedArray= [];
    document.getElementById("quay").disabled = true;
    document.getElementById("ket-qua-in-chu").innerHTML = "";
    for(let i = 0 ; i < bauCuaList.length; i++){
        bauCuaList[i].selected = false;
        bauCuaList[i].counter = 0;

    };

    
    xepBauCua();


}



xepKetQua();
xepBauCua();

document.getElementById("quay").addEventListener("click",shuffleKetQua);
document.getElementById("datLai").addEventListener("click",datLai)