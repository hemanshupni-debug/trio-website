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
our_services:
"Our Services",

booth_design:
"Booth Design",
design_3d:
"3D Design",

fabrication:
"Fabrication",
installation:
"Installation",

logistics:
"Logistics",
storage:
"Storage",
faqs:
"FAQs",
faq_custom_booth_question:
"Why choose custom booth?",

faq_custom_booth_answer:
"Custom booths attract more visitors and improve branding.",

faq_full_service_question:
"Do you provide full service?",

faq_full_service_answer:
"Yes, TRIO provides complete exhibition solutions.",
thailand_booths_title:
"Custom Exhibition Booths in Thailand",
thailand_booths_desc:
"Creative booth solutions for exhibitions across Thailand",
our_work_thailand:
"Our Work in Thailand",
why_exhibit_thailand:
"Why Exhibit in Thailand with TRIO?",

why_exhibit_thailand_desc:
"We create engaging and cost-effective booth experiences in Thailand.",
creative_booth_ideas:
"Creative Booth Ideas",
affordable_solutions:
"Affordable Solutions",
full_project_management:
"Full Project Management",
on_time_execution:
"On-time Execution",
local_support:
"Local Support",
whats_included:
"What's Included",
concept_title:
"Concept",
concept_desc:
"Unique booth concepts for your brand.",
production_title:
"Production",
production_desc:
"Strong and durable build quality.",

setup_title:
"Setup",
setup_desc:
"Quick and efficient installation.",

support_title:
"Support",
support_desc:
"On-ground assistance during event.",
our_services:
"Our Services",

booth_design:
"Booth Design",
design_3d:
"3D Design",
fabrication:
"Fabrication",
installation:
"Installation",
logistics:
"Logistics",

storage:
"Storage",
dubai_booths_title:
"Custom Exhibition Booths in Dubai",
dubai_booths_desc:
"Premium booth design & execution for global exhibitions",
our_work_dubai:
"Our Work in Dubai",
why_choose_trio_dubai:
"Why Choose TRIO in Dubai?",
why_choose_trio_dubai_desc:
"We deliver high-end exhibition booths tailored for Dubai’s premium exhibitions.",
luxury_booth_designs:
"Luxury Booth Designs",

advanced_3d_concepts:
"Advanced 3D Concepts",
complete_fabrication:
"Complete Fabrication",
on_site_installation:
"On-site Installation",

fast_delivery:
"Fast Delivery",
whats_included:
"What's Included",
design_title:
"Design",
design_desc:
"Creative and modern booth layouts.",
build_title:
"Build",
build_desc:
"High quality materials & finishing.",
installation_title:
"Installation",
installation_desc:
"Quick and smooth setup.",
logistics_title:
"Logistics",
logistics_desc:
"Complete transport handling.",
our_services: "Our Services",

booth_design: "Booth Design",

design_3d: "3D Design",

fabrication: "Fabrication",

installation: "Installation",

logistics: "Logistics",

storage: "Storage",
our_story: "Our Story",

our_story_desc:
"TRIO Events is a Mumbai-based exhibition company specializing in custom booth design and global exhibitions.",
about_title: "About Us",

about_desc:
"We design and build exhibition booths that make brands stand out globally.",
about_trio_title:
"About Trio Exhibition: Global Leaders in Brand Environments",
// ENGLISH

about_trio_desc1:
"The Inspiration: The Power of Three. The name Trio Exhibition is inspired by the divine energy of Lord Shiva, symbolizing the harmonious execution of three core brand pillars: Events, Exhibitions, and Promotions.",

about_trio_desc2:
"We believe that a brand’s success depends on the parallel growth of these interrelated functions. By mastering the synergy between creative design and technical execution, we ensure that your brand doesn't just occupy space—it commands attention.",

about_trio_desc3:
"India's Premier One-Stop Exhibition Stand Contractor. Trio Exhibition is recognized as a leading full-service exhibition design company and turnkey stand contractor in India.",

about_trio_desc4:
"We specialize in delivering world-class, custom-built exhibition stands and high-impact retail environment displays.",

about_trio_desc5:
"Beyond fabrication, Trio Exhibition is renowned for Functional Space Planning. We bridge the gap between aesthetic brilliance and strategic floor management, ensuring every square meter of your trade show booth is optimized for lead generation and visitor flow.",

about_trio_desc6:
"Expertise That Goes The Extra Mile. Operating in today’s competitive global market requires more than just construction; it requires a strategic partner.",

about_trio_desc7:
"Trio is powered by a highly skilled team with nearly two decades of industry experience.",

about_trio_desc8:
"Customized Wooden Pavilions: Bespoke designs that reflect your brand’s unique identity.",

about_trio_desc9:
"Technical Precision: Experts in Maxima, Octanorm, and advanced modular structures.",

about_trio_desc10:
"In-House Production: A massive 9,000 sq. ft. fabrication facility that ensures quality control and cost-efficiency.",

about_trio_desc11:
"Cost-Effective Solutions: Delivering designs that exceed expectations without exceeding budgets.",

about_trio_desc12:
"A Local Footprint with a Global Reach. Headquartered with a strong presence in every major Indian metro—including Mumbai, Delhi, and Bangalore—we provide seamless execution across the entire country.",

about_trio_desc13:
"However, our vision is global. Backed by a proven track record in the international arena, Trio Exhibition has established an extensive network of Associate Partners across Asia, the Middle East, Europe, and the UK.",

about_trio_desc14:
"This global channel allows us to offer international exhibitors a home-ground advantage, providing local-rate execution with world-class design standards.",
core_values: "Our Core Values",

core_values_sub:
"The principles that drive TRIO Exhibitions to deliver world-class experiences.",

creative_design_title: "Creative Design",
creative_design_desc:
"We craft unique booth concepts that stand out and attract attention.",

client_partnership_title: "Client Partnership",
client_partnership_desc:
"We work closely with clients to understand and deliver their vision.",

quality_execution_title: "Quality Execution",
quality_execution_desc:
"From build to finish, we ensure precision and top-quality workmanship.",

global_reach_title: "Global Reach",
global_reach_desc:
"We deliver exhibition solutions across international markets.",

fast_delivery_title: "Fast Delivery",
fast_delivery_desc:
"Timely execution with efficient planning and flawless coordination.",

result_focused_title: "Result Focused",
result_focused_desc:
"We design booths that generate engagement and business results.",
years_experience: "Years Experience",

clients: "Clients",

projects: "Projects",
faq_title1: "Frequently Asked",
faq_title2: "Questions",
faq_q1: "1. What services do you provide?",
faq_a1: "We provide 3D design, fabrication, installation, logistics and complete exhibition solutions.",

faq_q2: "2. Which countries do you operate in?",
faq_a2: "We operate globally across India, UAE, USA, Europe and more.",

faq_q3: "3. Do you create custom stands?",
faq_a3: "Yes, we create fully customized stands tailored to your brand.",

faq_q4: "4. Do you handle logistics?",
faq_a4: "Yes, we handle shipping, installation and dismantling.",
lets_work_together_desc:
"Whether you prefer calls, emails, or live chat, we’re here to assist you. Reach out to us and let’s create something extraordinary together. TRIO Exhibitions provides exhibition stand design, booth fabrication, installation, and turnkey exhibition solutions across Delhi, Mumbai, Bangalore, and worldwide.",
lets_work_together: "Let’s Work Together",
mumbai:
"Mumbai Office",

mumbai_address:
"📍 TRIO Events Exhibitions and Promotions, Gala No. 18, Ground Floor, Gautam Udyog Bhawan, LIC Building, Behind Dena Bank, LBS Marg, Bhandup Station, Bhandup West, Mumbai – 400078, Maharashtra, India.",
  expertise: "OUR EXPERTISE",
  expertise_title: "Creative Exhibition Stall Design & Execution",
  expertise_desc: "We transform ideas into immersive exhibition experiences through strategic design, precision fabrication, and flawless execution.",

  design: "Design",
  design_text: "Innovative exhibition concepts tailored to your brand identity.",

  production: "Production",
  production_text: "Premium fabrication using high-quality materials and finishes.",

  planning: "Planning",
  planning_text: "Detailed planning and coordination for smooth project delivery.",

  execution: "Execution",
  execution_text: "Seamless installation and on-time completion across global venues.",

  creativity: "Creativity",
  creativity_text: "Unique visual storytelling that attracts and engages visitors.",

  teamwork: "Team Work",
  teamwork_text: "Experienced professionals working together to deliver excellence.",
  
  process_tag: "OUR PROCESS",
  process_title: "From Concept To Reality",
  process_desc: "We manage every stage of your exhibition project with precision and creativity.",

  meeting_title: "Meeting & Research",
  meeting_text: "Understanding your objectives, audience and exhibition goals.",

  design_title: "Design & Concept",
  design_process_text: "Creating immersive 3D booth concepts tailored to your brand.",

  production_title: "Production",
  production_process_text: "Premium fabrication using world-class materials and finishes.",

  installation_title: "Installation",
  installation_text: "On-site setup, supervision and flawless execution.",

  schedule_btn: "Schedule Meeting →",
    cta_badge: "LET'S BUILD SOMETHING AMAZING",

  cta_title: "Ready To Create A Stunning Exhibition Experience?",

  cta_desc: "From concept design to complete execution, our team delivers world-class exhibition stalls that attract attention and drive results.",

  cta_email: "📧 Email Us",

  cta_call: "📞 Call Now",
 why_choose_us: "WHY CHOOSE US",

  info_title: "Complete Exhibition Stand Design & Project Management",

  info_desc: "We create exceptional exhibition experiences through innovative design, premium fabrication, and flawless execution. From concept development to final installation, every detail is managed with precision.",

  creative_design: "Creative Design",
  creative_design_text: "Custom stand concepts that reflect your brand identity and attract visitors.",

  project_management: "Project Management",
  project_management_text: "End-to-end coordination ensuring smooth execution and timely delivery.",

  premium_fabrication: "Premium Fabrication",
  premium_fabrication_text: "High-quality materials and craftsmanship for a professional finish.",

  onsite_support: "On-site Support",
  onsite_support_text: "Installation, supervision, and dismantling handled by experts.",
  client_feedback: "CLIENT FEEDBACK",
client_title: "What Our Clients Say",
client_desc: "We take pride in delivering exceptional exhibition stands and memorable brand experiences for our clients worldwide.",
give_review: "Give Review →",

review1_text: "Excellent execution and premium quality fabrication. The team delivered our Korea Pavilion project on time with outstanding attention to detail.",
review1_client: "Korea Pavilion",
review1_location: "Jio World Cosmoprof, Mumbai",

review2_text: "Professional project management and creative stand design. The Germany Pavilion attracted significant visitor engagement.",
review2_client: "Germany Pavilion",
review2_location: "International Exhibition",

review3_text: "Excellent booth execution with strong branding elements. The Brazil exhibition stand perfectly represented our vision.",
review3_client: "Angel Yeast Brazil",
review3_location: "FIPAN Brazil",

review4_text: "Outstanding design creativity and smooth installation. Everything was delivered exactly as planned.",
review4_client: "Arab Lab Dubai",
review4_location: "Dubai Exhibition",

review5_text: "Great coordination from concept development to final setup. Visitors appreciated the innovative presentation.",
review5_client: "KERUNDE",
review5_location: "Pet Show Thailand",

review6_text: "Reliable execution, quality fabrication and excellent support. The exhibition stand helped us attract more visitors.",
review6_client: "Hirin",
review6_location: "Philippines Exhibition",

review7_text: "Exceptional stand design and flawless execution. The booth generated strong visitor traffic throughout the event.",
review7_client: "AT & M",
review7_location: "Mumbai Exhibition",

review8_text: "The team delivered a modern and impactful pavilion that perfectly reflected our brand identity and objectives.",
review8_client: "Germany Pavilion",
review8_location: "International Trade Show",

review9_text: "Professional planning, excellent fabrication quality, and timely installation made the entire experience stress-free.",
review9_client: "Angel Fisa Brazil",
review9_location: "Brazil Expo 2024",

review10_text: "Creative concepts combined with precise execution helped us stand out among hundreds of exhibitors.",
review10_client: "Korea Pavilion",
review10_location: "Jio World Cosmoprof",
germany_tag: "TRIO EXHIBITIONS GERMANY",
germany_title: "Custom Exhibition Booth Solutions in Germany",
germany_desc: "We design, build and manage world-class exhibition stands across Germany's leading trade fairs. From concept development to final installation, TRIO delivers complete turnkey booth solutions.",

booths_delivered: "Booths Delivered",
on_time_installation: "On-Time Installation",
design_visualization: "Design Visualization",
project_support: "Project Support",

process_design: "Design",
process_design_desc: "Creative booth concepts aligned with your brand identity.",

process_fabrication: "Fabrication",
process_fabrication_desc: "Premium quality production with precision detailing.",

process_installation: "Installation",
process_installation_desc: "Professional on-site setup and dismantling support.",

process_logistics: "Logistics",
process_logistics_desc: "Safe transport, warehousing and exhibition handling.",

offer_tag: "WHAT WE OFFER",
services_title: "Our Exhibition Services",

service_booth_design: "Booth Design",
service_booth_design_desc: "Creative exhibition stand concepts.",

service_3d_design: "3D Design",
service_3d_design_desc: "Realistic visualization before production.",

service_fabrication: "Fabrication",
service_fabrication_desc: "High-quality booth manufacturing.",

service_installation: "Installation",
service_installation_desc: "Fast setup and dismantling.",

service_logistics: "Logistics",
service_logistics_desc: "Worldwide transportation support.",

service_storage: "Storage",
service_storage_desc: "Secure warehouse management.",
maxima_octonorm: "Maxima and Octonorm",
 country_pavilion: "Country Pavilion",
 furniture_on_rental: "Furniture on Rental",
 in_house_production_warehouse: "In-house Production Warehouse",
 seo_intro: "Trio Exhibitions is a leading exhibition stall design and booth fabrication company serving China, India, Dubai, Thailand, and Germany. With over 18 years of experience, we specialize in China-focused exhibition stand design, 3D space planning, and end-to-end turnkey solutions for trade shows, exhibitions, and corporate events.",

  seo_body: "Our in-house team of designers, engineers, and skilled craftsmen handles every stage of your exhibition journey—from initial concept and 3D visualization to fabrication, on-site installation, and dismantling. We work with premium materials including Octonorm and Maxima structures, delivering both modular and fully custom-built exhibition stands for China trade shows and international pavilions.",

  seo_venues: "We have successfully executed projects at major venues including Jio World Convention Centre Mumbai, and international pavilions such as the Korea Pavilion and Dubai Lab Expo. Whether you need a compact booth or a large-scale country pavilion for a China exhibition, Trio Exhibitions ensures your brand makes a lasting impression on the exhibition floor.",

  seo_cta: `Looking for an experienced exhibition stall fabricator for your China trade show, or based in Mumbai, Delhi, or Bangalore? <a href="contact.html">Get in touch with our team</a> for a free consultation and quote.`,
   maximaTag: "TRIO EXHIBITIONS",
        maximaTitle1: "Maxima & Octonorm",
        maximaTitle2: "Exhibition Stall Systems",
        maximaDescription: "Premium modular exhibition solutions designed to create impactful brand experiences across trade shows, expos, and global events.",
        maximaBtn1: "Get Free Quote",
        maximaBtn2: "View Projects",
          maximaStat1: "Years Experience",
        maximaStat2: "Projects Delivered",
        maximaStat3: "Countries Served",
        maximaStat4: "Custom Solutions",
           maximaAboutTag: "ABOUT SYSTEMS",
        maximaAboutTitle1: "What Are Maxima &",
        maximaAboutTitle2: "Octonorm Systems?",
        maximaAboutDesc1: "Maxima and Octonorm systems are advanced modular exhibition structures widely used for trade shows, expos, conferences, pavilions and international exhibitions.",
        maximaAboutDesc2: "These systems provide flexibility, premium aesthetics, fast installation and cost-effective solutions for brands looking to create a strong exhibition presence.",
           maximaBenefitsTag: "KEY BENEFITS",
        maximaBenefitsTitle: "Why Choose Trio Exhibitions?",

        maximaFeature1: "Modular Design",
        maximaFeature2: "LED Integration",
        maximaFeature3: "Custom Branding",
        maximaFeature4: "Global Execution",
        maximaFeature5: "Quick Installation",
        maximaFeature6: "Reusable Systems",
         galleryTag: "OUR PROJECTS",
        galleryTitle: "Recent Exhibition Works",

        gallery1: "Karnataka Pavilion Octonorm",
        gallery2: "Successfully delivered 6 custom Octonorm stalls for this exhibition.",
        gallery3: "Maxima Modular Stand Leather Expo",
        gallery4: "Jewellery Expo Octonorm",
        gallery5: "Octonorm Tech",
        gallery6: "Octonorm and Maxima",
        gallery7: "Octonorm Expo",
        gallery8: "Octonorm Expo",
        gallery9: "Octonorm Expo",
        gallery10: "Maxima Expo",
        gallery11: "Octonorm Mockup",
        gallery12: "Maxima Shenzhen Roof India",
        gallery13: "Maxima Modular Structure",
        gallery14: "Country Pavilion China Maxima",
        gallery15: "China Pavilion IITF Octonorm",
        gallery16: "Elecrama China Pavilion Maxima",
        gallery17: "Excon India Octonorm",
        gallery18: "Poly China Automation Maxima",
        gallery19: "Poly China Automation Maxima",
        gallery20: "Taiwan Pavilion Automation India Maxima",
        gallery21: "AOMEI Palm Expo Octonorm",
        gallery22: "MAXIMA",
        processTag: "OUR PROCESS",
        processTitle: "From Concept To Installation",

        processStep1: "Consultation",
        processStep2: "Design",
        processStep3: "Production",
        processStep4: "Installation",
        processStep5: "Handover",
         ctaTitle: "Ready To Build Your Next Exhibition Booth?",
        ctaDescription: "Partner with Trio Exhibitions for innovative, high-impact and professionally executed exhibition solutions.",
        ctaButton: "Request A Quote",
           faqTag: "FAQ",
        faqTitle: "Frequently Asked Questions",

        faqQ1: "What is the difference between Maxima and Octonorm systems?",
        faqA1: "Maxima systems offer premium structural profiles and a modern appearance, while Octonorm systems are lightweight, modular, and cost-effective for exhibitions and trade shows.",

        faqQ2: "Are Maxima and Octonorm stands reusable?",
        faqA2: "Yes, both Maxima and Octonorm systems are built as reusable modular structures, making them a cost-effective choice for brands that exhibit regularly.",

        faqQ3: "Do you provide installation services?",
        faqA3: "Yes, Trio Exhibitions provides complete booth installation, dismantling, logistics, and on-site support services.",

        faqQ4: "Can you execute exhibition projects internationally?",
        faqA4: "Yes, we deliver exhibition booth solutions across India, Dubai, Germany, Thailand, and various international exhibition venues.",

        faqQ5: "Can Maxima and Octonorm booths be customized?",
        faqA5: "Absolutely, we provide custom branding, graphics, lighting integration, meeting areas, product displays, and complete stand customization.",

        faqQ6: "What industries use Maxima and Octonorm exhibition stands?",
        faqA6: "Maxima and Octonorm systems are widely used in healthcare, technology, manufacturing, food, automotive, education, and industrial exhibitions worldwide.",

        faqQ7: "How long does it take to build a Maxima or Octonorm booth?",
        faqA7: "The timeline depends on booth size and complexity, but most modular stands can be installed much faster than traditional custom-built exhibition booths.",

        faqQ8: "Do you provide 3D booth design before fabrication?",
        faqA8: "Yes, we create detailed 3D exhibition stand designs and visual presentations for client approval before production begins.",

        faqQ9: "Are Maxima and Octonorm systems suitable for large exhibitions?",
        faqA9: "Yes, both systems are ideal for small, medium, and large-scale exhibitions, trade fairs, expos, and international events.",

        faqQ10: "Why choose Trio Exhibitions for Maxima and Octonorm stands?",
        faqA10: "With 18+ years of experience, in-house production facilities, creative design expertise, and global execution capabilities, we deliver high-quality modular exhibition solutions.",

        faqQ11: "Do you provide graphic printing and branding services?",
        faqA11: "Yes, we offer large-format printing, custom graphics, signage, LED integration, and complete booth branding solutions.",

        faqQ12: "What are the advantages of modular exhibition stands?",
        faqA12: "Modular stands are cost-effective, reusable, easy to transport, quick to install, and highly flexible for different exhibition layouts.",
          pavilionHeroTag: "GLOBAL EXHIBITION SOLUTIONS",
        pavilionHeroTitle: "Country Pavilion Design & Construction",
        pavilionHeroDesc: "Delivering world-class country pavilion solutions for international trade fairs, expos and global exhibitions.",
        pavilionHeroBtn: "Request A Quote",
          pavilionStat1: "Years Experience",
        pavilionStat2: "Projects Delivered",
        pavilionStat3: "Countries Served",
        pavilionStat4: "Custom Solutions",
          pavilionServicesTag: "OUR SERVICES",
        pavilionServicesTitle: "Complete Pavilion Management",

        pavilionService1: "Pavilion Design",
        pavilionService2: "3D Visualization",
        pavilionService3: "Fabrication",
        pavilionService4: "Branding",
        pavilionService5: "Installation",
        pavilionService6: "Project Management",
        pavilionCountriesTag: "GLOBAL PRESENCE",
        pavilionCountriesTitle: "Countries We Support",

        country1: "India",
        country2: "Germany",
        country3: "China",
        country4: "Thailand",
        country5: "Dubai",
        country6: "USA",
        country7: "Brazil",
        country8: "Singapore",
         countryGalleryTitle: "Country Pavilion Projects",

        countryProject1: "Automation Iran China Pavilion",
        countryProject2: "China Country Pavilion Iran",
        countryProject3: "China Pavilion IITF",
        countryProject4: "China Pavilion IMTEX BIEC Bangalore",
        countryProject5: "China Pavilion Palm Expo",
        countryProject6: "China Pavilion Palm Expo Maxima",
        countryProject7: "China Pavilion Pragathi Maidan",
        countryProject8: "China Pavilion Vashi",
        countryProject9: "China Pavilion IITF",
        countryProject10: "Country Pavilion China",
        countryProject11: "Country Pavilion Mockup",
        countryProject12: "Elecrama China Pavilion",
        countryProject13: "Excon India 1600 sqm",
        countryProject14: "IMTEX India 1600 sqm",
        countryProject15: "Poly China Automation India",
        countryProject16: "Poly China Automation",
        countryProject17: "POLY China Pavilion Automation",
        countryProject18: "China Pavilion Leather Expo",
        countryProject19: "FUJI Leather Expo",
        countryProject20: "Mumbai Auto Expo",
         pavilionProcessTag: "WORKFLOW",
        pavilionProcessTitle: "Our Pavilion Process",

        pavilionProcess1: "Consultation",
        pavilionProcess2: "Concept Design",
        pavilionProcess3: "Production",
        pavilionProcess4: "Installation",
        pavilionProcess5: "Handover",
         pavilionCtaTitle: "Build Your Next Country Pavilion With Trio Exhibitions",
        pavilionCtaDesc: "We create impactful national pavilions that attract visitors, showcase innovation and strengthen global presence.",
        pavilionCtaBtn: "Contact Us",
         pavilionFaqTag: "COMMON QUESTIONS",
        pavilionFaqTitle: "Country Pavilion",

        pavilionFaqQ1: "What is a country pavilion?",
        pavilionFaqA1: "A country pavilion is a dedicated exhibition space representing a nation's industries, product innovation, and investment opportunities at international trade fairs and expos.",

        pavilionFaqQ2: "Do you provide complete pavilion construction service?",
        pavilionFaqA2: "Yes, we provide design, 3D visualization, fabrication, branding, installation, dismantling, and complete project management services.",

        pavilionFaqQ3: "Can you execute pavilion projects outside India?",
        pavilionFaqA3: "Yes, Trio Exhibitions supports pavilion projects across India, Dubai, Germany, Thailand, USA, Singapore, and other international exhibition destinations.",

        pavilionFaqQ4: "Do you provide custom pavilion design?",
        pavilionFaqA4: "Absolutely. Every pavilion is custom-designed according to the country's branding objectives and exhibition requirements.",

        pavilionFaqQ5: "How early should a pavilion project be planned?",
        pavilionFaqA5: "We recommend planning at least 2–6 months before the exhibition date to ensure smooth execution and approvals.",

        pavilionFaqQ6: "What industries can participate in a country pavilion?",
        pavilionFaqA6: "Country pavilions can showcase industries such as manufacturing, healthcare, food processing, education, tourism, and export businesses.",

        pavilionFaqQ7: "Do you provide branding and graphics for country pavilions?",
        pavilionFaqA7: "Yes, we offer complete branding solutions including pavilion graphics, signage, digital displays, country branding elements, and promotional materials.",

        pavilionFaqQ8: "Why choose Trio Exhibitions for country pavilion projects?",
        pavilionFaqA8: "With 18+ years of experience, global execution capabilities, in-house production facilities, and dedicated project management, we deliver world-class country pavilion solutions.",

        pavilionFaqQ9: "How much does a country pavilion cost?",
        pavilionFaqA9: "The cost depends on pavilion size, location, design complexity, branding requirements, and exhibition venue specifications. Contact us for a customized quotation.",
         furniHeroTag: "TRIO EXHIBITIONS",
        furniHeroTitle: "Furniture On Rental",
        furniHeroDesc: "Premium furniture rental solutions for exhibitions, trade shows, conferences and corporate events.",
        furniHeroBtn: "Get Free Quote",
        furniServicesTitle: "Rental Furniture Collection",

        furniService1: "Sofas",
        furniService2: "Chairs",
        furniService3: "Tables",
        furniService4: "Reception Counters",
        furniService5: "LED Furniture",
        furniService6: "Lounge Setup",
         furniAboutTag: "WHY CHOOSE US",
        furniAboutTitle: "Premium Furniture Rental Services",
        furniAboutDesc: "Trio Exhibitions provides high-quality furniture rental services for exhibitions, trade fairs, conferences, seminars and corporate events.",

        furniFeature1: "Modern Designs",
        furniFeature2: "Affordable Pricing",
        furniFeature3: "Quick Delivery",
        furniFeature4: "Professional Installation",
        furniFeature5: "Large Inventory",
           furniGallery1: "Chair",
        furniGallery2: "Sofa",
        furniGallery3: "Freezer",
        furniGallery4: "Glass & Wooden Round Tables",
        furniGallery5: "Water Dispenser",
        furniGallery6: "Glass Counter Showcase",
        furniGallery7: "Center Glass Table",
        furniGallery8: "Dustbin",
        furniGallery9: "Brochure Stand",
        furniGallery10: "Plants",
        furniGallery11: "LED Furniture",
          furniStat1: "Rental Projects",
        furniStat2: "Years Experience",
        furniStat3: "Client Satisfaction",
        furniStat4: "Support",
          furniProcessTitle: "Our Rental Process",

        furniProcess1: "Consultation",
        furniProcess2: "Selection",
        furniProcess3: "Delivery",
        furniProcess4: "Setup",
          furniCtaTitle: "Need Furniture For Your Event?",
        furniCtaDesc: "Get stylish and premium furniture delivered directly to your exhibition venue.",
        furniCtaBtn: "Contact Us",
           furniFaqTitle: "Frequently Asked Questions",

        furniFaqQ1: "What furniture is available for rent?",
        furniFaqA1: "We offer sofas, chairs, tables, reception counters, bar stools, lounge furniture and more.",

        furniFaqQ2: "How much does exhibition furniture rental cost?",
        furniFaqA2: "Pricing depends on furniture type, quantity, duration and event location.",

        furniFaqQ3: "Do you provide delivery?",
        furniFaqA3: "Yes, we provide delivery across exhibition venues and event locations.",

        furniFaqQ4: "Do you provide setup?",
        furniFaqA4: "Yes, our team handles installation, arrangement and dismantling.",

        furniFaqQ5: "Can I rent furniture for a single-day exhibition?",
        furniFaqA5: "Yes, we provide flexible rental options for one-day events, exhibitions, conferences and trade shows.",

        furniFaqQ6: "Do you offer furniture rental across India?",
        furniFaqA6: "Yes, we provide exhibition and event furniture rental services across major cities and exhibition venues in India.",

        furniFaqQ7: "Can I customize my furniture selection?",
        furniFaqA7: "Absolutely. You can choose furniture based on your booth design, branding requirements and event theme.",

        furniFaqQ8: "Do you provide lounge furniture for VIP areas?",
        furniFaqA8: "Yes, we offer premium lounge setups, sofas, coffee tables and VIP seating solutions for exhibitions and events.",

        furniFaqQ9: "Are reception counters available on rent?",
        furniFaqA9: "Yes, we provide reception counters, information desks and branded welcome counters for exhibitions and trade fairs.",

        furniFaqQ10: "Can furniture be branded with our company logo?",
        furniFaqA10: "Yes, selected furniture and counters can be customized with company branding and graphics.",

        furniFaqQ11: "How far in advance should I book exhibition furniture?",
        furniFaqA11: "We recommend booking at least 2–4 weeks before the event to ensure availability and smooth delivery.",

        furniFaqQ12: "Why choose Trio Exhibitions for furniture rental?",
        furniFaqA12: "We provide premium-quality furniture, timely delivery, professional setup and reliable support for exhibitions and events.",
          intHeroTag: "Professional Language Support",
        intHeroTitle: "Korean & Chinese <br> Interpretation Services",
        intHeroDesc: "Break language barriers with our professional Korean and Chinese interpreters. We provide reliable language support for exhibitions, trade fairs, business meetings, factory visits, and international client communication.",
        intHeroBtn1: "Get Free Quote",
        intHeroBtn2: "Call Now",
          langServiceTitle: "Korean & Chinese Interpretation",

        langServiceDesc: "We provide professional Korean and Chinese interpretation services for exhibitions, trade fairs, business meetings, factory visits, client negotiations, and international communication. Our experienced interpreters eliminate language barriers, ensuring smooth and effective conversations between global exhibitors and local partners.",

        langService1: "Korean Business Interpretation",
        langService2: "Chinese (Mandarin) Interpretation",
        langService3: "Exhibition & Trade Show Support",
        langService4: "Business Meetings Assistance",
        langService5: "Factory Visit Interpretation",
        langService6: "Client Communication Support",

        langServiceBtn: "Get Free Consultation",
          langBenefitsTitle: "Why Choose Our Interpretation Services?",
        langBenefitsDesc: "We provide reliable Korean and Chinese interpretation services for exhibitions, trade fairs, business meetings, factory visits and international communication.",

        langBenefit1Title: "Professional Interpreters",
        langBenefit1Desc: "Experienced interpreters for exhibitions and business meetings.",

        langBenefit2Title: "Business Support",
        langBenefit2Desc: "Clear communication between exhibitors and business partners.",

        langBenefit3Title: "Trade Show Assistance",
        langBenefit3Desc: "Language support throughout exhibitions and trade fairs.",

        langBenefit4Title: "International Communication",
        langBenefit4Desc: "Helping Korean and Chinese companies connect globally.",
          industryTitle: "Industries We Serve",
        industryDesc: "We provide professional Korean and Chinese interpretation services across various industries, ensuring seamless communication and successful business interactions.",

        industry1Title: "Exhibitions & Trade Shows",
        industry1Desc: "Professional language support for international exhibitions, expos and trade fairs.",

        industry2Title: "Manufacturing",
        industry2Desc: "Interpretation for factory visits, production discussions and supplier meetings.",

        industry3Title: "Technology",
        industry3Desc: "Communication support for IT companies, product demonstrations and business collaborations.",

        industry4Title: "Business Meetings",
        industry4Desc: "Accurate interpretation during negotiations, conferences and corporate meetings.",

        industry5Title: "Import & Export",
        industry5Desc: "Language assistance for international trade, logistics and supplier communication.",

        industry6Title: "International Delegations",
        industry6Desc: "Professional interpretation for official visits, delegations and business events.",
         intFaqTitle: "Frequently Asked Questions",
        intFaqDesc: "Find answers to the most common questions about our Korean & Chinese Interpretation Services.",

        intFaqQ1: "Do you provide on-site interpretation services?",
        intFaqA1: "Yes. Our interpreters are available for exhibitions, trade fairs, business meetings, factory visits and corporate events.",

        intFaqQ2: "Which languages do you support?",
        intFaqA2: "We provide professional interpretation services in Korean and Chinese (Mandarin).",

        intFaqQ3: "Can I book an interpreter for a single day?",
        intFaqA3: "Yes. We offer flexible booking options for one-day, multi-day and long-term assignments.",

        intFaqQ4: "Do you provide interpretation outside exhibitions?",
        intFaqA4: "Absolutely. We also support business meetings, conferences, factory visits, training sessions and corporate events.",

        intFaqQ5: "How can I request a quotation?",
        intFaqA5: "Simply contact us, and we will provide a customized quotation based on your requirements.",
        quoteTag: "Contact Us",
        quoteTitle: "Need a Korean or Chinese Interpreter?",
        quoteDesc: "Whether you're attending an exhibition, hosting international clients, or arranging a business meeting, our professional interpreters are ready to assist you.",
        quoteLocation: "Mumbai, Maharashtra, India",

        quoteName: "Full Name",
        quoteEmail: "Email Address",
        quotePhone: "Phone Number",
        quoteMessage: "Tell us about your requirement",

        quoteSelectLang: "Select Language",
        quoteLang1: "Korean Interpretation",
        quoteLang2: "Chinese Interpretation",

        quoteBtn: "Request a Free Quote",

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
our_services:
"我们的服务",
booth_design:
"展台设计",
design_3d:
"3D 展示设计",
fabrication:
"制作与搭建",
installation:
"安装服务",
logistics:
"物流管理",
storage:
"仓储服务",
faqs:
"常见问题",

faq_custom_booth_question:
"为什么选择定制展台？",
faq_custom_booth_answer:
"定制展台能够吸引更多访客，并有效提升品牌形象。",
faq_full_service_question:
"你们提供一站式服务吗？",
faq_full_service_answer:
"是的，TRIO 提供完整的展览解决方案。",
thailand_booths_title:
"泰国定制展览展台",
thailand_booths_desc:
"为泰国各地展览会提供创新展台解决方案",
our_work_thailand:
"我们在泰国的项目案例",
why_exhibit_thailand:
"为什么选择 TRIO 在泰国参展？",

why_exhibit_thailand_desc:
"我们在泰国打造具有吸引力且高性价比的展台体验。",

creative_booth_ideas:
"创意展台设计方案",

affordable_solutions:
"经济高效的解决方案",
full_project_management:
"全程项目管理服务",
on_time_execution:
"准时执行与交付",
local_support:
"本地支持服务",
whats_included:
"服务内容包括",
concept_title:
"创意概念",
concept_desc:
"为您的品牌打造独特的展台创意方案。",
production_title:
"制作搭建",
production_desc:
"高品质、坚固耐用的展台制作。",

setup_title:
"安装搭建",

setup_desc:
"快速高效的现场安装服务。",

support_title:
"现场支持",
support_desc:
"展会期间提供现场支持与协助。",
our_services:
"我们的服务",
booth_design:
"展台设计",
design_3d:
"3D 设计",
fabrication:
"展台制作",
installation:
"安装服务",
logistics:
"物流运输",
storage:
"仓储服务",
dubai_booths_title:
"迪拜定制展览展台",
dubai_booths_desc:
"为全球展览会提供高端展台设计与执行服务",
our_work_dubai:
"我们在迪拜的项目案例",
why_choose_trio_dubai:
"为什么选择 TRIO 参加迪拜展会？",
why_choose_trio_dubai_desc:
"我们为迪拜高端展览会提供量身定制的高品质展台解决方案。",
luxury_booth_designs:
"高端豪华展台设计",
advanced_3d_concepts:
"先进的 3D 创意设计",

complete_fabrication:
"完整展台制作服务",
on_site_installation:
"现场安装搭建服务",
fast_delivery:
"快速准时交付",
whats_included:
"服务内容包括",
design_title:
"设计方案",
design_desc:
"富有创意且现代化的展台布局设计。",

build_title:
"展台搭建",
build_desc:
"采用高品质材料与精细工艺制作。",
installation_title:
"安装服务",
installation_desc:
"快速高效的现场安装搭建。",
logistics_title:
"物流运输",
logistics_desc:
"提供完整的运输与物流管理服务。",
our_services: "我们的服务",

booth_design: "展台设计",

design_3d: "3D设计",

fabrication: "展台制作",

installation: "安装搭建",

logistics: "物流运输",

storage: "仓储服务",
our_story: "我们的故事",

our_story_desc:
"TRIO Events 是一家总部位于孟买的展览公司，专注于定制展台设计和全球展览服务。",
about_title: "关于我们",

about_desc:
"我们设计和搭建展览展台，帮助品牌在全球范围内脱颖而出。",
about_trio_title:
"关于 Trio Exhibition：品牌展示环境的全球领导者",
// CHINESE

about_trio_desc1:
"灵感来源：三位一体的力量。Trio Exhibition 这一名称源于湿婆神的神圣能量，象征着品牌三大核心支柱——活动、展览和推广——的和谐协作。",

about_trio_desc2:
"我们相信，品牌的成功取决于这些相互关联领域的共同发展。通过将创意设计与技术执行完美结合，我们确保您的品牌不仅占据空间，更能吸引关注并脱颖而出。",

about_trio_desc3:
"印度领先的一站式展台承包商。Trio Exhibition 被公认为印度领先的全方位展览设计公司和交钥匙展台承包商。",

about_trio_desc4:
"我们专注于打造世界级定制展台和高影响力零售展示环境。",

about_trio_desc5:
"除了展台制作之外，Trio Exhibition 还以功能性空间规划而闻名。我们将卓越的美学设计与战略空间管理相结合，确保展位的每一平方米都能最大化潜在客户开发和访客流量。",

about_trio_desc6:
"超越期待的专业实力。在当今竞争激烈的全球市场中，仅靠施工远远不够，更需要值得信赖的战略合作伙伴。",

about_trio_desc7:
"Trio 拥有近二十年行业经验的高技能专业团队。",

about_trio_desc8:
"定制木结构展馆：量身打造的设计方案，充分体现您的品牌独特形象。",

about_trio_desc9:
"技术精度：精通 Maxima、Octanorm 及先进模块化结构系统。",

about_trio_desc10:
"自有生产体系：拥有 9,000 平方英尺的大型制作工厂，确保质量控制和成本效益。",

about_trio_desc11:
"高性价比解决方案：提供超出客户期望且符合预算的设计方案。",

about_trio_desc12:
"立足本地，服务全球。总部及业务覆盖印度主要城市，包括孟买、德里和班加罗尔，为全国客户提供无缝执行服务。",

about_trio_desc13:
"与此同时，我们拥有全球化视野。凭借丰富的国际项目经验，Trio Exhibition 已在亚洲、中东、欧洲和英国建立了广泛的合作伙伴网络。",

about_trio_desc14:
"这一全球网络使我们能够为国际参展商提供本地化执行服务，以本地成本享受世界级设计标准和专业展览解决方案。",
core_values: "我们的核心价值观",

core_values_sub:
"这些原则推动 TRIO Exhibitions 持续提供世界级的展览体验。",

creative_design_title: "创意设计",
creative_design_desc:
"我们打造独特的展台概念设计，使品牌脱颖而出并吸引更多关注。",

client_partnership_title: "客户合作",
client_partnership_desc:
"我们与客户紧密合作，深入了解并实现他们的愿景。",

quality_execution_title: "卓越执行",
quality_execution_desc:
"从制作到完工，我们始终确保精准度和高品质工艺。",

global_reach_title: "全球覆盖",
global_reach_desc:
"我们为国际市场提供专业的展览解决方案。",

fast_delivery_title: "快速交付",
fast_delivery_desc:
"通过高效规划和无缝协调，确保项目按时完成。",

result_focused_title: "成果导向",
result_focused_desc:
"我们设计的展台能够提升互动效果并创造商业价值。",
years_experience: "年行业经验",

clients: "客户",

projects: "项目",
faq_title1: "常见",
faq_title2: "问题",
faq_q1: "1. 你们提供哪些服务？",
faq_a1: "我们提供3D设计、展台制作、安装搭建、物流运输以及完整的展览解决方案。",

faq_q2: "2. 你们在哪些国家开展业务？",
faq_a2: "我们的业务覆盖全球，包括印度、阿联酋、美国、欧洲等多个国家和地区。",

faq_q3: "3. 你们提供定制展台服务吗？",
faq_a3: "是的，我们根据您的品牌需求提供完全定制化的展台设计与搭建服务。",

faq_q4: "4. 你们负责物流运输吗？",
faq_a4: "是的，我们负责运输、安装以及展会结束后的拆除服务。",
lets_work_together_desc:
"无论您喜欢电话、电子邮件还是在线聊天，我们都随时为您提供帮助。欢迎与我们联系，共同打造卓越的展览体验。TRIO Exhibitions 提供展台设计、展台制作、安装搭建及交钥匙展览解决方案，服务覆盖德里、孟买、班加罗尔及全球市场。",
lets_work_together: "让我们携手合作",
mumbai:
"孟买办公室",

mumbai_address:
"📍 TRIO Events Exhibitions and Promotions，印度马哈拉施特拉邦孟买班杜普西区，LBS Marg路，Dena Bank后方，LIC大楼，Gautam Udyog Bhawan一层18号单元，邮编 400078。",
 expertise: "我们的专业能力",

  expertise_title: "创意展览展台设计与执行",

  expertise_desc:
    "我们通过战略设计、精密制作和卓越执行，将创意转化为沉浸式展览体验。",

  design: "设计",
  design_text:
    "根据您的品牌形象打造创新的展览概念。",

  production: "制作",
  production_text:
    "采用高品质材料和精湛工艺进行专业制作。",

  planning: "规划",
  planning_text:
    "周密的规划与协调，确保项目顺利交付。",

  execution: "执行",
  execution_text:
    "在全球各地实现无缝安装与准时完成。",

  creativity: "创意",
  creativity_text:
    "独特的视觉叙事，吸引并打动参观者。",

  teamwork: "团队合作",
  teamwork_text:
    "经验丰富的专业团队协作，追求卓越成果。",
      expertise: "我们的专业能力",
  expertise_title: "创意展览展台设计与执行",
  expertise_desc: "我们通过战略设计、精密制作和卓越执行，将创意转化为沉浸式展览体验。",

  design: "创意设计",
  design_text: "根据品牌定位打造创新且具有吸引力的展览方案。",

  production: "展台制作",
  production_text: "采用优质材料与精湛工艺，确保卓越品质。",

  planning: "项目规划",
  planning_text: "提供全面规划与协调，确保项目顺利实施。",

  execution: "项目执行",
  execution_text: "全球范围内高效安装与准时交付。",

  creativity: "创意策划",
  creativity_text: "通过独特的视觉表达吸引并打动参观者。",

  teamwork: "团队协作",
  teamwork_text: "经验丰富的专业团队共同打造卓越成果。",
    process_tag: "我们的流程",
  process_title: "从创意到落地",
  process_desc: "我们以专业与创意管理展览项目的每一个阶段。",

  meeting_title: "沟通与调研",
  meeting_text: "深入了解您的目标、受众及参展需求。",

  design_title: "设计与创意",
  design_process_text: "为您的品牌打造沉浸式3D展台设计方案。",

  production_title: "制作搭建",
  production_process_text: "采用世界级材料与工艺进行高品质制作。",

  installation_title: "安装执行",
  installation_text: "现场搭建、监督管理与完美执行。",

  schedule_btn: "预约会议 →",
   cta_badge: "让我们共同打造卓越展览",

  cta_title: "准备打造令人惊艳的展览体验吗？",

  cta_desc: "从创意设计到全面执行，我们的团队为您提供世界级展台解决方案，吸引观众并创造价值。",

  cta_email: "📧 联系邮箱",

  cta_call: "📞 立即致电",
    why_choose_us: "为什么选择我们",

  info_title: "一站式展台设计与项目管理服务",

  info_desc: "我们通过创新设计、优质制作和卓越执行，为客户打造非凡的展览体验。从创意构思到最终搭建，每一个细节都经过精心管理。",

  creative_design: "创意设计",
  creative_design_text: "量身定制展台方案，充分展现品牌形象并吸引观众。",

  project_management: "项目管理",
  project_management_text: "全流程协调管理，确保项目顺利执行并准时交付。",

  premium_fabrication: "高端制作",
  premium_fabrication_text: "采用优质材料与精湛工艺，打造专业级展台效果。",

  onsite_support: "现场支持",
  onsite_support_text: "专业团队负责搭建、监督及撤展服务。",
client_feedback: "客户反馈",
client_title: "客户如何评价我们",
client_desc: "我们致力于为全球客户打造卓越展台和难忘的品牌展示体验。",
give_review: "提交评价 →",

review1_text: "卓越的执行能力和高品质制作。团队按时完成韩国馆项目，细节处理非常出色。",
review1_client: "韩国馆",
review1_location: "孟买 Jio World Cosmoprof",

review2_text: "专业的项目管理和创意展台设计。德国馆吸引了大量观众关注。",
review2_client: "德国馆",
review2_location: "国际展览会",

review3_text: "展台执行效果出色，品牌展示非常成功，完美呈现了我们的愿景。",
review3_client: "安琪酵母巴西",
review3_location: "巴西 FIPAN",

review4_text: "设计创意突出，安装过程顺利，一切都按照计划完美完成。",
review4_client: "迪拜 Arab Lab",
review4_location: "迪拜展览会",

review5_text: "从概念设计到最终搭建，团队协作非常出色，观众对展示效果赞不绝口。",
review5_client: "KERUNDE",
review5_location: "泰国宠物展",

review6_text: "执行可靠，制作精良，服务支持优秀。展台帮助我们吸引了更多潜在客户。",
review6_client: "Hirin",
review6_location: "菲律宾展览会",

review7_text: "卓越的展台设计与完美执行，为活动期间带来了大量访客。",
review7_client: "AT & M",
review7_location: "孟买展览会",

review8_text: "团队打造了现代化且极具影响力的展馆，充分体现了我们的品牌形象。",
review8_client: "德国馆",
review8_location: "国际贸易展",

review9_text: "专业规划、高品质制作和准时安装，让整个参展过程轻松顺畅。",
review9_client: "Angel Fisa 巴西",
review9_location: "巴西博览会 2024",

review10_text: "创意设计与精准执行的结合，使我们在众多参展商中脱颖而出。",
review10_client: "韩国馆",
review10_location: "Jio World Cosmoprof",
footer_desc: "通过创新设计、优质制作和卓越执行，为全球客户打造世界级展台、展馆及品牌展示体验。",

footer_location: "印度·孟买",
footer_service: "全球展览服务",

quick_links: "快速链接",

global_presence: "全球业务覆盖",

india: "印度",
dubai: "迪拜",
thailand: "泰国",
china: "中国",
usa: "美国",

copyright: "© 2026 TRIO EXHIBITIONS 版权所有",

terms: "使用条款",
privacy: "隐私政策",
germany_tag: "TRIO 德国展览",
germany_title: "德国定制展览展台解决方案",
germany_desc: "我们为德国主要贸易展会设计、搭建和管理世界级展览展台。从创意设计到最终安装，TRIO 提供完整的一站式展台解决方案。",

booths_delivered: "已交付展台",
on_time_installation: "准时安装",
design_visualization: "3D设计展示",
project_support: "项目支持",

process_design: "设计",
process_design_desc: "符合品牌形象的创意展台设计方案。",

process_fabrication: "制作",
process_fabrication_desc: "高品质生产与精细工艺。",

process_installation: "安装",
process_installation_desc: "专业现场安装与拆卸支持。",

process_logistics: "物流",
process_logistics_desc: "安全运输、仓储及展会物流管理。",

offer_tag: "我们的服务",
services_title: "我们的展览服务",

service_booth_design: "展台设计",
service_booth_design_desc: "创意展览展台设计方案。",

service_3d_design: "3D设计",
service_3d_design_desc: "生产前真实效果可视化。",

service_fabrication: "展台制作",
service_fabrication_desc: "高品质展台制造。",

service_installation: "安装服务",
service_installation_desc: "快速安装与拆卸。",

service_logistics: "物流服务",
service_logistics_desc: "全球运输支持。",

service_storage: "仓储服务",
service_storage_desc: "安全仓储管理。",
footer_desc: "通过创新设计、优质制作和卓越执行，为全球客户打造世界级展台、展馆及品牌展示体验。",

footer_location: "印度·孟买",
footer_service: "全球展览服务",

quick_links: "快速链接",

global_presence: "全球业务覆盖",

india: "印度",
dubai: "迪拜",
thailand: "泰国",
china: "中国",
usa: "美国",

copyright: "© 2026 TRIO EXHIBITIONS 版权所有",

terms: "使用条款",
privacy: "隐私政策",
  maxima_octonorm: " 和 系统",
   country_pavilion: "国家展馆",
    furniture_on_rental: "家具租赁",
      in_house_production_warehouse: "内部生产与仓储",
        seo_intro: "Trio Exhibitions 是一家领先的展览展台设计与搭建公司，服务于中国、印度、迪拜、泰国和德国。凭借18年以上的行业经验，我们专注于中国市场的展览展台设计、3D空间规划以及展会、博览会和企业活动的一站式交钥匙解决方案。",

  seo_body: "我们的内部设计师、工程师和专业施工团队负责展览项目的每一个环节，从创意策划、3D效果图设计，到展台制作、现场安装及拆除。我们采用 Octonorm 和 Maxima 等优质展览系统，可提供模块化及全定制展台，满足中国展会及国际展馆的需求。",

  seo_venues: "我们已成功完成多个大型展会项目，包括孟买 Jio World Convention Centre，以及韩国馆、Dubai Lab Expo 等国际展馆项目。无论您需要紧凑型展位还是大型国家馆，Trio Exhibitions 都能为您的品牌打造令人难忘的展示效果。",

  seo_cta: `正在寻找经验丰富的中国展会展台搭建公司，或位于孟买、德里或班加罗尔？<a href="contact.html">立即联系我们的团队</a>，获取免费咨询与报价。`,
   maximaTag: "TRIO 展览",
        maximaTitle1: "Maxima 与 Octonorm",
        maximaTitle2: "展览展位系统",
        maximaDescription: "高端模块化展览解决方案，为贸易展览、博览会及国际活动打造卓越的品牌展示体验。",
        maximaBtn1: "获取免费报价",
        maximaBtn2: "查看项目",
          maximaStat1: "年行业经验",
        maximaStat2: "已完成项目",
        maximaStat3: "服务国家",
        maximaStat4: "定制化解决方案",
          maximaAboutTag: "关于系统",
        maximaAboutTitle1: "什么是 Maxima 与",
        maximaAboutTitle2: "Octonorm 展位系统？",
        maximaAboutDesc1: "Maxima 和 Octonorm 是先进的模块化展览系统，广泛应用于贸易展览会、博览会、会议、国家馆及国际展览活动。",
        maximaAboutDesc2: "这些系统具有灵活性、高端美观、安装快捷和成本效益高等优势，可帮助品牌打造卓越的展览展示效果。",
         maximaSystemTag: "MAXIMA 系统",
        maximaSystemTitle: "高端展览结构解决方案",
        maximaSystemDesc: "Maxima 系统拥有卓越的外观设计、更坚固的结构型材和高品质饰面，是企业品牌展位的理想选择。",
        maximaSystemFeature1: "高端外观",
        maximaSystemFeature2: "可重复使用",
        maximaSystemFeature3: "企业级饰面",
        maximaSystemFeature4: "坚固框架",

        octonormSystemTag: "OCTONORM 系统",
        octonormSystemTitle: "经济高效且灵活的解决方案",
        octonormSystemDesc: "Octonorm 系统采用模块化设计，重量轻、灵活性高，适用于各种规模的展览和活动。",
        octonormFeature1: "经济实惠",
        octonormFeature2: "快速安装",
        octonormFeature3: "运输便捷",
        octonormFeature4: "灵活布局",
         maximaBenefitsTag: "核心优势",
        maximaBenefitsTitle: "为什么选择 TRIO EXHIBITIONS？",

        maximaFeature1: "模块化设计",
        maximaFeature2: "LED 集成",
        maximaFeature3: "定制品牌展示",
        maximaFeature4: "全球项目执行",
        maximaFeature5: "快速安装",
        maximaFeature6: "可重复使用系统",
          galleryTag: "我们的项目",
        galleryTitle: "近期展览项目",

        gallery1: "卡纳塔克邦馆 Octonorm",
        gallery2: "本次展会成功交付 6 个定制 Octonorm 展位。",
        gallery3: "Leather Expo Maxima 模块化展位",
        gallery4: "珠宝展 Octonorm",
        gallery5: "科技展 Octonorm",
        gallery6: "Octonorm 与 Maxima",
        gallery7: "Octonorm 展位",
        gallery8: "Octonorm 展位",
        gallery9: "Octonorm 展位",
        gallery10: "Maxima 展位",
        gallery11: "Octonorm 模型设计",
        gallery12: "深圳 Maxima · Roof India",
        gallery13: "Maxima 模块化结构",
        gallery14: "中国国家馆 Maxima",
        gallery15: "中国馆 IITF Octonorm",
        gallery16: "Elecrama 中国馆 Maxima",
        gallery17: "Excon India Octonorm",
        gallery18: "Poly China Automation Maxima",
        gallery19: "Poly China Automation Maxima",
        gallery20: "台湾馆 Automation India Maxima",
        gallery21: "AOMEI Palm Expo Octonorm",
        gallery22: "MAXIMA",
          processTag: "我们的流程",
        processTitle: "从概念到安装",

        processStep1: "需求咨询",
        processStep2: "方案设计",
        processStep3: "生产制造",
        processStep4: "现场安装",
        processStep5: "项目交付",
         ctaTitle: "准备打造您的下一场展览展位吗？",
        ctaDescription: "与 TRIO EXHIBITIONS 合作，获得创新、高影响力且专业执行的展览展示解决方案。",
        ctaButton: "立即获取报价",
   faqTag: "常见问题",
        faqTitle: "常见问题解答",

        faqQ1: "Maxima 与 Octonorm 系统有什么区别？",
        faqA1: "Maxima 系统具有高端结构型材和现代化外观，而 Octonorm 系统则轻便、模块化且更具成本效益，适用于各类展览和贸易展会。",

        faqQ2: "Maxima 和 Octonorm 展位可以重复使用吗？",
        faqA2: "可以，两种系统均采用可重复使用的模块化结构，非常适合经常参加展会的企业。",

        faqQ3: "你们提供安装服务吗？",
        faqA3: "是的，TRIO EXHIBITIONS 提供展位安装、拆除、物流运输及现场支持等完整服务。",

        faqQ4: "你们可以承接国际展览项目吗？",
        faqA4: "可以，我们在印度、迪拜、德国、泰国及多个国际展览场馆提供展位解决方案。",

        faqQ5: "Maxima 和 Octonorm 展位可以定制吗？",
        faqA5: "当然可以，我们提供品牌定制、图形设计、灯光集成、洽谈区、产品展示及整体展位定制服务。",

        faqQ6: "哪些行业会使用 Maxima 和 Octonorm 展位？",
        faqA6: "广泛应用于医疗、科技、制造、食品、汽车、教育及工业等国际展览。",

        faqQ7: "搭建一个 Maxima 或 Octonorm 展位需要多久？",
        faqA7: "具体时间取决于展位规模和复杂程度，但模块化展位通常比传统定制展位安装更快。",

        faqQ8: "制作前会提供 3D 展位设计吗？",
        faqA8: "会，我们会提供详细的 3D 展位设计和效果图，供客户确认后再开始生产。",

        faqQ9: "Maxima 和 Octonorm 系统适合大型展览吗？",
        faqA9: "是的，这两种系统都适用于小型、中型及大型展览、贸易展、博览会和国际活动。",

        faqQ10: "为什么选择 TRIO EXHIBITIONS？",
        faqA10: "凭借 18 年以上行业经验、自有生产设施、专业设计团队及全球执行能力，我们提供高品质模块化展览解决方案。",

        faqQ11: "你们提供图文印刷和品牌展示服务吗？",
        faqA11: "是的，我们提供大幅面印刷、品牌图形设计、标识制作、LED 集成及完整展位品牌展示服务。",

        faqQ12: "模块化展位有哪些优势？",
        faqA12: "模块化展位经济实惠、可重复使用、运输方便、安装快捷，并可灵活适应不同展会布局。",
          pavilionHeroTag: "全球展览解决方案",
        pavilionHeroTitle: "国家馆设计与搭建",
        pavilionHeroDesc: "为国际贸易展览会、博览会及全球展会提供世界级国家馆设计与搭建解决方案。",
        pavilionHeroBtn: "立即获取报价",
         pavilionStat1: "年行业经验",
        pavilionStat2: "已完成项目",
        pavilionStat3: "服务国家",
        pavilionStat4: "定制化解决方案",
        pavilionServicesTag: "我们的服务",
        pavilionServicesTitle: "国家馆全流程管理",

        pavilionService1: "国家馆设计",
        pavilionService2: "3D 效果图",
        pavilionService3: "制作加工",
        pavilionService4: "品牌展示",
        pavilionService5: "现场安装",
        pavilionService6: "项目管理",
         pavilionCountriesTag: "全球业务覆盖",
        pavilionCountriesTitle: "我们服务的国家",

        country1: "印度",
        country2: "德国",
        country3: "中国",
        country4: "泰国",
        country5: "迪拜",
        country6: "美国",
        country7: "巴西",
        country8: "新加坡",
           countryGalleryTitle: "国家馆项目",

        countryProject1: "伊朗中国馆 · 自动化展",
        countryProject2: "伊朗中国国家馆",
        countryProject3: "中国馆 · IITF",
        countryProject4: "中国馆 · 班加罗尔 IMTEX BIEC",
        countryProject5: "中国馆 · Palm Expo",
        countryProject6: "中国馆 · Palm Expo Maxima",
        countryProject7: "中国馆 · Pragathi Maidan",
        countryProject8: "中国馆 · Vashi",
        countryProject9: "中国馆 · IITF",
        countryProject10: "中国国家馆",
        countryProject11: "国家馆概念设计",
        countryProject12: "Elecrama 中国馆",
        countryProject13: "Excon India 1600 平方米",
        countryProject14: "IMTEX India 1600 平方米",
        countryProject15: "Poly China · Automation India",
        countryProject16: "Poly China Automation",
        countryProject17: "POLY 中国馆 · Automation",
        countryProject18: "中国馆 · Leather Expo",
        countryProject19: "FUJI · Leather Expo",
        countryProject20: "孟买汽车博览会",
         pavilionProcessTag: "工作流程",
        pavilionProcessTitle: "我们的国家馆流程",

        pavilionProcess1: "需求咨询",
        pavilionProcess2: "概念设计",
        pavilionProcess3: "生产制造",
        pavilionProcess4: "现场安装",
        pavilionProcess5: "项目交付",
          pavilionCtaTitle: "与 TRIO EXHIBITIONS 携手打造您的下一座国家馆",
        pavilionCtaDesc: "我们打造具有影响力的国家馆，吸引观众、展示创新成果，并提升全球品牌影响力。",
        pavilionCtaBtn: "联系我们",
         pavilionFaqTag: "常见问题",
        pavilionFaqTitle: "国家馆",

        pavilionFaqQ1: "什么是国家馆？",
        pavilionFaqA1: "国家馆是在国际贸易展览会和博览会上展示国家产业、产品创新及投资机会的专属展览空间。",

        pavilionFaqQ2: "你们提供完整的国家馆搭建服务吗？",
        pavilionFaqA2: "是的，我们提供设计、3D 效果图、制作、品牌展示、安装、拆除及完整项目管理服务。",

        pavilionFaqQ3: "你们可以在印度以外执行国家馆项目吗？",
        pavilionFaqA3: "可以，TRIO EXHIBITIONS 在印度、迪拜、德国、泰国、美国、新加坡及其他国际展览目的地提供国家馆项目服务。",

        pavilionFaqQ4: "你们提供定制国家馆设计吗？",
        pavilionFaqA4: "当然可以，每个国家馆都会根据国家品牌定位和展览需求进行专属定制设计。",

        pavilionFaqQ5: "国家馆项目应提前多久规划？",
        pavilionFaqA5: "建议至少提前 2–6 个月开始规划，以确保项目顺利执行并完成相关审批。",

        pavilionFaqQ6: "哪些行业适合参加国家馆？",
        pavilionFaqA6: "国家馆可展示制造业、医疗、食品加工、教育、旅游及出口贸易等多个行业。",

        pavilionFaqQ7: "你们提供国家馆品牌设计和图形制作吗？",
        pavilionFaqA7: "是的，我们提供完整的品牌展示服务，包括展馆图形设计、标识系统、数字显示、国家品牌元素及宣传材料。",

        pavilionFaqQ8: "为什么选择 TRIO EXHIBITIONS 承建国家馆？",
        pavilionFaqA8: "凭借 18 年以上经验、全球执行能力、自有生产基地及专业项目管理团队，我们提供世界级国家馆解决方案。",

        pavilionFaqQ9: "国家馆项目费用是多少？",
        pavilionFaqA9: "费用取决于国家馆面积、地点、设计复杂度、品牌需求及展馆要求。欢迎联系我们获取专属报价。",
          furniHeroTag: "TRIO 展览",
        furniHeroTitle: "展览家具租赁",
        furniHeroDesc: "为展览会、贸易展、会议及企业活动提供高品质家具租赁解决方案。",
        furniHeroBtn: "获取免费报价",
          furniServicesTitle: "家具租赁系列",

        furniService1: "沙发",
        furniService2: "椅子",
        furniService3: "桌子",
        furniService4: "接待台",
        furniService5: "LED 家具",
        furniService6: "休息区布置",
          furniAboutTag: "为什么选择我们",
        furniAboutTitle: "高品质家具租赁服务",
        furniAboutDesc: "TRIO EXHIBITIONS 为展览会、贸易展、会议、研讨会及企业活动提供高品质家具租赁服务。",

        furniFeature1: "现代化设计",
        furniFeature2: "价格实惠",
        furniFeature3: "快速交付",
        furniFeature4: "专业安装",
        furniFeature5: "丰富库存",
         furniGallery1: "椅子",
        furniGallery2: "沙发",
        furniGallery3: "冷冻柜",
        furniGallery4: "玻璃和木质圆桌",
        furniGallery5: "饮水机",
        furniGallery6: "玻璃展示柜",
        furniGallery7: "玻璃茶几",
        furniGallery8: "垃圾桶",
        furniGallery9: "宣传册展示架",
        furniGallery10: "绿植",
        furniGallery11: "LED 家具",
        furniStat1: "租赁项目",
        furniStat2: "年行业经验",
        furniStat3: "客户满意度",
        furniStat4: "全天候支持",
          furniProcessTitle: "我们的租赁流程",

        furniProcess1: "需求咨询",
        furniProcess2: "产品选择",
        furniProcess3: "配送交付",
        furniProcess4: "现场布置",
        furniCtaTitle: "需要为您的活动租赁家具吗？",
        furniCtaDesc: "我们将时尚、高品质的家具直接配送到您的展览现场。",
        furniCtaBtn: "联系我们",
          furniFaqTitle: "常见问题",

        furniFaqQ1: "可租赁哪些家具？",
        furniFaqA1: "我们提供沙发、椅子、桌子、接待台、吧椅、休息区家具等多种租赁产品。",

        furniFaqQ2: "展览家具租赁费用是多少？",
        furniFaqA2: "价格取决于家具类型、数量、租赁时长及活动地点。",

        furniFaqQ3: "你们提供配送服务吗？",
        furniFaqA3: "是的，我们可配送至各大展馆及活动场地。",

        furniFaqQ4: "你们提供现场安装吗？",
        furniFaqA4: "是的，我们负责安装、摆放及活动结束后的拆除。",

        furniFaqQ5: "可以租赁一天吗？",
        furniFaqA5: "可以，我们提供适用于单日展览、会议、展会及活动的灵活租赁方案。",

        furniFaqQ6: "你们是否提供印度全国家具租赁服务？",
        furniFaqA6: "是的，我们在印度主要城市及展览场馆提供家具租赁服务。",

        furniFaqQ7: "可以根据需求选择家具吗？",
        furniFaqA7: "当然可以，您可根据展位设计、品牌需求及活动主题自由选择家具。",

        furniFaqQ8: "提供 VIP 休息区家具吗？",
        furniFaqA8: "是的，我们提供高端休息区、沙发、茶几及 VIP 座椅解决方案。",

        furniFaqQ9: "接待台可以租赁吗？",
        furniFaqA9: "可以，我们提供接待台、咨询台及品牌定制迎宾台。",

        furniFaqQ10: "家具可以添加公司 Logo 吗？",
        furniFaqA10: "可以，部分家具及接待台支持品牌 Logo 和图形定制。",

        furniFaqQ11: "应提前多久预订展览家具？",
        furniFaqA11: "建议至少提前 2–4 周预订，以确保库存充足并按时交付。",

        furniFaqQ12: "为什么选择 TRIO EXHIBITIONS 的家具租赁服务？",
        furniFaqA12: "我们提供高品质家具、准时交付、专业安装以及可靠的展会活动支持服务。",
         intHeroTag: "专业语言支持",
        intHeroTitle: "韩语与中文<br>口译服务",
        intHeroDesc: "我们的专业韩语和中文口译员帮助您跨越语言障碍，为展览会、贸易展、商务会议、工厂参观及国际客户沟通提供可靠的语言支持。",
        intHeroBtn1: "获取免费报价",
        intHeroBtn2: "立即致电",
        langServiceTitle: "韩语与中文口译服务",

        langServiceDesc: "我们为展览会、贸易展、商务会议、工厂参观、客户洽谈及国际商务交流提供专业的韩语和中文口译服务。经验丰富的口译员帮助消除语言障碍，确保国际参展商与本地合作伙伴之间实现顺畅、高效的沟通。",

        langService1: "韩语商务口译",
        langService2: "中文（普通话）口译",
        langService3: "展览与贸易展支持",
        langService4: "商务会议口译",
        langService5: "工厂参观口译",
        langService6: "客户沟通支持",

        langServiceBtn: "获取免费咨询",
          langBenefitsTitle: "为什么选择我们的口译服务？",
        langBenefitsDesc: "我们为展览会、贸易展、商务会议、工厂参观及国际商务交流提供可靠的韩语和中文口译服务。",

        langBenefit1Title: "专业口译员",
        langBenefit1Desc: "为展览会及商务会议提供经验丰富的专业口译服务。",

        langBenefit2Title: "商务支持",
        langBenefit2Desc: "帮助参展商与商业合作伙伴实现高效、清晰的沟通。",

        langBenefit3Title: "展会支持",
        langBenefit3Desc: "在展览会及贸易展期间提供全程语言支持。",

        langBenefit4Title: "国际商务沟通",
        langBenefit4Desc: "帮助韩国及中国企业与全球客户建立联系。",
          industryTitle: "我们服务的行业",
        industryDesc: "我们为各行业提供专业的韩语和中文口译服务，确保沟通顺畅，促进成功的商务合作。",

        industry1Title: "展览与贸易展",
        industry1Desc: "为国际展览、博览会及贸易展提供专业语言支持。",

        industry2Title: "制造业",
        industry2Desc: "为工厂参观、生产讨论及供应商会议提供专业口译服务。",

        industry3Title: "科技行业",
        industry3Desc: "为 IT 企业、产品演示及商务合作提供沟通支持。",

        industry4Title: "商务会议",
        industry4Desc: "在商务谈判、会议及企业活动中提供精准口译服务。",

        industry5Title: "进出口贸易",
        industry5Desc: "为国际贸易、物流及供应商沟通提供语言支持。",

        industry6Title: "国际代表团",
        industry6Desc: "为官方访问、国际代表团及商务活动提供专业口译服务。",
          intFaqTitle: "常见问题",
        intFaqDesc: "了解有关我们韩语和中文口译服务的常见问题及解答。",

        intFaqQ1: "你们提供现场口译服务吗？",
        intFaqA1: "是的，我们的口译员可为展览会、贸易展、商务会议、工厂参观及企业活动提供现场口译服务。",

        intFaqQ2: "你们支持哪些语言？",
        intFaqA2: "我们提供专业的韩语和中文（普通话）口译服务。",

        intFaqQ3: "可以预订一天的口译服务吗？",
        intFaqA3: "可以，我们提供单日、多日及长期口译服务，满足不同需求。",

        intFaqQ4: "除了展览会，还提供其他场合的口译服务吗？",
        intFaqA4: "当然可以，我们还为商务会议、研讨会、工厂参观、培训课程及企业活动提供口译服务。",

        intFaqQ5: "如何获取报价？",
        intFaqA5: "只需联系我们，我们将根据您的具体需求提供定制报价。",
          quoteTag: "联系我们",
        quoteTitle: "需要韩语或中文口译员吗？",
        quoteDesc: "无论您是参加展览会、接待国际客户还是安排商务会议，我们的专业口译员都将为您提供可靠的语言支持。",
        quoteLocation: "印度 · 马哈拉施特拉邦 · 孟买",

        quoteName: "姓名",
        quoteEmail: "电子邮箱",
        quotePhone: "电话号码",
        quoteMessage: "请告诉我们您的需求",

        quoteSelectLang: "请选择语言",
        quoteLang1: "韩语口译",
        quoteLang2: "中文口译",

        quoteBtn: "申请免费报价",
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
    const parent = this.parentElement;
    const hasSubmenu = parent.querySelector('.mega-menu, .dropdown-menu, .sub-menu');
 
    // Only intercept the click if this item actually has a submenu to open.
    // Plain links (like "Dubai") navigate normally, even on mobile.
    if(window.innerWidth <= 768 && hasSubmenu){
      e.preventDefault();
      parent.classList.toggle('active');
    }
  });
});

function toggleDropdown(e){
  e.preventDefault();
  e.currentTarget.parentElement.classList.toggle("open");
}

const cursor=document.querySelector(".cursor");

let mouseX=0;
let mouseY=0;

let posX=0;
let posY=0;

/* Smooth Cursor */
document.addEventListener("mousemove",(e)=>{
  mouseX=e.clientX;
  mouseY=e.clientY;

  // Sparkles
  const sparkle=document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.innerHTML="✦";

  sparkle.style.left=e.clientX+"px";
  sparkle.style.top=e.clientY+"px";

  document.body.appendChild(sparkle);

  setTimeout(()=>{
    sparkle.remove();
  },1000);
});

function animate(){

  posX+=(mouseX-posX)*0.12;
  posY+=(mouseY-posY)*0.12;

  cursor.style.left=posX+"px";
  cursor.style.top=posY+"px";

  requestAnimationFrame(animate);
}
animate();

/* Magnetic Buttons */
document.querySelectorAll("button,a").forEach(btn=>{

  btn.addEventListener("mousemove",(e)=>{

    const rect=btn.getBoundingClientRect();

    const x=e.clientX-rect.left-rect.width/2;
    const y=e.clientY-rect.top-rect.height/2;

    btn.style.transform=
    `translate(${x*0.2}px,${y*0.2}px)`;
  });

  btn.addEventListener("mouseleave",()=>{
    btn.style.transform="translate(0,0)";
  });

});

/* Click Explosion */
document.addEventListener("click",(e)=>{

  for(let i=0;i<12;i++){

    const particle=document.createElement("div");

    particle.classList.add("explosion");

    particle.style.left=e.clientX+"px";
    particle.style.top=e.clientY+"px";

    document.body.appendChild(particle);

    const angle=Math.random()*360;
    const distance=60+Math.random()*50;

    particle.animate([
      {
        transform:"translate(0,0)",
        opacity:1
      },
      {
        transform:
        `translate(
        ${Math.cos(angle)*distance}px,
        ${Math.sin(angle)*distance}px
        )`,
        opacity:0
      }
    ],{
      duration:700
    });

    setTimeout(()=>{
      particle.remove();
    },700);

  }

});
const reviews = document.querySelectorAll(".review-slide");

if (reviews.length > 0) {

    let currentReview = 0;

    reviews[currentReview].classList.add("active");

    setInterval(() => {

        reviews[currentReview].classList.remove("active");

        currentReview++;

        if (currentReview >= reviews.length) {
            currentReview = 0;
        }

        reviews[currentReview].classList.add("active");

    }, 4000);

}

if (typeof gsap !== "undefined") {
    gsap.from(".maxima-stat-box h2", {
        innerText: 0,
        duration: 3,
        snap: { innerText: 1 }
    });
}
function openWechatQR(e){
    e.preventDefault();
    document.getElementById("wechatModal").style.display="flex";
}

function closeWechatQR(){
    document.getElementById("wechatModal").style.display="none";
}

// Close when clicking outside
window.onclick = function(e){
    const modal = document.getElementById("wechatModal");
    if(e.target == modal){
        modal.style.display="none";
    }
}
const faqQuestions = document.querySelectorAll(".pv-faq-question");

if (faqQuestions.length > 0) {

    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const currentCard = question.parentElement;

            document.querySelectorAll(".pv-faq-card").forEach(card => {

                if (card !== currentCard) {
                    card.classList.remove("active");
                }

            });

            currentCard.classList.toggle("active");

        });

    });

}
function toggleAboutDropdown(e) {
    e.preventDefault();
    e.stopPropagation();

    document.querySelector(".about-dropdown-menu").classList.toggle("show");

    // Service dropdown close
    document.querySelectorAll(".mega-menu").forEach(menu=>{
        menu.classList.remove("show");
    });
}

document.addEventListener("click", function(e){

    if(!e.target.closest(".about-nav-item")){
        document.querySelector(".about-dropdown-menu").classList.remove("show");
    }

});