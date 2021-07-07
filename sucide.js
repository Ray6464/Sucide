
function sucide(note) {
  if (note !== undefined) { console.log(note) }
  process.exit();
}

function murder(person, note) {
  if (person === undefined) { sucide("Don't murder an unidentified person!") }
  if (!person) { sucide("The provided victim is already dead!") }
  if (note !== undefined) { sucide(note) }
  sucide();
}

function homicide(victim, note) {
  if (victim === undefined) {
    if (note !== undefined) { sucide(note) }
    sucide("We have an unidentified Victim!")
  }
}

module.exports = {
  sucide: sucide,
  murder: murder,
  homocide: homicide
}

