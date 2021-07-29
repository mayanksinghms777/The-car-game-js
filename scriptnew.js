
const btn = document.getElementById("btn");
const card = document.getElementById("card");
const petrolpump = document.getElementById("petrolpump");

function myFunction(){
   
    const p = [10, 27, 37, 39, 62, 75];
        card.innerHTML = "";

        const para = document.createElement("h4");
        const node = document.createTextNode(`Petrol Pumps generated at ${p[0]}, ${p[1]}, ${p[2]}, ${p[3]}, ${p[4]}, ${p[5]} `);
        para.appendChild(node);
        const element = document.getElementById("card");
        element.appendChild(para);

        let petrolrem = 50;
        var a = 0;
        var b = 0;
        var count = 0;

        while(petrolrem >0){
            let x =0;
            count ++;
            car = Math.floor(1+Math.random() * 6);
            a = a+car;
            for(i=0;i<6;i++){
                if(p[i] == a){
                    petrolrem = petrolrem+30;
                    petrolrem = petrolrem - ((a-b)*2) 
                    var b = a;
                    x=1;
                    break;
                }
            }
            if(x!=1){
                petrolrem = petrolrem - ((a-b)*2) 
                var b = a;  
            }
            if(petrolrem < 0){
                petrolrem =0;
            }
           
            const para = document.createElement("p");
            const node = document.createTextNode(`move ${count} - car move ${car}, Car at ${a} , petrol remaining ${petrolrem} `);
            para.appendChild(node);
            const element = document.getElementById("card");
            element.appendChild(para);

            console.log("car generate"+car)
            console.log("car at"+a)
            console.log("petrol remaining"+petrolrem)
        }
        
}







