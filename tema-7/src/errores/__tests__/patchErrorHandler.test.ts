import { Response } from "express";
import { patchErrorHandler } from "../patchErrorHandler";
import { tiposDeEstados, tiposDeMetodos } from "../../types";

// Mock para la consola
jest.spyOn(console, "error").mockImplementation(() => {});

describe("patchErrorHandler", () => {
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

  it("maneja errores de 'not allowed'", () => {
    const mensaje = "Operation not allowed";
    patchErrorHandler(mensaje, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(tiposDeEstados.FORBIDDEN);
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: tiposDeEstados.FORBIDDEN.toString(),
      message: `Operación no permitida: ${mensaje}`,
    });
  });

  it("maneja errores generales", () => {
    const mensaje = "unexpected error";
    patchErrorHandler(mensaje, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(
      tiposDeEstados.INTERNAL_SERVER_ERROR
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: tiposDeEstados.INTERNAL_SERVER_ERROR.toString(),
      message: `Error en ${tiposDeMetodos.PATCH}: ${mensaje}`,
    });
  });
});
