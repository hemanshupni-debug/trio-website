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
    services:" All Service", 
    work:"Our Work",
    interior:"Interior",
    about:"About",
    contact:"Contact", 
    title:"Global Leaders in Exhibition Industry",
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
    contactus: "Contact Us",

    design_card:"Design",
design_card_text:"Turning ideas into stunning exhibition stall concepts.",

production:"Production",
production_text:"High-quality fabrication with top-notch materials.",

planning:"Planning",
planning_text:"Organised planning for smooth project execution.",

execution:"Execution",
execution_text:"Precise installation with on-time delivery.",

creativity:"Creativity",
creativity_text:"Unique ideas that bring your brand to life.",

teamwork:"Team Work",
teamwork_text:"Our team collaborates to deliver the best results.",
  craftsmanship: "Unrivaled craftsmanship",
  journey: "Seamless project journey",
  collaboration: "Strategic collaborations",

  precision_title: "Precision workmanship from studio to exhibit",
  precision_text1: "We craft all projects with quality control and smooth execution.",
  precision_text2: "With years of experience, we deliver top-tier results.",
  about_btn: "ABOUT US →",
  process_sub:"Discover our streamlined approach to creating booths that stand out",
cta_title: "Have a project?<br>Get in touch today",
cta_text: "We are always ready to discuss new projects, creative ideas or opportunities to be part of your vision.",
info_title: "Exhibition Stand Project Management and Stand Design Expertise",

info_text1: "Delivering a successful trade show experience involves much more than setting up a booth; it requires creative direction, logistical precision, and a deep understanding of brand storytelling. We provide end-to-end exhibition stand project management services.",

info_text2: "From creative stand design and technical planning to fabrication, installation, and dismantling, we ensure every detail is executed flawlessly to create a powerful impression on the show floor.",

info_subtitle: "Creative Stand Design for Impactful Trade Show Experiences",

info_text3: "A strong stand design transforms a simple floor space into a stage for your brand story. We blend aesthetics, strategy, and functionality to create immersive environments that attract and engage visitors.",
customer_ratings: "Customer Ratings",
customer_review_text: "Be the first customer to write a review!",
give_review: "Give Review",
footer_desc: "We create premium exhibition booths with creative design, flawless production and complete project management.",

footer_address: "Mumbai, India<br>Exhibition Services Worldwide",

quick_links: "Quick Links",
trade_cities: "Trade Show Cities",

india: "India",
dubai: "Dubai",
thailand: "Thailand",
china: "China",
usa: "USA",

copyright: "© 2026 TRIO EXHIBITIONS . ALL rights reserved.",
terms: "Terms of Use",
privacy: "Privacy Policy",
all_services: "All Services",

interior_menu: "Interior",
design_menu: "Design",

exhibition_stand: "Exhibition Stand",
exhibition_booth: "Exhibition Booth",

miami_booth: "Miami Booth",
thailand_booth: "Thailand Booth",
dubai_booth: "Dubai Booth",
feature: "Feature",
others: "Others",

end_service: "End-to-End Service",
end_service_trio: "✔ Complete booth handling",
end_service_other: "✖ Limited services",

design_quality: "Design Quality",
design_quality_trio: "✔ Custom & creative design",
design_quality_other: "✖ Basic templates",

delivery_time: "On-Time Delivery",
delivery_time_trio: "✔ Fast execution",
delivery_time_other: "✖ Delays possible",

communication: "Communication",
communication_trio: "✔ Direct support",
communication_other: "✖ Slow response",

pricing: "Pricing",
pricing_trio: "✔ Transparent pricing",
pricing_other: "✖ Hidden charges",

support: "Support",
support_trio: "✔ Full event support",
support_other: "✖ Limited help",
choosing_trio: "Choosing TRIO for Your Exhibition Booth",

choosing_trio_desc:
"TRIO specializes in designing and building exhibition booths that reflect your brand identity and create a strong impact. Our goal is to deliver creative, functional, and high-quality booth solutions.",

creative_design:
"Creative Design: Unique booth concepts tailored to your brand.",

professional_team:
"Professional Team: Skilled designers and execution experts.",

end_to_end_service:
"End-to-End Service: From design to installation.",

fast_execution:
"Fast Execution: On-time delivery without compromise.",

client_focus:
"Client Focus: We prioritize your business goals.",

modern_technology:
"Modern Technology: Use of latest exhibition trends.",

trio_final_text:
"With TRIO, you don’t just get a booth — you get a complete exhibition experience that helps your brand stand out.",
booth_title: "How to Choose the Right Exhibition Booth with TRIO?",

booth_desc1:
"Choosing the right exhibition booth is one of the most important decisions for any brand participating in a trade show.",

booth_desc2:
"There are several important factors to consider when selecting the perfect booth design with TRIO:",

goal_focus:
"Understanding Business Goals: The first step is to clearly define your objectives.",

audience_focus:
"Target Audience Focus: A successful booth must connect with the right audience.",

unique_design:
"Creative & Unique Design: Standing out in a crowded exhibition is essential.",

budget_planning:
"Budget Planning: Managing costs is crucial.",

functionality:
"Functionality & Experience: A booth should not only look good but also function smoothly.",

technology_use:
"Use of Modern Technology: Digital screens and interactive displays enhance engagement.",

execution_time:
"On-Time Execution: TRIO ensures timely delivery and setup.",

booth_final:
"With TRIO, you don’t just get a booth design — you get a complete exhibition solution.",
faq1_q: "What makes TRIO’s custom booths different?",
faq1_a: "TRIO offers unique, fully customized booth designs with high-quality materials and complete end-to-end solutions.",

faq2_q: "How does TRIO handle the booth design process?",
faq2_a: "We follow a structured process including concept design, approvals, production, and final installation.",

faq3_q: "How long does it take TRIO to deliver a booth?",
faq3_a: "The timeline depends on project size, but TRIO ensures fast execution and on-time delivery.",

faq4_q: "Does TRIO provide installation and dismantling services?",
faq4_a: "Yes, TRIO offers complete on-site support including installation and dismantling.",

faq5_q: "Can TRIO customize booths for different industries?",
faq5_a: "Absolutely, we design booths tailored to your industry, brand goals, and target audience.",

faq6_q: "Why should I choose TRIO for my exhibition booth?",
faq6_a: "TRIO combines creative design, professional execution, and reliable support to deliver impactful exhibition experiences.",

contact_us_btn: "Contact Us",
interior_title:"Interior Design",
interior_text:"Step into a world where the art of interior design is meticulously crafted to bring together timeless elegance and cutting-edge modern innovation.",
start_project:"Start Project",
interior_services:"Our Interior Services ",
interior_services_desc:"We create modern, elegant and functional interior spaces tailored to your needs. ",
residential_design: "Residential Design",
residential_design_text: "Beautiful and comfortable home interiors crafted with perfection.",

commercial_spaces: "Commercial Spaces",
commercial_spaces_text: "Professional and stylish office & workspace interiors.",

visualization_3d: "3D Visualization",
visualization_3d_text: "See your dream space before it becomes reality.",
recent_projects: "Our Recent Projects",
recent_projects_desc: "Explore some of our latest interior design transformations.",

living_room: "Luxury Living Room",
living_room_desc: "Modern & Elegant Design",

office_workspace: "Office Workspace",
office_workspace_desc: "Professional Interior",

bedroom_design: "Bedroom Design",
bedroom_design_desc: "Comfort & Style",

kitchen_interior: "Kitchen Interior",
kitchen_interior_desc: "Clean & Functional",
view_all_projects: "➝ View All Projects",

trio_interiors: "TRIO INTERIORS",

luxury_title: "Designing Spaces That Inspire Living",

luxury_desc:
"From luxury residences to modern commercial environments, we create interiors that combine functionality, elegance and timeless design.",

start_project: "Start Your Project →",
luxury_word: "LUXURY",
interior_word: "INTERIOR",
design_word: "DESIGN",
experience_word: "EXPERIENCE",
luxury_homes: "Luxury Homes",
corporate_offices: "Corporate Offices",
hotels: "Hotels",
restaurants: "Restaurants",
retail_stores: "Retail Stores",
villas: "Villas",
modern_apartments: "Modern Apartments",
designer_kitchens: "Designer Kitchens",
luxury_bedrooms: "Luxury Bedrooms",
living_rooms: "Living Rooms",
meeting_rooms: "Meeting Rooms",
cafes: "Cafes",
penthouses: "Penthouses",
showrooms: "Showrooms",
luxury_bathrooms: "Luxury Bathrooms",
premium_villas: "Premium Villas",
why_choose_trio_interiors: "Why Choose TRIO Interiors",

projects_completed: "Projects Completed",

happy_clients: "Happy Clients",

years_experience: "Years Experience",

custom_design: "Custom Design",
dream_space_title: "Let's Design Your Dream Space",

dream_space_desc:
"Luxury interiors crafted with creativity, precision and timeless elegance.",

start_project_cta: "Start Your Project",
ai_planner_title: "AI Interior Design Planner",

your_name: "Your Name",
email_address: "Email Address",

room_type: "Room Type",
living_room: "Living Room",
bedroom: "Bedroom",
kitchen: "Kitchen",
office: "Office",

area_sqft: "Area (Sq Ft)",

budget: "Budget",

style: "Style",
modern: "Modern",
luxury: "Luxury",
minimalist: "Minimalist",
classic: "Classic",

free_consultation: "Get Free Design Consultation",
exhibition_design: "Exhibition Design",

design_desc1:
"At TRIO Exhibitions, we specialize in creating impactful exhibition booth designs that help brands stand out globally. From concept to execution, we deliver complete solutions tailored to your business goals.",

design_desc2:
"Our expert team focuses on creativity, functionality, and brand storytelling to ensure your exhibition presence leaves a lasting impression.",

global_brands:
"Building Exhibits For Global Brands",

global_brands_desc:
"We have successfully delivered exhibition booths across Dubai, USA, Thailand, and India. Our designs combine innovation and practicality to maximize visitor engagement.",

custom_booth_design:
"Custom Exhibition Booth Design",

project_management:
"Complete Project Management",

fabrication_installation:
"Fabrication & Installation",

worldwide_execution:
"Worldwide Execution",

first_name: "First Name",
last_name: "Last Name",
email: "Email",
phone_number: "Phone Number",
company_name: "Company Name",

reason_contacting: "Reason for Contacting Us",
exhibition_design: "Exhibition Design",
booth_fabrication: "Booth Fabrication",
installation: "Installation",

project_message: "Tell us about your project...",
submit: "Submit",
exhibition_design_title: "Exhibition Design That Builds Brands",
exhibition_design_desc1:
"At TRIO Exhibitions, we specialize in delivering world-class exhibition booth designs that help brands stand out globally. Our approach combines creativity, functionality, and strategic planning to ensure every booth creates a lasting impression.",
global_expertise_title: "Global Exhibition Expertise",
global_expertise_desc1:
"TRIO has successfully delivered projects across Dubai, USA, Thailand, and India. Our global presence allows us to understand different market needs and provide customized booth solutions.",
global_expertise_desc2:
"We manage everything from fabrication to installation, ensuring smooth execution and premium quality standards worldwide.",
creative_functional_title: "Creative & Functional Booth Design",

creative_functional_desc1:
"Our designs are not just visually appealing but also strategically planned to maximize visitor engagement. We create interactive and immersive experiences that connect your brand with your audience.",

creative_functional_desc2:
"With strong focus on space utilization, lighting, and brand storytelling, we ensure your booth attracts and retains visitors.",
end_to_end_project_management: "End-to-End Project Management",

end_to_end_project_management_desc1:
"TRIO provides complete exhibition solutions including planning, designing, fabrication, logistics, and on-site installation. Our team ensures everything runs smoothly from start to finish.",

end_to_end_project_management_desc2:
"We focus on delivering projects on time while maintaining the highest quality standards to ensure your success at every exhibition.",
why_choose_trio_exhibitions: "Why Choose TRIO Exhibitions",

why_choose_trio_exhibitions_desc:
"We combine creativity, technology, and strategic planning to deliver exhibition stands that leave a lasting impact.",

innovative_booth_designs:
"Innovative booth designs",

end_to_end_project_management:
"End-to-end project management",

global_execution_capability:
"Global execution capability",

high_quality_materials_finishing:
"High-quality materials and finishing",
managing_exhibition_logistics_desc1:
"TRIO handles complete logistics management including transportation, storage, and on-site coordination to ensure your exhibition runs smoothly.",

managing_exhibition_logistics_desc2:
"Our team ensures every exhibition stand component arrives safely and is installed with precision, allowing you to focus on engaging with your audience and growing business opportunities.",
managing_exhibition_logistics:"Managing Exhibition Logistics",
exhibition_booth_design: "Exhibition Booth Design",

exhibition_booth_design_desc1:
"At TRIO Exhibitions, we specialize in creating visually stunning and highly functional exhibition booths that attract visitors and build strong brand presence.",

exhibition_booth_design_desc2:
"Our booth designs are strategically planned to maximize engagement, ensuring smooth visitor flow and impactful product presentation.",

exhibition_booth_design_desc3:
"From lighting and structure to branding and layout, every element is crafted to deliver a premium exhibition experience.",
booth_design_ideas: "Booth Design Ideas",

modern_booth:
"Modern Booth: Clean layout with LED lighting and digital screens.",

eco_booth:
"Eco Booth: Sustainable materials with natural textures.",

luxury_booth:
"Luxury Booth: Premium finish with elegant lighting.",

interactive_booth:
"Interactive Booth: AR/VR, touchscreens for engagement.",
exhibition_booth_design_strategy: "Exhibition Booth Design & Strategy",

exhibition_booth_design_strategy_desc1:
"Exhibition booths play a critical role in representing a brand at trade shows and global exhibitions. A well-designed booth not only attracts attention but also communicates the brand message effectively to potential customers.",

exhibition_booth_design_strategy_desc2:
"At TRIO Exhibitions, we focus on creating immersive booth environments that combine creativity, functionality, and brand storytelling. Our designs are crafted to ensure maximum visitor engagement and seamless navigation.",

exhibition_booth_design_strategy_desc3:
"A strategic booth layout ensures that visitors can easily explore products and services without confusion. Clear pathways, dedicated display areas, and interactive zones enhance the overall visitor experience.",

exhibition_booth_design_strategy_desc4:
"Lighting is one of the most important elements in booth design. Proper lighting not only highlights key areas but also creates a welcoming and professional atmosphere that attracts more footfall.",

exhibition_booth_design_strategy_desc5:
"In addition, seating areas, meeting spaces, and reception counters help create a comfortable environment for discussions and business interactions.",

exhibition_booth_design_strategy_desc6:
"Modular booth designs provide flexibility and adaptability, allowing brands to reuse and customize their setups for different exhibitions across the world.",

exhibition_booth_design_strategy_desc7:
"Sustainability is also a growing trend in exhibition design. Using eco-friendly materials and energy-efficient lighting solutions reflects a brand’s commitment to environmental responsibility.",

exhibition_booth_design_strategy_desc8:
"Overall, a successful exhibition booth design helps companies strengthen their brand identity, generate leads, and create lasting impressions in competitive exhibition environments.",
booth_design_ideas_concepts: "Booth Design Ideas & Concepts",
booth_design_intro:
"Choosing the right booth design style is essential for aligning with your brand identity and exhibition goals. Different styles create different impressions and attract different types of audiences.",
nature_booth:
"Nature-Themed Booth: Uses greenery, wooden textures, and natural colors to create an eco-friendly and calming environment.",
technology_booth:
"Technology Experience Booth: Incorporates LED screens, touch displays, and AR/VR to provide an interactive digital experience.",
minimalist_booth:
"Minimalist Booth Design: Focuses on clean layouts, neutral colors, and simplicity for a modern and elegant look.",
luxury_booth:
"Luxury Booth Concept: Uses premium materials, lighting, and finishes to create a high-end brand perception.",
open_concept_booth:
"Open Concept Booth: Removes barriers and creates a welcoming layout that encourages visitors to enter freely.",
booth_design_conclusion1:
"Each booth design should be tailored according to the brand’s goals, target audience, and exhibition location to ensure maximum impact and engagement.",
booth_design_conclusion2:
"By combining creative design with smart planning, TRIO Exhibitions delivers booth solutions that stand out and perform effectively in any trade show environment.",
miami_hero_title: "Custom Exhibition Booths in Miami",
miami_hero_desc:
"End-to-End Design, Build, Installation & Dismantle by TRIO",
miami_work_title: "Our Work in Miami",
why_exhibit_miami:
"Why Exhibit With a Custom Booth in Miami?",
why_exhibit_miami_desc:
"TRIO delivers high-quality custom exhibition booths in Miami. We create modern, eye-catching designs.",
custom_booth_design:
"Custom Booth Design",
visualization_3d:
"3D Visualization",
fabrication_build:
"Fabrication & Build",
installation_dismantle:
"Installation & Dismantle",
whats_included:
"What's Included",
design_title:
"Design",
design_desc:
"Unique booth concepts.",
fabrication_title:
"Fabrication",

fabrication_desc:
"High quality materials.",
installation_title:
"Installation",
installation_desc:
"Complete setup support.",
logistics_title:
"Logistics",
logistics_desc:
"Transport & handling.",
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
    contactus: "联系我们",
     design_card: "设计",
  design_card_text: "将创意转化为令人惊艳的展览展位概念。",

  production: "生产制造",
  production_text: "采用优质材料进行高品质制作。",

  planning: "项目规划",
  planning_text: "有序规划，确保项目顺利执行。",

  execution: "项目执行",
  execution_text: "精准安装，准时交付。",

  creativity: "创意设计",
  creativity_text: "独特创意让您的品牌脱颖而出。",

  teamwork: "团队合作",
  teamwork_text: "团队协作，为客户提供最佳成果。",
   craftsmanship: "卓越工艺",
  journey: "无缝项目执行",
  collaboration: "战略合作伙伴关系",

  precision_title: "从设计工作室到展会现场的精湛工艺",
  precision_text1: "我们通过严格的质量控制和顺畅的执行来完成每一个项目。",
  precision_text2: "凭借多年的行业经验，我们提供卓越的成果。",
  about_btn: "关于我们 →",
process_sub: "了解我们高效的工作流程，打造独具特色、引人注目的展览展位。",
cta_title: "有项目需求？<br>立即联系我们",
cta_text: "我们随时准备与您讨论新的项目、创意想法以及合作机会，共同实现您的愿景。",
info_title: "展览展台项目管理与展台设计专业服务",

info_text1: "成功的贸易展览不仅仅是搭建一个展位，还需要创意策划、精准执行以及对品牌故事的深入理解。我们提供从概念到落地的一站式展览展台项目管理服务。",

info_text2: "从创意展台设计、技术规划到制作、安装和拆除，我们确保每一个细节都得到完美执行，为您的品牌在展会现场创造深刻印象。",

info_subtitle: "打造具有影响力的创意展台设计",

info_text3: "优秀的展台设计能够将普通的展示空间转变为品牌展示舞台。我们结合美学、策略与功能性，打造沉浸式展示环境，吸引并有效互动参观者。",
customer_ratings: "客户评分",
customer_review_text: "成为第一位撰写评价的客户！",
give_review: "提交评价",
footer_desc: "我们提供高端展览展位设计、制作及完整项目管理服务。",

footer_address: "印度孟买<br>全球展览服务",

quick_links: "快速链接",
trade_cities: "展会城市",

india: "印度",
dubai: "迪拜",
thailand: "泰国",
china: "中国",
usa: "美国",

copyright: "© 2026 TRIO EXHIBITIONS 版权所有。",
terms: "使用条款",
privacy: "隐私政策",
all_services: "所有服务",

interior_menu: "室内设计",
design_menu: "设计",

exhibition_stand: "展览展台",
exhibition_booth: "展览展位",

miami_booth: "迈阿密展位",
thailand_booth: "泰国展位",
dubai_booth: "迪拜展位",
feature: "特点",
others: "其他公司",

end_service: "一站式服务",
end_service_trio: "✔ 完整展位服务",
end_service_other: "✖ 服务有限",

design_quality: "设计质量",
design_quality_trio: "✔ 定制创意设计",
design_quality_other: "✖ 基础模板",

delivery_time: "准时交付",
delivery_time_trio: "✔ 快速执行",
delivery_time_other: "✖ 可能延迟",

communication: "沟通效率",
communication_trio: "✔ 直接支持",
communication_other: "✖ 响应缓慢",

pricing: "价格",
pricing_trio: "✔ 透明报价",
pricing_other: "✖ 隐藏费用",

support: "支持服务",
support_trio: "✔ 全程活动支持",
support_other: "✖ 支持有限",
choosing_trio: "选择 TRIO 打造您的展览展位",

choosing_trio_desc:
"TRIO 专注于设计和搭建能够体现品牌形象并产生强大影响力的展览展位。我们的目标是提供富有创意、实用且高品质的展位解决方案。",

creative_design:
"创意设计：根据您的品牌量身定制独特展位方案。",

professional_team:
"专业团队：经验丰富的设计师和执行专家。",

end_to_end_service:
"一站式服务：从设计到安装全程负责。",

fast_execution:
"高效执行：确保准时交付，绝不妥协。",

client_focus:
"客户至上：始终以您的业务目标为核心。",

modern_technology:
"现代技术：采用最新展览趋势与技术。",

trio_final_text:
"选择 TRIO，您获得的不仅仅是一个展位，而是一整套帮助品牌脱颖而出的展览体验。",
booth_title: "如何选择适合您的 TRIO 展览展位？",

booth_desc1:
"对于参加展会的品牌而言，选择合适的展览展位是最重要的决策之一。",

booth_desc2:
"选择 TRIO 展位设计时，需要考虑以下几个关键因素：",

goal_focus:
"明确业务目标：首先要清晰定义您的参展目标。",

audience_focus:
"目标客户定位：成功的展位必须吸引并连接正确的受众。",

unique_design:
"创意与独特设计：在竞争激烈的展会上脱颖而出至关重要。",

budget_planning:
"预算规划：合理控制成本非常重要。",

functionality:
"功能与体验：展位不仅要美观，还要具备良好的实用性。",

technology_use:
"现代技术应用：数字屏幕和互动展示能够提升参与度。",

execution_time:
"准时执行：TRIO 确保按时完成搭建与交付。",

booth_final:
"选择 TRIO，您获得的不只是展位设计，而是一整套专业展览解决方案。",
faq1_q: "TRIO 的定制展位有什么不同？",
faq1_a: "TRIO 提供独特的全定制展位设计，采用高品质材料，并提供完整的一站式服务。",

faq2_q: "TRIO 如何处理展位设计流程？",
faq2_a: "我们遵循概念设计、方案确认、制作生产和最终安装的完整流程。",

faq3_q: "TRIO 需要多长时间完成展位交付？",
faq3_a: "时间取决于项目规模，但 TRIO 始终保证快速执行和准时交付。",

faq4_q: "TRIO 是否提供安装和拆除服务？",
faq4_a: "是的，TRIO 提供完整的现场支持，包括安装和拆除服务。",

faq5_q: "TRIO 可以为不同行业定制展位吗？",
faq5_a: "当然可以，我们会根据您的行业、品牌目标和目标客户定制展位。",

faq6_q: "为什么应该选择 TRIO 作为展位合作伙伴？",
faq6_a: "TRIO 结合创意设计、专业执行和可靠支持，为您打造卓越的展览体验。",


contact_us_btn: "联系我们",
interior_title:"室内设计",
interior_text:"走进一个将永恒优雅与现代创新完美融合的室内设计世界。",
start_project:"开始项目",
interior_services:"我们的室内设计服务",
interior_services_desc:"我们打造现代、优雅且实用的室内空间，满足您的需求。",
residential_design: "住宅设计",
residential_design_text: "打造美观舒适、精心设计的家居空间。",

commercial_spaces: "商业空间",
commercial_spaces_text: "专业且时尚的办公室与工作空间室内设计。",

visualization_3d: "3D 可视化设计",
visualization_3d_text: "在项目落地之前，提前预览您的梦想空间。",
recent_projects: "我们的近期项目",
recent_projects_desc: "探索我们最新完成的室内设计改造项目。",

living_room: "豪华客厅",
living_room_desc: "现代与优雅设计",

office_workspace: "办公空间",
office_workspace_desc: "专业室内设计",

bedroom_design: "卧室设计",
bedroom_design_desc: "舒适与时尚",

kitchen_interior: "厨房设计",
kitchen_interior_desc: "整洁且实用",
view_all_projects: "➝ 查看所有项目",

trio_interiors: "TRIO 室内设计",

luxury_title: "打造启发生活灵感的空间",

luxury_desc:
"从豪华住宅到现代商业空间，我们打造兼具功能性、优雅感与永恒设计的室内环境。",

start_project: "开始您的项目 →",
luxury_word: "豪华",
interior_word: "室内",
design_word: "设计",
experience_word: "体验",
luxury_homes: "豪华住宅",
corporate_offices: "企业办公室",
hotels: "酒店",
restaurants: "餐厅",
retail_stores: "零售店",
villas: "别墅",
modern_apartments: "现代公寓",
designer_kitchens: "设计师厨房",
luxury_bedrooms: "豪华卧室",
living_rooms: "客厅",
meeting_rooms: "会议室",
cafes: "咖啡馆",
penthouses: "顶层公寓",
showrooms: "展厅",
luxury_bathrooms: "豪华浴室",
premium_villas: "高端别墅",
why_choose_trio_interiors: "为什么选择 TRIO 室内设计",

projects_completed: "已完成项目",

happy_clients: "满意客户",

years_experience: "行业经验",

custom_design: "定制设计",
dream_space_title: "让我们设计您的梦想空间",

dream_space_desc:
"以创意、精准工艺和永恒优雅打造高端室内空间。",

start_project_cta: "开始您的项目",
ai_planner_title: "AI 室内设计规划师",

your_name: "您的姓名",
email_address: "电子邮箱",

room_type: "房间类型",
living_room: "客厅",
bedroom: "卧室",
kitchen: "厨房",
office: "办公室",

area_sqft: "面积（平方英尺）",

budget: "预算",

style: "风格",
modern: "现代风格",
luxury: "豪华风格",
minimalist: "极简风格",
classic: "经典风格",

free_consultation: "获取免费设计咨询",
exhibition_design: "展览设计",

design_desc1:
"在 TRIO Exhibitions，我们专注于打造具有影响力的展览展位设计，帮助品牌在全球范围内脱颖而出。从创意构思到项目执行，我们提供符合您业务目标的一站式解决方案。",

design_desc2:
"我们的专业团队专注于创意设计、功能规划和品牌故事呈现，确保您的展会形象给观众留下深刻印象。",

global_brands:
"为全球品牌打造卓越展台",
  global_brands_desc:
  "我们已成功在迪拜、美国、泰国和印度交付展览展台项目。我们的设计结合创新与实用性，最大限度地提升参观者参与度。",

  custom_booth_design:
  "✔️ 定制展览展台设计",

  project_management:
  "✔️ 全程项目管理",

  fabrication_installation:
  "✔️ 制作与安装",

  worldwide_execution:
  "✔️ 全球执行服务",
  first_name: "名字",
last_name: "姓氏",
email_placeholder: "电子邮箱",
phone_number: "电话号码",
company_name: "公司名称",

reason_contacting: "联系我们的原因",
exhibition_design_option: "展览设计",
booth_fabrication_option: "展台制作",
installation_option: "安装服务",

project_placeholder: "请告诉我们您的项目需求...",
submit_btn: "提交",
exhibition_design_title: "打造品牌价值的展览设计",
exhibition_design_desc1:
"在 TRIO Exhibitions，我们专注于打造世界级展览展位设计，帮助品牌在全球市场中脱颖而出。我们将创意、功能性和战略规划相结合，确保每一个展位都能给参观者留下深刻印象。",
exhibition_design_desc2:
"从创意概念开发到项目执行，我们专注于提供符合企业目标的高品质解决方案。我们的专业团队确保每一个细节都与您的品牌形象及目标受众需求保持一致。",
global_expertise_title: "全球展览服务经验",
global_expertise_desc1:
"TRIO 已成功在迪拜、美国、泰国和印度完成多个展览项目。凭借全球化服务经验，我们能够深入了解不同市场需求，并提供定制化展位解决方案。",
global_expertise_desc2:
"我们负责从展位制作到现场安装的全过程管理，确保项目顺利执行，并在全球范围内保持卓越的质量标准。",
creative_functional_title: "创意与功能兼备的展位设计",

creative_functional_desc1:
"我们的设计不仅注重视觉美感，更通过战略规划来提升观众互动体验。我们打造沉浸式和互动式展览空间，帮助您的品牌与目标受众建立更紧密的联系。",

creative_functional_desc2:
"通过优化空间利用、灯光设计以及品牌故事展示，我们确保您的展位能够吸引观众并保持他们的关注，从而提升品牌影响力。",
end_to_end_project_management: "一站式项目管理",
end_to_end_project_management_desc1: "TRIO 提供完整的展览解决方案，包括规划、设计、制作、物流以及现场安装。我们的团队确保从项目开始到结束的每一个环节都顺利进行。",
end_to_end_project_management_desc2: "我们专注于按时交付项目，同时保持最高质量标准，确保您在每一次展会中取得成功。",
types_exhibition_stands: "展台类型",

types_exhibition_stands_desc:
"在 TRIO Exhibitions，我们提供多种展览展台解决方案，以满足不同企业需求和活动环境。我们的展台设计旨在最大化品牌曝光度并提升观众互动体验。",

modular_exhibition_stands: "模块化展览展台",

modular_exhibition_stands_desc:
"模块化展台灵活、可重复使用且易于定制。它们可以根据不同展位尺寸和布局进行调整，非常适合经常参加多个展会的品牌。",

portable_exhibition_stands: "便携式展览展台",

portable_exhibition_stands_desc:
"便携式展台重量轻且易于运输，非常适合快速搭建。这类展台能够降低物流成本，同时保持专业的展示效果。",

custom_exhibition_stands: "定制展览展台",

custom_exhibition_stands_desc:
"完全根据您的品牌形象量身定制的展台设计，打造独特的展览体验，吸引更多参观者并提升品牌影响力。",
setup_exhibition_stands: "我们如何搭建展览展台",

setup_exhibition_stands_desc:
"我们的流程确保从概念设计到最终完成的每个阶段都顺利执行。我们专注于以精准和高效的方式交付高质量展台。",

planning_booth_layout:
"展位规划与布局设计",

material_selection_production:
"材料选择与制作",

installation_setup:
"现场安装与搭建",

lighting_technical_integration:
"灯光与技术系统整合",

quality_checks_testing:
"最终质量检查与测试",
why_choose_trio_exhibitions: "为什么选择 TRIO Exhibitions",

why_choose_trio_exhibitions_desc:
"我们将创意、技术与战略规划相结合，打造能够留下深刻印象的展览展台。",

innovative_booth_designs:
"创新展台设计",

end_to_end_project_management:
"一站式项目管理",

global_execution_capability:
"全球项目执行能力",

high_quality_materials_finishing:
"高品质材料与精细工艺",
managing_exhibition_logistics_desc1:
"TRIO 提供全面的物流管理服务，包括运输、仓储以及现场协调，确保您的展览活动顺利进行。",

managing_exhibition_logistics_desc2:
"我们的团队确保每个展台组件安全送达并精准安装，让您能够专注于与观众互动并拓展业务机会。",
managing_exhibition_logistics: "展会物流与现场管理",
exhibition_booth_design: "展览展台设计",

exhibition_booth_design_desc1:
"在 TRIO Exhibitions，我们专注于打造兼具视觉吸引力与功能性的展览展台，帮助品牌吸引更多参观者并提升品牌影响力。",

exhibition_booth_design_desc2:
"我们的展台设计经过战略性规划，以最大化观众互动效果，确保参观动线流畅并突出产品展示。",

exhibition_booth_design_desc3:
"从灯光、结构到品牌展示与空间布局，每一个细节都经过精心打造，为客户带来高端专业的展览体验。",
booth_design_ideas: "展台设计创意",

modern_booth:
"现代展台：简洁布局，配备 LED 灯光和数字显示屏。",

eco_booth:
"环保展台：采用可持续材料与自然纹理设计。",

luxury_booth:
"高端展台：精致饰面搭配优雅灯光效果。",

interactive_booth:
"互动展台：结合 AR/VR 技术和触摸屏，增强观众互动体验。",
exhibition_booth_design_strategy: "展览展台设计与策略",

exhibition_booth_design_strategy_desc1:
"展览展台在贸易展会和国际展览中对品牌展示起着至关重要的作用。优秀的展台设计不仅能够吸引观众的注意力，还能有效传达品牌价值与核心信息。",

exhibition_booth_design_strategy_desc2:
"在 TRIO Exhibitions，我们专注于打造沉浸式展台环境，将创意设计、功能性与品牌故事相结合。我们的设计旨在提升观众互动体验并确保流畅的参观动线。",

exhibition_booth_design_strategy_desc3:
"合理的展台布局能够帮助参观者轻松了解产品和服务。清晰的通道规划、专属展示区域以及互动体验区能够显著提升整体参观体验。",

exhibition_booth_design_strategy_desc4:
"灯光是展台设计中最重要的元素之一。恰当的灯光不仅能够突出重点展示区域，还能营造专业且具有吸引力的氛围，从而吸引更多参观者。",

exhibition_booth_design_strategy_desc5:
"此外，休息区、洽谈区以及接待台能够为客户和合作伙伴提供舒适的交流环境，促进商务沟通与合作。",

exhibition_booth_design_strategy_desc6:
"模块化展台设计具有高度灵活性和适应性，使品牌能够在全球不同展会中重复使用并根据需求进行定制调整。",

exhibition_booth_design_strategy_desc7:
"可持续发展已成为展览设计的重要趋势。采用环保材料和节能照明解决方案，体现了企业对环境责任和绿色发展的承诺。",

exhibition_booth_design_strategy_desc8:
"总体而言，成功的展台设计能够帮助企业强化品牌形象、获取潜在客户，并在竞争激烈的展览环境中留下深刻而持久的印象。",
booth_design_ideas_concepts: "展台设计理念与创意",
booth_design_intro:
"选择合适的展台设计风格对于符合品牌形象和展会目标至关重要。不同的设计风格能够传达不同的品牌印象，并吸引不同类型的观众。",
nature_booth:
"自然主题展台：采用绿植、木质纹理和自然色彩，打造环保且舒适的展示环境。",
technology_booth:
"科技体验展台：结合 LED 屏幕、触摸显示器以及 AR/VR 技术，为访客提供沉浸式数字互动体验。",
minimalist_booth:
"极简主义展台设计：通过简洁布局、中性色彩和现代风格，展现优雅与专业形象。",
luxury_booth:
"高端奢华展台：采用优质材料、精致灯光和高级饰面，塑造高端品牌形象。",
open_concept_booth:
"开放式展台设计：减少空间阻隔，打造开放友好的布局，吸引访客自由进入和交流。",
booth_design_conclusion1:
"每个展台设计都应根据品牌目标、目标受众以及展会地点进行定制，以确保最大的展示效果和观众参与度。",
booth_design_conclusion2:
"通过将创意设计与科学规划相结合，TRIO Exhibitions 为客户提供在任何展会环境中都能脱颖而出的高效展台解决方案。",
miami_hero_title: "迈阿密定制展览展台",
miami_hero_desc:
"TRIO 提供从设计、搭建、安装到拆除的一站式展览服务",
miami_work_title: "我们在迈阿密的项目案例",
why_exhibit_miami:
"为什么选择在迈阿密使用定制展台参展？",
why_exhibit_miami_desc:
"TRIO 在迈阿密提供高品质定制展览展台服务。我们打造现代化、引人注目的展台设计，帮助品牌脱颖而出。",
custom_booth_design:
"定制展台设计",
visualization_3d:
"3D 效果展示",
fabrication_build:
"制作与搭建",
installation_dismantle:
"安装与拆除",
on_time_delivery:
"准时交付",
whats_included:
"服务内容包括",
design_title:
"设计",
design_desc:
"独特的展台创意设计方案。",
fabrication_title:
"制作",
fabrication_desc:
"采用高品质材料制作。",
installation_title:
"安装",
installation_desc:
"提供完整的现场安装支持。",
logistics_title:
"物流",
logistics_desc:
"运输与现场协调服务。",




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




