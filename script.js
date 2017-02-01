/* Домашняя задача */
/* Есть работники, менеджери и директора.
У работиков, менеджеров и деректоров есть зарплата и имя
Менедера и директора имеют еще машину,
И деректора Умеют кричать на работников по имени
и если на одного сотрудника кричат 3 раза то зарплата сотрудника уменьшается на 200грн */

function Employee(salary, name){

    this.salary = salary;
    this.name = name;

}

function Maneger (salary, name, avto){

    Employee.apply(this,arguments);
    this.avto = avto;
}

function Director (salary, name, avto ,cry){

    Maneger.apply(this,arguments);

    var self = this;
     self.cry_count = {};

    self.cry = function (worker){
        if (self.cry_count[worker.name]){

            self.cry_count[worker.name]++;
        }
        else {

            self.cry_count[worker.name] = 1;
        }
        checkWorker(worker);
    }
    
    function checkWorker(worker) {
        if (self.cry_count[worker.name] === 3) {
            self.cry_count[worker.name] = 0;
            worker.salary -= 200;
        }
        console.log(self.cry_count);
    }

}

var Vasy = new Maneger(1000, "vasy", "audi");
var Tanya = new Maneger(2000, "Tanya", "lanos");
var Sergey = new Director(2000, "Sergey", "lanos");




console.log(Vasy);
console.log(Tanya);
Sergey.cry(Vasy);
Sergey.cry(Tanya);
Sergey.cry(Tanya);
Sergey.cry(Tanya);
Sergey.cry(Tanya);

console.log(Tanya);