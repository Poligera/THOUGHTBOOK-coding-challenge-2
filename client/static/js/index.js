// DOM elements:
const form = document.querySelector("form");
const postsSection = document.querySelector("section");
const textarea = document.querySelector("textarea");
const charCounter = document.querySelector("#charCounter");

// Event listeners:
form.addEventListener("submit", submitPost);
textarea.addEventListener("input", limitChar);
window.addEventListener("load", loadPosts);

// Create a post:
function submitPost(e) {
  e.preventDefault();

  const postData = {
    date: today(),
    title: e.target.title.value,
    pseudonym: e.target.pseudonym.value,
    body: e.target.story.value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-Type": "application/json" },
  };

  fetch("http://localhost:3000/", options)
    .then((r) => r.json())
    .then((data) => console.log("Post created, id: " + data.id))
    .then(() => e.target.reset())
    .catch(console.warn);

  window.location.reload();
}

// Fetching all the posts and sorting them:
function loadPosts() {
  fetch("http://localhost:3000/")
    .then((r) => r.json())
    // .then((postData) => sortPosts(postData))
    .then((data) => displayPosts(data))
    .catch(console.warn);
}

// Creating a div for every post from the db:
function displayPosts(data) {
  console.log(data);
  postsSection.textContent = "";
  data.forEach((post) => {
    const postDiv = document.createElement("div");
    const header = document.createElement("p");
    const body = document.createElement("p");
    header.textContent = `"${post.title}" from ${post.pseudonym} posted on ${post.date}`;
    body.textContent = post.body;
    postDiv.append(header);
    postDiv.append(body);
    postsSection.append(postDiv);
  });
}

// Character limit feedback:
function limitChar(e) {
  const target = e.target;
  const maxLength = target.getAttribute("maxlength");
  let curLength = target.value.length;
  charCounter.textContent = `${maxLength - curLength} characters remaining`;
}

// Get a date for each post:
const today = () => {
  let today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};
