class GovAgent {
    constructor(public country:string, public name:string) {
      this.country = country
      this.name = name
    }
    // 宣誓
    vow() {
      console.log(`I, ${this.name}, serve for ${this.country}`)
    }
    realVow() {
      console.log(`I am really ${this.name}, truly serve for ${this.country}`)
    }
  }
  
  // modify this function to make realVow() work as expected`
  function createSpy(options:any) {

    class FakeAgent extends GovAgent{
        // realVow(){
        //     console.log(`I am really ${options.real.name}, truly serve for ${options.real.country}`)
        // }
        realVow(){
            this.realVow.bind(console.log(`I am really ${options.real.name}, truly serve for ${options.real.country}`))
        }
    }


    let fakeAgent = new FakeAgent(options.fake.country, options.fake.name)
    
    return fakeAgent

  }

  

  



  
  let 約兒 = new GovAgent('東國', '約兒·佛傑')

  
  let 洛伊德 = createSpy({
    fake: { country: '東國', name: '洛伊德·佛傑' },
    real: { country: '西國', name: '黃昏' },
  })

  
  console.log('==============================')
  
  約兒.vow() // print: I, Alice, serve for 東國
  約兒.realVow() // print: I am really Alice, truly serve for 東國
  
  console.log('==============================')

  洛伊德.vow() // I, Frank, serve for 東國
  洛伊德.realVow() // I am really Eve, truly serve for 西國

  
  console.log('==============================')
