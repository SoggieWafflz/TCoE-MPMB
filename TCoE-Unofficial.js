var iFileName = "TCoE-Unofficial.js";
RequiredSheetVersion(13.0);
SourceList["TCoE"] = { 
	name : "Tasha's Cauldron of Everything", 
	abbreviation : "TCoE",
	group : "Primary Sources", 
	date : "2020/11/17",
},

//adds fey wanderer subclass, pages 58-59
AddSubClass(
	"ranger",
	"feywanderer",
	{ 
		regExpSearch : /^(?=.*fey)(?=.*wanderer).*$/i,
		subname : "Fey Wanderer",
		source : ["TCoE", 58],
		fullname : "Fey Wanderer",
		features : {
			"subclassfeature3.1" : {
				name : "Dreadful Strikes",
				source : ["TCoE", 58],
				minlevel : 3,
				description : "\n   " + "When I hit a creature with a weapon, once per turn I can deal extra psychic damage to" + "\n   " + "the target.",
				additional : ["", "", "1d4", "1d4", "1d4", "1d4", "1d4", "1d4", "1d4", "1d4", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6"],
			},
			"subclassfeature3.2" : {
				name : "Fey Wanderer Magic",
				source : ["TCoE", 58],
				minlevel : 3,
				description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "These count as ranger spells," + "\n   " + "but do not count against the number of spells I can know" + "\n   " + "I have a blessing from a fey ally or a place of fey power, use the \"Choose Feature\" button" + "\n   " + "above for this.",
				spellcastingExtra : ["charm person", "misty step", "dispel magic", "dimension door", "mislead"],
				spellcastingExtraApplyNonconform : true,
				choices : ["Illusory Butterflies", "Seasonal Flowers", "Herb or Spice Scent", "Dancing Shadow", "Horns or Antlers", "Seasonal Hair and Skin"],
				"illusory butterflies" : {
					name : "Fey Wanderer Magic",
					description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know" + "\n   " + "I have a blessing from a fey ally or a place of fey power: illusory butterflies flutter" + "\n   " + "around me while I take a short or long rest..",
				},
				"seasonal flowers" : {
					name : "Fey Wanderer Magic",
					description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know" + "\n   " + "I have a blessing from a fey ally or a place of fey power: fresh, seasonal flowers" + "\n   " + "sprout from my hair each dawn..",
				},
				"herb or spice scent" : {
					name : "Fey Wanderer Magic",
					description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know" + "\n   " + "I have a blessing from a fey ally or a place of fey power: I faintly smell of cinnamon," + "\n   " + "lavender, nutmeg, or another comforting herb or spice.",
				},
				"dancing shadow" : {
					name : "Fey Wanderer Magic",
					description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know" + "\n   " + "I have a blessing from a fey ally or a place of fey power: my shadow dances while no one" + "\n   " + "is looking directly at it.",
				},
				"horns or antlers" : {
					name : "Fey Wanderer Magic",
					description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know" + "\n   " + "I have a blessing from a fey ally or a place of fey power: horns or antlers sprout" + "\n   " + "from my head.",
				},
				"seasonal hair and skin" : {
					name : "Fey Wanderer Magic",
					description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know" + "\n   " + "I have a blessing from a fey ally or a place of fey power: my skin and hair change" + "\n   " + "color to match the season at each dawn.",
				},
			},
			"subclassfeature3.3" : {
				name : "Otherworldly Glamour",
				source : ["TCoE", 59],
				minlevel : 3,
				description : "\n   " + "My fey qualities let me add my wisdom modifier (min. +1) to any charisma check." + "\n   " + "I also gain proficiency in Deception, Performance, or Persuasion.",
				skillstxt : "Choose Deception, Performance, or Persuasion.",
				addMod : { type : "skill", field : ["Persuasion", "Deception", "Performance", "Intimidation"], mod : "max(Wis|0)", text : "I can add my Wisdom modifier to any Charisma checks" },
			},
			"subclassfeature7" : {
				name : "Beguiling Twist",
				source : ["TCoE", 59],
				minlevel : 7,
				description : ["\n   " + "My connection to the fey guards my mind, I have advantage against being charmed or" + "\n   " + "frightened. When I or a creature I can see within 120 feet succeeds on a save" + "\n   " + "against being charmed or frightened, I can use my reaction to force a different creature I" + "\n   " + "can see within 120 feet to make a Wisdom save against my spell DC. Upon failure I can" + "\n   " + "charm or frightened them for 1 minute. The creature can repeat the save each turn to end the effect."],
				savetxt : { adv_vs : ["charmed", "frightened"] },
				action : [["reaction", ""]],
				},
			"subclassfeature11" : {
				minlevel : 11,
				name : "Fey Reinforcements",
				source : ["TCoE", 59],
				description : "\n   " + "I learn and can cast \"Summon Fey\" without a material component, and I can modify it" + "\n   " + "to not require concentration by reducing the duration to 1 minute." + "\n   " + "I can also cast it without using a spell slot once per long rest.",
				extraname : "Fey Wanderer 11",
				"fey reinforcements" : {
					name : "Fey Reinforcements",
					source : [["TCoE", 59]],
					description : desc([
						"I can cast \"Summon Fey\" without using a spell slot once per long rest."]),
					action : [["action", "bonus action"]],
					usages : 1,
					recovery : "long rest",
					altResource : "SS 3+"
				},
				autoSelectExtrachoices : [{
					extrachoice : "fey reinforcements",
					minlevel : 11
				}]
			},
			"subclassfeature15" : {
				name : "Misty Wanderer",
				source : ["TCoE", 59],
				minlevel : 15,
				description : "\n   " + "I can cast \"Misty Step\" without using a spell slot a number of times equal to my Wisdom modifier" + "\n   " + "per long rest." + "\n   " +  "When casting \"Misty Step\" I can bring take willing creature I can see within 5 feet of me" + "\n   " + "to anywhere within 5 feet of my destination.",
				extraname : "Fey Wanderer 15",
				"misty wanderer" : {
					name : "Misty Wanderer",
					source : [["TCoE", 59]],
					description : desc([ 
						"I can cast \"Misty Step\" without using a spell slot a number of times equal to my Wisdom modifier per long rest."]),
					action : [["bonus action", ""]],
					usages : "Wisdom modifier per ",
					usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
					recovery : "long rest",
					altResource : "SS 2+"
				},
				autoSelectExtrachoices : [{
					extrachoice : "misty wanderer",
					minlevel : 15
				}]
			},
		}
	}
);
