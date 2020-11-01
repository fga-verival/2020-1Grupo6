package app;

public class CDBImpostos {
	
	private double rendimentoBruto;
	private int qtdDias;

	public void cadastrarRendimentoBruto(double rendimentoBruto) {
		this.rendimentoBruto = rendimentoBruto;
 	}
	
	public void cadastrarQtdDias(int qtdDias) {
		this.qtdDias = qtdDias;
 	}
	
	public double calcularImpostos() {
		double valor;
		
		if(this.qtdDias <= 180) {
			valor = rendimentoBruto * (22.5/100.0);
		} else if (this.qtdDias <= 360) {
			valor = rendimentoBruto * (20/100.0);
		} else if (this.qtdDias <= 720) {
			valor = rendimentoBruto * (17.5/100.0);
		} else {
			valor = rendimentoBruto * (15.0/100.0);
		}
		
		return Double.valueOf(String.format("%1.2f", valor)); 
	}
}
