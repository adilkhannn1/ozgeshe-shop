<template>
  <main class="min-h-[100vh] w-[100%] h-[100%] bg-[#343740] flex  flex-col items-center sm:gap-[30px] md:gap-[50px]">

    <div class="w-[60%] sm:w-[65%] sm:justify-between gap-[20px] h-[70px] flex flex-row items-center">

    <button :onclick="categoryBtnClick" class="text-white  flex flex-row gap-[10px] cursor-pointer">
      <p class="text-[20px]">Категории</p>
      <span class="w-[20px] h-[20px] flex justify-center items-center">
        <img ref="dropDownIcon" :src="DropDownIcon" class="transition-transform duration-300 w-[20px]" alt="DropDownIcon">
      </span>
    </button>

    <div class="hidden sm:block max-w-[500px]  w-[100%]   border-b border-white flex flex-row justify-between">
          <input
            v-model="password"
            type="text"
            placeholder="Поиск...."
            class="h-[40px]  w-[90%]  text-white placeholder-white focus:outline-none"
          />
          <button class="w-[25px]">
           <img :src="SearchIcon" class="w-[5%] w-[25px] h-[25px]" alt="search-icon">
          </button>
      </div>
  </div>

  <div class="products grid gap-y-[30px] grid-cols-1 md:grid-cols-2  md:gap-x-[100px] lg:grid-cols-3">
    <div class="w-[100%]  card grid gap-[10px] w-[250px] sm:w-[450px]  md:w-[300px]  lg:w-[250px] " v-for="card in products" :key="card.id">
      <div class="card-image   w-[100%]" >
        <img :src="card.images[0]" class="bg-cover bg-center w-[100%] h-[100%] rounded-[15px]" alt="">
      </div>
      <div class="card-discription w-[100%] flex flex-row justify-between">
        <div class="card-text text-white">
          <div class="card-name">
            <h2>{{card.name}}</h2>
          </div>
          <div class="card-price">
            <h3>{{ `${card.price}тг`}}</h3>
          </div>
        </div>
        <div class="card-button w-[40px]">
          <button class="favourite-button">
            <img :src="heartIcon" class="w-[30px]" alt="heart button">
          </button>
        </div>
      </div>
    </div>

  </div>

  <div ref="categoryMenu" class="top-[5%] w-[90%] h-[100%] top-[70px] fixed bg-white left-[-100%] sm:top-[200px] rounded-2xl" >
    <div class="close w-[90%]  flex justify-end">
      <button  class="flex justify-center items-center rounded-sm  w-[40px]  h-[40px] bg-[#343740]" :onclick="categoryBtnClick">
        <img :src="closeIcon" class="w-[30px] h-[30px]" alt="closeIcon">
      </button>
    </div>
    <div class="gender flex justify-around w-[100%]">
        <button class=" w-[124px] h-[56px] bg-[#343740] text-white rounded-xl">
          Мужское
        </button>
        <button class="w-[124px] h-[56px] bg-[#343740] text-white rounded-xl">
          Женское
        </button>
    </div>


    <div class="sort left-[5%]">

        <h1>Сортировка</h1>

        <div class="flex flex-col w-[90%] ">
          <label>
            <input type="radio" name="option" value="1"> По цене
          </label>
          <label>
            <input type="radio" name="option" value="2"> По цене
          </label>
          <label>
             <input type="radio" name="option" value="3"> Сортировка по умолчанию
          </label>
        </div>

        <hr class="category-line w-[90%]">

        <div class="buttonsOfPrice w-[90%]">
          <div>
            <p>Цена</p>
          </div>
          <div class="flex flex-row items-center justify-between">
            <input class="bg-[#343740] text-white placeholder-white w-[100px] h-[50px] text-center" maxlength="5" placeholder="2000" type="number">
            <div class="w-[20px] h-[2px] bg-black">
            </div>
            <input class="bg-[#343740] text-white placeholder-white w-[100px] h-[50px] text-center" maxlength="5" placeholder="100000" type="number">
          </div>
        </div>
      </div>
      <div class="sliderOfPrice relative left-[5%]">
          <div class="rangeOfPrices w-[90%] flex justify-between">
            <p>
              От {{minCircleLimit}}
            </p>
            <p>
              До {{maxCircleLimit}}
            </p>
          </div>
          <div class="sliderLine  w-[90%] h-[20px] rounded-md bg-[#343740] flex justify-between items-center">
            <div ref="leftCircle" @touchstart="startCheck" :style="{ transform: `translateX(${position}px)` }" @touchend="stopCheck" class="button-left-side   w-[40px] h-[40px] bg-white rounded-full border-[#A5A5A5] border-3 cursor-pointer transition-transform"></div>
            <div ref="rightCircle" class="button-right-side  w-[40px] h-[40px] bg-white rounded-full border-[#A5A5A5] border-3 cursor-pointer transition-transform" ></div>
          </div>
      </div>

  </div>

  </main>
</template>

<style scoped>
.button-left-side{
  margin-left: -5px;
}

.button-right-side{
  margin-right: -5px;
}
.sliderOfPrice{
  margin-top: 30px;

}
.sliderLine{
  margin-top: 10px;
}
.sort{
    margin-left: 5%;
    margin-top: 30px;
  }

  .close{
    margin-top: 30px;

  }

  .gender{
    margin-top: 15px;
  }

  .buttonsOfPrice{
    margin-top: 15px;
  }

  .category-line{
    margin-top: 15px;
  }

@media screen and (min-width: 1400px) {
    .products{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

<script setup>

import SearchIcon from '@/assets/img/search-icon.png';
import { onMounted, ref } from 'vue'
import DropDownIcon from '@/components/icons/arrow-down.png';
import heartIcon from '@/components/icons/heart.png';
import closeIcon from '@/components/icons/close.png';



let minCircleLimit = ref(2000);
let maxCircleLimit = ref(100000);

let leftCircle = ref(null);

onMounted(()=>{
  let leftRec = leftCircle.value.getBoundingClientRect().x;
  console.log(leftRec);
})


const dropDownIcon = ref(null);
const categoryMenu = ref(null);
let rotated = false;
const position = ref();


const consoleFunction = (e) => {
  position.value = e.touches[0].clientX;
}



const startCheck = ()=>{
  window.addEventListener('touchmove', consoleFunction);

}

const stopCheck = () => {
  window.removeEventListener('touchmove', consoleFunction);
}

  const categoryBtnClick = ()=>{
    rotated = !rotated;
    if(dropDownIcon.value){
      dropDownIcon.value.style.transform = rotated ? 'rotate(180deg)' : 'rotate(0deg)'
      document.body.style.overflow=rotated ? 'hidden' : '';
      categoryMenu.value.style.left = rotated ? '5%' : '-100%'
    }
    console.log('Hello world!')
  }


  const products = ref([]);

  const fetchProducts = async () =>  {
    const response = await fetch('https://67ca14a7102d684575c46d34.mockapi.io/api/products')
    const data = await response.json()
    products.value = data;
  }

  onMounted(()=>{
    fetchProducts();
  })


  onMounted(()=>{

  })

</script>
