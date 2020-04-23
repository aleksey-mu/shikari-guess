const apiURL = 'https://api.lyrics.ovh';
// const tracksArray = require('./songBase');
// Search by song or artist


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
`, `The Bank of England
`, `The Bearer of Bad News`]

const artist = 'Enter Shikari'
const songTitle = `${tracks[randomInteger(0, tracks.length - 1)]}`
let lyrics = '';
async function searchSongs() {
    const res =  await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
  const data = await res.json();
  lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
}

searchSongs()

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

setTimeout(() => {
    const liricsArray = lyrics.split('<br>').filter(Boolean);
    console.log(liricsArray);

    const randomLineNumber = randomInteger(0, liricsArray.length - 1)

    document.querySelector('body').innerHTML = `
    <h2><strong>${artist}</strong> - ${songTitle}</h2>
    <h3>Random line: №${randomLineNumber + 1}</h3>
    <span>${liricsArray[randomLineNumber]}</span>
  `;

}, 500);
