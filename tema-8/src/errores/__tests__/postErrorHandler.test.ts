import { Response } from "express";
import { postErrorHandler } from "../postErrorHandler";
import { tiposDeEstados, tiposDeMetodos } from "../../types";

// Mock para la consola
jest.spyOn(console, "error").mockImplementation(() => {});

describe("postErrorHandler", () => {
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

  it("maneja errores de validación", () => {
    const mensaje = "validation failed for input data";
    postErrorHandler(mensaje, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(
      tiposDeEstados.BAD_REQUEST
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: tiposDeEstados.BAD_REQUEST.toString(),
      message: `Error de validación: ${mensaje}`,
    });
  });

  it("maneja errores generales", () => {
    const mensaje = "unexpected error";
    postErrorHandler(mensaje, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(
      tiposDeEstados.INTERNAL_SERVER_ERROR
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: tiposDeEstados.INTERNAL_SERVER_ERROR.toString(),
      message: `Error en ${tiposDeMetodos.POST}: ${mensaje}`,
    });
  });
});
