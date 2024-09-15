# 📝 Tiptap Editor
<p align="center">
  <img src="https://raw.githubusercontent.com/CyberSaikat/tiptap-editor/main/public/images/banner.png" alt="Leading Image" width="100%">
</p>
A customizable and feature-rich text editor built with Tiptap and React, and designed for seamless integration with Next.js using the App Router.

## ✨ Features
- **Formatting Options**
    - Bold, Italic, Underline, Strike: Apply essential text styles for emphasis and formatting.
    - Subscript, Superscript: Useful for scientific notation and mathematical expressions.
- **Lists & Block Elements** 
  - Blockquote: Highlight important text or citations.
  - Bullet List, Ordered List: Organize information clearly with lists.
  - Table: Insert and customize tables to present data.
- **Media**
  - Image Insertion: Add images for visual enhancement.
  - Link Insertion: Create hyperlinks to connect to other resources.
- **Code Support**
  - Code Blocks with Syntax Highlighting: Display code snippets with syntax highlighting for readability.
- **Layout**
  - Horizontal Rule: Separate content visually with horizontal lines.
  - Text Alignment: Adjust alignment to Left, Center, Right, or Justify. 
- **Typography**
  - Font Family Selection: Choose from various font families to match your design needs.
- **Customization**
  - Toolbar: Tailor the toolbar with floating and bubble menu options.

## 🚀 Getting Started
To set up the Tiptap Editor with a Next.js project, follow these steps:

1. **Clone the Repository:** Copy the repository to your local machine.
    ```bash
   git clone https://github.com/CyberSaikat/tiptap-editor.git
   ```
2. **Navigate to the Project Directory:** Move into the project directory.
    ```bash
   cd tiptap-editor
   ```
3. **Install Dependencies:** Use npm or yarn to install the project dependencies.
    ```bash
    npm install
    ```
4. **Start the Development Server:** Launch the Next.js development server.
    ```bash
    npm run dev
    ```
   
## 💻 Usage
To use the Tiptap Editor within a Next.js application, follow these steps:

1. **Import the Editor Component:** Import the `Editor` component from the `components` directory.
    ```jsx
    import Editor from '../components/Editor';
    ```
   
2. **Render the Editor:** Include the Tiptap component in your page or component.
    ```jsx
    export default function Home() {
      return (
        <div>
          <Tiptap />
        </div>
      );
    }
    ```

The editor will appear on the page where you place the **Tiptap** component. Customize and interact with it according to your needs.

## 🎨 Customization
The Tiptap Editor can be customized to suit your design requirements. You can modify the toolbar, add new commands, or change the editor's appearance. Refer to the [Tiptap Documentation](https://tiptap.dev/) for more information on customization options.

- ### Toolbar Customization
  - Modify the MenuBar component to adjust the toolbar, adding or removing tools as needed.
- ### Extensions
  - Add or remove editor extensions to extend functionality. Refer to the Tiptap documentation for details on available extensions.
- ### Styles
  - Apply custom styles by overriding the default styles or using a different CSS framework. Tailwind CSS is used in this project, but you can adapt it to suit your design requirements.

## 🤝 Contributing

Contributions are welcome! Feel free to raise issues or submit pull requests to improve the project. If you have any suggestions or feedback, please let us know.

    1. Fork the Repository: Create a copy of the repository on GitHub.
    2. ake Your Changes: Implement your enhancements or fixes in your forked repository.
    3. Submit a Pull Request: Propose your changes by submitting a pull request to the original repository.
Please follow coding guidelines and test your changes before submission.

## 📜 License
This project is licensed under the MIT License. You are free to use, modify, and distribute the code under these terms. See the `LICENSE` file for details.

## 🙏 Acknowledgments
This project depends on several key libraries and tools:
- [Tiptap](https://tiptap.dev/): A renderless rich-text editor for Vue.js and React.js.
- [Next.js](https://nextjs.org/): A React framework for building server-rendered applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- [React Icons](https://react-icons.github.io/react-icons/): A collection of popular icons for React projects.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.

Thank you to the authors and maintainers of these projects for their contributions to the open-source community.