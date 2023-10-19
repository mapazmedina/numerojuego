valores=Math.floor(Math.random()*(37-0)+0);
spin=Math.floor(Math.random()*(11-5)+5);
numero=spin*37+valores;
x=numero%37;
test('valor mayor o igual a  0', () => {
    expect(numero).toBeGreaterThanOrEqual(0);
  });
test('valor mayor o igual a 36', () => {
    expect(numero).toBeGreaterThanOrEqual(36);
  });
spin=Math.floor(Math.random()*(11-5)+5);
test('valor mayor o igual que 37*5', () => {
    expect(spin).toBeGreaterThanOrEqual(37*5);
  });
test('valor menor o igual que 36', () => {
    expect(spin).toBeLessThanOrEqual(37*10);
  });
spin=Math.floor(Math.random()*(11-5)+5);
test('valor mayor o igual que 37*5', () => {
    expect(spin).toBeGreaterThanOrEqual(37*5);
  });
test('valor igual o menor que 36', () => {
    expect(spin).toBeLessThanOrEqual(37*10);
  });
