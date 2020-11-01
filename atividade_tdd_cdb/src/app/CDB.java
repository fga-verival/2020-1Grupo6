package app;

public class CDB {
	private static int QTD_DIAS_ANO = 365;
	
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
		double qtdDiasProporcional = qtdDias/ (double) QTD_DIAS_ANO;
		double valor = valorInicial * (taxaJuros/100) * qtdDiasProporcional;
	    return Double.valueOf(String.format("%1.2f", valor));
	}
}
