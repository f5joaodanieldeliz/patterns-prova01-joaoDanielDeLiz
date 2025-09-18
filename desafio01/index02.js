class Lanche {
    constructor() {
      this.pao = null;
      this.carne = null;
      this.queijo = null;
      this.salada = null;
      this.molho = null;
    }

    show() {
        console.log(`
        Lanche:
        pao: ${this.pao}
        carne: ${this.carne}
        queijo: ${this.queijo}
        salada: ${this.salada}
        molho: ${this.molho}
        `);
    }
  }

  class LancheBuilder {
    constructor() {
      this.Lanche = new Lanche();
    }
  
    setPao(pao) {
      this.Lanche.pao = pao;
      return this;
    }
  
    setCarne(carne) {
      this.Lanche.carne = carne;
      return this;
    }
  
    setQueijo(queijo) {
      this.Lanche.queijo = queijo;
      return this;
    }
  
    setSalada(salada) {
      this.Lanche.salada = salada;
      return this;
    }
  
    setMolho(molho) {
      this.Lanche.molho = molho;
      return this;
    }
  
    build() {
      return this.Lanche;
    }
  }

  class LancheDoDia {
    static buildAlmoço() {
      return new LancheBuilder()
        .setPao("QUATRO QUEIJOS")
        .setCarne("FRANGO")
        .setQueijo("SUIÇO")
        .setSalada("ALFAÇE")
        .setMolho("BARBEQUE")
        .build();
    }
  
    static buildJanta() {
      return new LancheBuilder()
      .setPao("fances")
      .setCarne("FRANGO")
      .setQueijo("chedar")
      .setSalada("ALFAÇE")
      .setMolho("mostarda e mel")
      .build();
    }
  }

  const almoço = LancheDoDia.buildAlmoço()
  const janta = LancheDoDia.buildJanta()

  const larica = new LancheBuilder().setPao("bolacha").setCarne("doce de leite").setMolho("katchup").build()
  
  //const lancheSimples = new Lanche(true, true, false, false, false);
  //const lancheCompleto = new Lanche(true, true, true, true, true);
  
  almoço.show();
  janta.show()
  larica.show()