//    var NodeList = document.querySelectorAll(".label");
//        for(let x=0 ; x<NodeList.length; x++){    
//            NodeList[x].addEventListener('click',function(){
//                for(let i = 0; i<NodeList.length; i++){
//                    if(NodeList[i].classList.contains("move"))
//                    {
//                        NodeList[i].classList.remove("move");
//                        console.log("removed")
//                    };
//                }
//
//                    NodeList[x].classList.add("move");
//
//            },false); 
//            
//        }

var NodeList = document.querySelectorAll(".myinput");
var nodeList = document.querySelectorAll(".label");
 for(let x = 0; x<nodeList.length; x++){
     NodeList[x].addEventListener('click',function(){
        for(let i =0; i<NodeList.length; i++){
            nodeList[i].classList.remove("move");
             NodeList[i].classList.remove("brd");

        }
         nodeList[x].classList.add("move");
         NodeList[x].classList.add("brd");
         
     });
 }