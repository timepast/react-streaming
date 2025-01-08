# react-streaming

react stream render
In traditional Client-Side Rendering (CSR), The browser first fetches the HTML from the backend server, then request JavaScript assets, followed by remote data, and finally renders the HTML, Each step must wait for the previous one to complete, which can lead to delayed and inefficient rendering experienc.
To reduce the white green time and deliver the initial content faster, Server-Side Rendering(SSR) prioritizes sending the first screen's HTML, including its data dependencies, directly from the server.

On the initial screen, components such as the header, navbar, sidebar and content are critical. However, content data is often fetched more slowly due to dependencies, causing delays. To mitigate this, we can stream the response using HTTP chunked transfer encoding, a built-in protocal feature that allows the server to send parts of the response as they become ready.

This approach enables the static layout(e.g., header, navbar, sidebar) to render immediately while the slower content data continues to load and render incrementally, significantly improving the user experience.

# Use

```zsh
npm i
npm start
```
