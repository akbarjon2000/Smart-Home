import RPi.GPIO as GPIO
import pyrebase

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
GPIO.setup(15,GPIO.IN)
GPIO.setup(36,GPIO.OUT)
GPIO.setup(38,GPIO.OUT)
GPIO.setup(37,GPIO.OUT)
GPIO.setup(35,GPIO.OUT)
GPIO.setup(22,GPIO.OUT)

while True:
    led = db.child("Sensors").child('LED').get().val()
    touch = GPIO.input(15)
    if touch == 1:
        if led == 1:
            db.child('Sensors').update({'LED':0})
        if led == 0:
            db.child('Sensors').update({'LED':1})
    if led == 1:
        GPIO.output(38, GPIO.HIGH)  
        GPIO.output(36, GPIO.HIGH)
        GPIO.output(37, GPIO.HIGH)
        GPIO.output(35, GPIO.HIGH)
        GPIO.output(22, GPIO.HIGH)    
    if led == 0:
        GPIO.output(38, GPIO.LOW)
        GPIO.output(37, GPIO.LOW)
        GPIO.output(36, GPIO.LOW)
        GPIO.output(35, GPIO.LOW)
        GPIO.output(22, GPIO.LOW)
