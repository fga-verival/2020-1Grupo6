package app;

public class CDBImpostos {
	
	private double rendimentoBruto;

	public void cadastrarRendimentoBruto(double rendimentoBruto) {
		this.rendimentoBruto = rendimentoBruto;
 	}
	
	public double calcularImpostos() {
		return 3.14; // Falsificação
	}
}
