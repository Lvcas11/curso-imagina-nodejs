// src/errores/__tests__/errorHandler.test.ts
import { Response } from "express";
import ErrorHandler from "../errorHandler";
import { tiposDeMetodos, tiposDeEstados } from "../../types";
import * as getErrorHandlerModule from "../getErrorHandler";
import * as postErrorHandlerModule from "../postErrorHandler";
import * as putErrorHandlerModule from "../putErrorHandler";
import * as patchErrorHandlerModule from "../patchErrorHandler";
import * as deleteErrorHandlerModule from "../deleteErrorHandler";

// Mock para la consola
jest.spyOn(console, "error").mockImplementation(() => {});

// Mocks para las funciones específicas de manejo de errores
const mockGetErrorHandler = jest.spyOn(
  getErrorHandlerModule,
  "getErrorHandler"
);
const mockPostErrorHandler = jest.spyOn(
  postErrorHandlerModule,
  "postErrorHandler"
);
const mockPutErrorHandler = jest.spyOn(
  putErrorHandlerModule,
  "putErrorHandler"
);
const mockPatchErrorHandler = jest.spyOn(
  patchErrorHandlerModule,
  "patchErrorHandler"
);
const mockDeleteErrorHandler = jest.spyOn(
  deleteErrorHandlerModule,
  "deleteErrorHandler"
);

describe("ErrorHandler", () => {
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

  it("llama a getErrorHandler para errores en GET", () => {
    const error = new Error("not found");
    const metodo = tiposDeMetodos.GET;
    ErrorHandler({ metodo, error, res: mockResponse as Response });

    expect(mockGetErrorHandler).toHaveBeenCalledWith(
      "Error: not found",
      mockResponse
    );
    expect(mockPostErrorHandler).not.toHaveBeenCalled();
    expect(mockPutErrorHandler).not.toHaveBeenCalled();
    expect(mockPatchErrorHandler).not.toHaveBeenCalled();
    expect(mockDeleteErrorHandler).not.toHaveBeenCalled();
  });

  it("llama a postErrorHandler para errores en POST", () => {
    const error = "validation error";
    const metodo = tiposDeMetodos.POST;
    ErrorHandler({ metodo, error, res: mockResponse as Response });

    expect(mockPostErrorHandler).toHaveBeenCalledWith(error, mockResponse);
    expect(mockGetErrorHandler).not.toHaveBeenCalled();
    expect(mockPutErrorHandler).not.toHaveBeenCalled();
    expect(mockPatchErrorHandler).not.toHaveBeenCalled();
    expect(mockDeleteErrorHandler).not.toHaveBeenCalled();
  });

  it("llama a putErrorHandler para errores en PUT", () => {
    const error = "not found error";
    const metodo = tiposDeMetodos.PUT;
    ErrorHandler({ metodo, error, res: mockResponse as Response });

    expect(mockPutErrorHandler).toHaveBeenCalledWith(error, mockResponse);
    expect(mockGetErrorHandler).not.toHaveBeenCalled();
    expect(mockPostErrorHandler).not.toHaveBeenCalled();
    expect(mockPatchErrorHandler).not.toHaveBeenCalled();
    expect(mockDeleteErrorHandler).not.toHaveBeenCalled();
  });

  it("llama a patchErrorHandler para errores en PATCH", () => {
    const error = "not allowed error";
    const metodo = tiposDeMetodos.PATCH;
    ErrorHandler({ metodo, error, res: mockResponse as Response });

    expect(mockPatchErrorHandler).toHaveBeenCalledWith(error, mockResponse);
    expect(mockGetErrorHandler).not.toHaveBeenCalled();
    expect(mockPostErrorHandler).not.toHaveBeenCalled();
    expect(mockPutErrorHandler).not.toHaveBeenCalled();
    expect(mockDeleteErrorHandler).not.toHaveBeenCalled();
  });

  it("llama a deleteErrorHandler para errores en DELETE", () => {
    const error = "not found error";
    const metodo = tiposDeMetodos.DELETE;
    ErrorHandler({ metodo, error, res: mockResponse as Response });

    expect(mockDeleteErrorHandler).toHaveBeenCalledWith(error, mockResponse);
    expect(mockGetErrorHandler).not.toHaveBeenCalled();
    expect(mockPostErrorHandler).not.toHaveBeenCalled();
    expect(mockPutErrorHandler).not.toHaveBeenCalled();
    expect(mockPatchErrorHandler).not.toHaveBeenCalled();
  });

  it("no llama a ninguna función específica para método desconocido", () => {
    const error = new Error("unexpected error");
    const metodo = "INVALID_METHOD" as keyof typeof tiposDeMetodos;
    ErrorHandler({ metodo, error, res: mockResponse as Response });

    expect(mockGetErrorHandler).not.toHaveBeenCalled();
    expect(mockPostErrorHandler).not.toHaveBeenCalled();
    expect(mockPutErrorHandler).not.toHaveBeenCalled();
    expect(mockPatchErrorHandler).not.toHaveBeenCalled();
    expect(mockDeleteErrorHandler).not.toHaveBeenCalled();
  });
});
