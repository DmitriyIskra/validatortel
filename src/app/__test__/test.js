import validateTel from '../app';

const tel = '8 (000) 000 0000';
const code = '+86';

test('format phone number', () => {
    const result = validateTel(code, tel);

    expect(result).toBe('+860000000000')
})
