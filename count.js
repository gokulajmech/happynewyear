
let count=document.createElement('div');
let imgs=document.createElement('img');
imgs.setAttribute('class','size-card')
setTimeout(()=>{
  count.innerText=10;
  
  setTimeout(()=>{
    count.innerText=9;
    
    setTimeout(()=>{
    count.innerText=8;
      setTimeout(()=>{
    count.innerText=7;
        setTimeout(()=>{
    count.innerText=6;
          setTimeout(()=>{
    count.innerText=5;
            setTimeout(()=>{
    count.innerText=4;
              setTimeout(()=>{
    count.innerText=3;
                setTimeout(()=>{
    count.innerText=2;
                  setTimeout(()=>{
    count.innerText=1;
                    setTimeout(()=>{
    // count.innerText="HAPPY NEW YEAR";
                      imgs.setAttribute('src','https://i1.wp.com/www.wordzz.com/wp-content/uploads/2018/12/Happy-New-Year-Images-Gif.gif?ssl=1');
                    
                       count.append(imgs);
                     
  },1000);
  },1000);
  },1000);
  },1000);
  },1000);
  },1000);
  },1000);
  },1000);
      
  },1000);
    
  },1000);
  
},1000);
// count.style.color="white";
count.setAttribute('class','content');

document.body.append(count);

 