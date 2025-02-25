# PathScan

PathScan is a browser extension written in JavaScript that allows you to test a list of paths (wordlist) on a given domain to check if they exist or not. Each word in the list is sent as an HTTP request through a **proxy**, and the corresponding **status code** is displayed to determine whether the path exists or not.

This extension is designed for developers, pentesters, and anyone who needs to check the existence of multiple paths on a website.

## Screenshot

![](https://i.postimg.cc/7LkhQ9ft/pathscan.png)

## Features

- **Wordlist input**: Insert a list of paths, one per line.
- **Batch verification**: The process tests each path in the list and shows the result.
- **Results**: Displays the status code for each HTTP request.
- **Proxy**: The extension uses a proxy to send HTTP requests. Make sure to configure one locally.
- **Browser extension**: A tool that's easy to use directly in your browser without the need for additional software.

## How it works

1. **Add a wordlist**: Enter your list of paths, one per line, in the input field of the extension.
2. **Configure the proxy**: Before starting the scan, configure the local proxy. You need to replace the value of the `proxyUrl` variable in the extension's code with the address of your proxy.
3. **Start the process**: Press the button to start the test.
4. **View the results**: The extension will test each word in the list and return the corresponding HTTP status code.
   - A **200 OK** means the path exists.
   - A **404 Not Found** means the path does not exist.
   - Other status codes will be displayed depending on the server's response.

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/ArghgrA/PathScan
    ```

2. Go to the extensions page in your browser and enable developer mode:
   - **Chrome**: `chrome://extensions/`
   - **Firefox**: `about:debugging`
   
3. Load the extension in developer mode:
   - Select "Load unpacked" (Chrome) or "Load Temporary Add-on" (Firefox) and choose the project folder.

4. Once loaded, the extension icon will appear in the browser toolbar.

5. **Configure the proxy**:
   I recommend using this proxy: [Proxy](https://github.com/Rob--W/cors-anywhere).\
   Instead if you want to use your own proxy you have to go and change the value of the proxyUrl variable
   - Open the `path.js` file or the main configuration file.
   - Find the `proxyUrl` variable and replace the address with your local proxy.

## Usage

1. Click on the PathScan icon in your browser's toolbar.
2. In the extension window, paste or load your wordlist in the input field.
3. Press the "Start" button to begin the scan.
4. The results will be displayed below the input field, with the status code for each tested path.
