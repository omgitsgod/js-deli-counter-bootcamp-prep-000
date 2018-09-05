

function takeANumber(current, neww) {
  current.push(neww)
  return `Welcome, ${neww}. You are number ${current.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
  
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  
  if (!line.length) {
  return "The line is currently empty."
}
var blah = []
for (var i =0; i < line.length; i++) {
  blah.push(`${i+1}. ${line[i]}`)
  return `The line is currently ${blah}`
}
}