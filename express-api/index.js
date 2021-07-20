const app = require("./server");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express just departed from port ${port}!`));
