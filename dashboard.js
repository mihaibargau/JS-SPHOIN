var slider = document.getElementById('slider');
slider.addEventListener('input', sliderChange);

function sliderChange()
{
    console.log(this.value);
}