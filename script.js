
new Splide('#box-catalog').mount();
document.addEventListener('click', function () {
      new Splide('#box-catalog', {
            fixedWidth: 400,
            perPage:3,
            drag:false,

      }).mount();
});








