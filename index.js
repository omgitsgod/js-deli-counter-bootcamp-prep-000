

function takeANumber(current, neww) {
  current.push(neww)
  return `Welcome, ${neww}. You are number ${current.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line[0]}.`
  }
  line.shift()
}