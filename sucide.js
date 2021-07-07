
function sucide(note) { // log note then kill
  if (note !== undefined) { console.log(note) }
  process.exit();
}

function murder(person, note) { // if person === false log note then kill
  if (person === undefined) { sucide("Don't murder an unidentified person!") }
  if (!person) {
    if (note !== undefined) { sucide(note) }
    else { sucide() }
  }
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

