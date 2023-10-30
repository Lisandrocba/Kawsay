import React from 'react'
import { Button } from "react-bootstrap";

const Question4 = ({handleButton, input, setInput, setLocation}) => {
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
}

export default Question4