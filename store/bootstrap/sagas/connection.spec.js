import { delay } from 'redux-saga';
import { takeLatest, put, call } from 'redux-saga/effects';
import saga, { NAME, API_HOST, testConnection, checkConnection, CONNECT_DELAY } from './connection';
import { INITIALIZE_APP } from '../../constants';
import { initializeApp, bootstrapCompleted } from '..';

describe('connection', () => {
  
  test('saga', () => {
    expect(saga).toEqual(takeLatest(INITIALIZE_APP, checkConnection));
  });

  describe('checkConnection - failed', () => {
    let gen;
    beforeAll(() => {
      gen = checkConnection(initializeApp());
    });

    it('should test the connection', () => {
      expect(gen.next().value).toEqual(call(testConnection));
    });
    
    it('should delay on failure', () => {
      expect(gen.throw(new Error('Nope')).value).toEqual(call(delay, CONNECT_DELAY));
    });

    it('should test the connection again', () => {
      expect(gen.next().value).toEqual(call(testConnection));
    });
    
    it('complete the bootstrap', () => {
      expect(gen.next().value).toEqual(put(bootstrapCompleted(NAME)));
    });

    it('should complete', () => {
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe('checkConnection - success', () => {
    let gen;
    beforeAll(() => {
      gen = checkConnection(initializeApp());
    });

    it('should test the connection', () => {
      expect(gen.next().value).toEqual(call(testConnection));
    });

    it('complete the bootstrap', () => {
      expect(gen.next().value).toEqual(put(bootstrapCompleted(NAME)));
    });

    it('should complete', () => {
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe('testConnection', () => {
    test('failed fetch', () => {
      const error = new Error('whoops!');
      fetch.mockReject(error);

      return testConnection().catch((err) => {
        expect(err).toEqual(error);
      });
    });

    test('success fetch', () => {
      const mockFetch = fetch.mockResponse('');

      return testConnection().then(() => {
        expect(mockFetch).toHaveBeenCalledWith(API_HOST, {
          method: 'OPTIONS',
        });
      });
    });
  });
});
