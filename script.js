
const header_slides = [
  {
    name: "Social Justice",
    title: "Racial Discrimination",
    content: "Racial discrimination refers to the unjust or prejudicial treatment of individuals based on their race or ethnicity. This leads to disparities in areas such as education, employment, healthcare, and the criminal justice system. An example is the historical segregation and underfunding of schools in minority communities, resulting in overcrowded classrooms, outdated learning materials, fewer academic opportunities, and a lack of experienced teachers.",
    backgroundURL: "https://www.hrw.org/sites/default/files/styles/opengraph/public/media_2022/08/202208us_chauvin_trial_protest.jpg?h=d4e46ef0&itok=HAY3c8xo",
  },
  {
    name: "Social Justice",
    title: "Educational Inequality",
    content: "Educational inequality occurs when students do not receive the same quality of education due to socioeconomic status, language barriers, or lack of school resources. Students from underprivileged backgrounds often have fewer academic opportunities, inadequate funding, and limited access to experienced teachers and advanced courses, making it harder for them to succeed academically and pursue higher education.",
    backgroundURL: "https://www.ohchr.org/sites/default/files/styles/hero_5_image_desktop/public/SiteCollectionImages/Press/019_DDPA_SA_hp.jpg?itok=XlZ7KBms",
  },
  {
    name: "Social Justice",
    title: "Economic Inequality",
    content: "Economic inequality refers to the gap between different income groups in society, leading to disparities in wealth, access to resources, and opportunities. Lower-income families may struggle with basic needs such as housing, healthcare, and education, while wealthier individuals have greater access to economic mobility. Systemic factors such as wage gaps, job discrimination, and unequal access to financial resources contribute to this ongoing issue.",
    backgroundURL: "https://ideasprod.darden.virginia.edu/sites/default/files/2018-12/Economic%20Inequality%2C%20Part%201-%20Where%20We%20Are%20and%20Why%404x_0.png",
  },
  {
    name: "Social Justice",
    title: "Immigration and Refugee Rights Inequality",
    content: "Immigration and refugee rights inequality occurs when immigrants and refugees face systemic barriers to legal protection, employment, education, and healthcare. Many displaced individuals flee war, persecution, or economic hardship but struggle with policies that limit their rights, separate families, or expose them to unsafe conditions. Ensuring fair treatment and legal protections for immigrants and refugees is a fundamental human rights issue.",
    backgroundURL: "https://www.globaltimes.cn/Portals/0/attachment/2023/2023-04-10/191900a0-875e-4e6f-a7c1-c353959db6dc.jpeg",
  },
  {
    name: "Social Justice",
    title: "Environmental Injustice",
    content: "Environmental injustice refers to the disproportionate impact of environmental hazards—such as pollution, climate change, and industrial waste—on marginalized communities. Low-income and minority populations often live in areas with higher pollution levels, unsafe drinking water, and greater exposure to toxic chemicals. A notable example is the Flint, Michigan water crisis, where cost-cutting measures led to widespread lead contamination, disproportionately affecting Black and low-income residents.",
    backgroundURL: "https://idsb.tmgrup.com.tr/ly/uploads/images/2023/03/08/261342.jpg",
  },
];

const header_DOM = document.querySelector("#header");
const header_slide_title_DOM = document.querySelector("#header-title");
const header_slide_content_DOM = document.querySelector("#header-content");

let currentHeaderSlide = 0;
const minIndexHeaderSlide = 0;
const maxIndexHeaderSlide = header_slides.length - 1;

function UpdateHeaderSlide(){
  let slideData = header_slides[currentHeaderSlide];
  header_slide_title_DOM.innerHTML = slideData.title;
  header_slide_content_DOM.innerHTML = slideData.content;
  header.style.backgroundImage = `url(${slideData.backgroundURL})`;
};

function ChangeHeaderSlide(change){
  if (!change == "back" || !change == "advance") return;
  if (change == "advance"){
    if (currentHeaderSlide + 1 > maxIndexHeaderSlide){
      currentHeaderSlide = minIndexHeaderSlide;
    } else {
      currentHeaderSlide += 1;
    }
  } else if (change == "back") {
    if (currentHeaderSlide - 1 < minIndexHeaderSlide){
      currentHeaderSlide = maxIndexHeaderSlide;
    } else {
      currentHeaderSlide -= 1;
    }
  };;
  UpdateHeaderSlide();
};

UpdateHeaderSlide();

document.querySelector("#header-button-back").addEventListener("click", () => ChangeHeaderSlide("back"));
document.querySelector("#header-button-forward").addEventListener("click", () => ChangeHeaderSlide("advance"));