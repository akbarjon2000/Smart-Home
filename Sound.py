import RPi.GPIO as GPIO
import pyrebase
import time
import dht11
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

GPIO.setup(40,GPIO.IN)


while True:
    sound = GPIO.input(40)
    if sound == 1:
        db.child('Sensors').update({'LED':1})
        print('hearing')
        time.sleep(1)
    

        