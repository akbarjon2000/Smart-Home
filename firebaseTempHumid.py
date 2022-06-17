import pyrebase
import RPi.GPIO as GPIO
import dht11
import time

firebaseConfig = {
  "apiKey": "AIzaSyB9QgsyyqZte-BnCM5akaSw6asQrOUBm98",
  "authDomain": "smarthome-351409.firebaseapp.com",
  "databaseURL": "https://smarthome-351409-default-rtdb.firebaseio.com/",
  "projectId": "smarthome-351409",
  "storageBucket": "smarthome-351409.appspot.com",
  "messagingSenderId": "630634697057",
  "appId": "1:630634697057:web:8ca90e97f2e4b39406b520",
  "measurementId": "G-N8YSQEXZ5H"
}

firebase = pyrebase.initialize_app(firebaseConfig)
db = firebase.database()

GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)


instance = dht11.DHT11(pin = 3)
data = {'buzzer':False, 'LED':False}
    
#CREATE DATA:
#db.child("Sensors").set(data)

#READ DATA:
#buzzer = db.child("Sensors").child('buzzer').get().val()
#print(buzzer.val())

#UPDATE DATA:
#db.child('Sensors').update({'buzzer':False})


while True:
    time.sleep(1)
    result = instance.read()
    if result.is_valid():
        print('Temp: %d C' % result.temperature + '' + 'Humid: %d %%'% result.humidity)
        db.child('Sensors').update({'Humid':result.humidity, 'Temp':result.temperature})



            




    
