let guys = [{
    "HumanData": {
      "FIO": "Darie Cristian Mihail",
      "BirthData": "28.12.2001",
      "Gender": "Male",
      "IDNP": 2016004002892,
      "BirthPlace": "Moldova"
    },
    "WorkerData": {
      "Mob": 078787223,
      "Mob_home": 023149864,
      "Addres": "Alexandr Parhomenko 8",
      "@mail": "cristian.darie13@gmail.com",
      "Post": "Project Manager",
      "StartWorkTime": "01.05.2022",
      "Salary": 100,
      "WorkerRating": 9,
      "WorkPlace": "NipponSoftware",
      "WorkGraph": "8:00 - 17:00/dinner 12:00-13:00"
    }
  },
  {
    "HumanData": {
      "FIO": "Zabugornii Alexandru Ion",
      "BirthData": "13.04.2001",
      "Gender": "Male",
      "IDNP": 6645642777654,
      "BirthPlace": "Moldova"
    },
    "WorkerData": {
      "Mob": 067454051,
      "Mob_home": 026223457,
      "Addres": "Independentei 43",
      "@mail": "zab.alex.@mail.ru",
      "Post": "Frontend Developer",
      "StartWorkTime": "11.11.2022",
      "Salary": 20,
      "WorkerRating": 7,
      "WorkPlace": "Science Developer Group",
      "WorkGraph": "8:00 - 17:00/dinner 12:00-13:00"
    }
  },
  {
    "HumanData": {
      "FIO": "Shoto Todaro",
      "BirthData": "10.10.2002",
      "Gender": "Male",
      "IDNP": 1236666775555,
      "BirthPlace": "Japan"
    },
    "WorkerData": {
      "Mob": 037353051,
      "Mob_home": 016121457,
      "Addres": "Sakyou Tek 12",
      "@mail": "shoto.sensei@gmail.com",
      "Post": "Database Engineer",
      "StartWorkTime": "11.01.2022",
      "Salary": 300,
      "WorkerRating": 10,
      "WorkPlace": "PoroPoro Soft",
      "WorkGraph": "8:00 - 17:00/dinner 12:00-13:00"
    }
  }]

  employers = document.querySelector(".employees").innerHTML = guys[0].HumanData.FIO + "<br>" + guys[1].HumanData.FIO + "<br>" + guys[2].HumanData.FIO;
  salaries = document.querySelector(".salaries");
  avgSalar = document.querySelector(".avgSalar");
  minSalar = document.querySelector(".minSalar");
  maxSalar = document.querySelector(".maxSalar");
  sumSalar = document.querySelector(".sumSalar");

  avgValue = 0;
  contor = 0;
  minValue = guys[0].WorkerData.Salary ;
  maxValue = 0;
  sum = 0;

  for(let key in guys){
    salaries.innerHTML += guys[key].HumanData.FIO + " : " + guys[key].WorkerData.Salary + "<br>" 
    avgValue += guys[key].WorkerData.Salary;
    sum += guys[key].WorkerData.Salary; 
    contor++;
    if(guys[key].WorkerData.Salary <= minValue ){ //MinMax
        minSalar.innerHTML = guys[key].WorkerData.Salary;
        minValue = guys[key].WorkerData.Salary;
    }
    else if(guys[key].WorkerData.Salary >= maxValue){
        maxSalar.innerHTML = guys[key].WorkerData.Salary;
        maxValue = guys[key].WorkerData.Salary;
    }
  }

  avgSalar.innerHTML += `Average Salary = <h3 style="display: inline;"> ${avgValue/contor} </h3>`;
  sumSalar.innerHTML = sum;