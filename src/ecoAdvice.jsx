import React, { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
//import { useHistory } from "react-router-dom";

export default function EcoAdvice() {
  const [location, setLocation] = useState("");
//  const { push } = useHistory();
  return (
    <div
      className="cover font-italic text-muted"
      style={{ backgroundImage: `url("http://i.ibb.co/jgZph3V/fondo.png")` }}
    >
      <div>
        <h2 className="mb-5 text-center">
          RECOMENDACIONES PARA REDUCIR LA HUELLA DE CARBONO
        </h2>
        <ListGroup horizontal className="mb-4 shadow text-center">
          <ListGroup.Item
            action
            variant="success"
            onClick={() => setLocation("arboles")}
          >
            Plantá árboles
          </ListGroup.Item>
          <ListGroup.Item
            action
            variant="success"
            onClick={() => setLocation("energia")}
          >
            Uso racional de la energía
          </ListGroup.Item>
          <ListGroup.Item
            action
            variant="success"
            onClick={() => setLocation("movilidad")}
          >
            Movilidad
          </ListGroup.Item>
          <ListGroup.Item
            action
            variant="success"
            onClick={() => setLocation("residuos")}
          >
            Residuos
          </ListGroup.Item>
          <ListGroup.Item
            action
            variant="success"
            onClick={() => setLocation("alimentacion")}
          >
            Alimentación
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        {location === "energia" ? (
          <div className="my-1 font-italic">
            <Container className="ml-3 w-50">
              <p className="my-1 font-italic">
                &#10004; Priorizá el uso de iluminación natural.
              </p>
              <p className="my-1">
                &#10004; Apagá la luz cuando salgas de cada ambiente.
              </p>
              <p className="my-1">
                &#10004; Elegí lámparas LED, tienen mayor vida útil y consumen
                menos energía.
              </p>
              <p className="my-1">
                &#10004; Desconectá aparatos electrónicos y cargadores cuando no
                los estés usando.
              </p>
              <p className="my-1">
                &#10004; Poné el aire en 24 grados en el verano y 20 en el
                invierno.
              </p>
              <p className="my-1">
                &#10004; Cuando uses el lavarropas o lavavajillas, usalos con
                carga completa y así aprovechas el máximo de su capacidad.
              </p>
              <p className="my-1">
                &#10004; Evitá dejar artefactos eléctricos en suspensión.
              </p>
              <p className="my-1">
                &#10004; Elegí electrodomésticos de eficiencia energética A.
              </p>
              <p className="my-1">
                &#10004; Repará las pérdidas en canillas o sanitarios, para
                evitar el uso intensivo de bombas.
              </p>
              <p className="my-1">
                &#10004; Evitá dejar abierta la puerta de la heladera por un
                tiempo prolongado.
              </p>
              <p className="my-1">
                &#10004; Evitá usar el ascensor, siempre que puedas usá las
                escaleras.
              </p>
              <p className="my-1">
                &#10004; Date baños cortos, preferiblemente en ducha.
              </p>
            </Container>
          </div>
        ) : (
          <div />
        )}
        {location === "movilidad" ? (
          <div className="my-1 font-italic">
            <Container className="ml-3 w-50">
              <p className="my-1">
                &#10004; Siempre que puedas y la distancia lo permita, usá la
                bici.
              </p>
              <p className="my-1">&#10004; Usá transporte público.</p>
              <p className="my-1">&#10004; Si usas auto particular:</p>
              <p className="my-1">
                &#10004; Limitá su uso para viajes sin acceso por medio de
                transporte público o bicicleta.
              </p>
              <p className="my-1">
                &#10004; Compartí el auto con otros compañeros de trabajo,
                familiares o vecinos que viajen cerca.
              </p>
              <p className="my-1">
                &#10004; Manejá evitando superar las 2000 revoluciones, para
                reducir el consumo de combustible.
              </p>
              <p className="my-1">
                &#10004; Chequeá la presión de las cubiertas, circular con la
                presión correcta evita el consumo innecesario de combustible.
              </p>
              <p className="my-1">
                &#10004; Realizá los controles recomendados para un
                funcionamiento eficiente.
              </p>
              <p className="my-1">
                &#10004; Organizá tu recorrido para recorrer menor distancia.
              </p>
            </Container>
          </div>
        ) : (
          <div />
        )}
        {location === "residuos" ? (
          <div className="my-1 font-italic">
            <Container className="ml-3 w-50">
              <p className="my-1">
                &#10004; Reducí: evitá la generación innecesaria de residuos.
                Para ello podés evitar comprar productos con mucho envoltorio,
                disminuir las impresiones, o imprimir doble faz. En el caso de
                los residuos de cocina, calculá las cantidades de comidas para
                evitar tirar sobras, y organizá las comidas para que no lleguen
                a vencerse los productos.
              </p>
              <p className="my-1">
                &#10004; Reutilizá: re-aprovechá los residuos. Si hay hojas
                impresas simple faz que no usás más, utilizalas para notas;
                transformá las sobras de la comida en nuevos platos.
              </p>
              <p className="my-1">
                &#10004; Separá: para que se pueda dar el proceso industrial de
                reciclado y generar nuevos recursos, es necesario, entre otras
                condiciones, que todos separemos los residuos húmedos de los
                secos en nuestras casas.
              </p>
              <p className="my-1">
                &#10004; Compostá: Una opción para reducir la generación de
                residuos es el compostaje que resulta en una tierra con buenas
                propiedades en calidad y nutrientes.
              </p>
            </Container>
          </div>
        ) : (
          <div />
        )}
        {location === "alimentacion" ? (
          <div className="my-1 font-italic">
            <Container className="ml-3 w-50">
              <p className="my-1">
                &#10004; Se calcula que un 20% de los gases de efecto
                invernadero se deben a la elaboración y comercialización de
                alimentos. Hay que fijarse primero en qué comemos y de dónde
                viene lo que comemos.
              </p>
              <p className="my-1">
                &#10004; Intentá consumir productos locales, ya que tienen una
                elaboración de menor impacto ambiental dada la proximidad, y por
                otro lado, son más frescos y se ayuda a potenciar la economía
                local.
              </p>
              <p className="my-1">&#10004; Reducí el consumo de carnes.</p>
              <p className="my-1">
                &#10004; Evitá consumir alimentos que requieran un complejo
                envasado.
              </p>
            </Container>
          </div>
        ) : (
          <div />
        )}
        {location === "arboles" ? (
          <div className="my-1 font-italic">
            <Container className="ml-3 w-50">
              &#10004; Los árboles retienen CO2, un árbol elimina entre 350 y
              3.500 kg. de CO2 aproximadamente en toda su vida, por ello
              impulsar la plantación de nuevos árboles, en especial especies
              autóctonas, contribuye a reducir la huella de carbono. Te
              interesaría ser parte del cambio? Podemos ayudarte
            </Container>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
