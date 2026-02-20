const addHeaderBtn = document.getElementById("addHeader");
const headersDiv = document.getElementById("headers");

addHeaderBtn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerHTML = `
    <input type="text" placeholder="Header Key">
    <input type="text" placeholder="Header Value">
  `;
  headersDiv.appendChild(div);
});

document.getElementById("send").addEventListener("click", async () => {
  const method = document.getElementById("method").value;
  const url = document.getElementById("url").value;
  const body = document.getElementById("body").value;
  const statusDiv = document.getElementById("status");
  const responsePre = document.getElementById("response");

  let headers = {};
  const headerInputs = headersDiv.querySelectorAll("div");

  headerInputs.forEach(div => {
    const inputs = div.querySelectorAll("input");
    if (inputs[0].value && inputs[1].value) {
      headers[inputs[0].value] = inputs[1].value;
    }
  });

  const startTime = performance.now();

  try {
    const res = await fetch(url, {
      method,
      headers,
      body: method !== "GET" ? body : undefined
    });

    const endTime = performance.now();
    const responseTime = (endTime - startTime).toFixed(2);

    const data = await res.text();

    statusDiv.innerHTML = `
      Status: ${res.status} ${res.statusText} |
      Time: ${responseTime} ms
    `;

    try {
      responsePre.textContent = JSON.stringify(JSON.parse(data), null, 2);
    } catch {
      responsePre.textContent = data;
    }

    chrome.storage.local.set({ lastRequest: { method, url, body, headers } });

  } catch (err) {
    statusDiv.innerHTML = "Error: " + err.message;
    responsePre.textContent = "";
  }
});