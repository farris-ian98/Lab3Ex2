let pictures = ["apple.jpeg", "birds.jpeg", "puppy.jpg", "peacock.jpeg", "cat.jpeg"]
let index = 0;
function next(){
  if(index == pictures.length-1){
    image.src = pictures[0];
    index = 0;
  }
  else{
  image.src = pictures[index+1];
  index++;
  }
}
function previous(){
  if(index == 0){
    index = pictures.length-1;
  }
  else{
    index--;
  }
  image.src = pictures[index]
}
