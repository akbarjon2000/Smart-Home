import RPi.GPIO as GPIO 
#GPIO.setwarnings(False) 
#GPIO.setmode(GPIO.BOARD) 
#GPIO.setup(10, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
#from datetime import datetime
from picamera import PiCamera
from time import sleep
import os

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

storage = firebase.storage()

camera = PiCamera()


while True: 
  try:
    #if GPIO.input(10) == GPIO.HIGH:
    print("start")
    camera.capture('current.jpg')
    storage.child('picture').put('current.jpg')
    os.remove('current.jpg')
    print('removed')
    
	
	
  except:
        camera.close()
