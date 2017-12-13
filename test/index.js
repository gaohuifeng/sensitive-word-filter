var wc = require('../index');

describe('index', ()=> {
  describe('#filter(s)', ()=> {
    it('try word "sex"', (done)=> {
      wc.filter('Ur so sexy babe!',(err,filtered)=>{
        console.log(filtered)
        if(filtered == 'Ur so ***y babe!') done()
        else throw new Error('replace failed')
      })
    });
  })
});
