<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Name's Portfolio</title>
<style>
    body, html {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #0a0f32; /* fallback color */
        background-image: url('background.jpg'); /* path to your background image */
        background-size: cover; /* cover ensures the image covers the entire area */
        background-position: center; /* centers the image */
        background-repeat: no-repeat; /* prevents the image from repeating */
        color: #ffffff;
        height: 100%; /* added height to html for full page height */
        scroll-behavior: smooth; /* smooth scrolling when navigating to sections */
    }
    #main-content {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    .container {
        text-align: center;
    }
    h1 {
        font-size: 2.5em;
    }
    p {
        margin: 20px 0;
    }
    .button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #464748;
        color: #ffffff;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s;
    }
    .button:hover {
        background-color: #0e0e0e;
    }
    #steps {
        background-color: #ffffff; /* contrasting background for readability */
        color: #000000; /* text color */
        padding: 50px 20px; /* padding around the content */
        text-align: left; /* left-aligned text */
    }
    .step {
        margin-bottom: 30px;
    }
    .step-header {
        font-size: 1.5em;
        margin-bottom: 10px;
    }
</style>
</head>
<body>
<div id="main-content">
    <div class="container">
        <h1>Vamsi Munjuluri</h1>
        <p>Below buttons are the links to git repository and the demo video.</p>
        <!-- Replace 'your-repository-link' with the actual link to your repository -->
        <a href="https://github.com/VamsiMunjuluri/Cosmos.git" class="button">Git Repository</a>
        <a href="https://drive.google.com/file/d/1u6XdbtSkML245stR7jyQZrwmF4Tcc-EK/view?usp=sharing" class="button">Demo Video</a>
        <p>Scroll down for instructions.</p>
    </div>
</div>

<div id="steps">
    <div class="container">
        <h2>Project Steps</h2>
        <div class="step">
            <div class="step-header">Step 1: Add the Cosmos_main folder to unity hub</div>
            <p>Open the project.</p>
        </div>
        <div class="step">
            <div class="step-header">Step 2: In unity go to Assets folder</div>
            <p>Add the cosmos journey scene to your hierarchy.</p>
        </div>
        <div class="step">
            <div class="step-header">Step 3: Hit the play button</div>   
        </div>
        
        <!-- Add more steps as needed -->
    </div>
</div>
</body>
</html>
