import React, { useState } from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { Start, Question4b, Question5, Question5a, Question5b } from "../atomos";
import Resalt from "../atomos/Resalt";


const initialState = {
  //electrico
  people: 1,
  pc: false,
  radio: false,
  impresora: false,
  microondas: false,
  dispenser: false,
  pava: false,
  lavarropa: false,
  heladera: false,
  tv: false,
  //gas
  cocina: false,
  termotanque: false,
  estufa: false,
  //auto
  useCar: false,
  carDistance: 1,
  carShare: 1,
  //transporte publico
  publicTransport: false,
  train: false,
  subway: false,
  bus: false,
  taxi: false,
  publicHours: 1,
  //totales

  total: 1,
};

export default function Calculator() {
  const [input, setInput] = useState(initialState);

  const [location, setLocation] = useState("start");

  const handleButton = () => {
    switch (location) {
      case "start":
        setInput(initialState);
        setLocation("question1");
        break;
      case "question1":
        setLocation("question2");
        break;
      case "question2":
        setLocation("question3");
        break;
      case "question3":
        setLocation("question4");
        break;
      case "question4":
        if (input.useCar) {
          setLocation("question4A");
        } else {
          setLocation("question5");
        }
        break;
      case "question4A":
        setLocation("question4B");
        break;
      case "question4B":
        setLocation("question5");
        break;
      case "question5":
        var edesur = 0;
        var metrogas = 0;
        edesur = input.pc ? edesur += 0.0106 : edesur
        edesur = input.radio ? edesur += 0.029 : edesur
        edesur = input.impresora ? edesur += 0.4355 : edesur
        edesur = input.dispenser ? edesur += 0.121 : edesur
        edesur = input.pava ? edesur += 1.1613 : edesur
        edesur =  input.lavarropa ? edesur += 0.9481 : edesur
        edesur = input.heladera ? edesur += 0.0564 : edesur
        edesur = input.tv ? edesur += 0.0263 : edesur
        edesur = input.cocina ? metrogas += 0.0228 : edesur    
        edesur = input.termotanque ? metrogas += 0.0228 : edesur 
        edesur = input.estufa ? metrogas += 0.5558 : edesur

        var sub = (edesur * 6 * 365 + metrogas * 4 * 365) / input.people;

        if (input.useCar) {
          sub += (0.15 * input.carDistance) / 12 / input.carShare;
        }

        setInput({
          ...input,
          total: sub,
        });
        if (input.publicTransport) {
          setLocation("question5A");
        } else {
          setLocation("result");
        }
        break;
      case "question5A":
        setLocation("question5B");
        break;
      case "question5B":
        
        var quantity = 0;
        var totalPublic = 0;
        if (input.train) {
          quantity++;
          totalPublic += ((0.005 * 50 * input.publicHours) / 737) * 240;
        }
        if (input.subway) {
          quantity++;
          totalPublic += ((0.036 * 50 * input.publicHours) / 255) * 240;
        }
        if (input.bus) {
          quantity++;
          totalPublic += ((0.05 * 50 * input.publicHours) / 25) * 240;
        }
        if (input.taxi) {
          quantity++;
          totalPublic += ((0.15 * 50 * input.publicHours) / 2) * 240;
        }
        if (quantity > 0) {
          totalPublic = totalPublic / quantity;
        }
        totalPublic += input.total;
        setInput({
          ...input,
          total: totalPublic.toFix(2),
        });

        setLocation("result");
        break;
      default:
        setLocation("start");
        break;
    }
  };
  const handleInput = (e) => {
    if (e.target.value < 1) {
      setInput({
        ...input,
        [e.target.name]: 1,
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <>
      <Jumbotron
        className="cover"
        style={{ backgroundImage: `url("http://i.ibb.co/jgZph3V/fondo.png")` }}
      >
        {
        location === "start" ? 
          
          <Start handleButton = {handleButton} />
        : (
          <div />
        )
        }

        {/* question1 */}
        {location === "question1" ? (
          <div>
            <h2 className="font-italic text-muted">¿Con cuanta gente vives?</h2>
            <input
              type="number"
              name="people"
              min="1"
              value={input.people}
              onChange={handleInput}
              placeholder="Ingrese la cantidad"
            />
            <br />
            <Button
              className="my-2"
              variant="flat"
              size="lg"
              onClick={() => handleButton()}
            >
              Continuar
            </Button>
            <br />
            <Button
              className="mt-1"
              variant="flat"
              size="sm"
              onClick={() => setLocation("start")}
            >
              Volver al Inicio
            </Button>
          </div>
        ) : (
          <div />
        )}
        {/* question2 */}
        {location === "question2" ? (
          <div className="font-italic text-muted">
            <h2>¿Cuales de estos electrodomesticos utilizas?</h2>
            <h4 className="mb-4">(puede marcar tantos como quiera)</h4>
            <div>
              <input
                type="checkbox"
                name="pc"
                value={input.pc}
                checked={input.pc}
                defaultChecked={false}
                onClick={() => setInput({ ...input, pc: !input.pc })}
                className="mx-2"
              />
              PC
            </div>
            <div>
              <input
                type="checkbox"
                name="radio"
                value={input.radio}
                checked={input.radio}
                defaultChecked={false}
                onClick={() => setInput({ ...input, radio: !input.radio })}
                className="mx-2"
              />
              Radio
            </div>
            <div>
              <input
                type="checkbox"
                name="impresora"
                value={input.impresora}
                checked={input.impresora}
                defaultChecked={false}
                onClick={() =>
                  setInput({ ...input, impresora: !input.impresora })
                }
                className="mx-2"
              />
              Impresora
            </div>
            <div>
              <input
                type="checkbox"
                name="microondas"
                value={input.microondas}
                checked={input.microondas}
                defaultChecked={false}
                onClick={() =>
                  setInput({ ...input, microondas: !input.microondas })
                }
                className="mx-2"
              />
              Microondas
            </div>
            <div>
              <input
                type="checkbox"
                name="dispenser"
                value={input.dispenser}
                checked={input.dispenser}
                defaultChecked={false}
                onClick={() =>
                  setInput({ ...input, dispenser: !input.dispenser })
                }
                className="mx-2"
              />
              Dispenser
            </div>
            <div>
              <input
                type="checkbox"
                name="pava"
                value={input.pava}
                checked={input.pava}
                defaultChecked={false}
                onClick={() => setInput({ ...input, pava: !input.pava })}
                className="mx-2"
              />
              Pava electrica
            </div>
            <div>
              <input
                type="checkbox"
                name="lavarropa"
                value={input.lavarropa}
                checked={input.lavarropa}
                defaultChecked={false}
                onClick={() =>
                  setInput({ ...input, lavarropa: !input.lavarropa })
                }
                className="mx-2"
              />
              Lavarropa
            </div>
            <Button
              className="my-3"
              variant="flat"
              size="lg"
              onClick={() => handleButton()}
            >
              Continuar
            </Button>
            <br />
            <Button
              variant="flat"
              size="sm"
              onClick={() => setLocation("start")}
            >
              Volver al Inicio
            </Button>
          </div>
        ) : (
          <div />
        )}
        {/* question 3 */}
        {location === "question3" ? (
          <div className="font-italic text-muted">
            <h2>¿Cuales de estos utilizas con frecuencia?</h2>
            <h4 className="mb-4">(puede marcar tantos como quiera)</h4>
            <div>
              <input
                type="checkbox"
                name="cocina"
                value={input.cocina}
                checked={input.cocina}
                defaultChecked={false}
                onClick={() => setInput({ ...input, cocina: !input.cocina })}
                className="mx-2"
              />
              Cocina
            </div>
            <div>
              <input
                type="checkbox"
                name="termotanque"
                value={input.termotanque}
                checked={input.termotanque}
                defaultChecked={false}
                onClick={() =>
                  setInput({ ...input, termotanque: !input.termotanque })
                }
                className="mx-2"
              />
              Termotanque
            </div>
            <div>
              <input
                type="checkbox"
                name="estufa"
                value={input.estufa}
                checked={input.estufa}
                defaultChecked={false}
                onClick={() => setInput({ ...input, estufa: !input.estufa })}
                className="mx-2"
              />
              Estufa
            </div>
            <Button
              className="my-3"
              variant="flat"
              size="lg"
              onClick={() => handleButton()}
            >
              Continuar
            </Button>
            <br />
            <Button
              variant="flat"
              size="sm"
              onClick={() => setLocation("start")}
            >
              Volver al Inicio
            </Button>
          </div>
        ) : (
          <div />
        )}
        {/* question 4 */}
        {location === "question4" ? (
          <div className="font-italic text-muted">
            <h2 className="mb-4">¿Tenes vehiculo propio?</h2>
            <input
              type="checkbox"
              name="useCar"
              value={input.useCar}
              checked={input.useCar}
              defaultChecked={false}
              onClick={() => setInput({ ...input, useCar: !input.useCar })}
              className="mx-2"
            />
            <br />
            <Button
              className="my-3"
              variant="flat"
              size="lg"
              onClick={() => handleButton()}
            >
              Continuar
            </Button>
            <br />
            <Button
              variant="flat"
              size="sm"
              onClick={() => setLocation("start")}
            >
              Volver al Inicio
            </Button>
          </div>
        ) : (
          <div />
        )}
        {/* question 4A */}
        {location === "question4A" ? (
          <div className="font-italic text-muted">
            <h2 className="mb-4">¿Que distancia recorres aprox. al mes?</h2>
            <input
              type="number"
              name="carDistance"
              min="1"
              value={input.carDistance}
              onChange={handleInput}
              placeholder="Ingrese la cantidad"
            />
            <br />
            <Button
              className="my-3"
              variant="flat"
              size="lg"
              onClick={() => handleButton()}
            >
              Continuar
            </Button>
            <br />
            <Button
              variant="flat"
              size="sm"
              onClick={() => setLocation("start")}
            >
              Volver al Inicio
            </Button>
          </div>
        ) : (
          <div />
        )}
      
        {
        location === "question4B" ? 
        <Question4b handleInput = {handleInput}  input={input} handleButton = {handleButton} setLocation={setLocation} />
        : (
          <div />
        )}
        
        {/* question 5 */}
        {location === "question5" ? 
        <Question5 handleInput = {handleInput}  input={input} handleButton = {handleButton} setLocation={setLocation} setInput={setInput} />
        : (
          <div />
        )}
        {/* question 5A */}
        {location === "question5A" ? 
          <Question5a   input={input} handleButton={handleButton} setLocation={setLocation} setInput={setInput} />
        : (
          <div />
        )}
        {/* question 5B */}
        {location === "question5B" ? 
          <Question5b handleInput={handleInput}  input={input} handleButton={handleButton} setLocation={setLocation}/>
        : (
          <div />
        )}
        {location === "result" ? 
          <Resalt input={input} handleButton={handleButton} />
        : (
          <div />
        )}
      </Jumbotron>
    </>
  );
}
