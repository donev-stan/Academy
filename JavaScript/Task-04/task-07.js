const topNote = (arrayOfObjects) => {
	return arrayOfObjects.map((studentObject) => ({
		name: studentObject.name,
		topNote: Math.max(...studentObject.notes),
	}));
};

const topNoteStudent = (arrayOfObjects) => {
	const studentsWithTopNotes = topNote(arrayOfObjects);
	return studentsWithTopNotes.sort((a, b) => b.topNote - a.topNote)[0].name;
};

const student = topNoteStudent([
	{
		name: "Ivan",
		notes: [5, 6, 4],
	},
	{
		name: "Dimitar",
		notes: [4, 4, 3],
	},
]);

console.log(student);
