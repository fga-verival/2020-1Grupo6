package app;

public class CDB {
	
	
	private static int QTD_DIAS_ANO = 365;
	
	private float valorInicial;
	private double taxaJuros;
	private int qtdDias;
	
	
	// Setters

	public void cadastrarValorInicial(float valorInicial) {
		this.valorInicial = valorInicial;
	}

	public void cadastrarTaxaJuros(double taxa) {
		this.taxaJuros = taxa;
	}

	public void cadastrarQtdDias(int dias) {
		this.qtdDias = dias;	
	}
	
	// Getters 
	
	public int getQtdDias() {
		return qtdDias;
	}
		
	// Calcular Rendimentos
	
	public double getRendimentoBruto() {
		double qtdDiasProporcional = qtdDias/ (double) QTD_DIAS_ANO;
		double valor = valorInicial * (taxaJuros/100) * qtdDiasProporcional;
		
		return valor;
	}
	
	public double getRendimentoLiquidoEmPercentual() {
		CDBImpostos impostos = new CDBImpostos();
		impostos.cadastrarCDB(this);
		
		return (this.getRendimentoBruto() - impostos.calcularImpostos()) * 100 / this.valorInicial;
	}
}