import RPi.GPIO as GPIO
import time
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
PIN = 40

GPIO.setmode(GPIO.BOARD)
GPIO.setup(PIN,GPIO.IN,pull_up_down = GPIO.PUD_UP)
GPIO.setup(22, GPIO.OUT)

def mic(x):
    db.child('Sensors').update({'LED':1})
    print('hearing')
    time.sleep(1)


def loop():
    GPIO.add_event_detect(PIN,GPIO.FALLING,callback=mic)
    while True:
        pass

try:
    loop()
except KeyboardInterrupt:
    print("The end!")
    GPIO.output(22, GPIO.LOW)