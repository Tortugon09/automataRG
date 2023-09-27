from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from pydantic import BaseModel

palabras_1 = {
    "q1": ['z'],
    "q2": ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'],
    "q3": ['r']
}
palabras_2 = {
    "q1": ['r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    "q2": ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    "q3": ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r']
}
numeros = ["1" ,"2", "3", "4", "5", "6", "7", "8", "9"]
numeros2 = ["0", "1" ,"2", "3", "4", "5", "6", "7", "8", "9"]
abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/q0")
async def q0(palabra):
    caracter = palabra[0] 
    for clavere, subfamiliasre in palabras_1.items():
        if caracter in subfamiliasre:
            flujo = clavere
            print(flujo)
    return flujo

@app.post("/q1")
async def q1(palabra):
    caracter = palabra[1] 
    if caracter in palabras_2["q1"]:
        flujo = "q4"
        print(flujo)
    return flujo

@app.post("/q2")
async def q2(palabra):
    caracter = palabra[1] 
    if caracter in palabras_2["q2"]:
        flujo = "q4"
        print(flujo)
    return flujo

@app.post("/q3")
async def q3(palabra):
    caracter = palabra[1] 
    if caracter in palabras_2["q3"]:
        flujo = "q4"
        print(flujo)
    return flujo

@app.post("/q4")
async def q4(palabra):
    caracter = palabra[2] 
    if caracter == "-":
        print(caracter)
        flujo = "q5"
    return flujo

@app.post("/q5")
async def q5(palabra):
    caracter = palabra[3] 
    if caracter == "0":
        flujo = "q6"
    elif caracter in numeros:
        flujo = "q9"
    print(flujo)
    return flujo

@app.post("/q6")
async def q6(palabra):
    caracter = palabra[4] 
    if caracter == "0":
        flujo = "q7"
    elif caracter in numeros:
        flujo = "q10"
    print(flujo)
    return flujo

@app.post("/q7")
async def q7(palabra):
    caracter = palabra[5] 
    if caracter in numeros:
        flujo = "q8"
    print(flujo)
    return flujo

@app.post("/q8")
async def q8(palabra):
    caracter = palabra[6] 
    if caracter == "-":
        print(caracter)
        flujo = "q11"
    return flujo

@app.post("/q9")
async def q9(palabra):
    caracter = palabra[4] 
    if caracter in numeros2:
        flujo = "q10"
    print(flujo)
    return flujo

@app.post("/q10")
async def q10(palabra):
    caracter = palabra[5] 
    if caracter in numeros2:
        flujo = "q8"
    print(flujo)
    return flujo

@app.post("/q11")
async def q11(palabra):
    caracter = palabra[7] 
    if caracter in abecedario:
        flujo = "q12"
    print(flujo)
    return flujo      


""" q0(palabra)
q1(palabra)
q2(palabra)
q3(palabra)
q4(palabra)
q5(palabra)
q6(palabra)
q7(palabra)
q8(palabra)
q9(palabra)
q10(palabra)
q11(palabra) """

