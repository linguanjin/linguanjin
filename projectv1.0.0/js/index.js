// 设置导航条的下拉菜单通栏显示
// $(function(){
// 获取ul标签在浏览器的水平位置
// var left = $(".tt_navbar_nav").offset().left;
// 获取可视区的宽度
// var width = window.innerWidth;
// 设置“目的地”的下拉菜单的宽度
// $(".tt_menu").css("width",width);
// })

// JS 监听页面尺寸的变化
// window.addEventListener('resize',function(){

// })


// 轮播图间隔的时间
$(function () {
    // console.log("test")
    // $('.index_banner').carousel({
    //     interval: 1000
    // })
    $('.index_banner').carousel(1000);
})

// 旅行类型中的轮播图
// 创建swiper实例
var mySwiper = new Swiper('.swiper', {
    //可选选项，自动滑动
    // autoplay: true,
    // 设置轮播方向 horizontal（水平）    vertical （垂直）
    // direction: 'horizontal',
    // 无缝衔接
    loop: true,

    // 切换图片
    slidesPerView: 6,  //一组有多少个图片
    slidesPerGroup: 1,// 每次切换多少个图片

})

// 一种方法：
// 定义变量记录当前图片的索引值
// var index = mySwiper.activeIndex;
// var len = $(".swiper-slide").length;
// // console.log(len);
// // 事件绑定
// $(".type_bannner .left").on('click',function(){
//     // console.log("test")
//     // console.log(mySwiper.activeIndex);
//     index--;
//     if(index < 1) {
//         index = 9;
//     }
//     console.log(index)
//     mySwiper.slideTo(index)
// })

// $(".type_bannner .right").on('click',function(){
//     // console.log("test")
//     // console.log(mySwiper.activeIndex);
//     index++;
//     if(index > 9) {
//         index = 1;
//     }
//     console.log(index)
//     mySwiper.slideTo(index)
// })