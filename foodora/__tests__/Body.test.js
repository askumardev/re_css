import { normalizeRestaurantData, restroList } from '../../src/utils/constants';

describe('normalizeRestaurantData', () => {
  it('converts the mock restaurant data to the shape used by the UI', () => {
    const result = normalizeRestaurantData(restroList);

    expect(result).toHaveLength(restroList.length);
    expect(result[0]).toHaveProperty('info');
    expect(result[0].info.name).toBe('KFC');
    expect(result[0].info.avgRating).toBe('3.8');
  });
});
