let myData = document.querySelector('#myData');
db.collection("Report").get().then((querySnapshot) => {
     console.log("all docs", querySnapshot );
     let allData = [];
     querySnapshot.forEach((doc) => {
         // doc.data() is never undefined for query doc snapshots
         console.log(doc.id, " => ", doc.data());
     });
 });

 let DomTree ='';
 function displayFirebaseData(fireData){
     fireData.map((item) =>{
          DomTree = DomTree + `<div>
          <p> My name is : ${item.name} </p>
          <img src "${item.prof-img}"/>
          </div>`;
     });
     console.log("after ->", DomTree);
     myData.innerHTML=DomTree;
 }