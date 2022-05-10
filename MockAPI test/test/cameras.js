import supertest from 'supertest';
import { expect } from 'chai';
const chai = require('chai');
const asserttype = require('chai-asserttype');
chai.use(asserttype);
const request = supertest('https://608abf88737e470017b73d96.mockapi.io/');
const id_number = '36';
const camera_name = 'Nikon';

describe('Cameras', () => {
    it('POST/Cameras', () => {
        const data = {
            id: '36',
            createdAt: '2021-10-13T16:48:08.645Z',
            CameraName: 'Nikon',
            CameraLens: '50mm 1.8g',
            SelfTimer: false,
            Flash: false
        };
        return request.post(`Cameras`).send(data).then((res) => {
            console.log(res.statusCode);
            console.log(res.body);
            expect(res.body.statusCode).to.be.eq(201);
            expect(res.body.CameraName).to.be.eq('Nikon');
        })
    });
    it('GET/Cameras', () => {

        return request.get(`Cameras?id=${id_number}`).then((res) => {
            console.log(res.statusCode);
            expect(res.body.Flash).to.be.boolean;
        });
    });
    it('GET/Cameras', () => {
        return request.get(`Cameras?CameraName=${camera_name}`).then((res) => {
            console.log(res.statusCode);
            expect(res.body.CameraName).to.be.string;
        });
    });
});