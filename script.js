const apiURL = 'https://api.lyrics.ovh';
const TEXTCONTAINER = document.querySelector('.text-container');


const tracks = [`Acid Nation`,
`Adieu`,
`Airfield`, 
`All Eyes on the Saint`, 
`Anaesthetist`,
`An Ode to Lost Jigsaw Pieces (In Two Movements)`,
 `Antwerpen`,
  `Anything Can Happen in the Next Half Hour…`, `​apøcaholics anonymøus (main theme in B minor)
`, 
`Arguing with Thermometers
`,
 `Common Dreads
`,
 `Constellations
`,
 `Crossing The Rubicon
`, 
`Dear Future Historians…
`, 
`Destabilise
`,
 `Elegy For Extinction
`,
 `Empty
`, 
`Fanfare for the Conscious Man
`,
 `Gandhi Mate, Gandhi
`,
 `Gap in the Fence
`,
 `Havoc A
`,
 `Havoc B
`,
 `Hectic
`,
 `Hello Tyrannosaurus, Meet Tyrannicide
`, 
`Hoodwinker
`,
 `Interlude
`, 
`Jonny Sniper
`,
 `Juggernauts
`, 
`Keep It on Ice
`,
 `Kickin’ Back on the Surface of Your Cheek
`,
 `Know Your Enemy
`,
 `Labyrinth
`,
 `Live Outside
`,
 `Marionettes (II. The Ascent)
`, 
`Marionettes (I. The Discovery Of Strings)
`, 
`…Meltdown
`, 
`​modern living....
`, 
`Mothership
`, `Myopia
`, `Never Let Go of the Microscope
`, `Nodding Acquaintance
`, `No Sleep Tonight
`, `No Sssweat
`, `OK, Time for Plan B
`, `Pack of Thieves
`, `Quelle Surprise
`, `Rabble Rouser
`, `Radiate
`, `Rat Race
`, `Redshift
`, `Return to Energiser
`, `​satellites* *
`, `Score 22
`, `Search Party
`, `Shinrin-yoku
`, `Slipshod
`, `Solidarity
`, `Sorry, You’re Not a Winner
`, `Sssnakepit
`, `Stalemate
`, `Stand Your Ground; This Is Ancient Land
`, `Step Up
`, `Stop the Clocks
`, `Supercharge
`, `System…
`, `Take It Back
`, `The Qemists
`, `Take My Country Back
`, `The Appeal & the Mindsweep I
`, `The Appeal & the Mindsweep II
`, `The Bank of England`,
`The Bearer of Bad News`];
const artist = 'Enter Shikari';
let liricsArray = [];
let randomLineNumber = null;
let songTitle = null;


function init() {
    songTitle = `${tracks[randomInteger(0, tracks.length - 1)]}`
    searchSongs();
}

init();


function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }


  async function searchSongs() {
    try {
      const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
      const data = await res.json();
      const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
      liricsArray = lyrics.split('<br>').filter(Boolean);
      console.log(liricsArray);
      textRender();
    } catch (error) {
      console.log(error);
      TEXTCONTAINER.innerHTML = `<div class="error-msg">Error. Server error or lyrics not found:</div>
      <div class="error-msg">(${error})</div>`;
    }
  }


  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function textRender() {
    randomLineNumber = randomInteger(0, liricsArray.length - 1)
    TEXTCONTAINER.innerHTML = `
    <h2><strong>${artist}</strong> - ${songTitle}</h2>
    <h3>Random line: №${randomLineNumber + 1}</h3>
    <span>${liricsArray[randomLineNumber]}</span>
  `;
  }





  document.querySelector('.new-line').addEventListener('click', () => {
    textRender();
  })
  
  document.querySelector('.new-song').addEventListener('click', () => {
    songTitle = `${tracks[randomInteger(0, tracks.length - 1)]}`
    searchSongs();
    // setTimeout(() => {
    //     textRender()
    // }, 700);

  })
