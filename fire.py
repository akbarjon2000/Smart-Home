import RPi.GPIO as GPIO
import pyrebase
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

Pin = 18
GPIO.setmode(GPIO.BOARD)
GPIO.setup(Pin,GPIO.IN,pull_up_down=GPIO.PUD_UP)
GPIO.setup(13,GPIO.OUT)

def alert(x):
    GPIO.output(13, GPIO.HIGH)
    db.child('Sensors').update({'fire':1})
    
def loop():
    GPIO.add_event_detect(Pin,GPIO.FALLING,callback=alert)
    while True:
        pass
    
try:
    loop()

except  KeyboardInterrupt:
    print("The end!")
    db.child('Sensors').update({'fire':0})
    GPIO.output(13, GPIO.LOW)

