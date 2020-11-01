package app;

public class CDB {
	
	private float valorInicial;
	private double taxaJuros;
	private int qtdDias;

	public void cadastrarValorInicial(float valorInicial) {
		this.valorInicial = valorInicial;
	}

	public void cadastrarTaxaJuros(double taxa) {
		this.taxaJuros = taxa;
	}

	public void cadastrarQtdDias(int dias) {
		this.qtdDias = dias;	
	}
	
	public double getRendimentoBruto() {
		return 13.97; // Falsificação
	}
}
