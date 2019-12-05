import { Test, TestingModule } from '@nestjs/testing';
import { UtilitiesService } from './utilities';

describe('Utilidades helpers', () => {
  let service: UtilitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilitiesService],
    }).compile();

    service = module.get<UtilitiesService>(UtilitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('generar randomString con datos', () => {
    const response = service.generarRandomString(5);
    expect(response).toHaveLength(5);
  });

  it('generar randomString sin datos', () => {
    const response = service.generarRandomString(null);
    expect(response).toEqual('error');
  });

  it('generar onlyRandonString con datos', () => {
    const response = service.generarRandomOnlyString(5);
    expect(response).toHaveLength(5);
  });

  it('generar onlyRandonString sin datos', () => {
    const response = service.generarRandomOnlyString(null);
    expect(response).toEqual('error');
  });

  it('generarRandomInt', () => {
    const response = service.generarRandomInt();
    expect(typeof response).toBe('number');
  });

  it('generarRandomInt no null', () => {
    const response = service.generarRandomInt();
    expect(response).not.toBeNull();
  });

  it('generar date milisegudos', () => {
    const response = service.getDateMiliSecond();
    expect(typeof response).toBe('number');
  });

  it('generar date milisegudos no null', () => {
    const response = service.getDateMiliSecond();
    expect(response).not.toBeNull();
  });

  it('obtener fecha actual', () => {
    const response = service.getFechaHoy();
    expect(typeof response).toBe('string');
  });

  it('obtener fecha actual no null', () => {
    const response = service.getFechaHoy();
    expect(response).not.toBeNull();
  });

  it('encriptar con parametro', () => {
    const response = service.encriptar('12345');
    expect(response).not.toBeUndefined();
    expect(response).not.toBeNaN();
  });
  it('encriptar sin parametro', () => {
    const response = service.encriptar('');
    expect(response).toEqual('error');
  });

  it('desencriptar con parametro', () => {
    const response = service.desencriptar('23ab11e6');
    expect(response).not.toBeUndefined();
    expect(response).not.toBeNaN();
  });
  it('desencriptar sin parametro', () => {
    const response = service.desencriptar('');
    expect(response).toEqual('error');
  });

  it('encriptar y desencriptar', () => {
    const numero: string = '1234';
    const response = service.encriptar(numero);
    expect(response).not.toBeUndefined();
    expect(response).not.toBeNaN();
    const response2 = service.desencriptar(response);
    expect(response2).toEqual(numero);
  });

});
