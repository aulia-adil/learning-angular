import { RupiahTransformerPipe } from './rupiah-transformer.pipe';

describe('RupiahTransformerPipe', () => {
  /*
  Test whether 1000000 will be transformed into Rp1.000.000,-
   */
  it('test 1000000 and expect Rp1.000.000,-', () => {
    const pipe = new RupiahTransformerPipe();
    expect(pipe.transform(1000000)).toEqual('Rp1.000.000,-');
  });

  /**
   * Test whether 100000 will be transformed into Rp100.000,-
   */
  it('test 100000 and expect Rp100.000,-', () => {
    const pipe = new RupiahTransformerPipe();
    expect(pipe.transform(100000)).toEqual('Rp100.000,-');
  })

  /**
   * Test whether 10000 will be transformed into Rp10.000,-
   */
  it('test 10000 and expect Rp10.000,-', () => {
    const pipe = new RupiahTransformerPipe();
    expect(pipe.transform(10000)).toEqual('Rp10.000,-');
  })

  /**
   * Test whether 1000 will be transformed into Rp1.000,-
   */
  it('test 1000 and expect Rp1.000,-', () => {
    const pipe = new RupiahTransformerPipe();
    expect(pipe.transform(1000)).toEqual('Rp1.000,-');
  })

  /**
   * Test whether 100 will be transformed into Rp100,-
   */
  it('test 100 and expect Rp100,-', () => {
    const pipe = new RupiahTransformerPipe();
    expect(pipe.transform(100)).toEqual('Rp100,-');
  });

  /**
   * Test whether 0 will be transformed into Rp0,-
   */
  it('test 0 and expect Rp0,-', () => {
    const pipe = new RupiahTransformerPipe();
    expect(pipe.transform(0)).toEqual('Rp0,-');
  })

  /**
   * Test whether 2348723857924 will be transformed into Rp2.348.723.857.924,-
   */
  it('test 2348723857924 and expect Rp2.348.723.857.924,-', () => {
    const pipe = new RupiahTransformerPipe();
    expect(pipe.transform(2348723857924)).toEqual('Rp2.348.723.857.924,-');
  })
});
