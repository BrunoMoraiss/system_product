import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>[BACK-END] OLÁ IURD 😎</h1><h3>STACK:</h3><p>Typescript 5.1.3 (superset JavaScript)</p><p>NestJS 10.0.0 (framework back-end)</p><p>Winston 3.12.0 (logs para auditoria)</p><p>Swagger 7.3.0 (documentação automatizada da API)</p><p>JEST 29.5.0 (testes unitários)</p><p>Prisma 5.11.0 (ORM banco de dados)</p>';
  }
}
