let button1=document.getElementById('btn-1');
  let button2=document.getElementById('btn-2');
  let interval;

   button1.addEventListener('click',startcolorchange);
   button2.addEventListener('click',stopColorChange);

   function startcolorchange()
   {
    interval=setInterval(changeBackgroundColor,1000);//body color change  every 1second
   }
   function stopColorChange() {
            clearInterval(interval);
        }

        function changeBackgroundColor() {
            // Generate random RGB values
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            // Set body background color
            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }