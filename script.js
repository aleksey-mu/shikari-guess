const apiURL = "https://api.lyrics.ovh";
const TEXTCONTAINER = document.querySelector(".text-container");
// import { tracks } from "songBase.js"
// const { tracks } = require('songBase');

const tracks = [
	`Acid Nation`,
	`Adieu`,
	`Airfield`,
	`All Eyes on the Saint`,
	`Anaesthetist`,
	`An Ode to Lost Jigsaw Pieces (In Two Movements)`,
	`Antwerpen`,
	`Anything Can Happen in the Next Half Hour…`,
	`apøcaholics anonymøus (main theme in B minor)`,
	`Arguing with Thermometers`,
	`Common Dreads`,
	`Constellations`,
	`Crossing The Rubicon`,
	`Dear Future Historians…`,
	`Destabilise`,
	`Elegy For Extinction`,
	`Enter Shikari`,
	`Empty`,
	`Fanfare for the Conscious Man`,
	`Fixed Eyes`,
	`Frozen Landscape`,
	`Gandhi Mate, Gandhi`,
	`Gap in the Fence`,
	`Havoc A`,
	`Havoc B`,
	`Hectic`,
	`Hello Tyrannosaurus, Meet Tyrannicide`,
	`Hoodwinker`,
	`Insomnia`,
	`Interlude`,
	`Jonny Sniper`,
	`Juggernauts`,
	`Keep It on Ice`,
	`Kickin’ Back on the Surface of Your Cheek`,
	`Know Your Enemy`,
	`Labyrinth`,
	`Live Outside`,
	`Marionettes (II. The Ascent)`,
	`Marionettes (I. The Discovery Of Strings)`,
	`…Meltdown`,
	`modern living....`,
	`Mothership`,
	`Myopia`,
	`Never Let Go of the Microscope`,
	`Nodding Acquaintance`,
	`No Sleep Tonight`,
	`No Sssweat`,
	`OK, Time for Plan B`,
	`Pack of Thieves`,
	`Quelle Surprise`,
	`Rabble Rouser`,
	`Radiate`,
	`Rat Race`,
	`Redshift`,
	`Return to Energiser`,
	`satellites* *`,
	`Score 22`,
	`Search Party`,
	`Shinrin-yoku`,
	`Slipshod`,
	`Solidarity`,
	`Sorry, You’re Not a Winner`,
	`Sssnakepit`,
	`Stalemate`,
	`Stand Your Ground; This Is Ancient Land`,
	`Step Up`,
	`Stop the Clocks`,
	`Supercharge`,
	`System…`,
	`Take My Country Back`,
	`The Appeal & the Mindsweep I`,
	`The Appeal & the Mindsweep II`,
	`The Bank of England`,
	`The Bearer of Bad News`,
	`{ The Dreamer’s Hotel }`,
	`The Feast`,
	`THE GREAT UNKNOWN`,
	`The Jester`,
	`thē kĭñg`,
	`The Last Garrison`,
	`The One True Colour`,
	`The Paddington Frisk`,
	`the pressure’s on.`,
	`There’s a Price on Your Head`,
	`The Revolt of the Atoms`,
	`The Sights`,
	`The Spark`,
	`Thumper`,
	`T.I.N.A.`,
	`Today Won’t Go Down in History`,
	`Torn Apart`,
	`Tribalism`,
	`Undercover Agents`,
	`Wall`,
	`Waltzing Off The Face Of The Earth (I. Crescendo)`,
	`Waltzing off the Face of the Earth (II. Piangevole)`,
	`Warm Smiles Do Not Make You Welcome Here`,
	`We Can Breathe In Space`,
	`When a Jealous Man Finds a Gun`,
	`Zzzonked`,
];

const artist = "Enter Shikari";
let isTitleShown = false;
let liricsArray = [];
let randomLineNumber = null;
let songTitle = null;

function init() {
	songTitle = `${tracks[randomInteger(0, tracks.length - 1)]}`;
	searchSongs();
}

init();

async function searchSongs() {
	try {
		const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
		const data = await res.json();
		const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");
		liricsArray = lyrics.split("<br>").filter(Boolean);
		console.log(liricsArray);
		textRender();
	} catch (error) {
		console.log(error);
		songTitle = `${tracks[randomInteger(0, tracks.length - 1)]}`;
		searchSongs();
	}
}

function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

function textRender() {
	const newLine = randomInteger(0, liricsArray.length - 1);
	if (newLine === randomLineNumber) {
		textRender();
		return;
	}
	randomLineNumber = newLine;
	TEXTCONTAINER.innerHTML = `
    <h2 class="title">${artist} — ${isTitleShown ? songTitle : "???"}</h2>
    <h3>Song's line: №${randomLineNumber + 1}</h3>
    <span class="lyric-line">${liricsArray[randomLineNumber]}</span>
  `;
}

document.querySelector(".new-line").addEventListener("click", () => {
	textRender();
});

document.querySelector(".new-song").addEventListener("click", () => {
	songTitle = `${tracks[randomInteger(0, tracks.length - 1)]}`;
	isTitleShown = false;
	searchSongs();
});

document.querySelector(".show-answer").addEventListener("click", () => {
	isTitleShown = true;
	document.querySelector(".title").innerText = `${artist} — ${songTitle}`;
});

document.addEventListener(
	"touchmove",
	function (event) {
		if (event.scale !== 1) {
			event.preventDefault();
		}
	},
	false
);
