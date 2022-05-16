import 'virtual:windi.css'
import "./style.css";

// ********** set date ************
// select span
enum IDsElementsAndClasses{
  DATE = "#date",
  NAV_BTN = "#nav-toggle",
  NAV_LINKS = "#nav-links",
  HIDDEN = "hidden",
  ANCHOR_TAG = "a",
  BODY = "body",
}

enum MagicNumbers{
  TOP_SCROLL= 62,
  ZERO= 0,
}



const body = document.querySelector(IDsElementsAndClasses.BODY)




if (body) {


    const date = body.querySelector<HTMLTimeElement>(IDsElementsAndClasses.DATE)


    if (date) {
        
        const year = new Date().getFullYear()

        date.dateTime = year.toLocaleString()

        date.textContent= year.toString()
    }

// ********** nav toggle ************
// select button and links
const navBtn = body.querySelector(IDsElementsAndClasses.NAV_BTN);
const links = body.querySelector(IDsElementsAndClasses.NAV_LINKS);
// add event listener
navBtn?.addEventListener("click", () => {
  links?.classList.toggle(IDsElementsAndClasses.HIDDEN); 
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(IDsElementsAndClasses.ANCHOR_TAG);

    
    scrollLinks.forEach(link => {
  


    link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    
    links?.classList.add(IDsElementsAndClasses.HIDDEN);

    const target = e.target as HTMLAnchorElement
    
    const element = body.querySelector<HTMLDivElement>(target.getAttribute("href") as string);
    //
        
        
        if (element) {
            
            window.scrollTo({
              left: MagicNumbers.ZERO,
              // top: element.offsetTop,
              top: element.offsetTop - MagicNumbers.TOP_SCROLL,
              behavior: "smooth"
            });
        } else {
          console.error("There is no href attribute at all ")
        }
    
  });
});

    

} else {

  console.error("There is no body")

}


