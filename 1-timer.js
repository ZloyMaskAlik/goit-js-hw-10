import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as u,i as c}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]");let n=null;const l={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){m(t)}};u(s,l);function m(t){if(t[0]<Date.now()){o.disabled=!0,c.error({message:"Please choose a date in the future",messageColor:"#fff",position:"topRight",color:"#ef4040",close:!1,timeout:5e3});return}else n=t[0],o.disabled=!1}const h={intervalId:null,elements:{days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},start(){this.intervalId=setInterval(()=>{const t=n-Date.now(),e=this.convertMs(t);this.elements.days.textContent=this.pad(e.days),this.elements.hours.textContent=this.pad(e.hours),this.elements.minutes.textContent=this.pad(e.minutes),this.elements.seconds.textContent=this.pad(e.seconds)},1e3)},stop(){clearInterval(this.intervalId)},convertMs(t){const r=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:a,minutes:i,seconds:d}},pad(t){return String(t).padStart(2,"0")}};o.addEventListener("click",()=>{h.start(),o.disabled=!0,s.disabled=!0});
//# sourceMappingURL=1-timer.js.map
