const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll("[data-section]")

const changeLenguage = async language=>{
  const requestJson = await fetch(`./languages/${language}.json`)
  const texts = await requestJson.json();

  for(const textToChange of textsToChange){
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML = texts[section][value];
  }
}

flagsElement.addEventListener('click', (e) =>{
  changeLenguage(e.target.parentElement.dataset.language);
})

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (toggleIcon.src.includes("moon.svg")) {
    toggleIcon.src = "Portafolio/assets/icons/sun.svg";
    toggleText.textContent = "Ligth Mode";
  } else {
    toggleIcon.src = "Portafolio/assets/icons/moon.svg";
    toggleText.textContent = "Dark Mode";
  }
});

toggleColors.addEventListener("click", (e) => {
  rootStyles.setProperty('--primary-color', e.target.dataset.color);
});
