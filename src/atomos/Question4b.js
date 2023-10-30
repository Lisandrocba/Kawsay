import React from 'react'
import { Button } from "react-bootstrap";

const Question4b = ({handleInput, input, handleButton,setLocation}) => {
  return (
    <div className="font-italic text-muted">
      <h2 className="mb-4">
        ¿Cuantas personas comparten tu auto habitualmente?
      </h2>
      <input
        type="number"
        name="carShare"
        min="1"
        value={input.carShare}
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
  )
}

export default Question4b
