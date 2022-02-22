import Person from "./Person";

describe('Person telephone test', () => {
  it('the telephone number is correct', () => {
    const person = new Person(57, 3057837243);
    expect(person.telephoneNumberString).toEqual('(+57) 3057837243');
  })
})