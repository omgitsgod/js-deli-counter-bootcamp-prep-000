

function takeANumber(current, neww) {
  current.push(neww)
  return `Welcome, ${neww}. You are number ${current.length} in line.`
}

function nowServing(line) {
  if (line > 0) {
    return `Currently serving ${line[0]}.`
  } else {
    return "The line is empty"
  }
}