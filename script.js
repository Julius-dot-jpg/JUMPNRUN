const W = 900;
const H = 500;

// =====================================================
// DIE ZEHN WELTEN
// =====================================================

const worlds = [
  { name:"Grüne Wiesen", icon:"🌳", sky:"#8bd9ff", ground:"#399c50", platform:"#34844b", accent:"#b4f36b", gravity:0.62, type:"normal" },
  { name:"Himmelsinseln", icon:"☁️", sky:"#65b9ff", ground:"#d6f4ff", platform:"#e9f7ff", accent:"#ffffff", gravity:0.55, type:"sky" },
  { name:"Kristallhöhle", icon:"💎", sky:"#30265d", ground:"#533b82", platform:"#8056b5", accent:"#65f4ff", gravity:0.62, type:"cave" },
  { name:"Heiße Wüste", icon:"🌵", sky:"#ffbd72", ground:"#c77a36", platform:"#a95e30", accent:"#ffe29a", gravity:0.65, type:"desert" },
  { name:"Eisland", icon:"❄️", sky:"#b9eaff", ground:"#74b7d4", platform:"#dffaff", accent:"#ffffff", gravity:0.52, type:"ice" },
  { name:"Vulkan", icon:"🌋", sky:"#421d2a", ground:"#8c2926", platform:"#a94330", accent:"#ffb02e", gravity:0.68, type:"lava" },
  { name:"Zauberwald", icon:"🍄", sky:"#254c48", ground:"#245d42", platform:"#397e55", accent:"#e48cff", gravity:0.58, type:"magic" },
  { name:"Unterwasserwelt", icon:"🐠", sky:"#087eae", ground:"#075477", platform:"#168ba4", accent:"#65f5e6", gravity:0.32, type:"water" },
  { name:"Neonstadt", icon:"🌃", sky:"#15102f", ground:"#29204e", platform:"#5540a5", accent:"#37f4ff", gravity:0.62, type:"neon" },
  { name:"Weltraum", icon:"🚀", sky:"#090d2b", ground:"#292d70", platform:"#5358bd", accent:"#f4aaff", gravity:0.30, type:"space" }
];

const levelMechanics = [
  "Lerne Sprungfedern und leichte Gravitationsfelder kennen.",
  "Nutze die umgekehrte Gravitation, um an Decken zu laufen.",
  "Starke Gravitation lässt dich schneller fallen.",
  "Wechsle zwischen normaler und umgekehrter Gravitation.",
  "Schwebe durch schwache Gravitationsfelder und rutsche über Eis.",
  "Springe über Lava und wechsle geschickt die Gravitation.",
  "Kombiniere bewegliche Plattformen mit Gravitationswechseln.",
  "Nutze die geringe Schwerkraft für lange Sprünge.",
  "Meistere schnelle Wechsel zwischen mehreren Gravitationsfeldern.",
  "Das große Finale: Alle Mechaniken werden kombiniert."
];

// =====================================================
// LEVELAUFBAU
// =====================================================


function applyFairCourses() {
  const courses = [
  // WELT 1
  [
    [0,430,260],
    [330,390,150],
    [550,390,150],
    [790,280,150],
    [1010,340,150],
    [1230,290,150],
    [1450,350,150],
    [1670,290,150],
    [1890,350,150],
    [2110,300,150],
    [2330,420,280],
    [2700,370,150],
    [2920,310,150],
    [3140,360,150],
    [3360,290,150],
    [3580,420,300]
  ],

  // WELT 2
  [
    [0,430,260],
    [330,380,150],
    [560,380,150],
    [930,380,150],
    [1150,330,150],
    [1370,380,150],
    [1590,320,150],
    [1810,380,150],
    [2030,320,150],
    [2250,420,280],
    [2620,370,150],
    [2840,310,150],
    [3060,360,150],
    [3280,290,150],
    [3500,420,300]
  ],

  // WELT 3
  [
    [0,430,280],
    [340,380,150],
    [560,330,150],
    [780,380,150],
    [1000,320,150],
    [1220,270,150],
    [1440,330,150],
    [1660,380,150],
    [1880,320,150],
    [2100,370,150],
    [2320,420,280],
    [2690,370,150],
    [2910,310,150],
    [3130,360,150],
    [3350,290,150],
    [3570,420,300]
  ],

  // WELT 4
  [
    [0,430,260],
    [330,380,150],
    [550,320,150],
    [770,380,150],
    [990,320,150],
    [1210,270,150],
    [1430,330,150],
    [1650,380,150],
    [1870,320,150],
    [2090,370,150],
    [2310,420,280],
    [2680,370,150],
    [2900,310,150],
    [3120,360,150],
    [3340,290,150],
    [3560,420,300]
  ],

  // WELT 5
  [
    [0,430,280],
    [340,380,170],
    [580,330,160],
    [810,380,170],
    [1040,320,170],
    [1270,270,170],
    [1500,330,170],
    [1730,380,170],
    [1960,320,170],
    [2190,370,170],
    [2420,420,200],
    [2710,370,150],
    [2930,310,150],
    [3150,360,150],
    [3370,290,150],
    [3590,420,300]
  ],

  // WELT 6
  [
    [0,430,260],
    [330,380,150],
    [550,380,150],
    [790,280,150],
    [1010,340,150],
    [1230,380,150],
    [1470,280,150],
    [1690,340,150],
    [1910,380,150],
    [2130,320,150],
    [2350,420,250],
    [2690,370,150],
    [2910,310,150],
    [3130,360,150],
    [3350,290,150],
    [3570,420,300]
  ],

  // WELT 7
  [
    [0,430,260],
    [330,380,150],
    [550,380,150],
    [820,300,150],
    [1040,350,150],
    [1260,290,150],
    [1480,350,150],
    [1700,290,150],
    [1920,350,150],
    [2140,300,150],
    [2360,420,240],
    [2690,370,150],
    [2910,310,150],
    [3130,360,150],
    [3350,290,150],
    [3570,420,300]
  ],

  // WELT 8
  [
    [0,430,260],
    [340,370,150],
    [570,310,150],
    [800,370,150],
    [1030,310,150],
    [1260,250,150],
    [1490,310,150],
    [1720,370,150],
    [1950,310,150],
    [2180,370,150],
    [2410,420,190],
    [2690,370,150],
    [2910,310,150],
    [3130,360,150],
    [3350,290,150],
    [3570,420,300]
  ],

  // WELT 9
  [
    [0,430,260],
    [330,380,150],
    [550,320,150],
    [770,380,150],
    [990,320,150],
    [1210,270,150],
    [1430,330,150],
    [1650,380,150],
    [1870,320,150],
    [2090,370,150],
    [2310,420,280],
    [2680,370,150],
    [2900,310,150],
    [3120,360,150],
    [3340,290,150],
    [3560,420,300]
  ],

  // WELT 10
  [
    [0,430,260],
    [330,380,150],
    [550,380,150],
    [810,290,150],
    [1030,350,150],
    [1250,280,150],
    [1470,350,150],
    [1690,290,150],
    [1910,350,150],
    [2130,290,150],
    [2350,420,250],
    [2690,370,150],
    [2910,310,150],
    [3130,360,150],
    [3350,290,150],
    [3570,420,300]
  ]
];

  const gravityPlans = [
    [[420,650,0.38,1,"LANGES SCHWEBEFELD"]],
    [[420,850,0.55,-1,"DECKENPARCOURS"]],
    [[400,750,0.75,1,"STARKE GRAVITATION"]],
    [[400,500,0.42,1,"SCHWEBEFELD"],[1150,650,0.55,-1,"DECKENPARCOURS"]],
    [[400,650,0.28,1,"SCHWEBEPARCOURS"],[1250,650,0.65,1,"STARKE GRAVITATION"]],
    [[400,600,0.75,1,"STARKER FALL"],[1200,750,0.55,-1,"DECKENPARCOURS"]],
    [[400,500,0.38,1,"SCHWEBEFELD"],[1050,650,0.55,-1,"DECKENLAUF"],[1800,450,0.65,1,"STARKE GRAVITATION"]],
    [[400,700,0.22,1,"SCHWERELOSIGKEIT"],[1300,650,0.35,1,"SCHWEBEFELD"]],
    [[400,450,0.75,1,"STARKER FALL"],[900,700,0.55,-1,"DECKENPARCOURS"],[1650,550,0.3,1,"SCHWEBEFELD"]],
    [[400,500,0.75,1,"STARKER FALL"],[950,250,0.55,-1,"DECKENSTRECKE"],[1650,400,0.28,1,"SCHWERELOSIGKEIT"],[2050,350,0.65,1,"STARKER FALL"]]
  ];

  worlds.forEach((world,i) => {
    
// Normale Plattformen übernehmen
world.platforms = courses[i].map(p => [...p]);




    world.gravityZones = gravityPlans[i].map(z => ({
      x:z[0],w:z[1],gravity:z[2],dir:z[3],label:z[4]
    }));

    
// Sprungfedern
world.springs = [
  [world.platforms[3][0] + 65, world.platforms[3][1] - 16],
  [world.platforms[8][0] + 55, world.platforms[8][1] - 16],
  [world.platforms[12][0] + 55, world.platforms[12][1] - 16]
];

// Bewegliche Plattformen
world.movers = [
  [world.platforms[4][0] + 20, 250, 110, 18, 1.5 + i * 0.05, 65],
  [world.platforms[9][0] + 20, 270, 110, 18, 1.8 + i * 0.05, 85],
  [world.platforms[13][0] + 20, 240, 110, 18, 2 + i * 0.05, 70]
];

// Gefahren auf ausgewählten Plattformen
world.hazards = [
  [world.platforms[2][0] + 85, world.platforms[2][1] - 17, 32, 17],
  [world.platforms[6][0] + 85, world.platforms[6][1] - 17, 32, 17],
  [world.platforms[10][0] + 85, world.platforms[10][1] - 17, 32, 17],
  [world.platforms[14][0] + 85, world.platforms[14][1] - 17, 32, 17]
];

    world.ceilingPlatforms = [];

    world.coins = world.platforms.map((p, index) => [
  p[0] + p[2] / 2,
  p[1] - 42
]);

// Zusätzliche Münzen zwischen den Plattformen
world.platforms.forEach((p, index) => {
  if (index % 2 === 0) {
    world.coins.push([
      p[0] + p[2] / 2 + 35,
      p[1] - 85
    ]);
  }
});

    const cp = world.platforms[5];
    world.checkpoints = [[cp[0]+cp[2]/2,cp[1]]];

    world.gravityZones.forEach(zone => {
      if (zone.dir === -1) {
        const gap = 45;
        const count = Math.max(1,Math.ceil(zone.w/210));
        const platformWidth =
          (zone.w-gap*(count-1))/count;

        for (let n=0;n<count;n++) {
          const x = zone.x+n*(platformWidth+gap);
          world.ceilingPlatforms.push([x,45,platformWidth]);
        }
      }
    });
  });
}

applyFairCourses();


// =====================================================
// SKINS UND SPIELSTAND
// =====================================================

const skins = [
  { id:"yellow", name:"Klassisch", color:"#ffc02e", price:0 },
  { id:"blue", name:"Ocean", color:"#2995ff", price:20 },
  { id:"red", name:"Feuer", color:"#ff4848", price:35 },
  { id:"green", name:"Nature", color:"#36d477", price:50 },
  { id:"purple", name:"Galaxy", color:"#a855f7", price:75 },
  { id:"pink", name:"Candy", color:"#ff79c6", price:100 },
  { id:"black", name:"Shadow", color:"#252535", price:150 },
  { id:"gold", name:"Gold", color:"#f5c542", price:200 }
];

function loadSave() {
  try {
    const s = JSON.parse(localStorage.getItem("squareAdventureSave"));
    if (s) {
      return {
        totalCoins:Math.max(0,Number(s.totalCoins)||0),
        unlockedLevel:Math.min(10,Math.max(1,Number(s.unlockedLevel)||1)),

        completed:Math.min(10,Math.max(0,Number(s.completed)||0)),
        bestTimes: s.bestTimes && typeof s.bestTimes === "object"
  ? s.bestTimes
  : {},
        ownedSkins:Array.isArray(s.ownedSkins)
          ? [...new Set(["yellow",...s.ownedSkins])]
          : ["yellow"],
        selectedSkin:typeof s.selectedSkin === "string" ? s.selectedSkin : "yellow"
      };
    }
  } catch(e) {}

  return {
  totalCoins:0,
  unlockedLevel:1,
  completed:0,
  bestTimes:{},
  ownedSkins:["yellow"],
  selectedSkin:"yellow"
};
}

let saveData = loadSave();

let player, platforms, coins, hazards, springs, movers, checkpoints;
let gravityZones = [];
let cameraX = 0;
let currentLevel = 0;
let collectedThisRun = 0;
let checkpointX = 50;
let checkpointY = 430;
let goalX = 0;
let levelWon = false;
let jumpWasPressed = false;
let currentGravityDir = 1;
let currentGravity = 0.62;
let gameState = "menu";

// STOPPUHR
let levelStartTime = 0;
let levelEndTime = 0;
let levelTimerRunning = false;

function getLevelTime() {
  const end = levelTimerRunning ? performance.now() : levelEndTime;
  return Math.max(0, end - levelStartTime);
}

function formatStopwatch(ms) {
  const totalHundredths = Math.floor(ms / 10);

  const minutes = Math.floor(totalHundredths / 6000);
  const seconds = Math.floor((totalHundredths % 6000) / 100);
  const hundredths = totalHundredths % 100;

  return (
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + "." +
    String(hundredths).padStart(2, "0")
  );
}

function updateStopwatch() {
  document.getElementById("game-timer").textContent =
    formatStopwatch(getLevelTime());
}

const keys = { left:false, right:false, jump:false };

function saveGame() {
  try {
    localStorage.setItem("squareAdventureSave",JSON.stringify(saveData));
  } catch(e) {
    console.log("Speichern nicht möglich.");
  }
}

// =====================================================
// START UND STEUERUNG
// =====================================================


function setup() {
  const canvas = createCanvas(W, H);
  canvas.parent("game-canvas");
  window.addEventListener("resize", resizeGameCanvas);

  noLoop();

  setupTouch("left-btn", "left");
  setupTouch("right-btn", "right");
  setupTouch("jump-btn", "jump");

  // Tastatursteuerung
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" || e.key === "a") keys.left = true;
    if (e.key === "ArrowRight" || e.key === "d") keys.right = true;
    if (e.key === " " || e.key === "ArrowUp") keys.jump = true;
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft" || e.key === "a") keys.left = false;
    if (e.key === "ArrowRight" || e.key === "d") keys.right = false;
    if (e.key === " " || e.key === "ArrowUp") keys.jump = false;
  });
}



function resizeGameCanvas() {
  const canvas = document.querySelector("#game-canvas canvas");
  const container = document.getElementById("game-canvas");

  if (!canvas || !container) return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  if (width <= 0 || height <= 0) return;

  const scale = Math.min(width / W, height / H);

  canvas.style.width = (W * scale) + "px";
  canvas.style.height = (H * scale) + "px";
}



function setupTouch(id,key) {
  const b = document.getElementById(id);

  b.addEventListener("pointerdown",e => {
    e.preventDefault();
    keys[key] = true;
    b.setPointerCapture(e.pointerId);
  });

  const release = e => {
    e.preventDefault();
    keys[key] = false;
  };

  b.addEventListener("pointerup",release);
  b.addEventListener("pointercancel",release);
  b.addEventListener("lostpointercapture",() => keys[key] = false);
  b.addEventListener("contextmenu",e => e.preventDefault());
}

function resetKeys() {
  keys.left = false;
  keys.right = false;
  keys.jump = false;
  jumpWasPressed = false;
}

function hideScreens() {
  ["menu","levels-panel","shop-panel","game-container","win-screen"].forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });
}

// =====================================================
// MENÜ
// =====================================================

function showMenu() {

  document.documentElement.classList.remove("game-active");
document.body.classList.remove("game-active");

  noLoop();
  resetKeys();
  hideScreens();
  gameState = "menu";
  document.getElementById("menu").classList.remove("hidden");
  updateMenu();
  resetKeys();
}

function updateMenu() {
  document.getElementById("coin-count").textContent = saveData.totalCoins;
  document.getElementById("menu-coins").textContent = saveData.totalCoins;
  document.getElementById("progress-text").textContent = saveData.completed + "/10";
  document.getElementById("skin-count").textContent = saveData.ownedSkins.length;
}

// =====================================================
// MENÜ-BUTTONS
// =====================================================

document.getElementById("play-btn").addEventListener("click", () => {
  startLevel(0);
});

document.getElementById("levels-btn").addEventListener("click", () => {
  showLevels();
});

document.getElementById("shop-btn").addEventListener("click", () => {
  showShop();
});

document.querySelectorAll(".back-btn").forEach(button => {
  button.addEventListener("click", showMenu);
});

document.getElementById("exit-btn").addEventListener("click", showMenu);

document.getElementById("win-menu-btn").addEventListener("click", showMenu);

document.getElementById("next-level-btn").addEventListener("click", () => {
  if (currentLevel < 9) {
    startLevel(currentLevel + 1);
  } else {
    showMenu();
  }
});


function showLevels() {
  noLoop();
  hideScreens();
  document.getElementById("levels-panel").classList.remove("hidden");
  refreshLevels();
}

function showShop() {
  noLoop();
  hideScreens();
  document.getElementById("shop-panel").classList.remove("hidden");
  refreshShop();
}

function refreshLevels() {
  const list = document.getElementById("level-list");
  list.innerHTML = "";

  worlds.forEach((world,i) => {
    const unlocked = i < saveData.unlockedLevel;
    const card = document.createElement("div");
    card.className = "level-card" + (unlocked ? "" : " locked");

    const art = document.createElement("div");
    art.className = "level-art";
    art.style.background = world.sky;
    art.textContent = world.icon;

    const title = document.createElement("strong");
    title.textContent = `${i+1}. ${world.name}`;

    const status = document.createElement("small");
    status.textContent = i < saveData.completed
      ? "✓ Geschafft"
      : unlocked ? "Freigeschaltet" : "🔒 Gesperrt";

    // Bestzeit anzeigen
const bestTime = document.createElement("small");
const savedTime = Number(saveData.bestTimes[i]);

bestTime.textContent =
  Number.isFinite(savedTime) && savedTime > 0
    ? "🏆 Bestzeit: " + formatStopwatch(savedTime)
    : "🏆 Noch keine Bestzeit";

    const button = document.createElement("button");
    button.textContent = unlocked ? "Spielen" : "Gesperrt";
    button.disabled = !unlocked;

    if (!unlocked) {
      button.style.background = "#59647a";
    } else {
      button.onclick = () => startLevel(i);
    }

    card.append(art,title,status,bestTime,button);
    list.appendChild(card);
  });
}

function refreshShop() {
  const list = document.getElementById("skin-list");
  list.innerHTML = "";
  document.getElementById("shop-coins").textContent = saveData.totalCoins;

  skins.forEach(skin => {
    const owned = saveData.ownedSkins.includes(skin.id);
    const selected = saveData.selectedSkin === skin.id;

    const card = document.createElement("div");
    card.className = "skin-card";

    const preview = document.createElement("div");
    preview.className = "skin-preview";
    preview.style.background = skin.color;

    const title = document.createElement("strong");
    title.textContent = skin.name;

    const price = document.createElement("small");
    price.textContent = skin.price === 0 ? "Kostenlos" : `🪙 ${skin.price}`;

    const button = document.createElement("button");

    if (selected) {
      button.textContent = "Ausgewählt";
      button.disabled = true;
      button.style.background = "#168b58";
    } else if (owned) {
      button.textContent = "Auswählen";
      button.onclick = () => {
        saveData.selectedSkin = skin.id;
        saveGame();
        refreshShop();
      };
    } else {
      button.textContent = "Kaufen";
      button.disabled = saveData.totalCoins < skin.price;

      if (button.disabled) button.style.background = "#59647a";

      button.onclick = () => {
        if (saveData.totalCoins < skin.price) return;
        saveData.totalCoins -= skin.price;
        saveData.ownedSkins.push(skin.id);
        saveData.selectedSkin = skin.id;
        saveGame();
        refreshShop();
        updateMenu();
      };
    }

    card.append(preview,title,price,button);
    list.appendChild(card);
  });
}

// =====================================================
// LEVEL LADEN
// =====================================================

function startLevel(index) {

    // Stoppuhr neu starten
  levelStartTime = performance.now();
  levelEndTime = levelStartTime;
  levelTimerRunning = true;

  document.documentElement.classList.add("game-active");
document.body.classList.add("game-active");

  currentLevel = index;
  const data = worlds[index];

  platforms = data.platforms.map(p => ({
    x:p[0], y:p[1], w:p[2], h:500, ceiling:false
  }));

  data.ceilingPlatforms.forEach(p => {
    platforms.push({
      x:p[0], y:p[1], w:p[2], h:18, ceiling:true
    });
  });

  hazards = data.hazards.map(h => ({
    x:h[0],y:h[1],w:h[2],h:h[3]
  }));

  springs = data.springs.map(s => ({
    x:s[0],y:s[1],w:36,h:16
  }));

  checkpoints = data.checkpoints.slice(0,1).map(c => ({
    x:c[0],y:c[1],active:false
  }));

  movers = data.movers.map(m => ({
    x:m[0],y:m[1],w:m[2],h:m[3],
    speed:m[4],range:m[5],start:m[0],dir:1,dx:0
  }));

  coins = data.coins.map(c => ({
    x:c[0],y:c[1],got:false
  }));

  gravityZones = data.gravityZones;

  const finalPlatform = data.platforms[data.platforms.length-1];
  goalX = finalPlatform[0] + finalPlatform[2] - 55;

  checkpointX = 50;
  checkpointY = 430 - 40 - 2;
  collectedThisRun = 0;
  levelWon = false;
  cameraX = 0;
  currentGravityDir = 1;
  currentGravity = data.gravity;

  player = {
    x:50,y:390,w:32,h:40,
    vx:0,vy:0,ground:false,riding:null
  };

  resetKeys();
  hideScreens();

  document.getElementById("game-container").classList.remove("hidden");
  requestAnimationFrame(resizeGameCanvas);
  document.getElementById("level-name").textContent =
    `${index+1}. ${data.name} · ${levelMechanics[index]}`;

  document.getElementById("run-coins").textContent = "0";
  document.getElementById("level-progress").style.width = "0%";

  gameState = "playing";
  loop();
}




function drawWorldEffects(world) {
  noStroke();

  // Sterne im Weltraum
  if (world.type === "space" || world.type === "neon") {
    for (let i = 0; i < 65; i++) {
      const x = (i * 137 + 40) % W;
      const y = (i * 73 + 25) % H;

      fill(255, 255, 255, 150);
      circle(x, y, i % 4 === 0 ? 3 : 1.5);
    }
  }

  // Blasen unter Wasser
  if (world.type === "water") {
    for (let i = 0; i < 20; i++) {
      const x = (i * 91 + 30) % W;
      const y = (i * 67 + frameCount * 0.5) % H;

      noFill();
      stroke("#8af5ff");
      strokeWeight(2);
      circle(x, y, 7 + i % 5);
    }
    noStroke();
  }

  // Leuchtende Kristalle
  if (world.type === "cave") {
    for (let i = 0; i < 12; i++) {
      const x = (i * 83 + 30) % W;
      const y = 100 + (i * 47) % 280;

      fill("#65f4ff");
      triangle(x, y - 10, x - 7, y + 8, x + 7, y + 8);
    }
  }

  // Magische Partikel
  if (world.type === "magic") {
    for (let i = 0; i < 18; i++) {
      const x = (i * 113 + frameCount * 0.25) % W;
      const y = (i * 71 + frameCount * 0.4) % H;

      fill("#e48cff");
      circle(x, y, 4);
    }
  }

  // Vulkanfunken
  if (world.type === "lava") {
    for (let i = 0; i < 18; i++) {
      const x = (i * 97 + 20) % W;
      const y = (H - (frameCount * 1.5 + i * 43) % H);

      fill("#ffb02e");
      circle(x, y, 3);
    }
  }
}


// =====================================================
// ZEICHNEN
// =====================================================

function draw() {
  if (gameState !== "playing") return;

    updateStopwatch();

  const world = worlds[currentLevel];

  drawBackground(world);
  drawWorldEffects(world);
  updateMovers();

  push();
  translate(-cameraX,0);

  drawGravityZones(world);
  drawPlatforms(world);
  drawMovers(world);
  drawHazards(world);
  drawSprings(world);
  drawCheckpoints(world);
  drawCoins(world);
  drawGoal(world);

  updatePlayer(world);
  drawPlayer();

  pop();
  drawHUD(world);
}

function drawBackground(world) {
  background(world.sky);

  if (world.type === "space") {
    noStroke();
    for (let i=0;i<65;i++) {
      const x = (i*137+40)%W;
      const y = (i*73+25)%H;
      fill(255,255,255,170);
      circle(x,y,i%4===0?3:2);
    }
  }

  noStroke();
  fill(world.accent);
  circle(760,75,54);

  const shift = (cameraX*0.18)%260;

  for (let i=-1;i<6;i++) {
    const x = i*260-shift;

    if (world.type === "desert") {
      fill("#d99553");
      triangle(x,400,x+130,190,x+260,400);
      fill("#f2bd78");
      triangle(x+130,190,x+165,280,x+100,280);
    } else if (world.type === "ice") {
      fill("#8bcce5");
      triangle(x,410,x+130,175,x+260,410);
      fill("#ffffff");
      triangle(x+130,175,x+155,235,x+105,235);
    } else if (world.type === "lava") {
      fill("#662d40");
      triangle(x,420,x+130,210,x+260,420);
      fill("#9d443c");
      triangle(x+130,210,x+170,300,x+90,300);
    } else if (world.type === "space") {
      fill("#242a61");
      circle(x+130,320,170);
      fill("#393d83");
      circle(x+105,295,35);
      circle(x+165,350,25);
    } else if (world.type === "water") {
      fill("#09648d");
      ellipse(x+130,390,280,160);
      fill("#1383a4");
      ellipse(x+130,420,220,90);
    } else if (world.type === "neon") {
      fill("#25204c");
      rect(x+25,245,65,180);
      rect(x+105,180,85,245);
      rect(x+205,270,55,155);
      fill(world.accent);
      rect(x+40,265,8,10);
      rect(x+125,205,9,10);
      rect(x+160,205,9,10);
      rect(x+220,290,8,10);
    } else if (world.type === "cave") {
      fill("#49376f");
      triangle(x,420,x+130,190,x+260,420);
      fill("#66508e");
      triangle(x+30,420,x+160,260,x+260,420);
    } else if (world.type === "magic") {
      fill("#24533e");
      ellipse(x+130,400,280,160);
      fill("#347653");
      ellipse(x+130,420,190,100);
    } else {
      fill("#6abf7d");
      ellipse(x+130,420,300,150);
      fill("#4da86c");
      ellipse(x+80,425,150,100);
    }
  }

  noStroke();
  fill(world.ground);
  rect(0,465,W,35);
}

function drawGravityZones(world) {
  for (const z of gravityZones) {
    const active = player.x+player.w/2 >= z.x &&
      player.x+player.w/2 <= z.x+z.w;

    noStroke();
    fill(z.dir === -1 ? color(190,100,255,active?65:35) : color(80,230,255,active?55:25));
    rect(z.x,0,z.w,H);

    stroke(z.dir === -1 ? "#e6a4ff" : "#8affff");
    strokeWeight(2);
    line(z.x,0,z.x,H);
    line(z.x+z.w,0,z.x+z.w,H);
    noStroke();

    fill(255);
    textAlign(CENTER);
    textSize(13);
    text(z.label,z.x+z.w/2,25);

    if (active) {
      fill(255,255,255,170);
      textSize(12);
      text(z.dir === -1 ? "↑ GRAVITATION NACH OBEN" : "↓ GRAVITATION NACH UNTEN",
        z.x+z.w/2,45);
    }
  }
}

function drawPlatforms(world) {
  for (const p of platforms) {
    noStroke();
    fill(p.ceiling ? world.accent : world.platform);
    rect(p.x,p.y,p.w,p.h,5);

    fill(p.ceiling ? "#ffffff" : world.accent);
    rect(p.x,p.y,p.w,5,4);

    if (world.type === "cave") {
      fill("#b9faff");
      for (let x=p.x+18;x<p.x+p.w-5;x+=40) {
        triangle(x,p.y+18,x+8,p.y+18,x+4,p.y+28);
      }
    }

    if (world.type === "ice") {
      fill("#ffffff99");
      rect(p.x+8,p.y+7,p.w*0.35,3,3);
    }

    if (world.type === "neon") {
      noFill();
      stroke(world.accent);
      strokeWeight(1);
      rect(p.x,p.y,p.w,p.h,5);
      noStroke();
    }
  }
}

function updateMovers() {
  for (const m of movers) {
    const old = m.x;
    m.x += m.speed*m.dir;

    if (m.x > m.start+m.range || m.x < m.start-m.range) {
      m.dir *= -1;
    }
    m.dx = m.x-old;
  }
}

function drawMovers(world) {
  for (const m of movers) {
    noStroke();
    fill(world.accent);
    rect(m.x,m.y,m.w,m.h,7);
    fill(255,255,255,130);
    rect(m.x+5,m.y+3,m.w-10,3,3);
  }
}

function drawHazards(world) {
  for (const h of hazards) {
    noStroke();

    if (world.type === "lava") fill("#ff5b18");
    else if (world.type === "desert") fill("#b8a04a");
    else if (world.type === "cave") fill("#bd73ff");
    else if (world.type === "neon") fill("#ff36e4");
    else fill("#ed405d");

    rect(h.x,h.y,h.w,h.h,4);

    fill("#fff1a1");
    for (let x=h.x+4;x<h.x+h.w-5;x+=18) {
      triangle(x,h.y+2,x+9,h.y+2,x+4,h.y-10);
    }
  }
}

function drawSprings() {
  for (const s of springs) {
    noStroke();
    fill("#40e5a2");
    rect(s.x,s.y+8,s.w,8,4);
    fill("#ffffff");
    rect(s.x+5,s.y+3,s.w-10,6,3);
  }
}

function drawCheckpoints() {
  for (const c of checkpoints) {
    stroke(255);
    strokeWeight(3);
    line(c.x,c.y,c.x,c.y-65);

    noStroke();
    fill(c.active?"#35e78b":"#ffcf4a");
    triangle(c.x,c.y-65,c.x+35,c.y-55,c.x,c.y-43);
    circle(c.x,c.y,8);
  }
}

function drawCoins() {
  for (const c of coins) {
    if (c.got) continue;

    noStroke();
    fill("#ffcb35");
    ellipse(c.x,c.y,22,22);
    fill("#fff1a5");
    ellipse(c.x-4,c.y-4,6,6);
    fill("#b57910");
    textAlign(CENTER,CENTER);
    textSize(13);
    text("$",c.x,c.y+1);
  }
}

function drawGoal() {
  stroke(255);
  strokeWeight(5);
  line(goalX,420,goalX,285);

  noStroke();
  fill("#ff4f69");
  triangle(goalX,285,goalX+70,305,goalX,327);
  fill("#fff");
  textAlign(CENTER);
  textSize(15);
  text("ZIEL",goalX,270);
}

// =====================================================
// SPIELER UND GRAVITATION
// =====================================================

function getGravityAtPlayer(world) {
  const centerX = player.x+player.w/2;
  const centerY = player.y+player.h/2;

  let result = {
    gravity:world.gravity,
    dir:1,
    label:"NORMAL"
  };

  for (const z of gravityZones) {
    if (
      centerX >= z.x &&
      centerX <= z.x+z.w &&
      centerY >= 0 &&
      centerY <= H
    ) {
      result = {
        gravity:z.gravity,
        dir:z.dir,
        label:z.label
      };
      break;
    }
  }

  return result;
}

function updatePlayer(world) {
  const oldX = player.x;
  const previousTop = player.y;
  const previousBottom = player.y+player.h;

  // Gravitationsfeld bestimmen.
  const gravityInfo = getGravityAtPlayer(world);
  currentGravity = gravityInfo.gravity;

  if (currentGravityDir !== gravityInfo.dir) {
    currentGravityDir = gravityInfo.dir;
    player.ground = false;
    player.riding = null;
  }

  // Bewegung und Steuerung.
  const acceleration = world.type === "ice" ? 0.35 : 0.8;
  const friction = world.type === "ice" ? 0.94 : 0.78;

  if (keys.left) player.vx -= acceleration;
  if (keys.right) player.vx += acceleration;

  if (!keys.left && !keys.right) player.vx *= friction;

  player.vx = constrain(player.vx,-5,5);
  player.x += player.vx;

  // Springen funktioniert in beide Gravitationsrichtungen.
  if (keys.jump && !jumpWasPressed && player.ground) {
    player.vy = -12.5*currentGravityDir;
    player.ground = false;
    player.riding = null;
  }

  jumpWasPressed = keys.jump;

  // Auf beweglicher Plattform mitfahren.
  if (player.riding) {
    player.x += player.riding.dx || 0;
  }

  // Gravitation anwenden.
  player.vy += currentGravity*currentGravityDir;
  player.y += player.vy;

  player.ground = false;
  player.riding = null;

  // Plattform-Kollisionen für Boden und Decke.
  for (const p of platforms) {
    const overlap = player.x+player.w > p.x &&
      player.x < p.x+p.w;

    if (!overlap) continue;

    if (currentGravityDir === 1 && player.vy >= 0) {
      const bottom = player.y+player.h;
      const crossed = previousBottom <= p.y && bottom >= p.y;

      if (crossed) {
        player.y = p.y-player.h;
        player.vy = 0;
        player.ground = true;
      }
    }

    if (currentGravityDir === -1 && player.vy <= 0) {
      const top = player.y;
      const platformBottom = p.y+p.h;
      const crossed = previousTop >= platformBottom && top <= platformBottom;

      if (crossed) {
        player.y = platformBottom;
        player.vy = 0;
        player.ground = true;
      }
    }
  }

  // Bewegliche Plattformen.
  for (const m of movers) {
    const overlap = player.x+player.w > m.x &&
      player.x < m.x+m.w;

    if (!overlap) continue;

    if (currentGravityDir === 1 && player.vy >= 0) {
      const bottom = player.y+player.h;
      if (previousBottom <= m.y && bottom >= m.y) {
        player.y = m.y-player.h;
        player.vy = 0;
        player.ground = true;
        player.riding = m;
      }
    }

    if (currentGravityDir === -1 && player.vy <= 0) {
      const platformBottom = m.y+m.h;
      if (previousTop >= platformBottom && player.y <= platformBottom) {
        player.y = platformBottom;
        player.vy = 0;
        player.ground = true;
        player.riding = m;
      }
    }
  }

  // Sprungfedern.
  for (const s of springs) {
    const overlap = player.x+player.w > s.x &&
      player.x < s.x+s.w;

    if (currentGravityDir === 1) {
      const onSpring = player.y+player.h >= s.y &&
        player.y+player.h <= s.y+15;

      if (overlap && onSpring && player.vy >= 0) {
        player.vy = -17;
        player.ground = false;
      }
    } else {
      const onSpring = player.y <= s.y+s.h &&
        player.y >= s.y-15;

      if (overlap && onSpring && player.vy <= 0) {
        player.vy = 17;
        player.ground = false;
      }
    }
  }

  // Ein Checkpoint pro Level.
  if (checkpoints.length > 0) {
    const c = checkpoints[0];
    const playerCenter = player.x+player.w/2;

    const standingOnCheckpoint = player.ground &&
      Math.abs(
        currentGravityDir === 1
          ? (player.y+player.h)-c.y
          : player.y-(c.y+18)
      ) < 4;

    if (standingOnCheckpoint && Math.abs(playerCenter-c.x)<24) {
      c.active = true;
      checkpointX = c.x-player.w/2;
      checkpointY = currentGravityDir === 1
        ? c.y-player.h-2
        : c.y+18+2;
    }
  }

  // Münzen einsammeln.
  for (const c of coins) {
    if (c.got) continue;

    if (dist(
      player.x+player.w/2,
      player.y+player.h/2,
      c.x,c.y
    ) < 28) {
      c.got = true;
      collectedThisRun++;
      saveData.totalCoins++;
      saveGame();

      document.getElementById("run-coins").textContent = collectedThisRun;
      document.getElementById("coin-count").textContent = saveData.totalCoins;
      document.getElementById("menu-coins").textContent = saveData.totalCoins;
    }
  }

  // Gefahren.
  for (const h of hazards) {
    if (rectHit(player,h)) {
      respawn();
      return;
    }
  }

  // Absturz oder Verlassen des Bildes.
  if (player.y > H+100 || player.y < -100) {
    respawn();
    return;
  }

  const levelEnd = world.platforms[world.platforms.length-1][0]+300;
  player.x = constrain(player.x,0,levelEnd);

  cameraX = constrain(player.x-W*0.36,0,levelEnd-W);

  const progress = constrain((player.x/goalX)*100,0,100);
  document.getElementById("level-progress").style.width = progress+"%";

  // Ziel erreichen.
  if (
    player.x+player.w >= goalX &&
    player.y+player.h >= 250 &&
    player.y < 450
  ) {
    winLevel();
  }
}

function rectHit(a,b) {
  return a.x < b.x+b.w &&
    a.x+a.w > b.x &&
    a.y < b.y+b.h &&
    a.y+a.h > b.y;
}

function respawn() {
  player.x = checkpointX;
  player.y = checkpointY;

  player.vx = 0;
  player.vy = 0;
  player.ground = false;
  player.riding = null;

  currentGravityDir = 1;
  currentGravity = worlds[currentLevel].gravity;

  cameraX = max(0,checkpointX-W*0.36);
}

function drawPlayer() {
  const skin = skins.find(s => s.id === saveData.selectedSkin) || skins[0];

  noStroke();
  fill(skin.color);
  rect(player.x,player.y,player.w,player.h,7);

  fill("#222");
  ellipse(player.x+10,player.y+13,5,5);
  ellipse(player.x+23,player.y+13,5,5);

  stroke("#222");
  strokeWeight(2);
  line(player.x+11,player.y+26,player.x+21,player.y+26);
  noStroke();
}

function drawHUD(world) {
  noStroke();
  fill(0,0,0,120);
  rect(12,12,210,55,9);

  fill("#fff");
  textAlign(LEFT,CENTER);
  textSize(14);
  text(world.icon+" "+collectedThisRun+" Münzen",22,29);

  textSize(12);
  const gravityText = currentGravityDir === -1
    ? "Gravitation: ↑ nach oben"
    : "Gravitation: ↓ nach unten";

  text(gravityText,22,50);
}

// =====================================================
// LEVEL ABSCHLIESSEN
// =====================================================

function winLevel() {
  if (levelWon) return;

  levelWon = true;
    // Stoppuhr anhalten
  levelTimerRunning = false;
  levelEndTime = performance.now();

  updateStopwatch();

  // Bestzeit speichern
const finishedTime = getLevelTime();
const oldBestTime = Number(saveData.bestTimes[currentLevel]);

if (
  !Number.isFinite(oldBestTime) ||
  oldBestTime <= 0 ||
  finishedTime < oldBestTime
) {
  saveData.bestTimes[currentLevel] = finishedTime;
}

  document.getElementById("final-time").textContent =
    formatStopwatch(getLevelTime());
  gameState = "won";
  noLoop();
  resetKeys();

  saveData.completed = Math.max(saveData.completed,currentLevel+1);

  saveData.unlockedLevel = Math.max(
    saveData.unlockedLevel,
    Math.min(10,currentLevel+2)
  );

  saveGame();

  document.getElementById("won-coins").textContent = collectedThisRun;
  document.getElementById("win-title").textContent =
    worlds[currentLevel].name+" geschafft!";

  document.getElementById("next-level-btn").textContent =
    currentLevel === 9 ? "Alle Welten geschafft!" : "Nächstes Level →";

  hideScreens();
  document.getElementById("win-screen").classList.remove("hidden");

  updateMenu();
  refreshLevels();
}



