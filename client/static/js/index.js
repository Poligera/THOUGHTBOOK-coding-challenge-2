const form = document.querySelector("form");
console.log(form);
const postsSection = document.querySelector("section");

form.addEventListener("submit", submitPost);

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
    .then((r) => r.json())
    .then(loadPosts())
    .then(() => e.target.reset())
    .catch(console.warn);
}

window.onload = loadPosts();

function loadPosts() {
  fetch("http://localhost:3000/posts")
    .then((r) => r.json())
    .then((posts) => createPost(posts))
    .catch(console.warn);
}

function createPost(data) {
  data.forEach((post) => {
    const postDiv = document.createElement("div");
    const title = document.createElement("p");
    const pseudonym = document.createElement("p");
    const body = document.createElement("p");
    title.textContent = `Title:\n${post.title}`;
    pseudonym.textContent = `Pseudonym:\n${post.pseudonym}`;
    body.textContent = `Message:\n${post.body}`;
    postDiv.append(title);
    postDiv.append(pseudonym);
    postDiv.append(body);
    postsSection.append(postDiv);
  });
}
