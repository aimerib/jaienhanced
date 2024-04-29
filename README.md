# JanitorAI Enhanced

This is a Chrome extension that adds a few extra functionalities to JanitorAI.

## Features

- Automatically hides blocked bots from the list of available bots on JanitorAI.
- Allows expanding bot profile pictures in chat by clicking the bot thumbnail in any message.
- Seamlessly integrates with the JanitorAI website, providing a cleaner user experience.
- Lightweight and efficient, with minimal impact on browser performance.

## Prerequisites

Before installing and using this extension, make sure you have the following:

- [Node.js](https://nodejs.org/) installed on your system.
- [Git](https://git-scm.com/) installed on your system.

## Building the Extension

1. Clone this repository by running the following command in your terminal:
```
git clone https://github.com/aimerib/jaihideblocked.git
```
2. Navigate to the project directory:
```
cd jaihideblocked
```
3. Install the required dependencies by running:
```
npm install
```
4. Build the extension by running:
```
npm run build
```
This command will compile the TypeScript code and generate the necessary files in the `dist` directory.

## Installation

1. Open Google Chrome and navigate to `chrome://extensions`.
2. Enable "Developer mode" using the toggle switch in the top right corner.
3. Click on "Load unpacked" and select the `dist` directory inside the project folder.
4. The extension should now be installed and active in your Chrome browser.

## Usage

Once the extension is installed, it will automatically hide blocked bots on the JanitorAI website. Simply navigate to `https://janitorai.com/` and enjoy a cleaner interface without any blocked bots.

## Development

If you want to contribute to the development of this extension or customize it further, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org/) installed on your system.
2. Clone this repository and navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Make your desired changes to the source code.
5. Run `npm run build` to build the extension.
6. Load the built extension in Chrome by following the installation steps mentioned above.

## Technologies Used

- [Vite](https://vitejs.dev/): A fast and lightweight development server and build tool.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [chrome-types](https://www.npmjs.com/package/chrome-types): A package providing TypeScript definitions for Chrome extension APIs.
- [@crxjs/vite-plugin](https://www.npmjs.com/package/@crxjs/vite-plugin): A Vite plugin for building Chrome extensions.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [JanitorAI](https://janitorai.com/) for providing the platform and inspiration for this extension.
