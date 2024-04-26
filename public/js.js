<!DOCTYPE html>
<html lang="en">
<head>
  <script src="https://assets.adobedtm.com/6196ef54ab10/253d0663aed8/launch-866480f5ff3f-development.min.js" async></script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Simple Image Gallery</title>
<style>
  body {
    font-family: Arial, sans-serif;
    text-align: center;
  }
 .navbar {
    overflow: hidden;
    background-color: #333;
  }

  /* Style for the links inside the navbar */
  .navbar a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
  }

  /* Change background color of links on hover */
  .navbar a:hover {
    background-color: #ddd;
    color: black;
  }
  #image {
    max-width: 400px;
max-height : 300px;
overflow : none;

  }
.banner-half{
max-width:100%;
overflow:none;
text-align :center;background : grey;
padding :5px;
}
</style>
</head>
<body>
<div class="navbar">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</div>
<div id="home" style="padding: 20px;">
  <h1>Home</h1>
  <div id="gallery">
    <img id="image" src="image1.jpg" alt="Image 1">
    <br>
    <button id="prevBtn">Previous</button>
    <button id="nextBtn">Next</button>
  </div>
<br/><br/>
<div class="banner-half">
      <img id="image" src="banner1.jpg" alt="banner 1">
  <img id="image" src="banner2.jpg" alt="banner 2">
      <img id="image" src="banner1.jpg" alt="banner 3">
</div>
  </div>
<div id="about" style="padding: 20px;">
  <h2>About Section</h2>
  <p>Learn more about us in the About section.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor mauris eu lectus congue, vitae hendrerit elit sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus sagittis augue at diam tempor, vitae interdum lorem mattis. Fusce id ante aliquet, consequat ligula sit amet, ultricies magna.
</p>

</div>

<div id="contact" style="padding: 20px;">
  <h2>Contact Section</h2>
  <p>Contact us here in the Contact section.</p>
</div>

  <script>
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // List of image file names
    let currentIndex = 0;
    const imageElement = document.getElementById('image');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    // Function to show the current image
    function showImage(index) {
      imageElement.src = images[index];
    }

    // Event listener for previous button
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    // Event listener for next button
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    // Show the first image initially
    showImage(currentIndex);
  </script>
</body>
</html>