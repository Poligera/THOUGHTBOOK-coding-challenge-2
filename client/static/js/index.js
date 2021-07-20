const form = document.querySelector("form");
const postsSection = document.querySelector("section");

form.addEventListener("submit", submitPost);

function submitPost(e) {
  e.preventDefault();
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
    .then((r) => r.json())
    .then((data) => createPost())
    .then(() => e.target.reset())
    .catch(console.warn);
}

window.onload = loadPosts();

function loadPosts() {
  fetch("http://localhost:3000/posts")
    .then((r) => r.json())
    .then((posts) => posts.forEach((post) => createPost(post)))
    .catch(console.warn);
}

function createPost(data) {
  const postDiv = document.createElement("div");
  const title = document.createElement("p");
  const pseudonym = document.createElement("p");
  const body = document.createElement("p");
  title.textContent = `Title:\n${data.title}`;
  pseudonym.textContent = `Pseudonym:\n${data.pseudonym}`;
  body.textContent = `Message:\n${data.body}`;
  postDiv.append(title);
  postDiv.append(pseudonym);
  postDiv.append(body);
  postsSection.append(postDiv);
}
