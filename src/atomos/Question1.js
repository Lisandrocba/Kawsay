import React from 'react'
import { Button } from "react-bootstrap";

const Question1 = ({handleButton}) => {
    return (
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
    )
  }
  
  export default question1
  