

// List of melodies to choose from.
var twinkle = [["C5", "C5", "G5", "G5"], ["A5", "A5", "G5", "G5"], ["F5", "F5", "E5", "E5"], ["D5", "D5", "C5", "C5"]];
var scale = [["C5", "D5", "E5", "F5"], ["G5", "A5", "B5", "C6"], ["C6", "B5", "A5", "G5"], ["F5", "E5", "D5", "C5"]];

// Mapping of chord name to contents of the chord.
var cc = {"C": ["C4", "E4", "G4"], "d": ["D4", "F4", "A4"], "e": ["E4", "G4", "B4"],
					 "F": ["F4", "A4", "C5"], "G": ["G4", "B4", "D5"], "a": ["A4", "C5", "E5"],
					 "bd": ["B4", "D5", "F5"]};

// Mapping of notes to valid chords
var valid_chords = {"C5": ["C", "d", "F", "a"], "D5": ["d", "e", "G", "b"], "E5": ["e", "f", "a", "C"],
					"F5": ["F", "G", "b", "d"], "G5": ["G", "a", "C", "e"], "A5": ["a", "b", "d", "F"],
					"B5": ["b", "C", "e", "G"], "C6": ["C", "d", "F", "a"]};