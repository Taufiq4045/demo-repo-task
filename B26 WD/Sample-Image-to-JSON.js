
var technicalSpcifications = 
     [ 

       { "dimensions": {
           "overAllLength":{"mm":3500},
           "overAllWidth":{"mm":1600},
           "overAllHeight":{"mm":1490},
           "wheelBase":{"mm":2360},
           "trackWidth":{
               "front":{"mm":1405},
               "rear":{"mm":1400}
           },
           "minimumTurningRadius":{"m":4.5},
           "minimumGroundClearance":{"mm":170}
       }
    },
    {
        "capacities":{
            "seatingCapacity": { "persons":5},
            "fuelTankCapacity": { "litres":35}
        }
    },
    {
         "engine":{
             "type": "KB-Series",
             "numberOfCylinders": 3,
             "numberOfValves": 12,
             "capacity":{"cc/cm^3":998},
             "bore*Stroke":{"mm":73.0*79.5},
             "compressionRation":10/1,
             "maximumPower":{"ps/rpm":67/6200},
             "maximumTorque":{"nm/rpm":90/3500},
             "fuelDistribution": "MultipointInjection"
         }
    },
    {
        "transmission":{
            "type":  5 +"-Speed MT",
            }
    },
    {
        "chassis": {
            "streering": "Rack & Pinion, Power assisted",
            "brakes": { "front":"Ventilated Discs", "rear": "Drums"},
            "suspension":{ "front": "MacPherson strut & coil spring", "rear":"Isolated Trailing Link & coil spring"},
            "shockAbsorbers": "Gas filled",
            "tyre": {"tubeless":"I55/80R13"},
            }
    },
    {
        "weights":{
            "kerbWeight_minWithFullOptions":{"kg":"860-880"},
            "grossVehicleWeight":{"kg":1320}
        }
    }
]

console.log(technicalSpcifications[2].engine.numberOfValves)
