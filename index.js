function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var yourNumber = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + yourNumber + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var nextPerson = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + nextPerson + "."
  }
}

function currentLine(katzDeliLine){
  var output = "The line is currently: ";
  
<<<<<<< HEAD
  for (var i = 0; i < katzDeliLine.length; i++){
    var place = i + 1
    if (i != katzDeliLine.length - 1){
      output = output + place + ". " + katzDeliLine[i] + ", "
    } else {
      output = output + place + ". " + katzDeliLine[i]
=======
  for (var i = katzDeliLine.length; i < 0; i--){
    if (i > 0){
      output = output + i + ". " + katzDeliLine[i] + ", "
    } else {
      output = output + i + ". " + katzDeliLine[i]
>>>>>>> e5470cbea1173c948f5d6b730f19fd3957e332b0
    }
  }
  
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var len = output.length;
    delete output[len];
    return output
  }
}

var customerCount = 0;

function takeANumberAlt(katzDeliLine){
  // Add to counter (increment)
  customerCount++;
  // add new number to array
  katzDeliLine.push(count);
  // exit
  return count
}