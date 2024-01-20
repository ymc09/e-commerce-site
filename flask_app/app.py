from flask import Flask,jsonify
import psycopg2
from datetime import datetime
from flask_cors import CORS

app=Flask(__name__)
CORS(app) 


conn= psycopg2.connect(database='VRYL',
        user='postgres',
        password='vryl',
        host='localhost',
        port='5432')



@app.route("/api/addEmail/<email>", methods=['POST','GET'])
def addEmail(email):
    
    cursor=conn.cursor()
    cursor.execute("INSERT into \"Customer\" (email) VALUES (%s)", (email,))
    conn.commit()

    return 'done'



@app.route("/api/addOrder/<cust_email>", methods=['POST','GET'])
def addOrder(cust_email):

    cursor=conn.cursor()
    cursor.execute("SELECT MAX(\"orderID\") FROM \"Order\"  ")
    orderID= int(cursor.fetchall()[0][0]) 

    if(orderID):

        orderID=orderID+1
    
    else:
        orderID=1

    cursor.execute("INSERT into \"Order\" (\"orderID\",customer_email,\"orderDate\",\"orderStatus\") values(%s,%s,%s,%s)",
                   (orderID,cust_email, datetime.now(),'pending') )

    q=cursor.execute('SELECT * From \"Customer\" where email=(%s) ',(cust_email,))
    e=cursor.fetchall()

    if (not e):

        cursor.execute("INSERT into \"Customer\" (email) VALUES (%s)", (cust_email,))
    
    conn.commit()

    return 'done'


if __name__ == '__main__':

    app.run()