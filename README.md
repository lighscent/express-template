# Express Tailwind EJS Template

A simple, clean starter template for building web applications using Express.js, EJS for templating, and Tailwind CSS for styling.

## 🚀 Features

- **Express.js** - Fast, unopinionated, minimalist web framework.
- **EJS** - Simple templating language that lets you generate HTML markup with plain JavaScript.
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development.
- **PostCSS** - Transforming CSS with JavaScript plugins.
- **Nodemon** - Automatically restarts the node application when file changes in the directory are detected.
- **Concurrently** - Run multiple commands simultaneously.

## 🛠️ Project Structure

- `index.js` - Entry point (Server logic).
- `input.css` - Source stylesheet (Tailwind).
- `public/` - Static assets (Compiled CSS).
- `views/` - HTML templates (EJS).
- `tailwind.config.js` - Tailwind configuration.
- `postcss.config.js` - PostCSS configuration.

## ⚙️ How to Run

### Installation

Install dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### Development Mode

Run the following command to start the server and watch for CSS changes:

```bash
npm run dev
# or
yarn dev
```

### Production Mode

To build the CSS:

```bash
npm run build:css

# or
yarn build:css
```

To start the server:

```bash
npm run start
# or
yarn start
```

## 📝 License

This project is licensed under the MIT License.

