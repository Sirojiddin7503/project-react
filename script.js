window.addEventListener('DOMContentLoaded',()=>{
    const button_group = document.querySelector(".tabheader__items"),
          buttons = document.querySelectorAll(".tabheader__item"),
          contentList = document.querySelectorAll(".tabcontent"),
          loader = document.querySelector(".loader");

          setTimeout(()=>{
              setTimeout(()=>{
                loader.style.display = 'none';
                },500);
                loader.style.opacity = '0';
          },2000)
          
          function hideTabContent(i){
              contentList.forEach((item)=>{
                  item.style.display = 'none'
              })

              buttons.forEach((item)=>{
                  item.classList.remove('tabheader__item_active')
              })
          }
          
          function showTabContent(i=0){
              contentList[i].style.display = 'block';
              buttons[i].classList.add("tabheader__item_active");
          }

          button_group.addEventListener('click',(e)=>{
            if (e.target.classList.contains("tabheader__item")) {
                buttons.forEach((item, idx)=> {
                    if(item === e.target){
                        hideTabContent();
                       showTabContent(idx);
                    }
                })
            }
          });

           hideTabContent();
           showTabContent();

           const deadline =  '2022-10-12';
           function getTimeRemaining(endtime){
               const timer = Date.parse(endtime) - new Date(),
               days = Math.floor(timer/(1000*60*60*24)),
               hours = Math.floor(timer/(1000*60*60)%24),
               minutes =  Math.floor(timer/(1000*60)%60),
               seconds = Math.floor((timer/1000)%60);
               
               return{days,timer, hours,minutes,seconds
    }
           }

           function getZero(num){
               if(num<10&&num>0){
                   return `0${num}`;
               }else{
                   return num;
               }
           }
           function setClock(selector, endtime){
               const htmlElem = document.querySelector(selector),
                     d = htmlElem.querySelector('#days');
                     h = htmlElem.querySelector('#hours');
                     m = htmlElem.querySelector('#minutes');
                     s = htmlElem.querySelector('#seconds');
                     let timerinterval = setInterval(updateClock,1000);
                     updateClock();
                     updateClock();
                     function updateClock(){
                         const date = getTimeRemaining(endtime);
                         if(date.timer<0){
                            d.innerHTML = 0;
                            h.innerHTML = 0;
                            m.innerHTML = 0;
                            s.innerHTML = 0;
                        }else{
                            d.innerHTML = getZero (date.days);
                            h.innerHTML = getZero (date.hours);
                            m.innerHTML = getZero (date.minutes);
                            s.innerHTML = getZero (date.seconds);
                        }
                         if(date.timer <= 0){
                             clearInterval(timerinterval)
                         }
                     }
           }
           setClock(".timer",deadline);
       
       /* Model */
       const modal = document.querySelector ('.modal'),
           dataTaggle = document.querySelectorAll ("[data-toggle]"),
           closeBtn = document.querySelector ('.modal__close');
           const openModolInterval = setTimeout(openModol,6000);

          dataTaggle.forEach((item)=>{
              item.addEventListener('click',openModol);
          })

           closeBtn.addEventListener ('click',hiddenModel);
           function openModol(){
            modal.classList.add ('show');
            document.body.style.overflowY ='hidden';
            clearTimeout(openModolInterval);
           }

           function hiddenModel(){
            modal.classList.remove('show');
            document.body.style.overflow ='';
           }

           modal.addEventListener('click',(e)=>{
                if(e.target ==modal){
                   hiddenModel();
                }
           });

           document.addEventListener('keydown', (e)=>{
               (e.code === 'Escape'&& modal.classList.contains)
               hiddenModel();
           });

         const box  = document.querySelectorAll('.offer__slide'),
                arroWR = document.querySelector('.offer__slider-next'),
                arroWL = document.querySelector('.offer__slider-prev'),
                current = document.querySelector("#current");
                let k = 0;
                let slideInterval;
                function intervalAgain(){
                  slideInterval = setInterval(arrowNextAutomatic,5000);
                };
                intervalAgain();
                function arrowNextAutomatic(){
                    delShow(k);
                      k++;
                         if(box.length <= k){
                         k=0;
                         }
                    showBox(k);      
                }
                arroWR.addEventListener('click', ()=>{
                    arrowNextAutomatic();
                    clearInterval (slideInterval);
                    intervalAgain();            
                });
                 
          arroWL.addEventListener('click',()=>{
            delShow(k);
            k--;
            if( 0 > k){
                k=4;
            }
            showBox(k);
            intervalAgain();
          });      

          function showBox (i=0){
            box[i].classList.add('show');
            current.innerHTML = `0${i+1}`;
          };

          function delShow(z){
              box[z].classList.remove("show");
              current.innerHTML = `0${z+1}`;
          }
          showBox();



           //Class

          const menu__field  = document.querySelector('.menu__field .container');

        class MenuCard {
            constructor(src, alt, title, desc, price) {
                this.src = src
                this.alt = alt
                this.title = title
                this.desc = desc
                this.price = price
                this.currentValue = 11000
                this.sum = this.changeToUZB()
            } 

            changeToUZB(){
                return this.currentValue * this.price
            }

            render(){
                const elem = document.createElement('div')

                elem.innerHTML = `
                <div class="menu__item">
                <img src="${this.src}" alt="${this.alt}" />
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.
                </div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                  <div class="menu__item-cost">Price</div>
                  <div class="menu__item-total"><span>${this.sum}</span> month</div>
                </div>
              </div>
                `;
                menu__field.append(elem)
            }
        }
     const card1= new MenuCard('img/tabs/1.png','vegy','Plan "Usual"','sirojiddin',10)
        card1.render();
        const card2= new MenuCard('img/tabs/2.jpg','vegy','Plan "Minimum"','sirojiddin',20)
        card2.render();
        const card3= new MenuCard('img/tabs/3.jpg','kino','Plan "Vip"','sirojiddin',30)
        card3.render();
});  