$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 700, 1400, 50, "green");
    createPlatform(0, 200, 10, 800, "green");
    createPlatform(150, 200, 10, 800, "green");
    createPlatform(120, 600, 40, 10, "limegreen");
    createPlatform(0, 500, 40, 10, "limegreen");
    createPlatform(120, 400, 40, 10, "limegreen");
    createPlatform(0, 300, 40, 10, "limegreen");
    createPlatform(120, 200, 40, 10, "limegreen");
    createPlatform(250, 0, 10, 500, "green");
    createPlatform(150, 650, 140, 50, "green");
    createPlatform(250, 500, 930, 10, "green");
    createBadPlatform(290, 690, 980, 10, "red");
    createPlatform(375, 650, 30, 10, "limegreen");
    createPlatform(500, 650, 30, 10, "limegreen");
    createPlatform(625, 650, 30, 10, "limegreen");
    createPlatform(750, 650, 30, 10, "limegreen");
    createPlatform(875, 650, 30, 10, "limegreen");
    createPlatform(1000, 650, 30, 10, "limegreen");
    createPlatform(1125, 650, 30, 10, "limegreen");
    createPlatform(1250, 625, 30, 10, "limegreen");
    createPlatform(1270, 550, 140, 300,"green");
    createPlatform(350, 350, 1400, 10,"green");
    createPlatform(250, 450, 40, 10, "limegreen");
    createPlatform(400, 300, 100, 50, "green");
    createBadPlatform(500, 340, 800, 10, "red");
    createPlatform(1300, 250, 100, 100, "green");
    createPlatform(6500, 275, 30, 10, "limegreen");
    createPlatform(525, 275, 30, 10, "limegreen");
    createPlatform(625, 275, 30, 10, "limegreen");
    createPlatform(750, 275, 30, 10,"limegreen");
    createPlatform(875, 275, 30, 10,"limegreen");
    createPlatform(1000, 275, 30, 10,"limegreen");
    createPlatform(1125, 275, 30, 10,"limegreen");
    createPlatform(1250, 275, 30, 10,"limegreen");
    // TODO 3 - Create Collectables
    createCollectable("database", 50, 650)
    createCollectable("database", 1350, 200)
    createCollectable("database", 750, 450)
    createCollectable("database", 1350, 500)
    // TODO 4 - Create Cannons
    createCannon("top", 125, 1000)
    createCannon("top", 500, 900)
    createCannon("top", 650, 900)
    createCannon("top", 750, 900)
    createCannon("top", 900, 900)
    createCannon("top", 1000, 900)
    createCannon("top", 1150, 900)
    createCannon("top", 1250, 900)
    createCannon("top", 1375, 1000)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
