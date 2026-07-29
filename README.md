# 📝 TODO List Web App

A simple, responsive, and interactive **TODO List Web Application** built using **HTML, CSS, and Vanilla JavaScript**.

This project allows users to add tasks, edit existing tasks, delete individual tasks, clear the input field, and remove all tasks at once. The interface is designed with a clean dark theme and responsive CSS so that it works across different screen sizes.

---

## 🚀 Features

* ➕ **Add Tasks** — Add new tasks to your TODO list.
* ✏️ **Edit Tasks** — Update the text of an existing task.
* 🗑️ **Delete Tasks** — Remove individual tasks from the list.
* 🧹 **Delete All Tasks** — Clear the complete TODO list with one click.
* ❌ **Clear Input** — Quickly clear the text entered in the input field.
* 📱 **Responsive Design** — Adapted for different screen sizes using CSS media queries.
* 🎨 **Dark UI** — Simple dark-themed interface with contrasting buttons and text.
* ⚡ **Vanilla JavaScript** — No frameworks or external JavaScript libraries are required.

---

## 🛠️ Technologies Used

| Technology     | Purpose                                        |
| -------------- | ---------------------------------------------- |
| **HTML5**      | Structure and layout of the application        |
| **CSS3**       | Styling, responsive design, and UI             |
| **JavaScript** | Application functionality and DOM manipulation |

---

## 📂 Project Structure

```text
TODO-App/
│
├── index.html       # Main HTML structure
├── style.css        # Styling and responsive design
├── script.js        # TODO app functionality
└── README.md        # Project documentation
```

---

## ⚙️ How It Works

The application uses JavaScript DOM manipulation to dynamically create and manage TODO items.

### 1. Add a Task

The user enters a task into the input field and clicks the **`+`** button.

JavaScript then:

1. Gets the input value.
2. Creates a new `<li>` element.
3. Adds the task text to the list item.
4. Creates **Delete** and **Edit** buttons.
5. Adds the new task to the `<ul>`.
6. Clears the input field.

---

### 2. Edit a Task

Each task contains an **Edit** button.

When clicked, the application uses a prompt to ask for the new task text and then updates the existing task.

```javascript
const editbtn = (e) => {
    let editValue = prompt(
        "Enter your new text",
        e.parentNode.firstChild.nodeValue
    );

    e.parentNode.firstChild.nodeValue = editValue;
}
```

---

### 3. Delete an Individual Task

Every task has its own **Delete** button.

Clicking the button removes the corresponding `<li>` element from the DOM.

```javascript
const delbtn = (e) => {
    e.parentNode.remove();
}
```

---

### 4. Delete All Tasks

The **Delete All** button removes every task from the list by clearing the contents of the `<ul>` element.

```javascript
const deleteAll = () => {
    let ul = document.getElementById("ul");
    ul.innerHTML = "";
}
```

---

### 5. Clear Input

The `×` button next to the input field clears the current input value.

```javascript
const del = () => {
    let input = document.getElementById("input");
    input.value = "";
}
```

---

## 💻 Getting Started

### Prerequisites

No special software, frameworks, or packages are required.

You only need:

* A modern web browser
* A code editor such as VS Code
* Basic HTML/CSS/JavaScript files

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repository-name.git
```

Navigate to the project directory:

```bash
cd your-repository-name
```

Open the project in your preferred code editor.

Then open:

```text
index.html
```

in your web browser.

---

## 🎯 Usage

1. Enter a task in the input field.
2. Click the **`+`** button to add it.
3. Click **Edit** to modify a task.
4. Click **Delete** to remove an individual task.
5. Click **Delete All** to remove all tasks.
6. Use the **`×`** icon to clear the input field.

---

## 📱 Responsive Design

The application includes CSS media queries for different screen widths:

* Desktop screens
* Tablets
* Mobile devices
* Small mobile screens

This allows the application layout to adapt to smaller displays while maintaining usability.

---

## 🧠 JavaScript Concepts Practiced

This project was created to practice several fundamental JavaScript concepts, including:

* DOM Manipulation
* `document.getElementById()`
* `document.createElement()`
* `document.createTextNode()`
* `appendChild()`
* `setAttribute()`
* Event handling with `onclick`
* Functions and arrow functions
* Parent-child DOM relationships
* Dynamic HTML element creation
* `prompt()`
* Updating DOM content
* Removing DOM elements

---

## 🎨 UI Design

The application uses a dark-themed interface featuring:

* Black background
* Dark gray application container
* Coral-colored action buttons
* Yellow accent color for the logo
* Rounded buttons and containers
* Responsive layout

The styling is implemented entirely with **CSS3**, without external UI frameworks.

---

## 🔮 Future Improvements

Possible improvements for future versions include:

* 💾 Save tasks using **Local Storage**
* ☑️ Add task completion/check-off functionality
* 🔍 Add task search and filtering
* 📅 Add task dates and deadlines
* 🏷️ Add task categories or priorities
* 🌙 Add light/dark theme switching
* 🔄 Add drag-and-drop task reordering
* ⌨️ Allow users to add tasks by pressing **Enter**
* 🔔 Add notifications or reminders
* ✨ Improve animations and transitions

---

## 📸 Project Preview

You can add screenshots of your application here:

```markdown
![TODO App Screenshot](./screenshot.png)
```

---

## 📚 Learning Purpose

This project was developed as a practical exercise to strengthen my understanding of **front-end web development**, particularly **JavaScript DOM manipulation and event handling**.

It demonstrates how HTML, CSS, and JavaScript can work together to create an interactive web application without relying on external frameworks.

---

## 👨‍💻 Author

**Danish Kummar**

Aspiring Developer | Learning Web Development & Programming

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub!

---

## 📄 License

This project is open-source and available for educational and learning purposes.
