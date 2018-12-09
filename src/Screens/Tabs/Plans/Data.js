import Img from "parts/IMG1.png";
import brakePads from "parts/brakePads.jpeg";
import shockAbsorber from "parts/shockAbsorber.jpeg";
import sparkPlugs from "parts/sparkPlugs.jpeg";
import timingBelt from "parts/timingBelt.jpeg";

export const data = [
	{
		name: "Brake Pads",
		id: 1,
		date: "8:00pm",
		description:
			"Brake pads are a component of disc brakes used in automotive and other applications.Brake pads are steel backing plates with friction material bound to the surface that faces the disc brake rotor.",
		image: brakePads,
		ETA: " 20 MIN "
	},
	{
		name: "Spark plugs",
		id: 2,
		date: "9:00pm",
		description:
			"A spark plug is a device for delivering electric current from an ignition system to the combustion chamber.",
		image: sparkPlugs,
		ETA: " 30-60 MIN "
	},
	{
		name: "Shock Absorber",
		id: 3,
		date: "10:00pm",
		description:
			"A shock absorber is a mechanical or hydraulic device designed to absorb and damp shock impulses.",
		image: shockAbsorber,
		ETA: "2 Hours"
	},
	{
		name: "Timing Belt",
		id: 4,
		date: "10:00pm",
		description:
			"A timing belt,timing chain or cambelt is a part of an internal combustion engine that synchronizes the rotation of the crankshaft and the camshaft(s) so that the engine's valves open and close at the proper times during each cylinder's intake and exhaust strokes.",
		image: timingBelt,
		ETA: "4 Hours"
	}
];
