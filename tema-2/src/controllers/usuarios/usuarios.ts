import express, { Express, Request, Response } from "express";

type TipoDeRespuesta = "texto" | "html" | "json";

export const obtenerUsario = (
  req: Request,
  res: Response,
  tipoDeRespuesta: TipoDeRespuesta
) => {
  try {
    if (tipoDeRespuesta === "json") {
      const data = {
        status: 200,
        message: "Server OK",
      };
      res.status(200).json(data);
      return;
    } else if (tipoDeRespuesta === "texto") {
      res.status(200).send("Texto simple");
      return;
    }
    const data = `
        <html>
          <p>Texto simple</p>
        </html>
      `;
    res.status(200).send(data);
    return;
  } catch (error) {
    const data = {
      status: 500,
      message: error,
    };

    console.error(error);

    res.status(500).json(data);
  }
};

export const crearUsuario = (req: Request, res: Response) => {
  const { nombre, apellido } = req.body;

  if (!nombre || !apellido) {
    const data = {
      status: "400",
      message: "No contiene nombre o apellido en el cuerpo",
    };

    res.status(400).json(data);
    return;
  }

  try {
    const data = {
      status: 201,
      message: "Server OK",
    };
    res.status(201).json(data);
  } catch (error) {
    const data = {
      status: 400,
      message: error,
    };

    console.error(error);

    res.status(400).json(data);
  }
};
