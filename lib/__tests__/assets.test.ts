import { MAIN_URL } from '../constants';
import { getAssetUrl } from '../assets';

describe('assets utilities', () => {
  describe('getAssetUrl()', () => {
    const origEnv = process.env;
    const setReadOnlyProperty = <
      O extends Record<string, any>,
      K extends keyof O,
      V extends any
    >(
      object: O,
      property: K,
      value: V
    ) => {
      Object.defineProperty(object, property, {
        value,
        configurable: true,
      });
    };

    beforeEach(() => {
      // it clears the cache, needed to be able to set the values of process.env
      jest.resetModules();

      process.env = { ...origEnv };
    });

    afterAll(() => {
      process.env = origEnv;
    });

    it('should NOT return full url on development env', () => {
      setReadOnlyProperty(process.env, 'NODE_ENV', 'development');

      const path = 'hello-world.png';
      const url = getAssetUrl(path);

      expect(url).toBe(`/${path}`);
    });

    it('should return full url on production env', () => {
      setReadOnlyProperty(process.env, 'NODE_ENV', 'production');

      const path = 'john-doe.jpg';
      const url = getAssetUrl(path);

      expect(url).toBe(`${MAIN_URL}${path}`);
    });
  });
});
