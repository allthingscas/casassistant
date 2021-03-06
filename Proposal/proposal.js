function Proposal(questions){
  this.questions = questions;
  this.questionIndex = 0;
}

Proposal.prototype.getQuestion = function() {
  return this.questions[this.questionIndex];
}

Proposal.prototype.isEnded = function() {
  return this.questions.length - 1 === this.questionIndex;
}


Proposal.prototype.buildAnswer = function() {
  var endString = "";
  for (var i = 0; i < this.questions.length; i++){
    endString += this.questions[i].text + "\n";
    endString += this.questions[i].answer + "\n";
  }
  
return endString;
}
