import serial
import time

ser = serial.Serial('COM3', 9600, timeout=1)
time.sleep(2)

with open('motor_data.csv', 'w') as file:
    file.write('Thrust,N,RPM,Voltage,V,Current,A,Temperature,°C\n')  # Write headers
    while True:
        try:
            data = ser.readline().decode('utf-8').strip()
            if data:
                file.write(data + '\n')
                thrust, rpm, voltage, current, temperature = map(float, data.split(','))
                print(f"Thrust: {thrust} N, RPM: {rpm}, Voltage: {voltage} V, Current: {current} A, Temperature: {temperature} °C")
        except serial.SerialException as e:
            print(f"Serial error: {e}")
        except ValueError:
            print("Error parsing data")
        except KeyboardInterrupt:
            print("Exiting...")
            break

ser.close()
