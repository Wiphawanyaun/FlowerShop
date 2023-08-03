
const splide = new Splide('.splide',{
      type: 'slide', //slide, loop, fade
      // padding: { y: 10 }, //css values
      gap: '4.5rem', //1 rem default
      // rewind: true,
      speed: 500, //transition in milliseconds
      // fixedWidth: '10vw',
      // // width: '100vw',
      perPage: 1,
      // start: 3,
      autoWidth:true,
      perMove: 1,
      // autoplay: true,
      // interval: 3000,
      // arrows: false,
      // drag   : false,
      pagination: false,
      // pauseOnHover: true,
      // wheel: true,

});splide.mount();

const splide1 = new Splide('#splide1',{
      type: 'slide', //slide, loop, fade
      // padding: { y: 10 }, //css values
      gap: '4.5rem', //1 rem default
      // rewind: true,
      speed: 500, //transition in milliseconds
      // fixedWidth: '10vw',
      // // width: '100vw',
      perPage: 1,
      // start: 3,
      autoWidth:true,
      perMove: 1,
      // autoplay: true,
      // interval: 3000,
      arrows: false,
      // drag   : false,
      // pagination: false,
      // pauseOnHover: true,
      // wheel: true,
});splide1.mount();








