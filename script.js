const quoteText = document.getElementById("quote-text");
const btn = document.getElementById("btn");
const hiAuthor = document.getElementById("quote-hi-col")
const changer = document.querySelector("#change-theme")
const body = document.querySelector("body")
const h1 = document.querySelector("h1")
const pDiv = document.getElementById("p-div")
const pDivChild = pDiv.children
const svgGH = document.getElementById("svg-gh")
let isDark = false

const QUOTE_URL = "https://quotes-api-self.vercel.app/quote";

const asyncFn = async () => {
  const response = await fetch(QUOTE_URL)
  // console.log(response)
  let usableData = await response.json()
  // console.log(usableData)
  quoteText.innerText = usableData.quote
  hiAuthor.innerHTML = "~" + usableData.author
}



btn.addEventListener("click", () => {
  asyncFn()
});

const applyDarkMode = () => {
  body.classList.remove("bg-gradient-to-tl", "from-[#831843]", "via-[#be185d]", "to-[#e23c92]")
  h1.classList.remove("text-[#EFEBE0]")
  pDivChild[0].classList.remove("text-[#EFEBE0]")
  pDivChild[1].classList.remove("text-[#ffbfdb]")
  btn.classList.remove("border-[#EFEBE0]", "text-[#EFEBE0]", "hover:text-pink-700", "hover:bg-[#EFEBE0]"
  )
  svgGH.classList.remove("text-[#EFEBE0]", "hover:text-white")
  changer.classList.remove("bg-[#EFEBE0]", "hover:bg-[#EFEBE0]")
  changer.children[0].remove()
  body.classList.add("bg-gradient-to-bl", "from-slate-950", "to-slate-600")
  h1.classList.add("text-slate-200")
  pDivChild[0].classList.add("text-slate-200")
  pDivChild[1].classList.add("text-slate-400")
  btn.classList.add("border-slate-300", "text-slate-200", "hover:text-slate-700", "hover:bg-slate-100")
  svgGH.classList.add("text-slate-200", "hover:text-white")
  changer.classList.add("bg-slate-200", "hover:bg-slate-200")
  changer.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1E293B"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>'

}

const applyLightMode = () => {
  body.classList.remove("bg-gradient-to-bl", "from-slate-950", "to-slate-600")
  h1.classList.remove("text-slate-200")
  pDivChild[0].classList.remove("text-slate-200")
  pDivChild[1].classList.remove("text-slate-400")
  btn.classList.remove("border-slate-300", "text-slate-200", "hover:text-slate-700", "hover:bg-slate-100")
  svgGH.classList.remove("text-slate-200", "hover:text-white")
  changer.classList.remove("bg-slate-200", "hover:bg-slate-200")
  changer.children[0].remove();
  //adders
  changer.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#831843"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>'
  body.classList.add("bg-gradient-to-tl", "from-[#831843]", "via-[#be185d]", "to-[#e23c92]")
  h1.classList.add("text-[#EFEBE0]")
  pDivChild[0].classList.add("text-[#EFEBE0]")
  pDivChild[1].classList.add("text-[#ffbfdb]")
  btn.classList.add("border-[#EFEBE0]", "text-[#EFEBE0]", "hover:text-pink-700", "hover:bg-[#EFEBE0]"
  )
  svgGH.classList.add("text-[#EFEBE0]", "hover:text-white")
  changer.classList.add("bg-[#EFEBE0]", "hover:bg-[#EFEBE0]")

}
changer.addEventListener("click", (evt) => {
  if (isDark) {
    applyLightMode()
    isDark = false
  } else {
    applyDarkMode()
    isDark = true
  }
})

