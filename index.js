const cursorImg = document.querySelector(".cursor-gradient");
const hero = document.querySelector(".hero");

// add event listener to entire dom

document.addEventListener("mousemove", (e) => {
  cursorImg.style.left = `${e.clientX}px`;
  cursorImg.style.top = `${e.clientY}px`;
  cursorImg.style.transform = `translate(-50%, -50%)`;
});

const title = document.querySelector(".title-typed");
const subtitle = document.querySelector(".subtitle-typed");

var typed = new Typed(".title-typed", {
  strings: ["&lt;Programming Club/&gt;"],
  typeSpeed: 40,
  fadeOut: true,
  cursorChar: "_",

  onComplete: () => {
    const cursor = document.querySelector(".typed-cursor");
    cursor.style.display = "none";
  },
});

var typed = new Typed(".subtitle-typed", {
  strings: ["Bryan's Co-Head Application"],
  typeSpeed: 20,
  startDelay: 1200,
  fadeOut: true,
  cursorChar: "",
});

// Every so often, I'll get a call from one of my friends because their sibling needs help with their CS-1 project

const answers = [
  "Hey guys! My name is Bryan Sukidi (he/him) and I'm currently a junior in Wolcott House. I enjoy writing programs that make people's lives easier, and I'm applying to be a future Co-Head of Programming Club! My favorite programming languages are Python for silly projects and data science, React.js for frontend, and JavaScript for backend.",
  "In my sophomore year, I took my first computer science class ever and absolutely loved it. I joined Programming Club shortly after and have attended club meetings for about 1.5 years. I've been a part of all of Milton's major hackathons (and took awards home for both!) I also attended the CS Symposium that happened recently, where I got to present some fun projects I've worked on.",
  "Every so often, I'll get a call from one of my friends because their sibling is looking for CS help - or maybe, someone will have walked into my room with a question about why their game isn't painting to the screen. Regardless of the context, I've loved being a person that people can come to ",
  "I haven't been coding for very long, but I've picked up a number of skills over the past year and a half that I think would be valuable for the development of Gotcha. I'd describe myself as organized, versatile, and resourceful. For the ratemycourse.org website, I built the frontend using React and CSS, and I also configured some of the backend API endpoints. ",
  "Funny you ask! Next year, the only commitment I have for Club Block 1 is Programming Club. My other non-CS clubs consist of Muslim Student Association during Club Block 2 and Sustainability Board meetings during Club Block 3. I'll also be doing Rock Climbing in the winter and Ultimate Frisbee in the spring (I may take the season off). On the side, I teach Python to little kids via an online program.",
  "Great question! Here are a couple of my ideas:",
  "As per Mr. Hales' suggestions, I am planning on implementing guardrails for the CS department on ratemycourse.org so that students are forced to rate CS courses as high as possible. I may even censor words like 'bad', 'hate', and 'programming club sucks' to promote truthful responses.",
  "Many of the ideas I've listed in the ideas for the future section are already targeted towards connecting the higher and lower levels. During programming club meetings, I wanna make sure that problems/projects that we work on are accessible to all levels. ",
];

const options = {
  root: null,
  rootMargin: "-50px 0px -50px 0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    let index = entry.target.element_index;
    if (entry.isIntersecting) {
      const span = document.createElement("span");
      span.classList.add(`q${index}`);

      entry.target.appendChild(span);

      var typed = new Typed(`.q${index}`, {
        strings: [answers[index]],
        typeSpeed: 10,
        fadeOut: true,
      });

      observer.unobserve(entry.target);
    }
  });
}, options);

const elements = document.querySelectorAll(".answer");
elements.forEach((element, index) => {
  element.element_index = index;
  observer.observe(element);
});

function addSpan(element) {
  const span = document.createElement("span");
  span.classList.add(element.classList[1]);
  element.appendChild(span);
}

let githubClicked = false;


