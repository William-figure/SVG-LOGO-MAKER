# SVG Logo Maker

## Description

The SVG Logo Maker is a command-line application that allows users to generate SVG files with custom text and shapes. Users can choose between different shapes (Circle, Square, Triangle), specify a color, and add text to create personalized SVG logos. This project is designed to be a quick and easy way to generate simple SVG graphics without needing to manually write SVG code.

## Table of Contents

- [SVG Logo Maker](#svg-logo-maker)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Dependencies](#dependencies)
  - [License](#license)
  - [Video](#video)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/svg-logo-maker.git
    cd svg-logo-maker
    ```

2. **Install Node.js:**

    If you haven't installed Node.js yet, download and install it from the [official website](https://nodejs.org/).

3. **Install the dependencies:**

    After cloning the repository, install the necessary dependencies using npm:

    ```bash
    npm install
    ```

    The dependencies installed include:

    - **inquirer**: A command-line interface library that helps to capture user input.
    - **jest**: A testing framework used for unit tests (optional if you are running tests).

    Alternatively, you can install dependencies individually:

    ```bash
    npm install inquirer
    npm install --save-dev jest
    ```

## Usage

1. **Run the application:**

    Use the following command to start the SVG Logo Maker:

    ```bash
    node index.js
    ```

2. **Follow the prompts:**

    The application will guide you through a series of prompts:

    - Enter the text to display in the SVG.
    - Choose the shape for the SVG (Circle, Square, Triangle).
    - Enter the color for the shape (as a hex code or color name).

3. **Output:**

    The generated SVG file will be saved in the `./examples` directory as `output.svg`.

## Features

- **Custom Shapes:** Choose from Circle, Square, or Triangle.
- **Text Customization:** Add your own text to the SVG.
- **Color Options:** Specify any color using a hex code or color name.
- **Simple CLI Interface:** Easy-to-use command-line interface.

## Dependencies

The project relies on the following Node.js packages:

1. **Inquirer**:
   - **Description**: A collection of common interactive command-line user interfaces.
   - **Installation**: `npm install inquirer`
   - **Used for**: Capturing user input from the command line.

2. **Jest** (for testing):
   - **Description**: A delightful JavaScript Testing Framework with a focus on simplicity.
   - **Installation**: `npm install --save-dev jest`
   - **Used for**: Running unit tests on the application.

To install all dependencies at once, simply run:

```bash
npm install
```

## License

This project is licensed under the MIT License 

## Video

[![SVG Logo Maker Tutorial](https://img.youtube.com/vi/ufBNJ6CteFo/0.jpg)](https://youtu.be/ufBNJ6CteFo)
