import { Response } from "express";
import { putErrorHandler } from "../putErrorHandler";
import { tiposDeEstados, tiposDeMetodos } from "../../types";

// Mock para la consola
jest.spyOn(console, "error").mockImplementation(() => {});

describe("putErrorHandler", () => {
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("maneja errores de 'not found'", () => {
    const mensaje = "Resource not found";
    putErrorHandler(mensaje, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(tiposDeEstados.NOT_FOUND);
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: tiposDeEstados.NOT_FOUND.toString(),
      message: `No se pudo encontrar el recurso: ${mensaje}`,
    });
  });

  it("maneja errores generales", () => {
    const mensaje = "unexpected error";
    putErrorHandler(mensaje, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(
      tiposDeEstados.INTERNAL_SERVER_ERROR
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: tiposDeEstados.INTERNAL_SERVER_ERROR.toString(),
      message: `Error en ${tiposDeMetodos.PUT}: ${mensaje}`,
    });
  });
});
