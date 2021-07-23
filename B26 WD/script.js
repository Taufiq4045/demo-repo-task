
var technicalSpcifications = 
     [ 

       { "dimensions": {
           "overAllLength_____mm": 3500,
           "overAllWidth_____mm": 1600,
           "overAllHeight_____mm": 1490,
           "wheelBase_____mm": 2360,
           "trackWidth":{
               "front_____mm": 1405,
               "rear_____mm": 1400
           },
           "minimumTurningRadius_____m": 4.5,
           "minimumGroundClearance_____mm": 170
       }
    },
    {
        "capacities":{
            "seatingCapacity______persons": 5,
            "fuelTankCapacity_____litres": 35
        }
    },
    {
         "engine":{
             "type": "KB-Series",
             "numberOfCylinders": 3,
             "numberOfValves": 12,
             "capacity______cc/cm^3": 998,
             "bore*Stroke_______mm": 73.0*79.5,
             "compressionRation":10/1,
             "maximumPower_________PS/rpm":  67/6200,
             "maximumTorque______Nm/rpm": 90/3500,
             "fuelDistribution": "MultipointInjection"
         }
    },
    {
        "transmission":{
            "type":  "5-Speed MT",
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
            "kerbWeight_minWithFullOptions________kg": "860-880",
            "grossVehicleWeight__________kg": 1320
        }
    }
]

console.log(technicalSpcifications)