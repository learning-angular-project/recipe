import { CapitalizePipe } from './capitalize.pipe';
describe('Testin Capitalize Pipe', () => {
  let capitalizePipe: CapitalizePipe;

  beforeEach(() => {
    capitalizePipe = new CapitalizePipe();
  });

  it('should return a capitalize word', () => {
    expect(capitalizePipe.transform('prenom')).toBe('Prenom');
  });

  it('should return a capitalize a sentence', () => {
    expect(capitalizePipe.transform('prenom nom')).toBe('Prenom Nom');
  });


  afterEach(() => {
    capitalizePipe = null;
  });

});
