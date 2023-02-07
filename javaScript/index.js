   /* //################################## REACT BUTTON START
    
    function Like(btn){
        
        let Like_Count = btn.parentElement.querySelector('.Count');
        let clicked = false;
        console.log(Like_Count);

     if(!clicked){
          clicked = true;
         Like_Count.value = Like_Count.innerText++;
        }
        else{
          clicked = false;
          Like_Count.innerText--;
        }
    }


     //################################## REACT BUTTON END*/

   
   
   
   //################################## functions for buy now pop up (form)
        const a1 = document.getElementById("bn");
        const a2 = document.getElementById("orderForm");

        //get elements
        const prNm = document.getElementById("producName");
        const prCd = document.getElementById("productId");
        const prPc = document.getElementById("productPrice");
        const prPcTp = document.getElementById("priceTop");
        const orNw = document.getElementById("orderNow");


        function ordrnw(btn) {
          if (a2.style.display === "none") {
            a2.style.display = "flex";
            
            //inputing classes
            let productName = btn.parentElement.querySelector('.prnm').innerText;
            let productTag = btn.parentElement.querySelector('.tg').innerText;
            let productCost = btn.parentElement.querySelector('.adp').innerText;
           

             //inputing values
             prNm.value = productName;
             orNw.innerText = productName +" - "+"Rs: "+ productCost +"/-";
             prCd.value = productTag;
             prPc.value = productCost;
          } else{
            a2.style.display = "none";
          }
        }
        function closefun() {
          if (a2.style.display === "flex") {
            a2.style.display = "none";
          } else{
            a2.style.display = "flex";
          }
        }


//################################## calculating total price


 
function update() {
  let Cp = productPrice.value;
  let Quantity = document.getElementById("productQ").value;
  let TotalCost = document.getElementById("totalPrice");
  TotalCost.value = ("Total Rs:"+Quantity*Cp+"/-");
}
//################################## END calculating total price


//################################## END buy now pop up (form)






//################################## functions for REQUEST A BOOK (form)
const B1 = document.getElementById("orderForm2");


function Rqb() {
  if (B1.style.display === "none") {
    B1.style.display = "flex";
  } else{
    B1.style.display = "none";
  }
}
function closefun2() {
  if (B1.style.display === "flex") {
    B1.style.display = "none";
  } else{
    B1.style.display = "flex";
  }
}

//################################## END REQUEST A BOOK pop up (form)


//#################################### SOLD POP UP
 let SLD  = document.getElementById("SOLD")
function sold(btn) {
  if (SLD.style.display === "none") {
    SLD.style.display = "flex";
  } else{
    SLD.style.display = "none";
  }
}
function closefun3() {
  if (SLD.style.display === "flex") {
    SLD.style.display = "none";
  } else{
    SLD.style.display = "flex";
  }
}





//################################## MOTHER book catagory onclick books list apear
      const Mother_a = document.getElementById("BookOptionsCompetative");
      const Mother_b = document.getElementById("BookOptionsSchool");
      const Mother_c = document.getElementById("BookOptionsTechnical");

      function Mother_Fun1() {
        if (Mother_a.style.display === "none") {
          Mother_a.style.display = "flex";
          Mother_b.style.display = "none";
          Mother_c.style.display = "none";
        } else {
          Mother_a.style.display = "none";
        }
      }
      function Mother_Fun2() {
        if (Mother_b.style.display === "none") {
          Mother_b.style.display = "flex";
          Mother_a.style.display = "none";
          Mother_c.style.display = "none";
        } else {
          Mother_b.style.display = "none";
        }
      }
      function Mother_Fun3() {
        if (Mother_c.style.display === "none") {
          Mother_c.style.display = "flex";
          Mother_a.style.display = "none";
          Mother_b.style.display = "none";
        } else {
          Mother_c.style.display = "none";
        }
      }
//################################## MOTHER book catagory END




//################################## competative book catagory 
        const Cmpt_a = document.getElementById("Cmpt_id1")
        const Cmpt_b = document.getElementById("Cmpt_id2")
        const Cmpt_c = document.getElementById("Cmpt_id3")
        const Cmpt_d = document.getElementById("Cmpt_id4")
        const Cmpt_e = document.getElementById("Cmpt_id5")
        const Cmpt_f = document.getElementById("Cmpt_id6")
        const Cmpt_g = document.getElementById("Cmpt_id7")
        const Cmpt_h = document.getElementById("Cmpt_id8")
        const Cmpt_i = document.getElementById("Cmpt_id9")

        function Cmpt_Fun1() {
          if (Cmpt_a.style.display === "none") {
            Cmpt_a.style.display = "flex";
            Cmpt_b.style.display = "none";
            Cmpt_c.style.display = "none";
            Cmpt_d.style.display = "none";
            Cmpt_e.style.display = "none";
            Cmpt_f.style.display = "none";
            Cmpt_g.style.display = "none";
            Cmpt_h.style.display = "none";
            Cmpt_i.style.display = "none";
          } else {
            Cmpt_a.style.display = "none";
          }
        }
        function Cmpt_Fun2() {
          if (Cmpt_b.style.display === "none") {
            Cmpt_b.style.display = "flex";
            Cmpt_a.style.display = "none";
            Cmpt_c.style.display = "none";
            Cmpt_d.style.display = "none";
            Cmpt_e.style.display = "none";
            Cmpt_f.style.display = "none";
            Cmpt_g.style.display = "none";
            Cmpt_h.style.display = "none";
            Cmpt_i.style.display = "none";
          } else {
            Cmpt_b.style.display = "none";
          }
        }
        function Cmpt_Fun3() {
          if (Cmpt_c.style.display === "none") {
            Cmpt_c.style.display = "flex";
            Cmpt_a.style.display = "none";
            Cmpt_b.style.display = "none";
            Cmpt_d.style.display = "none";
            Cmpt_e.style.display = "none";
            Cmpt_f.style.display = "none";
            Cmpt_g.style.display = "none";
            Cmpt_h.style.display = "none";
            Cmpt_i.style.display = "none";
          } else {
            Cmpt_c.style.display = "none";
          }
        }
        function Cmpt_Fun4() {
          if (Cmpt_d.style.display === "none") {
            Cmpt_d.style.display = "flex";
            Cmpt_a.style.display = "none";
            Cmpt_b.style.display = "none";
            Cmpt_c.style.display = "none";
            Cmpt_e.style.display = "none";
            Cmpt_f.style.display = "none";
            Cmpt_g.style.display = "none";
            Cmpt_h.style.display = "none";
            Cmpt_i.style.display = "none";
          } else {
            Cmpt_d.style.display = "none";
          }
        }
        function Cmpt_Fun5() {
          if (Cmpt_e.style.display === "none") {
            Cmpt_e.style.display = "flex";
            Cmpt_a.style.display = "none";
            Cmpt_b.style.display = "none";
            Cmpt_c.style.display = "none";
            Cmpt_d.style.display = "none";
            Cmpt_f.style.display = "none";
            Cmpt_g.style.display = "none";
            Cmpt_h.style.display = "none";
            Cmpt_i.style.display = "none";
          } else {
            Cmpt_e.style.display = "none";
          }
        }
        function Cmpt_Fun6() {
          if (Cmpt_f.style.display === "none") {
            Cmpt_f.style.display = "flex";
            Cmpt_a.style.display = "none";
            Cmpt_b.style.display = "none";
            Cmpt_c.style.display = "none";
            Cmpt_d.style.display = "none";
            Cmpt_e.style.display = "none";
            Cmpt_g.style.display = "none";
            Cmpt_h.style.display = "none";
            Cmpt_i.style.display = "none";
          } else {
            Cmpt_f.style.display = "none";
          }
        }
        function Cmpt_Fun7() {
          if (Cmpt_g.style.display === "none") {
            Cmpt_g.style.display = "flex";
            Cmpt_a.style.display = "none";
            Cmpt_b.style.display = "none";
            Cmpt_c.style.display = "none";
            Cmpt_d.style.display = "none";
            Cmpt_e.style.display = "none";
            Cmpt_f.style.display = "none";
            Cmpt_h.style.display = "none";
            Cmpt_i.style.display = "none";
          } else {
            Cmpt_g.style.display = "none";
          }
        }
        function Cmpt_Fun8() {
          if (Cmpt_h.style.display === "none") {
            Cmpt_h.style.display = "flex";
            Cmpt_a.style.display = "none";
            Cmpt_c.style.display = "none";
            Cmpt_b.style.display = "none";
            Cmpt_d.style.display = "none";
            Cmpt_e.style.display = "none";
            Cmpt_f.style.display = "none";
            Cmpt_g.style.display = "none";
            Cmpt_i.style.display = "none";
          } else {
            Cmpt_h.style.display = "none";
          }
        }
        function Cmpt_Fun9() {
          if (Cmpt_i.style.display === "none") {
            Cmpt_i.style.display = "flex";
            Cmpt_a.style.display = "none";
            Cmpt_b.style.display = "none";
            Cmpt_c.style.display = "none";
            Cmpt_d.style.display = "none";
            Cmpt_e.style.display = "none";
            Cmpt_f.style.display = "none";
            Cmpt_g.style.display = "none";
            Cmpt_h.style.display = "none";
          } else {
            Cmpt_i.style.display = "none";
          }
        }


       //################################## competative book catagory 
       const Schl_a = document.getElementById("Schl_Class_4")
       const Schl_b = document.getElementById("Schl_Class_5")
       const Schl_c = document.getElementById("Schl_Class_6")
       const Schl_d = document.getElementById("Schl_Class_7")
       const Schl_e = document.getElementById("Schl_Class_8")
       const Schl_f = document.getElementById("Schl_Class_9")
       const Schl_g = document.getElementById("Schl_Class_10")
       const Schl_h = document.getElementById("Schl_Class_11")
       const Schl_i = document.getElementById("Schl_Class_12")

       function Schl_Fun1() {
         if (Schl_a.style.display === "none") {
           Schl_a.style.display = "flex";
           Schl_b.style.display = "none";
           Schl_c.style.display = "none";
           Schl_d.style.display = "none";
           Schl_e.style.display = "none";
           Schl_f.style.display = "none";
           Schl_g.style.display = "none";
           Schl_h.style.display = "none";
           Schl_i.style.display = "none";
         } else {
           Schl_a.style.display = "none";
         }
       }
       function Schl_Fun2() {
         if (Schl_b.style.display === "none") {
           Schl_b.style.display = "flex";
           Schl_a.style.display = "none";
           Schl_c.style.display = "none";
           Schl_d.style.display = "none";
           Schl_e.style.display = "none";
           Schl_f.style.display = "none";
           Schl_g.style.display = "none";
           Schl_h.style.display = "none";
           Schl_i.style.display = "none";
         } else {
           Schl_b.style.display = "none";
         }
       }
       function Schl_Fun3() {
         if (Schl_c.style.display === "none") {
           Schl_c.style.display = "flex";
           Schl_a.style.display = "none";
           Schl_b.style.display = "none";
           Schl_d.style.display = "none";
           Schl_e.style.display = "none";
           Schl_f.style.display = "none";
           Schl_g.style.display = "none";
           Schl_h.style.display = "none";
           Schl_i.style.display = "none";
         } else {
           Schl_c.style.display = "none";
         }
       }
       function Schl_Fun4() {
         if (Schl_d.style.display === "none") {
           Schl_d.style.display = "flex";
           Schl_a.style.display = "none";
           Schl_b.style.display = "none";
           Schl_c.style.display = "none";
           Schl_e.style.display = "none";
           Schl_f.style.display = "none";
           Schl_g.style.display = "none";
           Schl_h.style.display = "none";
           Schl_i.style.display = "none";
         } else {
           Schl_d.style.display = "none";
         }
       }
       function Schl_Fun5() {
         if (Schl_e.style.display === "none") {
           Schl_e.style.display = "flex";
           Schl_a.style.display = "none";
           Schl_b.style.display = "none";
           Schl_c.style.display = "none";
           Schl_d.style.display = "none";
           Schl_f.style.display = "none";
           Schl_g.style.display = "none";
           Schl_h.style.display = "none";
           Schl_i.style.display = "none";
         } else {
           Schl_e.style.display = "none";
         }
       }
       function Schl_Fun6() {
         if (Schl_f.style.display === "none") {
           Schl_f.style.display = "flex";
           Schl_a.style.display = "none";
           Schl_b.style.display = "none";
           Schl_c.style.display = "none";
           Schl_d.style.display = "none";
           Schl_e.style.display = "none";
           Schl_g.style.display = "none";
           Schl_h.style.display = "none";
           Schl_i.style.display = "none";
         } else {
           Schl_f.style.display = "none";
         }
       }
       function Schl_Fun7() {
         if (Schl_g.style.display === "none") {
           Schl_g.style.display = "flex";
           Schl_a.style.display = "none";
           Schl_b.style.display = "none";
           Schl_c.style.display = "none";
           Schl_d.style.display = "none";
           Schl_e.style.display = "none";
           Schl_f.style.display = "none";
           Schl_h.style.display = "none";
           Schl_i.style.display = "none";
         } else {
           Schl_g.style.display = "none";
         }
       }
       function Schl_Fun8() {
         if (Schl_h.style.display === "none") {
           Schl_h.style.display = "flex";
           Schl_a.style.display = "none";
           Schl_c.style.display = "none";
           Schl_b.style.display = "none";
           Schl_d.style.display = "none";
           Schl_e.style.display = "none";
           Schl_f.style.display = "none";
           Schl_g.style.display = "none";
           Schl_i.style.display = "none";
         } else {
           Schl_h.style.display = "none";
         }
       }
       function Schl_Fun9() {
         if (Schl_i.style.display === "none") {
           Schl_i.style.display = "flex";
           Schl_a.style.display = "none";
           Schl_b.style.display = "none";
           Schl_c.style.display = "none";
           Schl_d.style.display = "none";
           Schl_e.style.display = "none";
           Schl_f.style.display = "none";
           Schl_g.style.display = "none";
           Schl_h.style.display = "none";
         } else {
           Schl_i.style.display = "none";
         }
       }



         //################################## scripts for sub books of technical
         const Mb_1 = document.getElementById("Mechanical_books")
         const Cb_2 = document.getElementById("Civil_books")
         const Ab_3 = document.getElementById("Automobile_Books")
         const Csb_4 = document.getElementById("ComputerScience_books")
         const Eb_5 = document.getElementById("Electrical_books")

         function Tec_Fun1() {
           if (Mb_1.style.display === "none") {
             Mb_1.style.display = "flex";
             Cb_2.style.display = "none";
             Ab_3.style.display = "none";
             Csb_4.style.display = "none";
             Electrical_books.style.display = "none";
           } else {
             Mb_1.style.display = "none";
           }
         }
         function Tec_Fun2() {
           if (Cb_2.style.display === "none") {
             Cb_2.style.display = "flex";
             Mb_1.style.display = "none";
             Ab_3.style.display = "none";
             Csb_4.style.display = "none";
             Eb_5.style.display = "none";
           } else {
             Cb_2.style.display = "none";
           }
         }
         function Tec_Fun3() {
           if (Ab_3.style.display === "none") {
             Ab_3.style.display = "flex";
             Mb_1.style.display = "none";
             Cb_2.style.display = "none";
             Csb_4.style.display = "none";
             Eb_5.style.display = "none";
           } else {
             Ab_3.style.display = "none";
           }
         }
         
         function Tec_Fun4() {
          if (Csb_4.style.display === "none") {
            Csb_4.style.display = "flex";
            Ab_3.style.display = "none";
            Mb_1.style.display = "none";
            Cb_2.style.display = "none";
            Electrical_books.style.display = "none";
          } else {
            Csb_4.style.display = "none";
          }
        }
      
        function Tec_Fun5() {
          if (Eb_5.style.display === "none") {
            Eb_5.style.display = "flex";
            Csb_4.style.display = "none";
            Ab_3.style.display = "none";
            Mb_1.style.display = "none";
            Cb_2.style.display = "none";
            
          } else {
            Eb_5.style.display = "none";
          }
        }
      //################################## end scripts for opening book options


      //################################## REQUEST A BOOK
      