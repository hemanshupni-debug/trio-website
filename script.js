function scrollContact(){
  const el = document.getElementById("contact");
  if(el){
    el.scrollIntoView({
      behavior:"smooth"
    });
  }
}

// COUNTER
function counter(id,target){
  let el = document.getElementById(id);
  if(!el) return;

  let i=0;
  let int=setInterval(()=>{
    i++;
    el.innerText=i;
    if(i>=target) clearInterval(int);
  },20);
}

window.onload=()=>{
  counter("c1",18);
  counter("c2",250);
  counter("c3",1000);
};

const video = document.getElementById("heroVideo");
const slider = document.querySelector(".hero-slider");

if(video && slider){
  video.addEventListener("ended", () => {
    video.style.display = "none";
    slider.style.display = "block";
  });
}

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target') || 0;
    const count = +counter.innerText || 0;

    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target + "+";
    }
  };

  if(counter) updateCount();
});

const translations = {
  en: {
    home:"Home",
    services:"Service", 
    work:"Our Work",
    interior:"Interior",
    about:"About",
    contact:"Contact", 
    title: "Global Leaders in Brand Environments",
    subtitle: "End to End Design, Build, Installation & Dismantle",
    quote: "Get Quote",
    creative: "Creative Exhibition Stall Design & Execution",
    design_desc: "We design, build and deliver premium exhibition experiences",
    design: "Design",
    design_text: "From idea to reality with our custom-designed exhibition booths.",
    peace: "Peace of Mind",
    peace_text: "We align with your brand and budget.",
    install: "Installation",
    install_text: "Our team installs your booth seamlessly.",
    engage: "Engagement",
    engage_text: "Boost leads and create lasting impressions.",
    ourworks: "Our Works",
    workdesc: "We have completed some remarkable projects.",
    aboutus: "About us",
    about_text: "We are a team of experts.",
    process: "Our process",
    meeting: "Meeting and research",
    meeting_text: "We understand your goals.",
    design2: "Design and presentation",
    design2_text: "We create concepts.",
    delivery: "Delivery and installation",
    delivery_text: "We execute everything smoothly.",
    contactus: "Contact Us"
  },

  cn: {
    home : "首页",
    services : "服务",
     work :"我们的作品",
     interior : "室内设计",
     about : "关于我们",
     contact : "联系我们",
    title:"全球领先的品牌环境解决方案专家",
    subtitle: "从设计到搭建、安装与拆除的一站式服务",
    quote: "获取报价",
    creative: "创意展览展位设计与执行",
    design_desc: "我们提供高端展览体验",
    design: "设计",
    design_text: "从概念到现实的展位设计。",
    peace: "省心服务",
    peace_text: "我们根据您的预算与品牌执行。",
    install: "安装",
    install_text: "专业团队无缝安装。",
    engage: "互动",
    engage_text: "提升客户参与度。",
    ourworks: "我们的项目",
    workdesc: "我们完成了许多优秀项目",
    aboutus: "关于我们",
    about_text: "我们是一支专业团队。",
    process: "我们的流程",
    meeting: "沟通与调研",
    meeting_text: "了解您的目标。",
    design2: "设计与展示",
    design2_text: "打造专属方案。",
    delivery: "执行与安装",
    delivery_text: "高效完成项目。",
    contactus: "联系我们"
  }
};

// LANGUAGE BUTTON SAFE
const enBtn = document.getElementById("lang-en");
const cnBtn = document.getElementById("lang-cn");

if(enBtn) enBtn.onclick = () => changeLang("en");
if(cnBtn) cnBtn.onclick = () => changeLang("cn");

function changeLang(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

// MUSIC
let isPlaying = false;

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  if (!music || !btn) return;

  if (!isPlaying) {
    music.play();
    btn.innerText = "🔇";
    isPlaying = true;
  } else {
    music.pause();
    btn.innerText = "🔊";
    isPlaying = false;
  }
}

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("active");
}
// FAQ TOGGLE
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});




document.querySelectorAll('.dropdown > a').forEach(item => {
  item.addEventListener('click', function(e) {
    if(window.innerWidth <= 768){
      e.preventDefault();
      this.parentElement.classList.toggle('active');
    }
  });
});


function toggleDropdown(e){
e.preventDefault();
e.target.parentElement.classList.toggle("open");
}




