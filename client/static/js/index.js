const form = document.querySelector("form");
const postsSection = document.querySelector("section");
const textarea = document.querySelector("textarea");
const charCounter = document.querySelector("#charCounter");

form.addEventListener("submit", submitPost);
textarea.addEventListener("input", limitChar);

function limitChar(e) {
  const target = e.target;
  const maxLength = target.getAttribute("maxlength");
  let curLength = target.value.length;
  charCounter.textContent = `${maxLength - curLength} characters remaining`;
}

function submitPost(e) {
  e.preventDefault();
  console.log(e);

  const postData = {
    title: e.target.title.value,
    pseudonym: e.target.pseudonym.value,
    body: e.target.story.value,
  };

  console.log(postData);

  const options = {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-Type": "application/json" },
  };

  fetch("http://localhost:3000/", options)
    .then((r) => r.text())
    .then(loadPosts())
    .then(() => e.target.reset())
    .catch(console.warn);
}

window.onload = loadPosts();

function loadPosts() {
  fetch("http://localhost:3000/posts")
    .then((r) => r.json())
    .then((data) => createPost(data.posts))
    .catch(console.warn);
}

function createPost(data) {
  console.log(data);
  postsSection.textContent = "";
  data.forEach((post) => {
    const postDiv = document.createElement("div");
    const header = document.createElement("p");
    const body = document.createElement("p");
    header.textContent = `"${post.title}" from ${post.pseudonym}`;
    body.textContent = post.body;
    postDiv.append(header);
    postDiv.append(body);
    postsSection.append(postDiv);
  });
}
