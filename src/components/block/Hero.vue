<template>
<div class="bg-[#F2F0FF] flex">
    <img src="@/assets/img/lamp.png" class="inline" alt="lamp">
    <div class="container flex justify-between ml-[0]">
        <div class="pt-[203px] pb-[168px]">
            <p class="font-['Lato']
            text-[16px]
            font-bold
            leading-[28px]
            text-[#FB2E86]  
            mt-[12px]
            ">Best Furniture For Your Castle....</p>
            <h3 class="font-['Josefin Sans']
            text-[53px]
            font-bold
            leading-[82px] 
            tracking-0.015em
            text-[#000]
            w-[644px]
            ">New Furniture Collection
                Trends in 2020</h3>
            <p class="font-['Lato']
            text-[16px]
            font-bold
            leading-[28px]
            text-[#8A8FB9]
            mt-[12px]
            mb-[27px]
            w-[559px]
            ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.</p>
            <button class="px-[40px] 
            py-[16px] 
            bg-[#FB2E86]
            font-['Josefin Sans']
            text-[17px]
            leading-[20px]
            tracking-0.02em
            text-white
            ">Shop Now</button>
        </div>
        <div class="pt-[99px] pb-[36px] relative">
           <img src="../../assets/img/Ellipse60.png" class="absolute top-[76px] right-[-42px]" alt="">
           <img src="../../assets/img/Ellipse61.png" class="absolute top-[108px] right-[33px]" alt="">
            <img src="../../assets/img/armchair.png"  alt="">
            <img src="../../assets/img/Group130.png" class="absolute top-[92px] right-[-92px]" alt="">
        </div>
        <div class="example-pagination-block">
  
  </div>
    </div>
     <div class="example-pagination-block">
    <div class="example-demonstration"></div>
    <el-pagination layout="prev, pager, next" :total="50" />
    
  </div>
  
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
