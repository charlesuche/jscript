//I.T STUDENTS IN UJHUB
var ITstudents =[
    {
        Name:"Stephen Nanret",
        Age: 23,
        Address: "Odus Mazah Road",
        Tribe: "Mwagavul",
        Gender: "Female",
        Height: 1.05 ,
        Dept: "CS",
        Level: 300,
        Grade:[50,60,70,80,90,100]
    },
    {
        Name:"Ifeoma Ibedu",
        Age: 25,
        Address: "Dogon Dutse",
        Tribe: "Igbo",
        Gender: "Female",
        Height: 1.76 ,
        Dept: "CS",
        Level: 300,
        Grade:[54,65,72,81,84,90]
    
    },
    {
        Name:"Uzaifat Ibrahim",
        Age: 24,
        Address: "Dodo Streat",
        Tribe: "Mwagavul",
        Gender: "Male",
        Height: 1.68 ,
        Dept: "CS",
        Level: 300,
        Grade:[51,62,77,84,90,95]
    },
    {
        Name:"Oyekale Tosin",
        Age: 23,
        Address: "Farin gada",
        Tribe: "Yoruba",
        Gender: "Female",
        Height: 1.54 ,
        Dept: "CS",
        Level: 300,
        Grade:[91,92,78,45,95,99]
    },
    {
        Name:"Mark Adams",
        Age: 23,
        Address: "Odus Ring Road",
        Tribe: "Idoma",
        Gender: "Male",
        Height: 1.05 ,
        Dept: "CS",
        Level: 300,
        Grade:[61,62,78,84,97,65]
    },
    {
        Name:"Christiana Temitope",
        Age: 26,
        Address: "Nasarawa Gwong",
        Tribe: "Yoruba",
        Gender: "Female",
        Height: 1.76,
        Dept: "CS",
        Level: 300,
        Grade:[51,60,78,54,90,100]
    },
    {
        Name:"Martins Yada",
        Age: 23,
        Address: "Ring Road",
        Tribe: "Mwagavul",
        Gender: "Male",
        Height: 1.06 ,
        Dept: "CS",
        Level: 300,
        Grade:[71,46,77,84,78,100]
    },
    {
        Name:"Yada Martins",
        Age: 26,
        Address: "Odus",
        Tribe: "Kagoro",
        Gender: "Male",
        Height: 1.85,
        Dept: "CS",
        Level: 300,
        Grade:[51,82,77,84,60,85]
    },
    {
        Name:"Asalu Temitope Peter",
        Age: 20,
        Address: "Ring Road",
        Tribe: "Yagba",
        Gender: "Male",
        Height: 1.07 ,
        Dept: "CS",
        Level: 300,
        Grade:[51,32,77,84,92,100]
    },
    {
        Name:"Debora Kibba",
        Age: 25,
        Address: "Ring Road",
        Tribe: "Amo",
        Gender: "Female",
        Height: 1.60,
        Dept: "CS",
        Level: 300,
        Grade:[51,59,77,64,90,95]
    },
    {
        Name:"Elizabeth Emmanuel",
        Age: 25,
        Address: "Faringda",
        Tribe: "Ibibio",
        Gender: "Female",
        Height: 1.60,
        Dept: "CS",
        Level: 400,
        Grade:[50,62,67,88,90,100]
    },
    {
        Name:"Gift Eleojo",
        Age: 23,
        Address: "Three container",
        Tribe: "Igala",
        Gender: "Female",
        Height: 1.60 ,
        Dept: "CS",
        Level: 300,
        Grade:[59,60,49,68,90,100]
    },
    {
        Name:"Nanbal Kundam",
        Age: 23,
        Address: "Ring Road",
        Tribe: "Mupun",
        Gender: "Male",
        Height: 1.50 ,
        Dept: "CS",
        Level: 300,
        Grade:[40,52,67,78,80,90]
    },
    {
        Name:"Yohanna Awari",
        Age: 22,
        Address: "Angwan Rukuba",
        Tribe: "Afizere",
        Gender: "Male",
        Height: 1.78 ,
        Dept: "CS",
        Level: 300,
        Grade:[30,42,97,88,90,99]
    },
    {
        Name:"Kaslong Kevin",
        Age: 13,
        Address: "Tudun Wada",
        Tribe: "Goemai",
        Gender: "Male",
        Height: 1.32 ,
        Dept: "CS",
        Level: 300,
        Grade:[90,62,67,88,60,100]
    },
    {
        Name:"Joy Osedebamen",
        Age:16,
        Address: "Ring Road",
        Tribe: "Esan",
        Gender: "Female",
        Height: 1.60 ,
        Dept: "CS",
        Level: 300,
        Grade:[50,62,62,88,92,30]
    
    },
    {
        Name:"Josephine Sunday",
        Age: 25,
        Address: "Odus",
        Tribe: "Egon",
        Gender: "Female",
        Height: 1.65 ,
        Dept: "CS",
        Level: 300,
        Grade:[20,32,67,88,90,100]
    
    },
    {
        Name:"Maryam Mabas",
        Age: 25,
        Address: "PTS Jos",
        Tribe: "Challa",
        Gender: "Female",
        Height: 1.08 ,
        Dept: "CS",
        Level: 300,
        Grade:[50,56,87,88,90,100]
    
    },
    ];
    
    // I.T students at Ujhub
    var output = ITstudents.filter((info)=> info);
    console.log("The details of all students are as follows");
    console.log(output);
    console.log("\n\n");
    
    //Checking the maximum  height of all the students
    var MaxValue = 0;
    var Allstudents = ITstudents.filter(function(val){
        if(MaxValue< val.Height){
            MaxValue = val.Height;
        }
    });
    
    //To retrieve the information of the person with the maximum height
    var retrieve = ITstudents.filter(function(file){
        if(file.Height == MaxValue){
            return file;
        }
    });
    console.log("\n\n information on tallest person\n\n", retrieve);
     //Computing Average of grades and finding the maximum
    
     var maxAvg = 0;
     var answer;
    
     ITstudents.forEach((val,index,data) => {
         var sum = val.Grade.reduce((previous,current)=> current + previous);
         var Avg = sum/val.Grade.length;
         if(maxAvg < Avg){
          maxAvg = Avg;
         ans = index;
         }
     });
    
     console.log("\n\n Info on student with the maximum avarage grade\n\n", ITstudents[ans]);
    